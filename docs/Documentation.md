Cryptography Algorithm App Documentation
Table of Contents
Project Overview
Installation
Usage
Supported Algorithms
Examples
Project Overview 📝
The Cryptography Algorithm App is a web-based tool that allows users to encrypt and decrypt messages using various cryptographic algorithms. The app supports multiple encryption methods, including AES, DES, and RSA, providing a hands-on experience for learning and testing these algorithms. Users can easily select their desired encryption or decryption method and input text to see the result instantly.

Installation ⚙️
To install and run the Cryptography Algorithm App locally, follow these steps:

Clone the project repository:

bash
Copiază codul
git clone https://github.com/RobCyberLab/Cryptography-Algorithm-App.git
Navigate to the project directory:

bash
Copiază codul
cd Cryptography-Algorithm-App
Install the required dependencies using npm:

bash
Copiază codul
npm install
Start the server:

bash
Copiază codul
npm start
Open the app in your web browser by navigating to http://localhost:3000.

Usage 📖
Open the Cryptography Algorithm App in your web browser.
Choose between the "Encrypt" or "Decrypt" tab.
Select the encryption or decryption method from the dropdown (AES, DES, or RSA).
Enter the text you want to encrypt or decrypt in the input text area.
Click the "Encrypt" or "Decrypt" button to perform the operation.
The result will appear below the input field in the output section.
To copy the output, click the "Copy" button next to the result.
Supported Algorithms 🔐
AES (Advanced Encryption Standard)
AES is a symmetric encryption algorithm that operates on fixed block sizes (128 bits) and supports key sizes of 128, 192, or 256 bits. It is widely used in modern cryptographic applications and is known for its efficiency and security.

DES (Data Encryption Standard)
DES is a symmetric-key block cipher that encrypts data in 64-bit blocks using a 56-bit key. While it was once a widely used encryption standard, it is now considered insecure due to advances in computing power and the relatively small key size.

RSA (Rivest-Shamir-Adleman)
RSA is an asymmetric encryption algorithm used for secure data transmission. It uses a pair of keys: a public key for encryption and a private key for decryption. RSA is widely used in various applications, including digital signatures and secure email communication.

Examples 📌
AES Encryption: Encrypting the text "hello world" with a 256-bit key results in a secure ciphertext.

Encrypted Text: abf9d7fba3a4d86ed7db7a869eaf54ed

<p align="center"> <img src="aes-encryption-example.png" alt="AES Encryption Example" width="500"> <br> <em>Example 1: AES Encryption of 'hello world'</em> </p>
AES Decryption: Decrypting the above AES ciphertext with the corresponding key retrieves the original message "hello world".

Decrypted Text: hello world

<p align="center"> <img src="aes-decryption-example.png" alt="AES Decryption Example" width="500"> <br> <em>Example 2: AES Decryption of encrypted text</em> </p>
RSA Encryption: Encrypting the text "secure data" using a public key in RSA results in an encrypted ciphertext that can only be decrypted with the corresponding private key.

Encrypted Text: `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7h1rtgT7Kl/Tlgqww1jVtDFf5E9S6dY3mlz9K1wGFJTIYc4CUyFozZaQhAGuKYjqcwAKOXVo5KOvZTgsY8Rml3x3rZZVe6swJ9FGHLLJzB53mjgWbtsdgl+rwmFq4q0q8cHKHkRrZsmLf3ugNNXq7qM9d5X0p5dXVe..."

<p align="center"> <img src="rsa-encryption-example.png" alt="RSA Encryption Example" width="500"> <br> <em>Example 3: RSA Encryption of 'secure data'</em> </p>
RSA Decryption: Decrypting the above RSA ciphertext with the private key retrieves the original message "secure data".

Decrypted Text: secure data

<p align="center"> <img src="rsa-decryption-example.png" alt="RSA Decryption Example" width="500"> <br> <em>Example 4: RSA Decryption of encrypted text</em> </p>
DES Encryption: Encrypting "confidential" using the DES algorithm with a 56-bit key results in a ciphertext that appears as a random string.

Encrypted Text: 4c4d2f8f8b08442ff2fa1fd8b07c72a7

<p align="center"> <img src="des-encryption-example.png" alt="DES Encryption Example" width="500"> <br> <em>Example 5: DES Encryption of 'confidential'</em> </p>
DES Decryption: Decrypting the DES ciphertext with the corresponding key retrieves the original message "confidential".

Decrypted Text: confidential

<p align="center"> <img src="des-decryption-example.png" alt="DES Decryption Example" width="500"> <br> <em>Example 6: DES Decryption of encrypted text</em> </p>