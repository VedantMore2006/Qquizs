// Dark Mode Toggle
const modeToggle = document.getElementById('modeToggle');

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    modeToggle.textContent = '🌙';
}

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    modeToggle.textContent = isDark ? '🌙' : '☀️';
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
});

// Quiz card interaction
document.querySelectorAll('.quiz-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('.quiz-title').textContent.trim();
        const links = {
            'It\'s Movie Time!': 'Quizes/movie/movie.html', // Replace with actual movie quiz link if available
            'General Knowledge': 'Quizes/generalknowledge/gk.html',
            'World\'s Famous Landmarks': 'Quizes/landmarks/landmarks.html', // Replace with actual landmarks quiz link
            'Can You Guess the Logo??': 'Quizes/logo_guess/logo.html',
            'Geography Quiz': 'Quizes/geography/quiz.html', // Replace with actual geography quiz link
            'IQ Test': 'Quizes/iqtest/logic-quiz.html' // Replace with actual IQ test link
        };
        const destination = links[title] || 'quiz.html'; // Default to quiz.html if no match
        window.location.href = destination;
    });
});

// Search functionality
const searchInput = document.getElementById('searchInput');
const quizGrid = document.getElementById('quizGrid');
const quizCards = quizGrid.getElementsByClassName('quiz-card');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    Array.from(quizCards).forEach(card => {
        const title = card.querySelector('.quiz-title').textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? '' : 'none';
    });
});