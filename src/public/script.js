// Encryption form submission handler
document.getElementById('encryptionForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevents the form from submitting in the default way

    const text = document.getElementById('text').value; // Gets the input text to encrypt
    const method = document.getElementById('method').value; // Gets the selected encryption method (AES or RSA)

    try {
        // Sends an HTTP POST request to the /encrypt endpoint with the text and method
        const response = await fetch('/encrypt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, // Sets the content type to JSON
            body: JSON.stringify({ text, method }) // Converts the data to JSON format for sending
        });

        const data = await response.json(); // Parses the JSON response from the server

        const output = document.getElementById('encryptionOutput'); // Element to display the encrypted text
        const errorOutput = document.getElementById('encryptionErrorOutput'); // Element to display error messages

        if (response.ok) {
            // If the response is successful, display the encrypted text in the output element
            output.textContent = data.encrypted;
            output.classList.add('show'); // Shows the output element
            errorOutput.classList.remove('show'); // Hides the error message element if it was visible
        } else {
            // If there was an error in the response, display the error message
            errorOutput.textContent = data.error;
            errorOutput.classList.add('show'); // Shows the error message element
            output.classList.remove('show'); // Hides the output element if it was visible
        }
    } catch (error) {
        // Handles any errors that occur during the fetch request
        const errorOutput = document.getElementById('encryptionErrorOutput');
        errorOutput.textContent = error.message; // Displays the error message
        errorOutput.classList.add('show'); // Shows the error message element
    }
});

// Decryption form submission handler
document.getElementById('decryptionForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevents the form from submitting in the default way

    const text = document.getElementById('decryptText').value; // Gets the encrypted text to decrypt
    const method = document.getElementById('decryptMethod').value; // Gets the selected decryption method (AES or RSA)

    try {
        // Sends an HTTP POST request to the /decrypt endpoint with the encrypted text and method
        const response = await fetch('/decrypt', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, // Sets the content type to JSON
            body: JSON.stringify({ text, method }) // Converts the data to JSON format for sending
        });

        const data = await response.json(); // Parses the JSON response from the server

        const output = document.getElementById('decryptionOutput'); // Element to display the decrypted text
        const errorOutput = document.getElementById('decryptionErrorOutput'); // Element to display error messages

        if (response.ok) {
            // If the response is successful, display the decrypted text in the output element
            output.textContent = data.decrypted;
            output.classList.add('show'); // Shows the output element
            errorOutput.classList.remove('show'); // Hides the error message element if it was visible
        } else {
            // If there was an error in the response, display the error message
            errorOutput.textContent = data.error;
            errorOutput.classList.add('show'); // Shows the error message element
            output.classList.remove('show'); // Hides the output element if it was visible
        }
    } catch (error) {
        // Handles any errors that occur during the fetch request
        const errorOutput = document.getElementById('decryptionErrorOutput');
        errorOutput.textContent = error.message; // Displays the error message
        errorOutput.classList.add('show'); // Shows the error message element
    }
});
