# Cryptography Algorithms App Documentation

## Table of Contents
1. [Project Overview](#project-overview-)
2. [Installation](#installation-)
3. [Usage](#usage-)
4. [Encryption Algorithms](#encryption-algorithms-)
5. [Examples](#examples-)

## Project Overview 📝
The Cryptography Algorithms App is a web-based application that enables users to encrypt and decrypt messages using industry-standard encryption algorithms. The application provides two powerful encryption methods: AES (Advanced Encryption Standard) for symmetric encryption and RSA (Rivest-Shamir-Adleman) for asymmetric encryption. Built with a focus on security and user experience, it offers a simple interface for protecting sensitive information.

## Installation ⚙️
To install and run the Cryptography Algorithms App locally, follow these steps:

1. Clone the project repository:
```bash
git clone https://github.com/RobCyberLab/Cryptography-Algorithms-App.git
```

2. Navigate to the project directory:
```bash
cd src
```

3. Install dependencies:
```bash
npm install
```

4. Launch the application:
```bash
node app.js
```

The server will start running on the default port (3000) or the port specified in your environment.

## Usage 📖
1. Access the application through your web browser at `http://localhost:3000`
2. The interface presents two main sections:
   - **Encryption Form**
     - Enter the text you want to encrypt
     - Select encryption method (AES or RSA)
     - Click "Encrypt" button
   - **Decryption Form**
     - Enter the encrypted text
     - Select the same method used for encryption
     - Click "Decrypt" button

3. The application will display either:
   - The encrypted/decrypted result in the output area
   - Any error messages in the error output area

## Encryption Algorithms 🔐

### AES Implementation
The application uses AES-256-GCM (Galois/Counter Mode) with the following security features:

#### Key Security
- 32-byte encryption key
- Unique salt for each encryption
- PBKDF2 key derivation (100,000 iterations)

#### Encryption Process
- Random 16-byte Initialization Vector (IV)
- GCM authentication tag
- Base64 encoding for output

```javascript
// Full encryption result includes:
{
    "encrypted": "base64_encoded_data",
    "iv": "base64_encoded_iv",
    "salt": "base64_encoded_salt",
    "authTag": "base64_encoded_tag"
}
```

### RSA Implementation
Uses RSA encryption with these characteristics:

#### Key Generation
- 2048-bit key size
- PKCS1-OAEP padding scheme

#### Output Format
- Base64 encoded encrypted data
- Single string output


## Examples 📌

### Example 1: AES Encryption
Input:
```
Hello World
```

Output:
```json
{
    "encrypted": "a1b2c3d4e5f6g7h8i9j0...",
    "iv": "k9l8m7n6o5p4q3r2...",
    "salt": "s2t3u4v5w6x7y8z9...",
    "authTag": "a9b8c7d6e5f4g3h2..."
}
```

### Example 2: AES Decryption
Input (paste the entire JSON object from encryption):
```json
{
    "encrypted": "a1b2c3d4e5f6g7h8i9j0...",
    "iv": "k9l8m7n6o5p4q3r2...",
    "salt": "s2t3u4v5w6x7y8z9...",
    "authTag": "a9b8c7d6e5f4g3h2..."
}
```

Output:
```
Hello World
```

### Example 3: RSA Encryption
Input:
```
Secret Message
```

Output:
```
MIIBIjANBgkqhkiG9w0BAQEFAAOC...
```

### Example 4: RSA Decryption
Input:
```
MIIBIjANBgkqhkiG9w0BAQEFAAOC...
```

Output:
```
Secret Message
```

Note: The application includes several security measures:
- Maximum input length: 10,000 characters
- Rate limiting: 100 requests per 15 minutes
- Request size limit: 10KB
- Secure HTTP headers
- Input validation for both encryption methods

These security features help protect against common vulnerabilities while ensuring reliable encryption and decryption operations.