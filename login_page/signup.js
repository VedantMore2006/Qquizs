// Dark Mode Toggle
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    modeToggle.textContent = '🌙';
}

// Toggle dark mode on button click
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    modeToggle.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
});

// Form Switching Logic
const switchButtons = document.querySelectorAll('.switch-form');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

switchButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetForm = e.target.getAttribute('data-target');
        
        // Add animation class for transition
        if (targetForm === 'loginForm') {
            loginForm.classList.add('active');
            signupForm.classList.remove('active');
        } else {
            signupForm.classList.add('active');
            loginForm.classList.remove('active');
        }
    });
});

// Form submission handling
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add loading animation
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.innerHTML = '<div class="spinner"></div>';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            submitButton.textContent = 'Success!';
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // For demo purposes, show login after signup
                if (form.classList.contains('signup-form')) {
                    loginForm.classList.add('active');
                    signupForm.classList.remove('active');
                }
            }, 1500);
        }, 2000);
    });
});