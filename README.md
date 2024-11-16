# 🛡️Cryptography Algorithms App🔑

## Table of Contents 📑
1. [Introduction](#introduction-)
2. [Current Features](#current-features-)
3. [Technologies Used](#technologies-used-)
4. [Security Measures](#security-measures-)
5. [Installation](#installation-)
6. [API Documentation](#api-documentation-)
7. [Future Enhancements](#future-enhancements-)

## Introduction 📘
A web application that provides text encryption and decryption capabilities using AES and RSA algorithms. The app features a simple user interface for text encryption and decryption operations.

## Current Features ⚡
### Implemented Functionality
- Text encryption and decryption using AES-256-CBC
  - Includes salt and IV generation
  - Uses PBKDF2 for key derivation
- Text encryption and decryption using RSA (2048-bit)
- Simple web interface with:
  - Separate encryption and decryption forms
  - Method selection (AES/RSA)
  - Real-time error display
  - Responsive design
- Error handling and validation

## Technologies Used 💻
### Currently Implemented

Frontend:
- HTML5
- CSS3 with custom properties
- JavaScript

Backend:
- Node.js
- Express.js
- crypto (Node.js built-in module)
- node-rsa package

Security:
- helmet (HTTP headers)
- body-parser (Request parsing)

## Security Measures 🔐
Currently implemented:
- HTTP security headers via Helmet
- Request body validation
- Environment variable for encryption key
- Secure random IV and salt generation for AES
- Error messages that don't expose system details

## Installation 🚀
1. Install dependencies:
```bash
npm install
```

2. Create a .env file with required environment variables:
```bash
ENCRYPTION_KEY=your_32_byte_encryption_key
PORT=3000
```

3. Start the server:
```bash
node app.js
```

The application will be available at `http://localhost:3000`

## API Documentation 📚
### Currently Implemented Endpoints

#### Encrypt Endpoint 🔒
```http
POST /encrypt
Content-Type: application/json

{
    "text": "Text to encrypt",
    "method": "AES" | "RSA"
}

Response:
{
    "encrypted": "encrypted_text"
}
```

#### Decrypt Endpoint 🔓
```http
POST /decrypt
Content-Type: application/json

{
    "text": "encrypted_text",
    "method": "AES" | "RSA"
}

Response:
{
    "decrypted": "original_text"
}
```

### Error Responses
```json
{
    "error": "Error message"
}
```

Currently handled errors:
- Missing text input ("Text is required.")
- Invalid encryption/decryption method
- Invalid encryption key configuration
- Invalid encrypted text format
- RSA encryption/decryption errors

## Future Enhancements ⏳

1. Security Features:
   - Rate limiting
   - CORS protection
   - Key rotation
   - Digital signatures
   - Advanced key management

2. Additional Functionality:
   - File encryption
   - Batch processing
   - Operation history
   - Additional encryption algorithms

3. Infrastructure:
   - Automated testing
   - CI/CD pipeline
   - Monitoring system
   - Docker containerization
