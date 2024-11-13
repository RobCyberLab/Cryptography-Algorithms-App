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
A web application providing encryption and decryption capabilities using AES and RSA algorithms. The app offers a simple user interface for text encryption while implementing several security best practices.

## Features 🌟

### Core Functionality ⚡
- Symmetric encryption using AES-256-GCM
- Asymmetric encryption using RSA (2048-bit)
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
- CSS3 (with CSS variables for theming)
- JavaScript

### Backend ⚙️
- Node.js
- Express.js
- Native crypto module
- node-rsa package

### Security Packages 🛡️
- helmet
- express-rate-limit
- body-parser
- cors

## Security Measures 🔐
- Request rate limiting (100 requests per 15 minutes)
- HTTP security headers via Helmet
- Content Security Policy configuration
- Maximum request body size (10kb)
- CORS protection
- Input validation for encryption parameters

## Installation 🚀

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
ENCRYPTION_KEY=[32-byte-key]
PORT=3000 # Optional
```

4. Start the server:
```bash
node app.js
```

## API Documentation 📚

### Encrypt Endpoint 🔒
```
POST /encrypt
Content-Type: application/json

{
    "text": "Text to encrypt",
    "method": "AES" | "RSA"
}
```

### Decrypt Endpoint 🔓
```
POST /decrypt
Content-Type: application/json

{
    "text": "Encrypted text",
    "method": "AES" | "RSA"
}
```

## Future Enhancements 🚀

### Planned Security Features 🛡️
- Enhanced input sanitization
- Key rotation mechanism
- Digital signatures
- Advanced key management

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
