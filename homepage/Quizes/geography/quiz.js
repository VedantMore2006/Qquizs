document.addEventListener('DOMContentLoaded', () => {
    // Questions data organized by difficulty (corrected to 0-based indexing)
    const questions = {
        basic: [
            {
                question: "What is the name of the planet we live on?",
                options: ["Mars", "Earth", "Venus", "Jupiter"],
                correctAnswer: 1
            },
            {
                question: "Which continent is India located in?",
                options: ["Africa", "Asia", "Europe", "South America"],
                correctAnswer: 1
            },
            {
                question: "What is the largest body of water on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correctAnswer: 3
            },
            {
                question: "What is the opposite of north?",
                options: ["East", "West", "South", "Northeast"],
                correctAnswer: 2
            },
            {
                question: "What is a large natural elevation of the Earth's surface rising abruptly from the surrounding level?",
                options: ["Valley", "Hill", "Mountain", "Plain"],
                correctAnswer: 2
            },
            {
                question: "What is the flat area of land with no high hills or mountains called?",
                options: ["Plateau", "Desert", "Plain", "Canyon"],
                correctAnswer: 2
            },
            {
                question: "What is the imaginary line that divides the Earth into the Northern Hemisphere and the Southern Hemisphere?",
                options: ["Prime Meridian", "Tropic of Cancer", "Equator", "Tropic of Capricorn"],
                correctAnswer: 2
            },
            {
                question: "What is frozen water called?",
                options: ["Snow", "Hail", "Ice", "Sleet"],
                correctAnswer: 2
            },
            {
                question: "Which of these is a major river in India?",
                options: ["Amazon", "Nile", "Ganges", "Mississippi"],
                correctAnswer: 2
            },
            {
                question: "What is the name for a map that shows the physical features of an area, like mountains and rivers?",
                options: ["Political Map", "Road Map", "Physical Map", "Climate Map"],
                correctAnswer: 2
            }
        ],
        moderate: [
            {
                question: "What is the capital city of Japan?",
                options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
                correctAnswer: 2
            },
            {
                question: "Which mountain range is known as the \"Roof of the World\"?",
                options: ["Andes", "Himalayas", "Rockies", "Alps"],
                correctAnswer: 1
            },
            {
                question: "What type of climate is typically found near the Equator?",
                options: ["Polar", "Temperate", "Tropical", "Arid"],
                correctAnswer: 2
            },
            {
                question: "What is the process by which water changes from a liquid to a gas?",
                options: ["Condensation", "Precipitation", "Evaporation", "Sublimation"],
                correctAnswer: 2
            },
            {
                question: "Which country is famous for the fjords found along its coastline?",
                options: ["Spain", "Greece", "Norway", "Italy"],
                correctAnswer: 2
            },
            {
                question: "What is a narrow strip of land connecting two larger land areas called?",
                options: ["Peninsula", "Isthmus", "Archipelago", "Cape"],
                correctAnswer: 1
            },
            {
                question: "What is the name of the largest lake in North America by surface area?",
                options: ["Lake Michigan", "Lake Superior", "Lake Huron", "Great Salt Lake"],
                correctAnswer: 1
            },
            {
                question: "Which of these is a major agricultural region known as the \"Breadbasket of North America\"?",
                options: ["Appalachian Mountains", "Great Plains", "Rocky Mountains", "Sonoran Desert"],
                correctAnswer: 1
            },
            {
                question: "What is the term for the wearing away of the Earth's surface by wind, water, or other natural agents?",
                options: ["Deposition", "Weathering", "Erosion", "Sedimentation"],
                correctAnswer: 2
            },
            {
                question: "Which major river flows through Egypt?",
                options: ["Amazon River", "Congo River", "Nile River", "Yangtze River"],
                correctAnswer: 2
            }
        ],
        advanced: [
            {
                question: "What is the concept of \"plate tectonics\" primarily concerned with?",
                options: [
                    "Weather patterns",
                    "Ocean currents",
                    "The movement of Earth's lithosphere",
                    "The formation of clouds"
                ],
                correctAnswer: 2
            },
            {
                question: "Which type of map projection preserves angles and is important for navigation but distorts areas?",
                options: [
                    "Mercator projection",
                    "Robinson projection",
                    "Peters projection",
                    "Winkel Tripel projection"
                ],
                correctAnswer: 0
            },
            {
                question: "What is the study of population distribution, composition, migration, and growth called?",
                options: [
                    "Demography",
                    "Cartography",
                    "Geomorphology",
                    "Climatology"
                ],
                correctAnswer: 0
            },
            {
                question: "The Köppen climate classification system is primarily based on which two factors?",
                options: [
                    "Latitude and longitude",
                    "Altitude and precipitation",
                    "Temperature and precipitation",
                    "Wind speed and humidity"
                ],
                correctAnswer: 2
            },
            {
                question: "What is the term for a long, narrow, and deep inlet of the sea between high cliffs, typically formed by submergence of a glaciated valley?",
                options: [
                    "Lagoon",
                    "Estuary",
                    "Fjord",
                    "Delta"
                ],
                correctAnswer: 2
            },
            {
                question: "Which of the following is a characteristic of a convergent plate boundary where continental and oceanic plates collide?",
                options: [
                    "Mid-ocean ridges",
                    "Rift valleys",
                    "Subduction zones",
                    "Transform faults"
                ],
                correctAnswer: 2
            },
            {
                question: "What is the concept of \"environmental determinism\" in geography?",
                options: [
                    "The belief that human cultures are solely determined by their environment.",
                    "The study of how humans modify their environment.",
                    "The idea that the environment sets certain constraints or opportunities for societal development.",
                    "The conservation of natural resources."
                ],
                correctAnswer: 2
            },
            {
                question: "Which of these biogeographic realms is characterized by a high diversity of marsupials?",
                options: [
                    "Nearctic",
                    "Palearctic",
                    "Australasian",
                    "Neotropical"
                ],
                correctAnswer: 2
            },
            {
                question: "What is the term for the seasonal movement of people for the purpose of agriculture?",
                options: [
                    "Urbanization",
                    "Suburbanization",
                    "Transhumance",
                    "Gentrification"
                ],
                correctAnswer: 2
            },
            {
                question: "Which of the following is a major feature of karst topography, formed by the dissolution of soluble rocks such as limestone?",
                options: [
                    "Moraines",
                    "Sand dunes",
                    "Sinkholes",
                    "Volcanic cones"
                ],
                correctAnswer: 2
            }
        ]
    };

    // DOM elements
    const elements = {
        quizForm: document.getElementById('quizForm'),
        questionsContainer: document.getElementById('questionsContainer'),
        resultsContainer: document.getElementById('resultsContainer'),
        scoreValue: document.getElementById('scoreValue'),
        totalQuestions: document.getElementById('totalQuestions'),
        totalQuestionsResult: document.getElementById('totalQuestionsResult'),
        percentage: document.getElementById('percentage'),
        feedback: document.getElementById('feedback'),
        answersContainer: document.getElementById('answersContainer'),
        retakeBtn: document.getElementById('retakeBtn'),
        homeBtn: document.getElementById('homeBtn'),
        currentDifficulty: document.getElementById('currentDifficulty'),
        filterBtns: document.querySelectorAll('.filter-btn'),
        modeToggle: document.getElementById('modeToggle'),
        navToggle: document.getElementById('navToggle'),
        navMenu: document.querySelector('.nav-menu'),
        body: document.body
    };

    // Quiz state
    let state = {
        userAnswers: {},
        currentFilter: 'all'
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

        const total = Object.values(questions).reduce((sum, arr) => sum + arr.length, 0);
        elements.totalQuestions.textContent = total;
        elements.totalQuestionsResult.textContent = total;

        if (total === 0) {
            elements.questionsContainer.innerHTML = '<p>No questions available.</p>';
            return;
        }

        renderQuestions();
    };

    // Render questions based on current filter
    const renderQuestions = () => {
        elements.questionsContainer.innerHTML = '';

        if (state.currentFilter === 'all') {
            for (const [difficulty, qs] of Object.entries(questions)) {
                if (qs.length === 0) continue;

                const group = document.createElement('div');
                group.className = `question-group ${difficulty}`;

                const header = document.createElement('div');
                header.className = 'group-header';

                const title = document.createElement('h3');
                title.className = 'group-title';
                title.textContent = `${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level`;

                const count = document.createElement('span');
                count.className = 'group-count';
                count.textContent = `${qs.length} Questions`;

                header.appendChild(title);
                header.appendChild(count);
                group.appendChild(header);

                qs.forEach((q, index) => {
                    group.appendChild(createQuestionElement(q, difficulty, index));
                });

                elements.questionsContainer.appendChild(group);
            }
        } else {
            const qs = questions[state.currentFilter] || [];
            elements.currentDifficulty.textContent = `${state.currentFilter.charAt(0).toUpperCase() + state.currentFilter.slice(1)} Level`;

            if (qs.length === 0) {
                elements.questionsContainer.innerHTML = `<p>No questions available for ${state.currentFilter} difficulty.</p>`;
                return;
            }

            qs.forEach((q, index) => {
                elements.questionsContainer.appendChild(createQuestionElement(q, state.currentFilter, index));
            });
        }
    };

    // Create a question element
    const createQuestionElement = (question, difficulty, index) => {
        const questionId = `${difficulty}-${index}`;
        const questionEl = document.createElement('div');
        questionEl.className = `question-item ${difficulty}`;

        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = `${index + 1}. ${question.question}`;

        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';

        question.options.forEach((option, optIndex) => {
            const optionId = `${questionId}-${optIndex}`;
            const optionEl = document.createElement('div');
            optionEl.className = 'option';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = questionId;
            input.id = optionId;
            input.value = optIndex;
            input.setAttribute('aria-label', `Option ${optIndex + 1}: ${option}`);

            if (state.userAnswers[questionId] === optIndex) {
                input.checked = true;
            }

            input.addEventListener('change', () => {
                state.userAnswers[questionId] = optIndex;
            });

            const label = document.createElement('label');
            label.htmlFor = optionId;
            label.textContent = option;

            optionEl.appendChild(input);
            optionEl.appendChild(label);
            optionsContainer.appendChild(optionEl);
        });

        questionEl.appendChild(questionText);
        questionEl.appendChild(optionsContainer);
        return questionEl;
    };

    // Calculate results
    const calculateResults = () => {
        let score = 0;
        const results = [];
        let totalAnswered = 0;

        for (const [difficulty, qs] of Object.entries(questions)) {
            qs.forEach((q, index) => {
                const questionId = `${difficulty}-${index}`;
                const userAnswer = state.userAnswers[questionId];
                const isCorrect = userAnswer !== undefined && parseInt(userAnswer) === q.correctAnswer;

                if (userAnswer !== undefined) {
                    totalAnswered++;
                    if (isCorrect) score++;
                }

                results.push({
                    question: q.question,
                    options: q.options,
                    userAnswer,
                    correctAnswer: q.correctAnswer,
                    isCorrect,
                    difficulty
                });
            });
        }

        return {
            score,
            total: Object.values(questions).reduce((sum, arr) => sum + arr.length, 0),
            results,
            totalAnswered
        };
    };

    // Show results
    const showResults = (e) => {
        e.preventDefault();

        const { score, total, results, totalAnswered } = calculateResults();

        elements.scoreValue.textContent = score;
        elements.totalQuestionsResult.textContent = total;

        const percentageValue = total === 0 ? 0 : Math.round((score / total) * 100);
        elements.percentage.textContent = `${percentageValue}%`;

        const circumference = 2 * Math.PI * 65;
        const progressRing = document.querySelector('.progress-ring-circle');
        progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
        progressRing.style.strokeDashoffset = circumference - (percentageValue / 100) * circumference;

        let feedbackText = '';
        let feedbackIcon = '';

        if (percentageValue >= 90) {
            feedbackText = "🏆 Outstanding! You're a geography expert!";
            feedbackIcon = "🥇";
        } else if (percentageValue >= 75) {
            feedbackText = "🌟 Excellent! You have impressive geography knowledge!";
            feedbackIcon = "👍";
        } else if (percentageValue >= 60) {
            feedbackText = "👍 Good job! You know your geography well!";
            feedbackIcon = "😊";
        } else if (percentageValue >= 40) {
            feedbackText = "👌 Not bad! Keep learning and you'll improve!";
            feedbackIcon = "📚";
        } else if (totalAnswered === 0) {
            feedbackText = "Please answer some questions to get feedback";
            feedbackIcon = "❓";
        } else {
            feedbackText = "💪 Keep practicing! Geography is a fascinating subject to master!";
            feedbackIcon = "🌍";
        }

        elements.feedback.innerHTML = `
            <div class="feedback-icon">${feedbackIcon}</div>
            <p>${feedbackText}</p>
        `;

        elements.answersContainer.innerHTML = '';
        results.forEach((result, index) => {
            const answerItem = document.createElement('div');
            answerItem.className = `answer-item ${result.isCorrect ? 'correct' : 'incorrect'}`;

            const questionEl = document.createElement('div');
            questionEl.className = 'answer-question';
            questionEl.textContent = `${index + 1}. ${result.question}`;

            const userAnswerEl = document.createElement('div');
            userAnswerEl.className = 'answer-user';
            userAnswerEl.textContent = result.userAnswer === undefined ? "Not answered" : result.options[result.userAnswer];

            answerItem.appendChild(questionEl);
            answerItem.appendChild(userAnswerEl);

            if (!result.isCorrect && result.userAnswer !== undefined) {
                const correctAnswerEl = document.createElement('div');
                correctAnswerEl.className = 'answer-correct';
                correctAnswerEl.textContent = result.options[result.correctAnswer];
                answerItem.appendChild(correctAnswerEl);
            }

            elements.answersContainer.appendChild(answerItem);
        });

        elements.quizForm.style.display = 'none';
        elements.resultsContainer.style.display = 'block';
        elements.resultsContainer.scrollIntoView({ behavior: 'smooth' });
    };

    // Retake quiz
    const retakeQuiz = () => {
        if (!confirm('Are you sure you want to retake the quiz? Your current progress will be lost.')) return;
        state.userAnswers = {};
        elements.quizForm.style.display = 'block';
        elements.resultsContainer.style.display = 'none';
        renderQuestions();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Event listeners
    elements.quizForm.addEventListener('submit', showResults);

    elements.filterBtns.forEach(btn => {
        btn.addEventListener('click', debounce(() => {
            elements.filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentFilter = btn.dataset.difficulty;
            renderQuestions();
        }, 300));
    });

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

    elements.navToggle.addEventListener('click', () => {
        elements.navMenu.classList.toggle('active');
        elements.navToggle.textContent = elements.navMenu.classList.contains('active') ? '✖' : '☰';
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && elements.quizForm.style.display !== 'none') {
            showResults(e);
        }
    });

    // Initialize quiz
    initQuiz();
});