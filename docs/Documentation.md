# Cryptography Algorithms App Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Encryption Algorithms](#encryption-algorithms)
5. [Examples](#examples)

## Project Overview 📝
The Cryptography Algorithms App is a web-based application that provides text encryption and decryption capabilities using two industry-standard encryption algorithms: AES (Advanced Encryption Standard) for symmetric encryption and RSA (Rivest-Shamir-Adleman) for asymmetric encryption. The application features a clean, user-friendly interface for secure text processing.

## Installation ⚙️
To install and run the Cryptography Algorithms App, follow these steps:

1. Install the required dependencies:
```bash
npm install
```

2. Create a `.env` file in the project root with the following variables:
```bash
ENCRYPTION_KEY=your_32_byte_encryption_key
PORT=3000
```

3. Launch the application:
```bash
node app.js
```

The server will start running on port 3000 (default) or your specified port.

## Usage 📖
1. Access the application through your web browser at `http://localhost:3000`
2. The interface provides two main sections:
   - **Encryption Form**
     - Enter the text you want to encrypt
     - Select encryption method (AES or RSA)
     - Click "Encrypt" button
   - **Decryption Form**
     - Enter the encrypted text
     - Select the same method used for encryption
     - Click "Decrypt" button

3. The application will display:
   - The encryption/decryption result in the output area
   - Any error messages in a separate error output area

## Encryption Algorithms 🔐

### AES Implementation
The application uses AES-256-CBC with the following features:

#### Key Security
- 32-byte encryption key (stored in environment variables)
- 16-byte random salt for each encryption
- PBKDF2 key derivation with:
  - 100,000 iterations
  - SHA-256 hash function
  - 32-byte derived key length

#### Encryption Process
```javascript
// Format of encrypted output:
saltHex:ivHex:encryptedText

// Example:
"a1b2c3....:d4e5f6....:g7h8i9...."
```

### RSA Implementation
Uses RSA encryption with these specifications:

#### Key Features
- 2048-bit key size
- Generated on server start
- Base64 encoded output

## Examples 📌

### AES Encryption/Decryption
Input:
```
Hello World
```

Encrypted Output (format):
```
<salt-hex>:<iv-hex>:<encrypted-hex>
```

### RSA Encryption/Decryption
Input:
```
Hello World
```

Encrypted Output:
```
Base64 encoded string
```

### Error Handling Examples
The application handles various error scenarios:

1. Missing Input:
```json
{
    "error": "Text is required."
}
```

2. Invalid Encryption Method:
```json
{
    "error": "Invalid encryption method."
}
```

3. Invalid AES Format:
```json
{
    "error": "AES decryption error: Invalid encrypted text format."
}
```

4. Invalid RSA Data:
```json
{
    "error": "RSA decryption error: Invalid RSA encrypted text."
}
```

Current Security Measures:
- HTTP security headers via Helmet
- Input validation
- Secure key derivation
- Random IV and salt generation
- Error messages that don't expose internal details
- Environment variable for sensitive data

Note: This documentation reflects the current implementation. Some features mentioned in the original documentation (like GCM mode, rate limiting, and request size limits) are not currently implemented in the codebase.