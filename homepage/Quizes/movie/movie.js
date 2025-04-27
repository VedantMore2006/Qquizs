document.addEventListener('DOMContentLoaded', () => {
    // Questions data organized by difficulty
    const questions = {
        basic: [
            {
                question: "Who directed the movie \"Titanic\"?",
                options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Quentin Tarantino"],
                correctAnswer: 1,
                explanation: "James Cameron directed both Titanic and Avatar, two of the highest-grossing films of all time."
            },
            {
                question: "Which animated movie features a lion cub named Simba?",
                options: ["Toy Story", "The Lion King", "Finding Nemo", "Shrek"],
                correctAnswer: 1,
                explanation: "The Lion King is one of Disney's most popular animated films, featuring Simba's journey to become king."
            },
            {
                question: "Who played the character of Harry Potter in the film series?",
                options: ["Rupert Grint", "Emma Watson", "Daniel Radcliffe", "Tom Felton"],
                correctAnswer: 2,
                explanation: "Daniel Radcliffe played the titular character in all eight Harry Potter films from 2001 to 2011."
            },
            {
                question: "What is the name of the spaceship in the \"Star Wars\" saga piloted by Han Solo?",
                options: ["X-wing", "Millennium Falcon", "TIE fighter", "Star Destroyer"],
                correctAnswer: 1,
                explanation: "The Millennium Falcon is known as the fastest hunk of junk in the galaxy."
            },
            {
                question: "Which Disney princess ate a poisoned apple?",
                options: ["Cinderella", "Sleeping Beauty", "Snow White", "Ariel"],
                correctAnswer: 0,
                explanation: "Snow White was tricked by the Evil Queen into eating a poisoned apple."
            },
            {
                question: "Who directed the movie \"E.T. the Extra-Terrestrial\"?",
                options: ["George Lucas", "Steven Spielberg", "Robert Zemeckis", "Francis Ford Coppola"],
                correctAnswer: 1,
                explanation: "Steven Spielberg directed this 1982 classic about a boy and his alien friend."
            },
            {
                question: "What is the name of the fictional African country in the movie \"Black Panther\"?",
                options: ["Zamunda", "Wakanda", "Genovia", "Sokovia"],
                correctAnswer: 1,
                explanation: "Wakanda is the technologically advanced African nation in the Marvel Cinematic Universe."
            },
            {
                question: "Which actor played the role of Iron Man in the Marvel Cinematic Universe?",
                options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
                correctAnswer: 2,
                explanation: "Robert Downey Jr. portrayed Tony Stark/Iron Man from 2008 to 2019."
            },
            {
                question: "What is the name of the yellow creatures who speak gibberish in the \"Despicable Me\" franchise?",
                options: ["Smurfs", "Trolls", "Minions", "Goblins"],
                correctAnswer: 2,
                explanation: "The Minions serve Gru and have become iconic characters in their own right."
            },
            {
                question: "Which classic movie features Dorothy Gale traveling to the Land of Oz?",
                options: ["Gone with the Wind", "Casablanca", "The Wizard of Oz", "Singin' in the Rain"],
                correctAnswer: 2,
                explanation: "The Wizard of Oz (1939) is famous for its transition from sepia tone to Technicolor."
            }
        ],
        moderate: [
            {
                question: "What is the name of the fictional detective who lives at 221B Baker Street in London?",
                options: ["Hercule Poirot", "Miss Marple", "Sherlock Holmes", "Philip Marlowe"],
                correctAnswer: 2,
                explanation: "Sherlock Holmes is one of literature's most famous detectives, created by Sir Arthur Conan Doyle."
            },
            {
                question: "Which film won the Academy Award for Best Picture in 1994?",
                options: ["Pulp Fiction", "Forrest Gump", "The Shawshank Redemption", "Schindler's List"],
                correctAnswer: 1,
                explanation: "Forrest Gump beat out strong competition including Pulp Fiction and The Shawshank Redemption."
            },
            {
                question: "Who directed the neo-noir crime film \"Pulp Fiction\"?",
                options: ["Martin Scorsese", "Quentin Tarantino", "Francis Ford Coppola", "Ridley Scott"],
                correctAnswer: 1,
                explanation: "Quentin Tarantino's Pulp Fiction revolutionized independent cinema in 1994."
            },
            {
                question: "What is the name of the island that houses dinosaurs in the \"Jurassic Park\" movies?",
                options: ["Isla Sorna", "Isla Nublar", "Isla Muerta", "Isla Perdida"],
                correctAnswer: 1,
                explanation: "Isla Nublar is the primary setting of the first Jurassic Park film."
            },
            {
                question: "Which actress won the Academy Award for Best Actress for her role in \"The Silence of the Lambs\"?",
                options: ["Meryl Streep", "Jodie Foster", "Susan Sarandon", "Emma Thompson"],
                correctAnswer: 1,
                explanation: "Jodie Foster played Clarice Starling in this 1991 psychological thriller."
            },
            {
                question: "What is the name of the futuristic motorcycle ridden by Kaneda in the animated film \"Akira\"?",
                options: ["Light Cycle", "Batcycle", "Kaneda's Bike", "Mach 5"],
                correctAnswer: 2,
                explanation: "Kaneda's iconic red motorcycle is one of the most recognizable vehicles in anime."
            },
            {
                question: "Which movie features the iconic line, \"Here's Johnny!\"?",
                options: ["Psycho", "The Shining", "Misery", "Carrie"],
                correctAnswer: 1,
                explanation: "Jack Nicholson delivers this famous line in Stanley Kubrick's The Shining."
            },
            {
                question: "Who composed the memorable score for the \"Pirates of the Caribbean\" film series?",
                options: ["Hans Zimmer", "John Williams", "Ennio Morricone", "Hans Zimmer and Klaus Badelt"],
                correctAnswer: 3,
                explanation: "Hans Zimmer and Klaus Badelt co-composed the iconic theme for the first film, with Zimmer leading subsequent scores."
            },
            {
                question: "What is the name of the gladiator portrayed by Russell Crowe in the film \"Gladiator\"?",
                options: ["Spartacus", "Maximus Decimus Meridius", "Commodus", "Marcus Aurelius"],
                correctAnswer: 1,
                explanation: "Maximus Decimus Meridius is the protagonist who seeks revenge in this 2000 epic."
            },
            {
                question: "Which science fiction film features a corporation called Omni Consumer Products (OCP)?",
                options: ["Blade Runner", "Total Recall", "RoboCop", "Starship Troopers"],
                correctAnswer: 2,
                explanation: "OCP is the megacorporation that creates RoboCop in the 1987 film."
            }
        ],
        advanced: [
            {
                question: "What is the cinematic technique popularized by director Sergei Eisenstein, involving the juxtaposition of shots to create a new meaning?",
                options: ["Long Take", "Montage", "Mise-en-scène", "Deep Focus"],
                correctAnswer: 1,
                explanation: "Eisenstein's theory of montage was revolutionary in early Soviet cinema."
            },
            {
                question: "Which film is considered a seminal work of Italian neorealism, directed by Vittorio De Sica and featuring non-professional actors?",
                options: ["La Dolce Vita", "8½", "Bicycle Thieves", "Nights of Cabiria"],
                correctAnswer: 2,
                explanation: "Bicycle Thieves (1948) is a landmark of neorealist cinema."
            },
            {
                question: "What is the name of the MacGuffin in Alfred Hitchcock's film \"Psycho\"?",
                options: ["The Bates Motel", "Marion Crane's money", "Norman Bates's mother", "The shower scene"],
                correctAnswer: 1,
                explanation: "The stolen $40,000 drives Marion Crane to the Bates Motel."
            },
            {
                question: "Which director is known for his use of long takes and meticulously choreographed scenes, as seen in films like \"Goodfellas\" and \"Casino\"?",
                options: ["Francis Ford Coppola", "Martin Scorsese", "Brian De Palma", "Sidney Lumet"],
                correctAnswer: 1,
                explanation: "Scorsese's long takes, like the Copacabana shot in Goodfellas, are legendary."
            },
            {
                question: "What is the name of the experimental film by Andy Warhol that consists of a static shot of the Empire State Building for eight hours?",
                options: ["Sleep", "Empire", "Blow Job", "Chelsea Girls"],
                correctAnswer: 1,
                explanation: "Empire (1964) is one of Warhol's most extreme structural films."
            },
            {
                question: "Which film noir classic, directed by Billy Wilder, features Fred MacMurray as an insurance salesman who plots a murder with a seductive housewife?",
                options: ["The Maltese Falcon", "Double Indemnity", "Laura", "The Big Sleep"],
                correctAnswer: 1,
                explanation: "Double Indemnity (1944) is considered one of the definitive film noirs."
            },
            {
                question: "What is the name of the nonlinear narrative structure famously employed in Quentin Tarantino's \"Reservoir Dogs\"?",
                options: ["Circular Narrative", "In Media Res", "Achronological Storytelling", "Stream of Consciousness"],
                correctAnswer: 2,
                explanation: "Tarantino's non-linear storytelling became his signature style."
            },
            {
                question: "Which influential French New Wave film, directed by Jean-Luc Godard, stars Jean-Paul Belmondo and Jean Seberg?",
                options: ["The 400 Blows", "Breathless (À bout de souffle)", "Jules and Jim", "Hiroshima Mon Amour"],
                correctAnswer: 1,
                explanation: "Breathless (1960) revolutionized editing techniques in cinema."
            },
            {
                question: "What is the Kuleshov effect in filmmaking?",
                options: [
                    "The phenomenon where audiences derive different meanings from the same shot depending on the shots that precede and follow it.",
                    "A rapid sequence of short shots used to create a sense of excitement or disorientation.",
                    "A shot that captures a subject from a great distance, emphasizing the environment.",
                    "The use of natural sound recorded on location to enhance realism."
                ],
                correctAnswer: 0,
                explanation: "The Kuleshov effect demonstrates how editing creates meaning beyond individual shots."
            },
            {
                question: "Which allegorical science fiction film, directed by Andrei Tarkovsky, is set on a mysterious planet and explores themes of human desire and the subconscious?",
                options: ["Solaris", "Stalker", "Mirror", "Andrei Rublev"],
                correctAnswer: 0,
                explanation: "Solaris (1972) is Tarkovsky's philosophical response to 2001: A Space Odyssey."
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
                    difficulty,
                    explanation: q.explanation
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
            feedbackText = "🏆 Cinema Master! You're a movie legend!";
            feedbackIcon = "🎥";
        } else if (percentageValue >= 75) {
            feedbackText = "🌟 Excellent! You're a true film buff!";
            feedbackIcon = "🎬";
        } else if (percentageValue >= 60) {
            feedbackText = "👍 Good job! You know your movies well!";
            feedbackIcon = "✅";
        } else if (percentageValue >= 40) {
            feedbackText = "👌 Not bad! You recognize many cinematic classics!";
            feedbackIcon = "🎞️";
        } else if (totalAnswered === 0) {
            feedbackText = "Please answer some questions to get feedback";
            feedbackIcon = "❓";
        } else {
            feedbackText = "💪 Keep watching! Movie knowledge grows with every film!";
            feedbackIcon = "🔄";
        }

        elements.feedback.innerHTML = `
            <div class="feedback-icon">${feedbackIcon}</div>
            <p>${feedbackText}</p>
            ${totalAnswered < total ? `<p class="unanswered">You answered ${totalAnswered} out of ${total} questions.</p>` : ''}
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

            if (!result.isCorrect || result.userAnswer === undefined) {
                const correctAnswerEl = document.createElement('div');
                correctAnswerEl.className = 'answer-correct';
                correctAnswerEl.textContent = result.options[result.correctAnswer];

                if (result.explanation) {
                    const_comment_lines_ = document.createElement('div');
                    _comment_lines_.className = 'explanation';
                    _comment_lines_.textContent = result.explanation;
                    correctAnswerEl.appendChild(_comment_lines_);
                }

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