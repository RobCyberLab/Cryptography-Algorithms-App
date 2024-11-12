// Load environment variables from .env file
require('dotenv').config();

// Import required modules
const express = require('express'); // For creating the server
const bodyParser = require('body-parser'); // For handling JSON request bodies
const helmet = require('helmet'); // For enhancing app security with HTTP headers
const rateLimit = require('express-rate-limit'); // For limiting the rate of incoming requests
const encryption = require('./encryption'); // Import custom encryption service

const app = express();

// Apply security headers using Helmet to protect against some web vulnerabilities
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"], // Restrict resources to the same origin
            scriptSrc: ["'self'"], // Restrict script sources to the same origin
            styleSrc: ["'self'"], // Restrict style sources to the same origin
            imgSrc: ["'self'"], // Restrict image sources to the same origin
        },
    },
}));

// Set up rate limiting to prevent abuse (100 requests per IP per 15 minutes)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // Set time window to 15 minutes
    max: 100 // Allow max 100 requests per IP per window
});
app.use(limiter); // Apply rate limiter to all requests

// Limit the JSON body size to 10kb to prevent excessive data uploads
app.use(bodyParser.json({ limit: '10kb' }));

// Configure CORS to allow requests from specified origin or any origin by default
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*'); // Allow origin from environment variable or any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST'); // Allow GET and POST methods
    res.header('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type header
    next();
});

// Middleware to validate encryption input from the user
const validateInput = (req, res, next) => {
    const { text, method } = req.body;
    
    // Check if 'text' is a valid string
    if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Invalid text input' });
    }
    
    // Validate that 'method' is either 'AES' or 'RSA'
    if (!['AES', 'RSA'].includes(method)) {
        return res.status(400).json({ error: 'Invalid encryption method' });
    }
    
    // Limit the text length to prevent overly large data submissions
    if (text.length > 10000) {
        return res.status(400).json({ error: 'Text too long' });
    }
    
    next(); // Proceed to the next middleware or route handler if validation passes
};

// Define the encryption endpoint, validating and encrypting text based on selected method
app.post('/encrypt', validateInput, async (req, res) => {
    try {
        const { text, method } = req.body;
        
        let result;
        // Use AES encryption if specified, otherwise use RSA encryption
        if (method === 'AES') {
            result = await encryption.aesEncrypt(text);
        } else {
            result = encryption.rsaEncrypt(text);
        }
        
        // Respond with encrypted data
        res.json({ encrypted: result });
    } catch (error) {
        console.error(`Encryption error: ${error.message}`); // Log any encryption error
        res.status(400).json({ error: 'Encryption failed' });
    }
});

// Define the decryption endpoint, validating and decrypting text based on selected method
app.post('/decrypt', validateInput, async (req, res) => {
    try {
        const { text, method } = req.body;
        
        let result;
        // Use AES decryption if specified, otherwise use RSA decryption
        if (method === 'AES') {
            result = await encryption.aesDecrypt(JSON.parse(text)); // Parse text for AES decryption
        } else {
            result = encryption.rsaDecrypt(text);
        }
        
        // Respond with decrypted data
        res.json({ decrypted: result });
    } catch (error) {
        console.error(`Decryption error: ${error.message}`); // Log any decryption error
        res.status(400).json({ error: 'Decryption failed' });
    }
});

// Set server to listen on specified port or default to 3000, logging a success message on startup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
