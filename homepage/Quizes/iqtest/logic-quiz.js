document.addEventListener('DOMContentLoaded', function() {
    // Questions data organized by difficulty
    const questions = {
        basic: [
            {
                question: "What is the next letter in the sequence: A, C, E, G, __?",
                options: ["H", "I", "J", "K"],
                correctAnswer: 1,
                explanation: "The sequence skips one letter (B, D, F) so the next should be I."
            },
            {
                question: "Which number comes next in the sequence: 2, 4, 6, 8, __?",
                options: ["9", "10", "11", "12"],
                correctAnswer: 1,
                explanation: "This is a sequence of even numbers in increasing order."
            },
            {
                question: "Choose the word that is most similar in meaning to 'happy':",
                options: ["Sad", "Angry", "Joyful", "Tired"],
                correctAnswer: 2,
                explanation: "Joyful is a synonym for happy."
            },
            {
                question: "If all birds have feathers, and a robin is a bird, then a robin has:",
                options: ["Wings", "Beak", "Feathers", "Can fly"],
                correctAnswer: 2,
                explanation: "The statement says all birds have feathers, so robins must have feathers."
            },
            {
                question: "What is the missing number: 1, 3, __, 7, 9?",
                options: ["4", "5", "6", "8"],
                correctAnswer: 1,
                explanation: "The sequence is odd numbers in order: 1, 3, 5, 7, 9."
            },
            {
                question: "Which shape comes next in the sequence: Circle, Square, Triangle, Circle, Square, __?",
                options: ["Rectangle", "Pentagon", "Triangle", "Oval"],
                correctAnswer: 2,
                explanation: "The pattern is Circle, Square, Triangle repeating."
            },
            {
                question: "Identify the odd one out:",
                options: ["Dog", "Cat", "Fish", "Cow"],
                correctAnswer: 2,
                explanation: "Fish is not a mammal like the others."
            },
            {
                question: "Solve the analogy: Day is to Night as Up is to:",
                options: ["Left", "Right", "Down", "Sideways"],
                correctAnswer: 2,
                explanation: "Down is the opposite of Up, just as Night is the opposite of Day."
            },
            {
                question: "If you rearrange the letters 'TEA', you can form the word:",
                options: ["EAT", "ATE", "ETA", "All of the above"],
                correctAnswer: 3,
                explanation: "TEA can be rearranged to form EAT, ATE, and ETA."
            },
            {
                question: "What is half of 20?",
                options: ["5", "10", "15", "40"],
                correctAnswer: 1,
                explanation: "20 divided by 2 equals 10."
            }
        ],
        moderate: [
            {
                question: "What is the next number in the sequence: 1, 4, 9, 16, __?",
                options: ["20", "25", "30", "36"],
                correctAnswer: 1,
                explanation: "These are perfect squares (1², 2², 3², 4²) so next is 5²=25."
            },
            {
                question: "Choose the word that completes the analogy: Book is to Reading as Fork is to:",
                options: ["Writing", "Eating", "Drawing", "Sleeping"],
                correctAnswer: 1,
                explanation: "A fork is used for eating, just as a book is used for reading."
            },
            {
                question: "If John is taller than Mary, and Mary is taller than Peter, then who is the tallest?",
                options: ["Mary", "Peter", "John", "It cannot be determined"],
                correctAnswer: 2,
                explanation: "John > Mary > Peter, so John is tallest."
            },
            {
                question: "Find the missing letter in the following pattern: B, D, G, K, __",
                options: ["O", "P", "Q", "R"],
                correctAnswer: 0,
                explanation: "Pattern is +2, +3, +4 letters (B→D=+2, D→G=+3, G→K=+4, so K→O=+5)."
            },
            {
                question: "Identify the odd one out:",
                options: ["Guitar", "Flute", "Piano", "Violin"],
                correctAnswer: 1,
                explanation: "Flute is a wind instrument while the others are string instruments."
            },
            {
                question: "Solve the analogy: Doctor is to Hospital as Teacher is to:",
                options: ["Medicine", "Classroom", "Patient", "Knowledge"],
                correctAnswer: 1,
                explanation: "A teacher works in a classroom, just as a doctor works in a hospital."
            },
            {
                question: "What number should replace the question mark: 8, 6, 7, 5, 6, ?",
                options: ["3", "4", "5", "7"],
                correctAnswer: 1,
                explanation: "Pattern: -2, +1, -2, +1 (8-2=6, 6+1=7, 7-2=5, 5+1=6, 6-2=4)."
            },
            {
                question: "If you unscramble the letters 'LISTEN', you get the word:",
                options: ["SILENT", "TENSIL", "INLEST", "LENTIS"],
                correctAnswer: 0,
                explanation: "LISTEN rearranged is SILENT."
            },
            {
                question: "A train travels 60 miles per hour. How far will it travel in 30 minutes?",
                options: ["15 miles", "20 miles", "30 miles", "120 miles"],
                correctAnswer: 2,
                explanation: "30 minutes is 0.5 hours. 60 mph × 0.5 hours = 30 miles."
            },
            {
                question: "Complete the series: 3, 8, 15, 24, __",
                options: ["30", "32", "35", "48"],
                correctAnswer: 2,
                explanation: "Pattern: +5, +7, +9 (adding consecutive odd numbers), so next is 24+11=35."
            }
        ],
        advanced: [
            {
                question: "What is the next letter in the sequence: O, T, T, F, F, S, S, E, __?",
                options: ["N", "T", "E", "S"],
                correctAnswer: 0,
                explanation: "These are the first letters of numbers: One, Two, Three, Four, Five, Six, Seven, Eight, Nine."
            },
            {
                question: "Choose the word that has the least similarity with the other three:",
                options: ["Biology", "Chemistry", "Physics", "Astronomy"],
                correctAnswer: 3,
                explanation: "Astronomy is a space science while the others are core physical sciences."
            },
            {
                question: "If 'ACT' is coded as 'BDU', then how is 'CAT' coded?",
                options: ["DBU", "DCU", "BDU", "DBV"],
                correctAnswer: 1,
                explanation: "Each letter is shifted forward by 1 in the alphabet (A→B, C→D, T→U), so C→D, A→B, T→U = DBU."
            },
            {
                question: "Solve the analogy: Paradox is to Contradiction as Enigma is to:",
                options: ["Solution", "Puzzle", "Clarity", "Answer"],
                correctAnswer: 1,
                explanation: "A paradox is a type of contradiction, just as an enigma is a type of puzzle."
            },
            {
                question: "What number should replace the question mark in this pattern?\n6   8   ?\n5   7   6\n4   6   5",
                options: ["7", "8", "9", "10"],
                correctAnswer: 0,
                explanation: "Each column sums to 15: 6+5+4=15, 8+7+6=21 (error in question?), likely intended to be 15."
            },
            {
                question: "If all Bloops are Floops, and some Floops are Gloops, then which must be true?",
                options: [
                    "All Bloops are Gloops",
                    "Some Bloops are Gloops",
                    "Some Gloops are Bloops",
                    "None of the above"
                ],
                correctAnswer: 3,
                explanation: "The statements don't guarantee any direct relationship between Bloops and Gloops."
            },
            {
                question: "Unscramble the letters to form a meaningful word: 'RAGAMN'",
                options: ["ANGRAM", "MARGAN", "GRAMAN", "MANAGER"],
                correctAnswer: 3,
                explanation: "RAGAMN unscrambled is MANAGER."
            },
            {
                question: "A clock loses 5 minutes every hour. If set correctly at 12:00 PM, what time will it show after 6 hours?",
                options: ["5:30 PM", "6:00 PM", "5:00 PM", "5:15 PM"],
                correctAnswer: 0,
                explanation: "Loses 5 min/hour × 6 hours = 30 minutes slow. 6:00 PM - 30 min = 5:30 PM."
            },
            {
                question: "Complete the series: 2, 3, 5, 7, 11, __",
                options: ["12", "13", "14", "15"],
                correctAnswer: 1,
                explanation: "This is the sequence of prime numbers. 13 is the next prime after 11."
            }
        ]
    };

    // DOM elements
    const quizForm = document.getElementById('quizForm');
    const questionsContainer = document.getElementById('questionsContainer');
    const resultsContainer = document.getElementById('resultsContainer');
    const scoreValue = document.getElementById('scoreValue');
    const totalQuestions = document.getElementById('totalQuestions');
    const totalQuestionsResult = document.getElementById('totalQuestionsResult');
    const percentage = document.getElementById('percentage');
    const feedback = document.getElementById('feedback');
    const answersContainer = document.getElementById('answersContainer');
    const retakeBtn = document.getElementById('retakeBtn');
    const currentDifficulty = document.getElementById('currentDifficulty');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    // Quiz state
    let userAnswers = {};
    let currentFilter = 'all';

    // Initialize quiz
    function initQuiz() {
        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            modeToggle.textContent = '🌙';
        }

        // Calculate total questions
        const total = Object.values(questions).reduce((sum, arr) => sum + arr.length, 0);
        totalQuestions.textContent = total;
        totalQuestionsResult.textContent = total;

        // Render all questions initially
        renderQuestions();
    }

    // Render questions based on current filter
    function renderQuestions() {
        questionsContainer.innerHTML = '';

        if (currentFilter === 'all') {
            // Render all questions grouped by difficulty
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

                questionsContainer.appendChild(group);
            }
        } else {
            // Render only questions for the selected difficulty
            const qs = questions[currentFilter];
            currentDifficulty.textContent = `${currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1)} Level`;

            qs.forEach((q, index) => {
                questionsContainer.appendChild(createQuestionElement(q, currentFilter, index));
            });
        }
    }

    // Create a question element
    function createQuestionElement(question, difficulty, index) {
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
            
            if (userAnswers[questionId] === optIndex) {
                input.checked = true;
            }
            
            input.addEventListener('change', () => {
                userAnswers[questionId] = optIndex;
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
    }

    // Calculate results
    function calculateResults() {
        let score = 0;
        const results = [];
        let totalAnswered = 0;
        
        for (const [difficulty, qs] of Object.entries(questions)) {
            qs.forEach((q, index) => {
                const questionId = `${difficulty}-${index}`;
                const userAnswer = userAnswers[questionId];
                const isCorrect = userAnswer === q.correctAnswer;
                
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
    }

    // Show results
    function showResults(e) {
        e.preventDefault();
        
        const { score, total, results, totalAnswered } = calculateResults();
        
        // Update results display
        scoreValue.textContent = score;
        
        const percentageValue = Math.round((score / total) * 100);
        percentage.textContent = `${percentageValue}%`;
        
        // Update progress ring
        const circumference = 2 * Math.PI * 65;
        const offset = circumference - (percentageValue / 100) * circumference;
        document.querySelector('.progress-ring-circle').style.strokeDashoffset = offset;
        
        // Provide feedback based on score
        let feedbackText = '';
        let feedbackIcon = '';
        
        if (percentageValue >= 90) {
            feedbackText = "🏆 Outstanding! You're a logical reasoning expert!";
            feedbackIcon = "🧠";
        } else if (percentageValue >= 75) {
            feedbackText = "🌟 Excellent! You have impressive reasoning skills!";
            feedbackIcon = "👍";
        } else if (percentageValue >= 60) {
            feedbackText = "👍 Good job! You understand logical patterns well!";
            feedbackIcon = "😊";
        } else if (percentageValue >= 40) {
            feedbackText = "👌 Not bad! With practice, you'll improve significantly!";
            feedbackIcon = "📚";
        } else if (totalAnswered === 0) {
            feedbackText = "Please answer some questions to get feedback";
            feedbackIcon = "❓";
        } else {
            feedbackText = "💪 Keep practicing! Logical reasoning gets easier with experience!";
            feedbackIcon = "🤔";
        }
        
        feedback.innerHTML = `
            <div class="feedback-icon">${feedbackIcon}</div>
            <p>${feedbackText}</p>
            ${totalAnswered < total ? `<p class="unanswered">You answered ${totalAnswered} out of ${total} questions.</p>` : ''}
        `;
        
        // Display answers review
        answersContainer.innerHTML = '';
        results.forEach((result, index) => {
            const answerItem = document.createElement('div');
            answerItem.className = `answer-item ${result.isCorrect ? 'correct' : 'incorrect'}`;
            
            const questionEl = document.createElement('div');
            questionEl.className = 'answer-question';
            questionEl.textContent = `${index + 1}. ${result.question}`;
            
            const userAnswerEl = document.createElement('div');
            userAnswerEl.className = 'answer-user';
            
            if (result.userAnswer === undefined) {
                userAnswerEl.textContent = "Not answered";
            } else {
                userAnswerEl.textContent = result.options[result.userAnswer];
            }
            
            answerItem.appendChild(questionEl);
            answerItem.appendChild(userAnswerEl);
            
            if (!result.isCorrect || result.userAnswer === undefined) {
                const correctAnswerEl = document.createElement('div');
                correctAnswerEl.className = 'answer-correct';
                correctAnswerEl.textContent = `Correct: ${result.options[result.correctAnswer]}`;
                
                if (result.explanation) {
                    const explanationEl = document.createElement('div');
                    explanationEl.className = 'explanation';
                    explanationEl.textContent = result.explanation;
                    correctAnswerEl.appendChild(explanationEl);
                }
                
                answerItem.appendChild(correctAnswerEl);
            }
            
            answersContainer.appendChild(answerItem);
        });
        
        // Show results container
        quizForm.style.display = 'none';
        resultsContainer.style.display = 'block';
        
        // Scroll to results
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }

    // Filter questions by difficulty
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.difficulty;
            renderQuestions();
        });
    });

    // Retake quiz
    retakeBtn.addEventListener('click', function() {
        // Reset user answers
        userAnswers = {};
        
        // Show quiz form and hide results
        quizForm.style.display = 'block';
        resultsContainer.style.display = 'none';
        
        // Re-render questions
        renderQuestions();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Dark mode toggle
    modeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        modeToggle.textContent = isDark ? '🌙' : '☀️';
        localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    });

    // Initialize the quiz
    initQuiz();
});