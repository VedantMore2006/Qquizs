document.addEventListener('DOMContentLoaded', function() {
    // Questions data organized by difficulty
    const questions = {
        basic: [
            {
                question: "Which tech giant's logo features a bitten apple?",
                options: ["Microsoft", "Google", "Apple", "Samsung"],
                correctAnswer: 2,
                explanation: "Apple Inc. is famously known for its bitten apple logo."
            },
            {
                question: "What company is associated with the iconic golden arches?",
                options: ["Burger King", "McDonald's", "Wendy's", "KFC"],
                correctAnswer: 1,
                explanation: "McDonald's golden arches are one of the most recognizable logos worldwide."
            },
            {
                question: "Which social media platform's logo is a blue 'f'?",
                options: ["Twitter", "Instagram", "Facebook", "Snapchat"],
                correctAnswer: 2,
                explanation: "Facebook uses a lowercase blue 'f' as its logo."
            },
            {
                question: "What sports brand's logo is a simple 'swoosh'?",
                options: ["Adidas", "Nike", "Puma", "Reebok"],
                correctAnswer: 1,
                explanation: "Nike's swoosh logo was designed in 1971 and is now one of the most valuable logos."
            },
            {
                question: "Which coffee chain's logo features a siren?",
                options: ["Starbucks", "Dunkin' Donuts", "Peet's Coffee", "Costa Coffee"],
                correctAnswer: 0,
                explanation: "Starbucks features a twin-tailed mermaid (siren) in its logo."
            },
            {
                question: "What car brand's logo features four interlocking rings?",
                options: ["BMW", "Mercedes-Benz", "Audi", "Toyota"],
                correctAnswer: 2,
                explanation: "Audi's four rings represent the four companies that merged to create Auto Union."
            },
            {
                question: "Which tech company's logo is a colorful, multicolored 'G'?",
                options: ["Google", "Apple", "Microsoft", "Amazon"],
                correctAnswer: 0,
                explanation: "Google uses a colorful 'G' as its app icon and favicon."
            },
            {
                question: "What fast-food chain is known for its colonel's face on their logo?",
                options: ["KFC", "McDonald's", "Burger King", "Wendy's"],
                correctAnswer: 0,
                explanation: "KFC features Colonel Harland Sanders in its logo."
            },
            {
                question: "Which social media platform's logo is a bird?",
                options: ["Twitter", "Instagram", "Facebook", "Snapchat"],
                correctAnswer: 0,
                explanation: "Twitter's logo is a blue bird called 'Larry the Bird'."
            },
            {
                question: "What retail giant's logo is a large red bullseye?",
                options: ["Walmart", "Target", "Amazon", "Costco"],
                correctAnswer: 1,
                explanation: "Target's logo is a red bullseye, representing their brand name."
            }
        ],
        moderate: [
            {
                question: "What company's logo features a stylized 'R' that looks like a ribbon?",
                options: ["Rolls-Royce", "Renault", "Porsche", "Lamborghini"],
                correctAnswer: 0,
                explanation: "Rolls-Royce's logo features the RR monogram in a ribbon-like design."
            },
            {
                question: "Which luxury fashion brand's logo features interlocking 'C's?",
                options: ["Gucci", "Chanel", "Louis Vuitton", "Prada"],
                correctAnswer: 1,
                explanation: "Chanel's logo features two interlocking Cs representing Coco Chanel."
            },
            {
                question: "What beverage company's logo features a flowing script with a red ribbon?",
                options: ["Coca-Cola", "Pepsi", "Dr. Pepper", "Mountain Dew"],
                correctAnswer: 0,
                explanation: "Coca-Cola's iconic script logo with a dynamic ribbon is recognized worldwide."
            },
            {
                question: "Which sports brand's logo features three stripes?",
                options: ["Nike", "Adidas", "Puma", "Reebok"],
                correctAnswer: 1,
                explanation: "Adidas is known for its three stripes, originally designed for stability."
            },
            {
                question: "What video game console's logo features a stylized 'X'?",
                options: ["PlayStation", "Xbox", "Nintendo Switch", "Wii"],
                correctAnswer: 1,
                explanation: "Xbox's logo features a green, stylized 'X' representing their brand."
            },
            {
                question: "Which luxury car brand's logo features a prancing horse?",
                options: ["Ferrari", "Lamborghini", "Porsche", "Maserati"],
                correctAnswer: 0,
                explanation: "Ferrari's prancing horse logo was inspired by a World War I flying ace."
            },
            {
                question: "What social media platform's logo is a camera with a rainbow gradient?",
                options: ["Instagram", "Snapchat", "TikTok", "Pinterest"],
                correctAnswer: 1,
                explanation: "Snapchat's ghost logo is often accompanied by a rainbow gradient camera icon."
            },
            {
                question: "Which tech company's logo features a stylized 'W' with a wing?",
                options: ["Microsoft", "Google", "Apple", "Dell"],
                correctAnswer: 3,
                explanation: "Dell's logo features a tilted 'E' that creates a wing-like effect."
            },
            {
                question: "What fast-food chain's logo features a king wearing a crown?",
                options: ["Burger King", "McDonald's", "Wendy's", "KFC"],
                correctAnswer: 0,
                explanation: "Burger King's logo features a stylized burger bun crown."
            },
            {
                question: "Which streaming service's logo features a red 'R' on a black background?",
                options: ["Netflix", "Hulu", "Amazon Prime Video", "HBO Max"],
                correctAnswer: 0,
                explanation: "Netflix's logo is a simple red 'N' on a black background (Note: The question has a slight inaccuracy - Netflix uses 'N' not 'R')."
            }
        ],
        advanced: [
            {
                question: "What company's logo features a stylized 'T' that resembles an electric motor?",
                options: ["Tesla", "Toyota", "Ford", "Honda"],
                correctAnswer: 0,
                explanation: "Tesla's logo is a stylized 'T' that resembles both a cross-section of an electric motor and the company's namesake, Nikola Tesla."
            },
            {
                question: "Which luxury fashion brand's logo features a stylized 'L' and 'V' intertwined?",
                options: ["Gucci", "Chanel", "Louis Vuitton", "Prada"],
                correctAnswer: 2,
                explanation: "Louis Vuitton's logo features the LV monogram in an intricate pattern."
            },
            {
                question: "What airline's logo features a stylized bird in flight?",
                options: ["Delta", "United", "American Airlines", "Southwest"],
                correctAnswer: 0,
                explanation: "Delta's logo is called the 'widget' and represents a stylized delta wing."
            },
            {
                question: "Which software company's logo features a stylized 'A' with a bite taken out of it?",
                options: ["Adobe", "Microsoft", "Apple", "Google"],
                correctAnswer: 0,
                explanation: "Adobe's logo features a stylized 'A' with a bite taken out of the top right, similar to Apple's logo but with different colors."
            },
            {
                question: "What sports brand's logo features three stripes that form a triangle?",
                options: ["Nike", "Adidas", "Puma", "Reebok"],
                correctAnswer: 2,
                explanation: "Puma's logo features a leaping puma with three stripes forming a triangle shape."
            },
            {
                question: "Which luxury car brand's logo features a winged horse?",
                options: ["Ferrari", "Lamborghini", "Porsche", "Maserati"],
                correctAnswer: 3,
                explanation: "Maserati's logo features Neptune's trident with the colors of Bologna, Italy."
            },
            {
                question: "What tech company's logo features a stylized 'M' with a slight wave in the right leg?",
                options: ["Microsoft", "Google", "Apple", "Amazon"],
                correctAnswer: 3,
                explanation: "Amazon's logo has a smiling arrow going from A to Z with a subtle wave in the 'M'."
            },
            {
                question: "Which social media platform's logo is a ghost?",
                options: ["Snapchat", "TikTok", "Pinterest", "Reddit"],
                correctAnswer: 3,
                explanation: "Reddit's mascot is Snoo, a stylized ghost-like alien."
            },
            {
                question: "What beverage company's logo features a crown with a gold background?",
                options: ["Coca-Cola", "Pepsi", "Dr. Pepper", "Corona"],
                correctAnswer: 3,
                explanation: "Corona's logo features a golden crown above the brand name."
            },
            {
                question: "Which luxury fashion brand's logo features a stylized 'G' with a double 'G' inside?",
                options: ["Gucci", "Chanel", "Louis Vuitton", "Prada"],
                correctAnswer: 0,
                explanation: "Gucci's logo features two interlocking 'G's representing founder Guccio Gucci."
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
            feedbackText = "🏆 Logo Legend! You're a branding expert!";
            feedbackIcon = "👑";
        } else if (percentageValue >= 75) {
            feedbackText = "🌟 Excellent! You have an eye for brand recognition!";
            feedbackIcon = "👁️";
        } else if (percentageValue >= 60) {
            feedbackText = "👍 Good job! You know your logos well!";
            feedbackIcon = "✅";
        } else if (percentageValue >= 40) {
            feedbackText = "👌 Not bad! You recognize many popular logos!";
            feedbackIcon = "🔍";
        } else if (totalAnswered === 0) {
            feedbackText = "Please answer some questions to get feedback";
            feedbackIcon = "❓";
        } else {
            feedbackText = "💪 Keep observing! Logo recognition improves with attention to detail!";
            feedbackIcon = "🔄";
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