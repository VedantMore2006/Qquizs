
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
                window.location.href = 'quiz.html';
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