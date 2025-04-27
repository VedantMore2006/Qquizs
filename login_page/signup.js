document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const modeToggle = document.getElementById('modeToggle');
    const modeIcon = modeToggle.querySelector('.mode-icon');
    const body = document.body;
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const switchButtons = document.querySelectorAll('.switch-form');
    const loginMessage = document.getElementById('loginMessage');
    const signupMessage = document.getElementById('signupMessage');
    const successPopup = document.getElementById('successPopup');
    const popupClose = document.getElementById('popupClose');

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        modeIcon.textContent = '🌙';
    }

    // Toggle dark mode
    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        modeIcon.textContent = isDark ? '🌙' : '☀️';
        localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    });

    // Form switching logic
    switchButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetForm = e.target.getAttribute('data-target');
            
            if (targetForm === 'loginForm') {
                loginForm.classList.add('fade-in');
                loginForm.classList.add('active');
                signupForm.classList.remove('active');
                signupForm.classList.remove('fade-in');
                loginForm.querySelector('input').focus();
                clearMessages();
                successPopup.style.display = 'none';
            } else {
                signupForm.classList.add('fade-in');
                signupForm.classList.add('active');
                loginForm.classList.remove('active');
                loginForm.classList.remove('fade-in');
                signupForm.querySelector('input').focus();
                clearMessages();
                successPopup.style.display = 'none';
            }
        });
    });

    // Clear message displays
    function clearMessages() {
        loginMessage.textContent = '';
        loginMessage.className = 'message';
        signupMessage.textContent = '';
        signupMessage.className = 'message';
    }

    // Display message
    function showMessage(element, text, isError = false) {
        element.textContent = text;
        element.className = `message ${isError ? 'error' : 'success'}`;
    }

    // Show success popup
    function showSuccessPopup() {
        successPopup.style.display = 'flex';
        successPopup.focus();
        setTimeout(() => {
            closeSuccessPopup();
        }, 3000);
    }

    // Close success popup and switch to login
    function closeSuccessPopup() {
        successPopup.style.display = 'none';
        loginForm.classList.add('fade-in');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        signupForm.classList.remove('fade-in');
        signupForm.reset();
        clearMessages();
        loginForm.querySelector('input').focus();
    }

    // Validate email format
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Shake animation for invalid submission
    function shakeForm(form) {
        form.classList.add('shake');
        setTimeout(() => form.classList.remove('shake'), 500);
    }

    // Initialize users in localStorage if not present
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
    }

    // Signup form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signup-username').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        const submitButton = signupForm.querySelector('button[type="submit"]');
        submitButton.innerHTML = '<div class="spinner"></div>';
        submitButton.disabled = true;

        // Validation
        const users = JSON.parse(localStorage.getItem('users'));
        if (users.some(user => user.username === username)) {
            showMessage(signupMessage, 'Username already exists.', true);
            shakeForm(signupForm);
            submitButton.innerHTML = 'Sign Up';
            submitButton.disabled = false;
            return;
        }
        if (!isValidEmail(email)) {
            showMessage(signupMessage, 'Please enter a valid email address.', true);
            shakeForm(signupForm);
            submitButton.innerHTML = 'Sign Up';
            submitButton.disabled = false;
            return;
        }
        if (password.length < 8) {
            showMessage(signupMessage, 'Password must be at least 8 characters long.', true);
            shakeForm(signupForm);
            submitButton.innerHTML = 'Sign Up';
            submitButton.disabled = false;
            return;
        }
        if (password !== confirmPassword) {
            showMessage(signupMessage, 'Passwords do not match.', true);
            shakeForm(signupForm);
            submitButton.innerHTML = 'Sign Up';
            submitButton.disabled = false;
            return;
        }

        // Simulate API call
        setTimeout(() => {
            // Save user to localStorage
            users.push({ username, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            submitButton.innerHTML = 'Sign Up';
            submitButton.disabled = false;
            showSuccessPopup();
        }, 1000);
    });

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        const submitButton = loginForm.querySelector('button[type="submit"]');
        submitButton.innerHTML = '<div class="spinner"></div>';
        submitButton.disabled = true;

        // Simulate API call
        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem('users'));
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                localStorage.setItem('currentUser', username);
                showMessage(loginMessage, 'Login successful! Redirecting...');
                setTimeout(() => {
                    window.location.href = '/homepage/homepage.html';
                }, 1500);
            } else {
                showMessage(loginMessage, 'Invalid username or password.', true);
                shakeForm(loginForm);
                submitButton.innerHTML = 'Login';
                submitButton.disabled = false;
            }
        }, 1000);
    });

    // Popup close button
    popupClose.addEventListener('click', closeSuccessPopup);

    // Close popup with Escape key
    successPopup.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSuccessPopup();
        }
    });
});