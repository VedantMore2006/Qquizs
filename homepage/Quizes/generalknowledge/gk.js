document.addEventListener('DOMContentLoaded', function() {
    // Questions data organized by difficulty
    const questions = [
        // Basic Level (1-10)
        {
            question: "What is the chemical symbol for oxygen?",
            options: ["O₂", "Ox", "Og", "Om"],
            correctAnswer: 1,
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
        // Moderate Level (11-20)
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
        // Advanced Level (21-30)
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
            correctAnswer: 1,
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
            correctAnswer: 1,
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
        const quizForm = document.getElementById('quizForm');
        const questionsContainer = document.getElementById('questionsContainer');
        const resultsContainer = document.getElementById('resultsContainer');
        const scoreValue = document.getElementById('scoreValue');
        const totalQuestions = document.getElementById('totalQuestions');
        const percentage = document.getElementById('percentage');
        const feedback = document.getElementById('feedback');
        const answersContainer = document.getElementById('answersContainer');
        const retakeBtn = document.getElementById('retakeBtn');
        const homeBtn = document.getElementById('homeBtn');
        const timerElement = document.getElementById('timer');
        const modeToggle = document.getElementById('modeToggle');
        const difficultySelect = document.getElementById('difficulty');
        const questionCount = document.getElementById('questionCount');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.querySelector('.nav-menu');
        const body = document.body;
    
        // Quiz state
        let userAnswers = [];
        let filteredQuestions = [];
        let currentQuestionIndex = 0;
        let startTime;
        let timerInterval;
    
        // Initialize quiz
        function initQuiz() {
            if (localStorage.getItem('darkMode') === 'enabled') {
                body.classList.add('dark-mode');
                modeToggle.textContent = '🌙';
            }
            filterQuestions();
            renderQuestion();
            startTimer();
            questionCount.textContent = filteredQuestions.length;
            totalQuestions.textContent = filteredQuestions.length;
        }
    
        // Filter questions based on selected difficulty
        function filterQuestions() {
            const difficulty = difficultySelect.value;
            filteredQuestions = difficulty === 'all' 
                ? questions 
                : questions.filter(q => q.difficulty === difficulty);
            userAnswers = new Array(filteredQuestions.length).fill(null);
            currentQuestionIndex = 0;
        }
    
        // Render current question
        function renderQuestion() {
            questionsContainer.innerHTML = '';
            const question = filteredQuestions[currentQuestionIndex];
            const questionElement = document.createElement('div');
            questionElement.className = 'question-item';
            questionElement.innerHTML = `
                <h3 class="question-text">${currentQuestionIndex + 1}. ${question.question}</h3>
                <div class="options-container">
                    ${question.options.map((option, optIndex) => `
                        <label class="option">
                            <input type="radio" name="question-${currentQuestionIndex}" value="${optIndex}" 
                                   ${userAnswers[currentQuestionIndex] === optIndex ? 'checked' : ''}>
                            <span class="option-text">${option}</span>
                        </label>
                    `).join('')}
                </div>
            `;
            questionsContainer.appendChild(questionElement);
    
            // Update navigation buttons
            prevBtn.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
            nextBtn.textContent = currentQuestionIndex === filteredQuestions.length - 1 ? 'Submit' : 'Next';
    
            // Add event listeners for radio buttons
            const radioInputs = questionElement.querySelectorAll('input[type="radio"]');
            radioInputs.forEach(radio => {
                radio.addEventListener('change', () => {
                    userAnswers[currentQuestionIndex] = parseInt(radio.value);
                });
            });
        }
    
        // Timer functionality
        function startTimer() {
            startTime = new Date();
            timerInterval = setInterval(updateTimer, 1000);
        }
    
        function updateTimer() {
            const currentTime = new Date();
            const elapsedTime = Math.floor((currentTime - startTime) / 1000);
            const minutes = Math.floor(elapsedTime / 60).toString().padStart(2, '0');
            const seconds = (elapsedTime % 60).toString().padStart(2, '0');
            timerElement.textContent = `${minutes}:${seconds}`;
        }
    
        // Calculate results
        function calculateResults() {
            clearInterval(timerInterval);
            let score = 0;
            const results = [];
            filteredQuestions.forEach((question, index) => {
                const isCorrect = userAnswers[index] === question.correctAnswer;
                if (isCorrect) score++;
                results.push({
                    question: question.question,
                    userAnswer: userAnswers[index] !== null ? question.options[userAnswers[index]] : "Not answered",
                    correctAnswer: question.options[question.correctAnswer],
                    isCorrect: isCorrect
                });
            });
            return { score, results, percentage: Math.round((score / filteredQuestions.length) * 100) };
        }
    
        // Show results
        function showResults() {
            const { score, results, percentage } = calculateResults();
            scoreValue.textContent = score;
            totalQuestions.textContent = filteredQuestions.length;
            percentage.textContent = `${percentage}%`;
    
            const circumference = 2 * Math.PI * 52;
            const offset = circumference - (percentage / 100) * circumference;
            document.querySelector('.progress-ring-circle').style.strokeDashoffset = offset;
    
            feedback.textContent = percentage >= 80 ? "🎉 Excellent!" : percentage >= 60 ? "👍 Good job!" : "💪 Keep practicing!";
            feedback.style.backgroundColor = percentage >= 80 ? "rgba(76, 175, 80, 0.2)" : percentage >= 60 ? "rgba(255, 193, 7, 0.2)" : "rgba(244, 67, 54, 0.2)";
    
            answersContainer.innerHTML = '';
            results.forEach((result, index) => {
                const answerItem = document.createElement('div');
                answerItem.className = `answer-item ${result.isCorrect ? 'correct' : 'incorrect'}`;
                answerItem.innerHTML = `
                    <div class="answer-question">${index + 1}. ${result.question}</div>
                    <span class="answer-user">${result.userAnswer}</span>
                    ${!result.isCorrect ? `<span class="answer-correct">${result.correctAnswer}</span>` : ''}
                `;
                answersContainer.appendChild(answerItem);
            });
    
            questionsContainer.style.display = 'none';
            quizForm.style.display = 'none';
            resultsContainer.style.display = 'block';
        }
    
        // Retake quiz
        function retakeQuiz() {
            userAnswers = new Array(filteredQuestions.length).fill(null);
            currentQuestionIndex = 0;
            resultsContainer.style.display = 'none';
            quizForm.style.display = 'block';
            questionsContainer.style.display = 'block';
            renderQuestion();
            clearInterval(timerInterval);
            startTimer();
        }
    
        // Navigation button handlers
        function goToPreviousQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                renderQuestion();
            }
        }
    
        function goToNextQuestion() {
            if (currentQuestionIndex < filteredQuestions.length - 1) {
                currentQuestionIndex++;
                renderQuestion();
            } else {
                showResults();
            }
        }
    
        // Event listeners
        prevBtn.addEventListener('click', goToPreviousQuestion);
        nextBtn.addEventListener('click', goToNextQuestion);
        retakeBtn.addEventListener('click', retakeQuiz);
        homeBtn.addEventListener('click', () => window.location.href = 'homepage.html');
        modeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            modeToggle.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';
            localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
        });
        difficultySelect.addEventListener('change', () => {
            filterQuestions();
            renderQuestion();
            questionCount.textContent = filteredQuestions.length;
            totalQuestions.textContent = filteredQuestions.length;
            clearInterval(timerInterval);
            startTimer();
        });
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
        });
    
        // Initialize the quiz
        initQuiz();
    });