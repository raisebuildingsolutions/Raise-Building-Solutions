// scripts.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formMessage').textContent = 'Thank you for your message!';
});
