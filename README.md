# 🔒 Cryptography Algorithms App

## Table of Contents 📑
1. [Introduction](#introduction-)
2. [Features](#features-)
3. [Technologies Used](#technologies-used-)
4. [Security Measures](#security-measures-)
5. [Installation](#installation-)
6. [API Documentation](#api-documentation-)
7. [Future Enhancements](#future-enhancements-)

## Introduction 📘
A web application providing encryption and decryption capabilities using AES and RSA algorithms. The app offers a simple user interface for text encryption while maintaining essential security practices.

## Features 🌟
### Core Functionality ⚡
- Symmetric encryption using AES
- Asymmetric encryption using RSA
- Web interface for encryption/decryption operations
- Real-time error feedback
- Responsive design

### Implementation Details 🔧
#### AES Encryption
```javascript
// Generate random IV and salt
const iv = crypto.randomBytes(16);
const salt = crypto.randomBytes(16);

// Derive key using PBKDF2
const key = await crypto.pbkdf2(
    this.ENCRYPTION_KEY,
    salt,
    100000,
    32,
    'sha256'
);
```

#### RSA Encryption
```javascript
// Initialize RSA with 2048-bit key size
this.rsaKey = new NodeRSA({ b: 2048 });

// Encrypt using PKCS1-OAEP padding
const encrypted = this.rsaKey.encrypt(text, 'base64', 'utf8', {
    encryptionScheme: 'pkcs1-oaep'
});
```

## Technologies Used 💻
### Frontend 🎨
- HTML5
- CSS3
- JavaScript

### Backend ⚙️
- Node.js
- Express.js
- Native crypto module
- node-rsa package

### Security Packages 🛡️
- helmet (HTTP security headers)
- body-parser (Request parsing)

## Security Measures 🔐
- HTTP security headers via Helmet
- Request body parsing and validation
- Input validation for encryption parameters
- Error handling for invalid inputs

## Installation 🚀
1. Install dependencies:
```bash
npm install express body-parser helmet
```

2. Create a 'public' directory and move frontend files:
```bash
mkdir public
mv index.html style.css script.js public/
```

3. Start the server:
```bash
node app.js
```

The application will be available at `http://localhost:3000`

## API Documentation 📚
### Encrypt Endpoint 🔒
```http
POST /encrypt
Content-Type: application/json

{
    "text": "Text to encrypt",
    "method": "AES" | "RSA"
}
```

### Decrypt Endpoint 🔓
```http
POST /decrypt
Content-Type: application/json

{
    "text": "Encrypted text",
    "method": "AES" | "RSA"
}
```

### Error Responses
```json
{
    "error": "Error message"
}
```
Status: 400 Bad Request

Common error messages:
- "Text is required."
- "Invalid encryption method."
- "Invalid decryption method."

## Future Enhancements 🚀
### Planned Security Features 🛡️
- Enhanced input sanitization
- Key rotation mechanism
- Digital signatures
- Advanced key management
- Rate limiting
- CORS protection

### Planned Functionality 💫
- File encryption support
- Batch processing
- Operation history
- Mobile-optimized interface

### Infrastructure Goals 🏗️
- Automated testing suite
- CI/CD pipeline
- Monitoring system
- Performance optimization
