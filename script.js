document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting automatically

    // Get input values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const feedback = document.getElementById('form-feedback');

    // Reset feedback
    feedback.style.display = 'none';
    feedback.textContent = '';

    // Validation checks
    if (username.length < 3) {
        showError("Username must be at least 3 characters long.");
        return;
    }

    if (!validateEmail(email)) {
        showError("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        showError("Password must be at least 6 characters long.");
        return;
    }

    // If all checks pass
    feedback.style.display = 'block';
    feedback.style.color = 'green';
    feedback.style.backgroundColor = '#d4edda';
    feedback.textContent = 'Form submitted successfully!';
});

// Helper: email regex validator
function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

// Helper: show error
function showError(message) {
    const feedback = document.getElementById('form-feedback');
    feedback.style.display = 'block';
    feedback.style.color = '#d8000c';
    feedback.style.backgroundColor = '#ffbaba';
    feedback.textContent = message;
}
