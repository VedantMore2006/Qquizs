document.addEventListener('DOMContentLoaded', function() {
  // Difficulty color mapping
  const difficultyColors = {
      basic: '#4CAF50',
      moderate: '#FFC107',
      advanced: '#F44336',
      all: '#E63946'
  };

  // Questions data organized by difficulty
  const questions = {
      basic: [
          {
              question: "What is the name of the tall statue in New York City that was a gift from France?",
              options: ["Mount Rushmore", "Statue of Liberty", "Golden Gate Bridge", "Empire State Building"],
              correctAnswer: 1,
              explanation: "The Statue of Liberty, a gift from France in 1886, symbolizes freedom and democracy."
          },
          {
              question: "In which city is the Eiffel Tower located?",
              options: ["London", "Rome", "Paris", "Berlin"],
              correctAnswer: 2,
              explanation: "The Eiffel Tower is an iconic landmark in Paris, France, built for the 1889 World's Fair."
          },
          {
              question: "What is the name of the iconic clock tower in London, often mistakenly called 'Big Ben'?",
              options: ["Westminster Tower", "Elizabeth Tower", "Clock Tower of London", "Victoria Tower"],
              correctAnswer: 1,
              explanation: "Elizabeth Tower houses Big Ben, the nickname for the Great Bell inside."
          },
          {
              question: "Which famous landmark is located in Agra, India, and was built by a Mughal emperor as a tomb for his wife?",
              options: ["Red Fort", "Hawa Mahal", "Taj Mahal", "Qutub Minar"],
              correctAnswer: 2,
              explanation: "The Taj Mahal was commissioned by Emperor Shah Jahan for his wife Mumtaz Mahal."
          },
          {
              question: "What is the name of the ancient stone circle located in Wiltshire, England?",
              options: ["Colosseum", "Stonehenge", "Parthenon", "Leaning Tower of Pisa"],
              correctAnswer: 1,
              explanation: "Stonehenge is a prehistoric monument known for its mysterious stone circle."
          },
          {
              question: "In which country is the Great Wall, one of the most extensive building projects ever undertaken?",
              options: ["Japan", "China", "Korea", "Vietnam"],
              correctAnswer: 1,
              explanation: "The Great Wall of China spans over 21,000 kilometers, built to protect against invasions."
          },
          {
              question: "What is the name of the large white sign with black letters that overlooks Hollywood, Los Angeles?",
              options: ["Walk of Fame Sign", "Beverly Hills Sign", "Hollywood Sign", "Griffith Observatory Sign"],
              correctAnswer: 2,
              explanation: "The Hollywood Sign is an iconic symbol of the American film industry."
          },
          {
              question: "Which famous landmark is a large amphitheater in Rome, Italy?",
              options: ["Acropolis", "Pantheon", "Colosseum", "Roman Forum"],
              correctAnswer: 2,
              explanation: "The Colosseum hosted gladiatorial contests and public spectacles in ancient Rome."
          },
          {
              question: "What is the name of the bridge that connects San Francisco to Marin County, California, and is known for its orange color?",
              options: ["Brooklyn Bridge", "Golden Gate Bridge", "Tower Bridge", "San Francisco-Oakland Bay Bridge"],
              correctAnswer: 1,
              explanation: "The Golden Gate Bridge is famous for its distinctive red-orange color and Art Deco design."
          },
          {
              question: "Which iconic structure was built for the 1889 World's Fair in Paris?",
              options: ["Arc de Triomphe", "Louvre Museum", "Eiffel Tower", "Notre-Dame Cathedral"],
              correctAnswer: 2,
              explanation: "The Eiffel Tower was constructed as the entrance arch for the 1889 World's Fair."
          }
      ],
      moderate: [
          {
              question: "What is the name of the ancient Mayan city located in the Yucatán Peninsula of Mexico, known for its pyramid El Castillo?",
              options: ["Teotihuacan", "Palenque", "Chichen Itza", "Monte Alban"],
              correctAnswer: 2,
              explanation: "Chichen Itza’s El Castillo is a step-pyramid reflecting Mayan astronomical knowledge."
          },
          {
              question: "In which city is the Brandenburg Gate, a significant historical monument, located?",
              options: ["Vienna", "Munich", "Berlin", "Prague"],
              correctAnswer: 2,
              explanation: "The Brandenburg Gate in Berlin symbolizes German reunification."
          },
          {
              question: "What is the name of the royal palace in London that is the official residence of the British monarch?",
              options: ["Buckingham Palace", "Kensington Palace", "Windsor Castle", "Holyrood Palace"],
              correctAnswer: 0,
              explanation: "Buckingham Palace has been the monarch’s official residence since Queen Victoria."
          },
          {
              question: "Which famous landmark in Rio de Janeiro, Brazil, is a colossal Art Deco statue of Jesus Christ?",
              options: ["Christ the Redeemer", "Sugarloaf Mountain", "Ipanema Beach Statue", "National Museum of Brazil Statue"],
              correctAnswer: 0,
              explanation: "Christ the Redeemer overlooks Rio from Corcovado Mountain, completed in 1931."
          },
          {
              question: "What is the name of the ancient citadel located on a rocky outcrop above the city of Athens, containing the Parthenon?",
              options: ["Agora", "Areopagus", "Acropolis", "Pnyx"],
              correctAnswer: 2,
              explanation: "The Acropolis is a symbol of ancient Greek civilization, housing the Parthenon."
          },
          {
              question: "In which country is the Sydney Opera House, known for its distinctive sail-like design, located?",
              options: ["New Zealand", "South Africa", "Australia", "Canada"],
              correctAnswer: 2,
              explanation: "The Sydney Opera House is a UNESCO World Heritage Site known for its unique architecture."
          },
          {
              question: "What is the name of the large public square in Beijing, China, where Tiananmen Gate and the Forbidden City are located?",
              options: ["People's Square", "Revolution Square", "Tiananmen Square", "National Square"],
              correctAnswer: 2,
              explanation: "Tiananmen Square is a historic site associated with significant Chinese events."
          },
          {
              question: "Which famous landmark is a leaning bell tower located in Pisa, Italy?",
              options: ["St. Peter's Basilica", "Leaning Tower of Pisa", "Duomo of Florence", "Campanile di Giotto"],
              correctAnswer: 1,
              explanation: "The Leaning Tower of Pisa tilts due to unstable soil, completed in the 14th century."
          },
          {
              question: "What is the name of the ancient city in Jordan, famous for its structures carved directly into sandstone cliffs?",
              options: ["Petra", "Palmyra", "Baalbek", "Persepolis"],
              correctAnswer: 0,
              explanation: " constructing an Islamic mosque."
          },
          {
              question: "In which city is the Hagia Sophia, a historically significant religious site that has served as a church, mosque, and now a museum?",
              options: ["Cairo", "Istanbul", "Jerusalem", "Athens"],
              correctAnswer: 1,
              explanation: "The Hagia Sophia in Istanbul reflects Byzantine, Ottoman, and modern Turkish history."
          }
      ],
      advanced: [
          {
              question: "What is the original name of the structure now known as the 'Great Mosque of Córdoba' in Spain, reflecting its initial religious purpose?",
              options: ["Mezquita", "Alcázar of the Christian Monarchs", "Giralda", "Alhambra"],
              correctAnswer: 0,
              explanation: "The Mezquita was built as a mosque in the 8th century before being converted to a cathedral."
          },
          {
              question: "Which significant landmark in Cambodia is the largest religious structure in the world, originally built as a Hindu temple and later transformed into a Buddhist temple?",
              options: ["Angkor Thom", "Bayon", "Ta Prohm", "Angkor Wat"],
              correctAnswer: 3,
              explanation: "Angkor Wat, built in the 12th century, is a masterpiece of Khmer architecture."
          },
          {
              question: "What is the name of the artificial archipelago of small islands in Dubai, United Arab Emirates, constructed in the shape of a palm tree?",
              options: ["The World Islands", "Palm Jumeirah", "The Pearl-Qatar", "Bluewaters Island"],
              correctAnswer: 1,
              explanation: "Palm Jumeirah is a man-made island known for its luxury hotels and residences."
          },
          {
              question: "The Moai are monolithic human figures carved by the Rapa Nui people on which remote Pacific island?",
              options: ["Fiji", "Tahiti", "Samoa", "Easter Island"],
              correctAnswer: 3,
              explanation: "The Moai statues on Easter Island represent ancestral chiefs, carved between 1250-1500 CE."
          },
          {
              question: "What is the name of the ancient Inca citadel situated high in the Andes Mountains in Peru, often referred to as the 'Lost City of the Incas'?",
              options: ["Cusco", "Ollantaytambo", "Sacsayhuamán", "Machu Picchu"],
              correctAnswer: 3,
              explanation: "Machu Picchu, built in the 15th century, was rediscovered in 1911."
          },
          {
              question: "In which modern-day country were the ancient Mesopotamian ziggurats, stepped pyramids with temples at the summit, primarily built?",
              options: ["Egypt", "Iran", "Syria", "Iraq"],
              correctAnswer: 3,
              explanation: "Ziggurats were built in Mesopotamia, primarily in modern-day Iraq, as religious structures."
          },
          {
              question: "What is the name of the large Buddhist stupa located in Sanchi, India, commissioned by Emperor Ashoka in the 3rd century BCE?",
              options: ["Borobudur", "Boudhanath", "Swayambhunath", "Great Stupa of Sanchi"],
              correctAnswer: 3,
              explanation: "The Great Stupa of Sanchi is a key Buddhist monument from the Mauryan period."
          },
          {
              question: "Which iconic landmark in Moscow, Russia, is a colorful church with onion-shaped domes, officially known as the Cathedral of Vasily the Blessed?",
              options: ["Kremlin Palace", "Bolshoi Theatre", "Saint Basil's Cathedral", "State Historical Museum"],
              correctAnswer: 2,
              explanation: "Saint Basil’s Cathedral was built to commemorate Ivan the Terrible’s victories."
          },
          {
              question: "What is the name of the massive rock formation in Central Australia that is sacred to the Aboriginal people and is also known as Ayers Rock?",
              options: ["Kata Tjuta", "Kings Canyon", "Kakadu Rock", "Uluru"],
              correctAnswer: 3,
              explanation: "Uluru is a sacred site for the Anangu people, known for its striking red color."
          },
          {
              question: "In which city is the Alhambra, a palace and fortress complex originally constructed in 889 CE and largely rebuilt in the 13th century by the Nasrid emir Mohammed ben Al-Ahmar?",
              options: ["Seville", "Madrid", "Córdoba", "Granada"],
              correctAnswer: 3,
              explanation: "The Alhambra in Granada is renowned for its Islamic architecture and intricate tilework."
          }
      ]
  };

  // DOM elements
  const quizForm = document.getElementById('quizForm');
  const questionsContainer = document.getElementById('questionsContainer');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const resultsContainer = document.getElementById('resultsContainer');
  const scoreValue = document.getElementById('scoreValue');
  const totalQuestions = document.getElementById('totalQuestions');
  const totalQuestionsResult = document.getElementById('totalQuestionsResult');
  const percentage = document.getElementById('percentage');
  const feedback = document.getElementById('feedback');
  const answersContainer = document.getElementById('answersContainer');
  const retakeBtn = document.getElementById('retakeBtn');
  const homeBtn = document.querySelector('.home-btn');
  const currentDifficulty = document.getElementById('currentDifficulty');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modeToggle = document.getElementById('modeToggle');
  const modeIcon = modeToggle.querySelector('.mode-icon');
  const body = document.body;

  // Quiz state
  let userAnswers = {};
  let currentFilter = 'all';

  // Initialize quiz
  function initQuiz() {
      // Restore scroll to top
      window.scrollTo(0, 0);

      // Check for saved dark mode preference
      if (localStorage.getItem('darkMode') === 'enabled') {
          body.classList.add('dark-mode');
          modeIcon.textContent = '🌙';
      }

      // Calculate total questions
      const total = Object.values(questions).reduce((sum, arr) => sum + arr.length, 0);
      totalQuestions.textContent = total;
      totalQuestionsResult.textContent = total;

      // Render all questions initially
      renderQuestions();
  }

  // Render questions based on current filter
  async function renderQuestions() {
      loadingSpinner.style.display = 'block';
      questionsContainer.innerHTML = '';
      
      await new Promise(resolve => setTimeout(resolve, 300)); // Simulate loading

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

          if (qs.length === 0) {
              const noQuestions = document.createElement('div');
              noQuestions.className = 'no-questions';
              noQuestions.textContent = `No questions available for ${currentFilter} level.`;
              questionsContainer.appendChild(noQuestions);
          } else {
              qs.forEach((q, index) => {
                  questionsContainer.appendChild(createQuestionElement(q, currentFilter, index));
              });
          }
      }

      loadingSpinner.style.display = 'none';
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
          input.setAttribute('aria-label', `Option ${optIndex + 1}: ${option}`);
          
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
      const incorrectDifficulties = new Set();
      
      for (const [difficulty, qs] of Object.entries(questions)) {
          qs.forEach((q, index) => {
              const questionId = `${difficulty}-${index}`;
              const userAnswer = userAnswers[questionId];
              const isCorrect = userAnswer === q.correctAnswer;
              
              if (userAnswer !== undefined) {
                  totalAnswered++;
                  if (isCorrect) score++;
                  else incorrectDifficulties.add(difficulty);
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
          totalAnswered,
          incorrectDifficulties
      };
  }

  // Show results
  function showResults(e) {
      e.preventDefault();
      
      const { score, total, results, totalAnswered, incorrectDifficulties } = calculateResults();
      
      // Update results display
      scoreValue.textContent = score;
      
      const percentageValue = Math.round((score / total) * 100);
      percentage.textContent = `${percentageValue}%`;
      
      // Update progress ring
      const circumference = 2 * Math.PI * 65;
      const offset = circumference - (percentageValue / 100) * circumference;
      const progressCircle = document.querySelector('.progress-ring-circle');
      progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
      progressCircle.style.strokeDashoffset = offset;
      progressCircle.style.stroke = percentageValue >= 75 ? '#4CAF50' : percentageValue >= 40 ? '#FFC107' : '#F44336';
      
      // Provide feedback based on score
      let feedbackText = '';
      let feedbackIcon = '';
      let tips = '';

      if (percentageValue >= 90) {
          feedbackText = "🏆 Outstanding! You're a world landmarks expert!";
          feedbackIcon = "🗺️";
          tips = "Explore advanced questions to deepen your knowledge of global heritage!";
      } else if (percentageValue >= 75) {
          feedbackText = "🌟 Excellent! You know your landmarks well!";
          feedbackIcon = "👍";
          tips = "Try advanced questions to learn about lesser-known sites.";
      } else if (percentageValue >= 60) {
          feedbackText = "👍 Good job! You have a solid grasp of famous landmarks!";
          feedbackIcon = "😊";
          tips = "Review moderate and advanced questions to boost your score.";
      } else if (percentageValue >= 40) {
          feedbackText = "👌 Not bad! Keep exploring world landmarks!";
          feedbackIcon = "📚";
          tips = "Focus on basic and moderate questions to build confidence.";
      } else if (totalAnswered === 0) {
          feedbackText = "Please answer  questions to get feedback";
          feedbackIcon = "❓";
          tips = "Start with basic questions to learn about iconic landmarks.";
      } else {
          feedbackText = "💪 Keep practicing! You'll master landmarks with more exploration!";
          feedbackIcon = "🤔";
          tips = "Work on basic questions and review explanations to understand key facts.";
      }

      if (incorrectDifficulties.size > 0) {
          tips += `<br>Focus on improving in: ${Array.from(incorrectDifficulties).map(d => d.charAt(0).toUpperCase() + d.slice(1)).join(', ')}.`;
      }
      
      feedback.innerHTML = `
          <div class="feedback-icon">${feedbackIcon}</div>
          <p>${feedbackText}</p>
          <p class="tips">${tips}</p>
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
      // Reset user answers and form
      userAnswers = {};
      quizForm.reset();
      
      // Show quiz form and hide results
      quizForm.style.display = 'block';
      resultsContainer.style.display = 'none';
      
      // Re-render questions
      renderQuestions();
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Home button
  homeBtn.addEventListener('click', function() {
      window.location.href = '/index.html'; // Adjust as needed
  });

  // Dark mode toggle
  modeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      const isDark = body.classList.contains('dark-mode');
      modeIcon.textContent = isDark ? '🌙' : '☀️';
      localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
  });

  // Handle form submission
  quizForm.addEventListener('submit', showResults);

  // Initialize the quiz
  initQuiz();
});