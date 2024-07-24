document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');
    const submitButton = document.getElementById('submit');
    const resultsContainer = document.getElementById('results');
    const timerContainer = document.getElementById('timer');
    const captureButton = document.getElementById('capture');
    const footer = document.getElementById('footer');

    let tabSwitchCount = 0;
    let totalTimeSpent = 0;
    let lastSwitchTime = 0;
    let tabsSwitched = 0;

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            tabSwitchCount++;
            lastSwitchTime = performance.now();
            tabsSwitched++;
        } else if (document.visibilityState === 'visible' && lastSwitchTime !== 0) {
            const timeSpent = (performance.now() - lastSwitchTime) / 1000; //---------------------- MILLISECND
            totalTimeSpent += timeSpent;
            lastSwitchTime = 0; //--------------------------LAST SWITCHED TIME
        }
    });
//---------------------------------------------- DISPLAY THE FOOTER OF MY TIMER USE OF THE TAB 
    function updateFooter() {
        footer.textContent = `Tab switches: ${tabSwitchCount} | Time spent in other tabs: ${totalTimeSpent.toFixed(2)} seconds | Tabs switched: ${tabsSwitched}`;
        requestAnimationFrame(updateFooter);
    }

    updateFooter();

    // ---------------------------------------------QUESTION
    let questions = [
        {
            "question": "What is the capital of France?",
            "options": ["Paris", "London", "Berlin", "Madrid"],
            "answer": "Paris"
        },
        {
            "question": "Which planet is known as the Red Planet?",
            "options": ["Earth", "Mars", "Jupiter", "Venus"],
            "answer": "Mars"
        },
        {
            "question": "What is the largest ocean on Earth?",
            "options": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
            "answer": "Pacific Ocean"
        },
        {
            "question": "Who wrote 'To Kill a Mockingbird'?",
            "options": ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
            "answer": "Harper Lee"
        },
        {
            "question": "What is the chemical symbol for gold?",
            "options": ["Au", "Ag", "Pb", "Pt"],
            "answer": "Au"
        },
        {
            "question": "Which country is the largest by area?",
            "options": ["Russia", "Canada", "China", "United States"],
            "answer": "Russia"
        },
        {
            "question": "What is the hardest natural substance on Earth?",
            "options": ["Gold", "Iron", "Diamond", "Platinum"],
            "answer": "Diamond"
        },
        {
            "question": "Who painted the Mona Lisa?",
            "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            "answer": "Leonardo da Vinci"
        },
        {
            "question": "Which planet is known for its rings?",
            "options": ["Mars", "Jupiter", "Saturn", "Uranus"],
            "answer": "Saturn"
        },
        {
            "question": "What is the smallest country in the world?",
            "options": ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            "answer": "Vatican City"
        },
        {
            "question": "Which element has the chemical symbol O?",
            "options": ["Osmium", "Oxygen", "Oganesson", "Osmium"],
            "answer": "Oxygen"
        },
        {
            "question": "What is the capital of Japan?",
            "options": ["Tokyo", "Osaka", "Kyoto", "Nagoya"],
            "answer": "Tokyo"
        },
        {
            "question": "Who developed the theory of relativity?",
            "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
            "answer": "Albert Einstein"
        },
        {
            "question": "What is the tallest mountain in the world?",
            "options": ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
            "answer": "Mount Everest"
        },
        {
            "question": "What is the largest mammal?",
            "options": ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            "answer": "Blue Whale"
        },
        {
            "question": "Who is known as the 'Father of Computers'?",
            "options": ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
            "answer": "Charles Babbage"
        },
        {
            "question": "What is the smallest planet in our solar system?",
            "options": ["Mercury", "Venus", "Earth", "Mars"],
            "answer": "Mercury"
        },
        {
            "question": "What is the capital of Australia?",
            "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
            "answer": "Canberra"
        },
        {
            "question": "Which country is known as the Land of the Rising Sun?",
            "options": ["China", "Japan", "Thailand", "South Korea"],
            "answer": "Japan"
        },
        {
            "question": "What is the longest river in the world?",
            "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
            "answer": "Nile River"
        },
        {
            "question": "Which element has the highest melting point?",
            "options": ["Carbon", "Tungsten", "Iron", "Gold"],
            "answer": "Tungsten"
        },
        {
            "question": "What is the largest desert in the world?",
            "options": ["Sahara Desert", "Gobi Desert", "Antarctic Desert", "Arabian Desert"],
            "answer": "Antarctic Desert"
        }
    ];

    // TIMER
    let timeLeft = 60;
    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            showResults(questions);
        } else {
            timeLeft--;
            timerContainer.textContent = `Time left: ${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;
        }
    }, 1000);

    // -----------------------------------------DISPLAY QUIZ QUESTIONS
    const displayQuiz = (quizData) => {
        const output = [];

        quizData.forEach((currentQuestion, questionNumber) => {
            const options = [];

            for (let option of currentQuestion.options) {
                options.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${option}">
                        ${option}
                    </label>`
                );
            }

            output.push(
                `<div class="question">${currentQuestion.question}</div>
                <div class="options">${options.join('')}</div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    };

    // --------------------------------------------------------FUNCTION TO SHOW RESULTS
    const showResults = (quizData) => {
        const answerContainers = quizContainer.querySelectorAll('.options');
        let numCorrect = 0;
        let numIncorrect = 0;

        quizData.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.answer) {
                numCorrect++;
                answerContainers[questionNumber].classList.add('correct');
            } else {
                numIncorrect++;
                answerContainers[questionNumber].classList.add('incorrect');
            }
        });

        resultsContainer.innerHTML = `Correct: ${numCorrect} out of ${quizData.length}<br>
                                    Incorrect: ${numIncorrect} out of ${quizData.length}`;
    };

    // ---------------------------------------DISPLAY QUIZ QUESTIONS ON PAGE LOAD
    displayQuiz(questions);

    //----------------------------------------- SUBMIT BUTTON EVENT
    submitButton.addEventListener('click', () => {
        clearInterval(timer);
        showResults(questions);
    });

    // ------------------------------------------CAPTURE PHOTO BUTTON EVENT
    captureButton.addEventListener('click', () => {
        openCamera(); 
    });

    // ----------------------------------------FUNCTION TO OPEN CAMERA
    const openCamera = () => {
        const constraints = {
            video: true
        };

        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                const video = document.createElement('video');
                video.srcObject = stream;
                video.autoplay = true;

                const capturePhotoButton = document.createElement('button');
                capturePhotoButton.textContent = 'Capture';
                capturePhotoButton.addEventListener('click', () => {
                    capturePhoto(video);
                });

                quizContainer.innerHTML = '';
                quizContainer.appendChild(video);
                quizContainer.appendChild(capturePhotoButton);
            })
            .catch((error) => {
                console.error('Error accessing camera:', error);
            });
    };

    // ------------------------------FUNCTION TO CAPTURE PHOTO FROM VIDEO STREAM
    const capturePhoto = (videoElement) => {
        const canvas = document.createElement('canvas');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

        const img = document.createElement('img');
        img.src = canvas.toDataURL('image/jpeg');

        // ----PHOTO CAPTURE 
        resultsContainer.innerHTML = '';
        resultsContainer.appendChild(img);

        //------------------------ VIDEO STREAM STOP 
        videoElement.srcObject.getVideoTracks().forEach(track => track.stop());
    };
});