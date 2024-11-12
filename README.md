# 🔒 Cryptography Algorithms App

## Table of Contents
1. [Introduction](#introduction-)
2. [Technical Description](#technical-description-)
3. [Technologies Used](#technologies-used-)
4. [Architecture](#architecture-)
5. [Security Features](#security-features-)
6. [Main Features](#main-features-)
7. [Use Cases](#use-cases-)
8. [Installation and Setup](#installation-and-setup-)
9. [Results and Insights](#results-and-insights-)
10. [Possible Improvements](#possible-improvements-)

## Introduction 📘
The Cryptography Algorithms App is a secure web application that provides robust encryption and decryption capabilities using industry-standard algorithms. The application supports both symmetric (AES) and asymmetric (RSA) encryption methods, offering users flexibility in choosing the appropriate encryption strategy for their needs. This project demonstrates the implementation of modern cryptographic practices while maintaining a user-friendly interface.

## Technical Description ⚙️
The application implements two primary encryption methods:

### AES (Advanced Encryption Standard)
```javascript
// Generate random IV and salt
const iv = crypto.randomBytes(this.IV_LENGTH);
const salt = crypto.randomBytes(this.SALT_LENGTH);

// Derive key using PBKDF2
const key = await crypto.pbkdf2(
    this.ENCRYPTION_KEY,
    salt,
    100000,
    32,
    'sha256'
);

// Create cipher and encrypt
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
const encrypted = Buffer.concat([
    cipher.update(text, 'utf8'),
    cipher.final()
]);
const authTag = cipher.getAuthTag();
```

### RSA (Rivest-Shamir-Adleman)
```javascript
// Initialize RSA with 2048-bit key size
this.rsaKey = new NodeRSA({ b: 2048 });

// Encrypt using PKCS1-OAEP padding scheme
const encrypted = this.rsaKey.encrypt(text, 'base64', 'utf8', {
    encryptionScheme: 'pkcs1-oaep'
});
```

## Technologies Used 💻
- **Frontend**:
  - HTML5: Semantic structure with form handling for encryption inputs
  - CSS3: Modern styling using CSS variables and responsive design
  - JavaScript: Async/await pattern for API communication

- **Backend**:
  - Node.js: Server-side JavaScript runtime for cryptographic operations
  - Express.js: Web application framework handling HTTP requests
  - Crypto module: Core Node.js cryptography functionality
  - Node-RSA: RSA encryption implementation

- **Security Packages**:
  - Helmet: Comprehensive HTTP header security
  - Express Rate Limit: API request rate limiting
  - Body Parser: Request payload validation
  - CORS: Cross-origin resource sharing protection

## Architecture 🏗
- **Frontend Layer**: 
  - Single-page application
  - Responsive form design
  - Real-time validation feedback

- **API Layer**: 
  - `/encrypt` endpoint for encryption operations
  - `/decrypt` endpoint for decryption operations
  - Request validation middleware

- **Service Layer**: 
  - EncryptionService class handling cryptographic operations
  - Key management and derivation
  - Error handling and validation

- **Security Layer**: 
  - Input sanitization
  - Rate limiting
  - HTTP security headers

## Security Features 🛡
1. **Input Validation**
   - Maximum text length: 10,000 characters
   - Method validation (AES/RSA)
   - Content type verification
   - Input sanitization

2. **Rate Limiting**
   - 100 requests per IP per 15 minutes
   - Brute force attack protection

3. **HTTP Security Headers**
   - Content Security Policy
   - XSS Protection
   - Frame Options
   - CORS configuration

4. **Encryption Security**
   - 32-byte encryption key
   - Random IV generation (16 bytes)
   - PBKDF2 key derivation
   - GCM authentication tags

## Main Features 🌟
- **Encryption Methods**:
  - AES-256-GCM encryption
  - RSA 2048-bit encryption
  - Method selection flexibility

- **Security Features**:
  - Secure key management
  - Salt generation
  - Authentication tags

- **User Interface**:
  - Clean form design
  - Error feedback
  - Responsive layout

## Use Cases 🔍
- **Secure Communication**: Protect sensitive messages
- **Data Protection**: Secure information storage
- **Key Exchange**: RSA-based secure key sharing
- **Educational Purpose**: Cryptography demonstration
- **API Integration**: Secure system communication

## Installation and Setup 🔧
1. **Prerequisites**:
   ```bash
   Node.js v12 or higher
   npm package manager
   ```

2. **Installation Steps**:
   ```bash
   git clone https://github.com/RobCyberLab/Cryptography-Algorithms-App/src.git
   cd src
   npm install
   ```

3. **Environment Setup**:
   ```bash
   # Create .env file with 32-character encryption key
   ENCRYPTION_KEY=12345678901234567890123456789012
   ```

4. **Start Application**:
   ```bash
   node app.js
   ```

## Results and Insights 📝
Implementation learnings:
- Secure cryptographic practices importance
- Key management strategies
- Error handling significance
- Input validation requirements
- API security considerations

## Possible Improvements 🚀
1. **Enhanced Security**:
   - Key rotation mechanism
   - Stronger key derivation
   - Additional encryption algorithms
   - Enhanced input validation

2. **Feature Additions**:
   - File encryption support
   - Digital signatures
   - Key management interface
   - Batch processing

3. **Performance**:
   - Caching implementation
   - Request queuing
   - Worker threads
   - Load balancing

4. **User Experience**:
   - Progress indicators
   - Better error messages
   - Operation history
   - Mobile optimization

5. **Infrastructure**:
   - Containerization
   - CI/CD pipeline
   - Automated testing
   - Monitoring system

The application successfully implements industry-standard encryption algorithms while maintaining security best practices and providing a user-friendly interface for cryptographic operations.