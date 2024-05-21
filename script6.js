document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    clearErrors();

    // Validate form fields
    let isValid = true;

    // Validate username
    const username = document.getElementById('username').value;
    if (username.length < 3) {
        showError('usernameError', 'Username must be at least 3 characters long.');
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showError('emailError', 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword !== password) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    // If form is valid, you can proceed with form submission (e.g., send data to the server)
    if (isValid) {
        alert('Form submitted successfully!');
        
    }
});

document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    const type = this.checked ? 'text' : 'password';
    passwordField.type = type;
    confirmPasswordField.type = type;
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.style.display = 'none';
        element.textContent = '';
    });
}
