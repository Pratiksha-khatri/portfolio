// Optional: Add JavaScript for interactive features
// For example, form submission handling using AJAX

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Perform AJAX or other form submission handling
    // Example: Fetch API to send form data to a server
    fetch('https://api.example.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
