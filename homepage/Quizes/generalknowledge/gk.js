document.addEventListener('DOMContentLoaded', () => {
    // Questions data organized by difficulty (corrected to 0-based indexing)
    const questions = [
        // Basic Level
        {
            question: "What is the chemical symbol for oxygen?",
            options: ["O₂", "Ox", "Og", "Om"],
            correctAnswer: 0,
            difficulty: "basic"
        },
        {
            question: "Who directed the movie 'Titanic'?",
            options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Quentin Tarantino"],
            correctAnswer: 1,
            difficulty: "basic"
        },
        {
            question: "What is the capital city of Canada?",
            options: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
            correctAnswer: 2,
            difficulty: "basic"
        },
        {
            question: "How many fingers does a typical human hand have?",
            options: ["Four", "Five", "Six", "Seven"],
            correctAnswer: 1,
            difficulty: "basic"
        },
        {
            question: "What is the name of our galaxy?",
            options: ["Andromeda", "Triangulum", "Whirlpool", "Milky Way"],
            correctAnswer: 3,
            difficulty: "basic"
        },
        {
            question: "What is the primary language spoken in Brazil?",
            options: ["Spanish", "Portuguese", "English", "French"],
            correctAnswer: 1,
            difficulty: "basic"
        },
        {
            question: "Which planet is known as the 'Red Planet'?",
            options: ["Jupiter", "Mars", "Venus", "Saturn"],
            correctAnswer: 1,
            difficulty: "basic"
        },
        {
            question: "What is 5 multiplied by 5?",
            options: ["10", "20", "25", "30"],
            correctAnswer: 2,
            difficulty: "basic"
        },
        {
            question: "What type of animal is a kangaroo?",
            options: ["Reptile", "Amphibian", "Mammal", "Bird"],
            correctAnswer: 2,
            difficulty: "basic"
        },
        {
            question: "What is the color of a ripe banana?",
            options: ["Green", "Red", "Yellow", "Blue"],
            correctAnswer: 2,
            difficulty: "basic"
        },
        // Moderate Level
        {
            question: "In which year did World War II end?",
            options: ["1942", "1945", "1950", "1939"],
            correctAnswer: 1,
            difficulty: "moderate"
        },
        {
            question: "What is the chemical symbol for silver?",
            options: ["Si", "Ag", "Au", "Sv"],
            correctAnswer: 1,
            difficulty: "moderate"
        },
        {
            question: "Who wrote the novel 'Pride and Prejudice'?",
            options: ["Charlotte Brontë", "Jane Austen", "Emily Dickinson", "Louisa May Alcott"],
            correctAnswer: 1,
            difficulty: "moderate"
        },
        {
            question: "What is the largest desert in the world by area?",
            options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Polar Desert"],
            correctAnswer: 3,
            difficulty: "moderate"
        },
        {
            question: "Which instrument measures atmospheric pressure?",
            options: ["Thermometer", "Barometer", "Hydrometer", "Anemometer"],
            correctAnswer: 1,
            difficulty: "moderate"
        },
        {
            question: "What is the name of the strait that separates Europe from Africa at the closest point?",
            options: ["Bosporus Strait", "Strait of Hormuz", "Strait of Gibraltar", "Bering Strait"],
            correctAnswer: 2,
            difficulty: "moderate"
        },
        {
            question: "What is the value of Pi (π) to two decimal places?",
            options: ["3.10", "3.14", "3.20", "3.24"],
            correctAnswer: 1,
            difficulty: "moderate"
        },
        {
            question: "Which famous scientist formulated the laws of motion and universal gravitation?",
            options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
            correctAnswer: 1,
            difficulty: "moderate"
        },
        {
            question: "What is the national flower of Japan?",
            options: ["Rose", "Tulip", "Cherry Blossom", "Lotus"],
            correctAnswer: 2,
            difficulty: "moderate"
        },
        {
            question: "Which of these elements is a noble gas?",
            options: ["Chlorine", "Sodium", "Argon", "Carbon"],
            correctAnswer: 2,
            difficulty: "moderate"
        },
        // Advanced Level
        {
            question: "What is the name of the economic theory that advocates for minimal government intervention in the economy?",
            options: ["Keynesianism", "Socialism", "Capitalism", "Laissez-faire"],
            correctAnswer: 3,
            difficulty: "advanced"
        },
        {
            question: "Which battle is considered the turning point of the American Revolutionary War?",
            options: ["Battle of Lexington and Concord", "Battle of Saratoga", "Battle of Yorktown", "Battle of Bunker Hill"],
            correctAnswer: 1,
            difficulty: "advanced"
        },
        {
            question: "What is the chemical formula for sulfuric acid?",
            options: ["HCl", "HNO₃", "H₂SO₄", "CH₄"],
            correctAnswer: 2,
            difficulty: "advanced"
        },
        {
            question: "The 'Bay of Pigs' invasion was a failed military landing on the coast of which country?",
            options: ["Nicaragua", "Cuba", "Dominican Republic", "Panama"],
            correctAnswer: 1,
            difficulty: "advanced"
        },
        {
            question: "What is the SI unit of electric current?",
            options: ["Volt", "Ohm", "Ampere", "Watt"],
            correctAnswer: 2,
            difficulty: "advanced"
        },
        {
            question: "Which philosopher is known for the allegory of the cave?",
            options: ["Aristotle", "Plato", "Socrates", "Immanuel Kant"],
            correctAnswer: 1,
            difficulty: "advanced"
        },
        {
            question: "What is the name of the international agreement that aimed to reduce greenhouse gas emissions?",
            options: ["Montreal Protocol", "Kyoto Protocol", "Paris Agreement", "Vienna Convention"],
            correctAnswer: 2,
            difficulty: "advanced"
        },
        {
            question: "Which artist painted the ceiling of the Sistine Chapel?",
            options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
            correctAnswer: 2,
            difficulty: "advanced"
        },
        {
            question: "What is the name of the deepest point in the Earth's oceans?",
            options: ["Challenger Deep", "Mariana Trench", "Puerto Rico Trench", "Java Trench"],
            correctAnswer: 0,
            difficulty: "advanced"
        },
        {
            question: "In genetics, what is the term for different versions of the same gene?",
            options: ["Chromosomes", "Alleles", "Genotypes", "Phenotypes"],
            correctAnswer: 1,
            difficulty: "advanced"
        }
    ];

    // DOM elements
    const elements = {
        quizForm: document.getElementById('quizForm'),
        questionsContainer: document.getElementById('questionsContainer'),
        resultsContainer: document.getElementById('resultsContainer'),
        scoreValue: document.getElementById('scoreValue'),
        totalQuestions: document.getElementById('totalQuestions'),
        percentage: document.getElementById('percentage'),
        feedback: document.getElementById('feedback'),
        answersContainer: document.getElementById('answersContainer'),
        retakeBtn: document.getElementById('retakeBtn'),
        homeBtn: document.getElementById('homeBtn'),
        timerElement: document.getElementById('timer'),
        modeToggle: document.getElementById('modeToggle'),
        difficultySelect: document.getElementById('difficulty'),
        questionCount: document.getElementById('questionCount'),
        prevBtn: document.getElementById('prevBtn'),
        nextBtn: document.getElementById('nextBtn'),
        navToggle: document.getElementById('navToggle'),
        navMenu: document.querySelector('.nav-menu'),
        body: document.body
    };

    // Quiz state
    let state = {
        userAnswers: [],
        filteredQuestions: [],
        currentQuestionIndex: 0,
        startTime: null,
        timerInterval: null
    };

    // Utility: Debounce function
    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    };

    // Initialize quiz
    const initQuiz = () => {
        if (localStorage.getItem('darkMode') === 'enabled') {
            elements.body.classList.add('dark-mode');
            elements.modeToggle.textContent = '🌙';
        }
        filterQuestions();
        if (state.filteredQuestions.length === 0) {
            elements.questionsContainer.innerHTML = '<p>No questions available for this difficulty.</p>';
            return;
        }
        renderQuestion();
        startTimer();
        updateQuestionCount();
    };

    // Filter questions based on difficulty
    const filterQuestions = () => {
        const difficulty = elements.difficultySelect.value;
        state.filteredQuestions = difficulty === 'all'
            ? questions
            : questions.filter(q => q.difficulty === difficulty);
        state.userAnswers = new Array(state.filteredQuestions.length).fill(null);
        state.currentQuestionIndex = 0;
    };

    // Render current question
    const renderQuestion = () => {
        elements.questionsContainer.innerHTML = '';
        const question = state.filteredQuestions[state.currentQuestionIndex];
        const questionElement = document.createElement('div');
        questionElement.className = 'question-item';
        questionElement.innerHTML = `
            <h3 class="question-text">${state.currentQuestionIndex + 1}. ${question.question}</h3>
            <div class="options-container">
                ${question.options.map((option, optIndex) => `
                    <label class="option">
                        <input type="radio" name="question-${state.currentQuestionIndex}" value="${optIndex}"
                               ${state.userAnswers[state.currentQuestionIndex] === optIndex ? 'checked' : ''}>
                        <span class="option-text">${option}</span>
                    </label>
                `).join('')}
            </div>
        `;
        elements.questionsContainer.appendChild(questionElement);

        // Update navigation buttons
        elements.prevBtn.style.display = state.currentQuestionIndex === 0 ? 'none' : 'inline-block';
        elements.nextBtn.textContent = state.currentQuestionIndex === state.filteredQuestions.length - 1 ? 'Submit' : 'Next';

        // Add event listeners for radio buttons
        const radioInputs = questionElement.querySelectorAll('input[type="radio"]');
        radioInputs.forEach(radio => {
            radio.addEventListener('change', () => {
                state.userAnswers[state.currentQuestionIndex] = parseInt(radio.value);
            });
        });
    };

    // Timer functionality
    const startTimer = () => {
        state.startTime = new Date();
        state.timerInterval = setInterval(updateTimer, 1000);
    };

    const updateTimer = () => {
        const currentTime = new Date();
        const elapsedTime = Math.floor((currentTime - state.startTime) / 1000);
        const minutes = Math.floor(elapsedTime / 60).toString().padStart(2, '0');
        const seconds = (elapsedTime % 60).toString().padStart(2, '0');
        elements.timerElement.textContent = `${minutes}:${seconds}`;
    };

    const stopTimer = () => {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    };

    // Calculate results
    const calculateResults = () => {
        stopTimer();
        let score = 0;
        const results = [];
        state.filteredQuestions.forEach((question, index) => {
            const isCorrect = state.userAnswers[index] === question.correctAnswer;
            if (isCorrect) score++;
            results.push({
                question: question.question,
                userAnswer: state.userAnswers[index] !== null ? question.options[state.userAnswers[index]] : "Not answered",
                correctAnswer: question.options[question.correctAnswer],
                isCorrect
            });
        });
        return { score, results, percentage: Math.round((score / state.filteredQuestions.length) * 100) };
    };

    // Show results
    const showResults = () => {
        const { score, results, percentage } = calculateResults();
        elements.scoreValue.textContent = score;
        elements.totalQuestions.textContent = state.filteredQuestions.length;
        elements.percentage.textContent = `${percentage}%`;

        const circumference = 2 * Math.PI * 52;
        const offset = circumference - (percentage / 100) * circumference;
        document.querySelector('.progress-ring-circle').style.strokeDasharray = `${circumference} ${circumference}`;
        document.querySelector('.progress-ring-circle').style.strokeDashoffset = offset;

        elements.feedback.textContent = percentage >= 80 ? "🎉 Excellent!" : percentage >= 60 ? "👍 Good job!" : "💪 Keep practicing!";
        elements.feedback.style.backgroundColor = percentage >= 80 ? "rgba(76, 175, 80, 0.2)" : percentage >= 60 ? "rgba(255, 193, 7, 0.2)" : "rgba(244, 67, 54, 0.2)";

        elements.answersContainer.innerHTML = '';
        results.forEach((result, index) => {
            const answerItem = document.createElement('div');
            answerItem.className = `answer-item ${result.isCorrect ? 'correct' : 'incorrect'}`;
            answerItem.innerHTML = `
                <div class="answer-question">${index + 1}. ${result.question}</div>
                <span class="answer-user">${result.userAnswer}</span>
                ${!result.isCorrect ? `<span class="answer-correct">${result.correctAnswer}</span>` : ''}
            `;
            elements.answersContainer.appendChild(answerItem);
        });

        elements.questionsContainer.style.display = 'none';
        elements.quizForm.style.display = 'none';
        elements.resultsContainer.style.display = 'block';
    };

    // Retake quiz
    const retakeQuiz = () => {
        if (!confirm('Are you sure you want to retake the quiz? Your current progress will be lost.')) return;
        state.userAnswers = new Array(state.filteredQuestions.length).fill(null);
        state.currentQuestionIndex = 0;
        elements.resultsContainer.style.display = 'none';
        elements.quizForm.style.display = 'block';
        elements.questionsContainer.style.display = 'block';
        renderQuestion();
        startTimer();
    };

    // Navigation
    const goToPreviousQuestion = () => {
        if (state.currentQuestionIndex > 0) {
            state.currentQuestionIndex--;
            renderQuestion();
        }
    };

    const goToNextQuestion = () => {
        if (state.currentQuestionIndex < state.filteredQuestions.length - 1) {
            state.currentQuestionIndex++;
            renderQuestion();
        } else {
            showResults();
        }
    };

    // Update question count
    const updateQuestionCount = () => {
        elements.questionCount.textContent = state.filteredQuestions.length;
        elements.totalQuestions.textContent = state.filteredQuestions.length;
    };

    // Event listeners
    elements.prevBtn.addEventListener('click', goToPreviousQuestion);
    elements.nextBtn.addEventListener('click', goToNextQuestion);
    elements.retakeBtn.addEventListener('click', retakeQuiz);
    elements.homeBtn.addEventListener('click', () => {
        if (confirm('Return to home? Your current progress will be lost.')) {
            window.location.href = 'homepage.html';
        }
    });
    elements.modeToggle.addEventListener('click', () => {
        elements.body.classList.toggle('dark-mode');
        elements.modeToggle.textContent = elements.body.classList.contains('dark-mode') ? '🌙' : '☀️';
        localStorage.setItem('darkMode', elements.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    });
    elements.difficultySelect.addEventListener('change', debounce(() => {
        filterQuestions();
        renderQuestion();
        updateQuestionCount();
        stopTimer();
        startTimer();
    }, 300));
    elements.navToggle.addEventListener('click', () => {
        elements.navMenu.classList.toggle('active');
        elements.navToggle.textContent = elements.navMenu.classList.contains('active') ? '✖' : '☰';
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && state.currentQuestionIndex > 0) goToPreviousQuestion();
        if (e.key === 'ArrowRight' && state.currentQuestionIndex < state.filteredQuestions.length - 1) goToNextQuestion();
        if (e.key === 'Enter' && elements.nextBtn.textContent === 'Submit') showResults();
    });

    // Initialize quiz
    initQuiz();
});