// Import the 'crypto' module for encryption/decryption and 'node-rsa' for RSA encryption
const crypto = require('crypto');
const NodeRSA = require('node-rsa');

// Define the EncryptionService class for handling AES and RSA encryption
class EncryptionService {
    constructor() {
        // Set constants for IV, salt, and RSA key size
        this.IV_LENGTH = 16;
        this.SALT_LENGTH = 16;
        this.RSA_KEY_SIZE = 2048;
        this.ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // Load encryption key from environment variables
        
        // Initialize RSA key with error handling for failed initialization
        try {
            this.rsaKey = new NodeRSA({ b: this.RSA_KEY_SIZE }); // Set RSA key size to 2048 bits
        } catch (error) {
            throw new Error('Failed to initialize RSA key');
        }
    }

    // Validates that ENCRYPTION_KEY is correctly set and is 32 bytes long
    validateKey() {
        if (!this.ENCRYPTION_KEY || Buffer.from(this.ENCRYPTION_KEY, 'base64').length !== 32) {
            throw new Error('Invalid encryption key format or length');
        }
    }

    // Encrypts text using AES-256-GCM algorithm
    async aesEncrypt(text) {
        if (!text) throw new Error('Text is required for encryption'); // Validate input
        
        this.validateKey(); // Ensure key validity
        
        try {
            // Generate random IV and salt, each 16 bytes
            const iv = crypto.randomBytes(this.IV_LENGTH);
            const salt = crypto.randomBytes(this.SALT_LENGTH);
            
            // Derive a key from the ENCRYPTION_KEY and salt using pbkdf2 with 100,000 iterations
            const key = await new Promise((resolve, reject) => {
                crypto.pbkdf2(
                    this.ENCRYPTION_KEY,
                    salt,
                    100000,
                    32,
                    'sha256',
                    (err, derivedKey) => {
                        if (err) reject(err);
                        else resolve(derivedKey);
                    }
                );
            });
            
            // Initialize cipher with AES-256-GCM using the derived key and IV
            const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
            const encrypted = Buffer.concat([
                cipher.update(text, 'utf8'), // Encrypt input text
                cipher.final()
            ]);
            
            const authTag = cipher.getAuthTag(); // Get the authentication tag
            
            // Return encrypted data and components needed for decryption
            return {
                encrypted: encrypted.toString('base64'),
                iv: iv.toString('base64'),
                salt: salt.toString('base64'),
                authTag: authTag.toString('base64')
            };
        } catch (error) {
            throw new Error(`Encryption failed: ${error.message}`);
        }
    }

    // Decrypts data using AES-256-GCM algorithm
    async aesDecrypt(encryptedData) {
        // Ensure all required fields are present in the encrypted data
        if (!encryptedData?.encrypted || !encryptedData?.iv || 
            !encryptedData?.salt || !encryptedData?.authTag) {
            throw new Error('Invalid encrypted data format');
        }
        
        this.validateKey(); // Ensure key validity
        
        try {
            // Decode IV, salt, encrypted text, and auth tag from base64
            const iv = Buffer.from(encryptedData.iv, 'base64');
            const salt = Buffer.from(encryptedData.salt, 'base64');
            const encrypted = Buffer.from(encryptedData.encrypted, 'base64');
            const authTag = Buffer.from(encryptedData.authTag, 'base64');
            
            // Derive the key using the same pbkdf2 parameters as encryption
            const key = await new Promise((resolve, reject) => {
                crypto.pbkdf2(
                    this.ENCRYPTION_KEY,
                    salt,
                    100000,
                    32,
                    'sha256',
                    (err, derivedKey) => {
                        if (err) reject(err);
                        else resolve(derivedKey);
                    }
                );
            });
            
            // Initialize decipher with AES-256-GCM and the derived key and IV
            const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
            decipher.setAuthTag(authTag); // Set authentication tag for verification
            
            const decrypted = Buffer.concat([
                decipher.update(encrypted), // Decrypt the encrypted text
                decipher.final()
            ]);
            
            return decrypted.toString('utf8'); // Return decrypted text in UTF-8
        } catch (error) {
            throw new Error(`Decryption failed: ${error.message}`);
        }
    }

    // Encrypts text using RSA public key encryption
    rsaEncrypt(text) {
        if (!text) throw new Error('Text is required for RSA encryption'); // Validate input
        
        try {
            // Encrypt text with RSA, using OAEP padding for security
            return this.rsaKey.encrypt(text, 'base64', 'utf8', {
                encryptionScheme: 'pkcs1-oaep'
            });
        } catch (error) {
            throw new Error(`RSA encryption failed: ${error.message}`);
        }
    }

    // Decrypts RSA-encrypted text
    rsaDecrypt(text) {
        if (!text) throw new Error('Text is required for RSA decryption'); // Validate input
        
        try {
            // Decrypt RSA-encrypted text with OAEP padding scheme
            return this.rsaKey.decrypt(text, 'utf8', 'base64', {
                encryptionScheme: 'pkcs1-oaep'
            });
        } catch (error) {
            throw new Error(`RSA decryption failed: ${error.message}`);
        }
    }
}

// Export the EncryptionService instance for use in other files
module.exports = new EncryptionService();
