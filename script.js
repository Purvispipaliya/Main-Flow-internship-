// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let errorMessage = '';
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name === '') {
        errorMessage += 'Name is required.<br>';
    }

    if (!validateEmail(email)) {
        errorMessage += 'Please enter a valid email address.<br>';
    }

    if (errorMessage) {
        event.preventDefault(); // Prevent form submission
        document.getElementById('error-message').innerHTML = errorMessage;
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});

// Dynamic Content Loading
document.getElementById('loadContent').addEventListener('click', function() {
    document.getElementById('content-area').innerHTML = `
        <p>Here is some dynamic content that was loaded when you clicked the button!</p>
    `;
});
