const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const encryption = require('./encryption');

const app = express();

// Security middleware
app.use(helmet());
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Encrypt endpoint
app.post('/encrypt', (req, res) => {
    try {
        const { text, method } = req.body;
        
        if (!text) {
            throw new Error('Text is required.');
        }

        let encrypted;
        switch (method) {
            case 'AES':
                encrypted = encryption.aesEncrypt(text);
                break;
            case 'RSA':
                encrypted = encryption.rsaEncrypt(text);
                break;
            default:
                throw new Error('Invalid encryption method.');
        }
        
        res.json({ encrypted });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Decrypt endpoint
app.post('/decrypt', (req, res) => {
    try {
        const { text, method } = req.body;
        
        if (!text) {
            throw new Error('Text is required.');
        }

        let decrypted;
        switch (method) {
            case 'AES':
                decrypted = encryption.aesDecrypt(text);
                break;
            case 'RSA':
                decrypted = encryption.rsaDecrypt(text);
                break;
            default:
                throw new Error('Invalid decryption method.');
        }
        
        res.json({ decrypted });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));