function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.error').forEach(error => {
        error.style.display = 'none';
    });

    // First Name validation
    const firstName = document.getElementById('firstName').value;
    if (firstName.length < 2) {
        document.getElementById('firstNameError').style.display = 'block';
        isValid = false;
    }

    // Last Name validation
    const lastName = document.getElementById('lastName').value;
    if (lastName.length < 2) {
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    }

    // Gender validation
    const gender = document.getElementById('gender').value;
    if (!gender) {
        document.getElementById('genderError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Username validation
    const username = document.getElementById('username').value;
    if (username.length < 3 || username.length > 20) {
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 8 || password.length > 20) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // Date of Birth validation
    const dob = document.getElementById('dob').value;
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (!dob || age < 13 || birthDate > today) {
        document.getElementById('dobError').style.display = 'block';
        isValid = false;
    }

    // Terms validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        const formData = {
            firstName,
            lastName,
            gender,
            email,
            username,
            password,
            phone,
            dob
        };
        console.log('Form Data:', formData);
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    }

    return isValid;
}