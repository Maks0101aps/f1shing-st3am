# Steam Phishing Educational Demonstration

## ⚠️ EDUCATIONAL PURPOSES ONLY ⚠️

This project is **STRICTLY** for educational purposes to demonstrate how phishing attacks work. It is designed to help understand the mechanics of phishing attacks so you can better protect yourself and others.

**Using such techniques for malicious purposes is illegal and unethical.**

## Project Overview

This project demonstrates a simulated phishing attack targeting Steam users. It includes:

1. A fake Steam login page that visually mimics the real one
2. A simple server that captures login credentials
3. Redirection to the real Steam website after submission

## How It Works

1. The user visits the fake login page (running locally on your machine)
2. The page looks identical to the real Steam login page
3. When credentials are entered and submitted, they are:
   - Saved locally to a file called `credentials.txt`
   - Never sent anywhere outside your local machine
4. The user is then redirected to the real Steam website

## Technical Implementation

- HTML/CSS: Creates a visual clone of the Steam login page
- JavaScript: Handles form submission and redirection
- Node.js/Express: Simple server to process login data and save it locally

## Setup and Running

1. Make sure you have [Node.js](https://nodejs.org/) installed
2. Clone or download this repository
3. Open a terminal in the project directory
4. Install dependencies:
   ```
   npm install
   ```
5. Start the server:
   ```
   npm start
   ```
6. Open your browser and navigate to `http://localhost:3000`

## Security Considerations

- This project runs ONLY on localhost (your own computer)
- Credentials are saved ONLY to your local machine
- No data is transmitted over the internet
- The project includes clear warnings about its educational nature

## Why Learn About Phishing?

Understanding how phishing attacks work is crucial for:

- Recognizing real phishing attempts
- Implementing proper security measures
- Educating others about online safety
- Developing better security practices

## How to Protect Yourself from Real Phishing

1. Always check the URL in your browser (real Steam uses https://store.steampowered.com or https://steamcommunity.com)
2. Look for security indicators (HTTPS, padlock icon)
3. Use two-factor authentication
4. Be suspicious of unexpected login requests
5. Use a password manager to auto-fill credentials (it won't work on fake sites)
6. Keep your software updated

## Legal and Ethical Notice

This project is provided solely for educational and research purposes. The author does not condone or support the use of this or similar code for malicious purposes. Using phishing techniques against real users without consent is illegal in most jurisdictions and is a violation of:

- Computer Fraud and Abuse Act
- Various state and international cybercrime laws
- Terms of service of most online platforms

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Remember: With knowledge comes responsibility. Use this educational tool ethically. 