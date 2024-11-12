# 🔒 Cryptography-Algorithms-App

## 📘 Introduction
The **Cryptography-Algorithm-App** is a web-based tool that allows users to encrypt and decrypt text using different cryptographic algorithms, including **AES** (Advanced Encryption Standard) and **RSA** (Rivest-Shamir-Adleman). This app features a secure backend built with **Node.js** and **Express.js**, handling cryptographic operations, and a clean user interface powered by **HTML**, **CSS**, and **JavaScript**.

Users can choose between AES and RSA algorithms for encryption and decryption, and the app securely handles text input and outputs encrypted or decrypted data.

## ⚙️ Technical Description
The app is composed of the following components:

### Backend:
- **Express.js**: The app uses Express.js to set up a RESTful API that handles user requests for encryption and decryption. The server processes POST requests to encrypt and decrypt text based on the chosen algorithm (AES or RSA).
- **Crypto Module**: Node's built-in `crypto` module is used for AES encryption and decryption operations.
- **RSA Encryption**: The app uses the **NodeRSA** library to handle RSA encryption and decryption with secure padding schemes.
- **Security Features**:
  - **Helmet.js**: Helmet is applied as middleware to enhance the app's security by adding headers that protect it from common web vulnerabilities. For example, it includes a content security policy to control what resources can be loaded in the frontend.
  - **Rate Limiting**: The app limits the number of requests from a single IP address using the **express-rate-limit** library to prevent abuse.
  - **CORS (Cross-Origin Resource Sharing)**: CORS headers are configured to control which domains are allowed to interact with the API.

### Frontend:
- **HTML/CSS**: The user interface is created using HTML and styled with CSS to provide a simple and responsive layout. The app allows users to input text, select the encryption method, and view the results.
- **JavaScript**: Handles user interactions and communicates with the backend via **fetch** API for encryption and decryption operations. It displays the results on the UI and handles error messages.

## 💻 Technologies Used
- **Node.js**: For backend development.
- **Express.js**: A web framework for setting up the backend API.
- **Crypto Module**: Node.js's built-in module for cryptography.
- **NodeRSA**: For RSA encryption and decryption.
- **Helmet.js**: For adding security headers to HTTP responses.
- **express-rate-limit**: To limit the number of requests from a client.
- **CORS**: To manage cross-origin requests.
- **HTML/CSS/JavaScript**: For frontend development.
- **dotenv**: For loading environment variables.

## 🌟 Main Features
- **AES Encryption/Decryption**: Secure encryption and decryption using AES-256-GCM.
- **RSA Encryption/Decryption**: Secure encryption and decryption using RSA with PKCS1-OAEP padding.
- **Rate Limiting**: Protects against brute-force attacks by limiting requests from the same IP address.
- **Content Security**: The app uses Helmet.js to secure HTTP headers, protecting against vulnerabilities.
- **Cross-Origin Resource Sharing (CORS)**: Configured to ensure secure API access.

## 🔍 Use Cases
- **Encrypting Text**: Users can encrypt plain text with AES or RSA encryption for secure transmission.
- **Decrypting Text**: Encrypted text can be decrypted using either AES or RSA, as long as the correct algorithm and key are provided.
- **Secure Communication**: Ideal for situations requiring secure data exchange, where sensitive information needs to be encrypted before transmission.

## 📝 Results and Insights
This app demonstrates basic cryptographic techniques like AES and RSA, and it’s designed with security best practices in mind. By using secure key management and strong encryption methods, users can ensure that sensitive data is protected. The app can be used as a reference or starting point for developing more complex encryption systems.

## 🚀 Possible Improvements
- **Support for more algorithms**: Adding more cryptographic algorithms like **Triple DES** or **ECC** (Elliptic Curve Cryptography) for a wider range of use cases.
- **User Authentication**: Adding user authentication to prevent unauthorized access to encryption and decryption functionalities.
- **Frontend Enhancements**: Implement a more interactive frontend with input validation, progress indicators, and user-friendly error handling.
- **File Encryption**: Allow users to encrypt and decrypt files, not just text.
- **Key Management**: Implement more robust key management features to securely store and handle encryption keys.
