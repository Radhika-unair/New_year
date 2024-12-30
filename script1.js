// DOM Element Selection
const startBtn = document.querySelector('.start-btn'); // Start button
const popupInfo = document.querySelector('.popup-info'); // Popup information box
const exitBtn = document.querySelector('.exit-btn'); // Exit button
const main = document.querySelector('.main'); // Main section
const continueBtn = document.querySelector('.continue-btn'); // Continue button
const quizSection = document.querySelector('.quiz-section'); // Quiz section
const quizBox = document.querySelector('.quiz-box'); // Quiz container
const resultBox = document.querySelector('.result-box'); // Result box
const tryAgainBtn = document.querySelector('.tryAgain-btn'); // Try again button
const goHomeBtn = document.querySelector('.goHome-btn'); // Go home button

// Start Button Click Event
startBtn.onclick = () => {
    popupInfo.classList.add('active'); // Show popup
    main.classList.add('active'); // Dim main section
};

// Exit Button Click Event
exitBtn.onclick = () => {
    popupInfo.classList.remove('active'); // Hide popup
    main.classList.remove('active'); // Restore main section
};

// Continue Button Click Event
continueBtn.onclick = () => {
    quizSection.classList.add('active'); // Show quiz section
    popupInfo.classList.remove('active'); // Hide popup
    main.classList.remove('active'); // Restore main section
    quizBox.classList.add('active'); // Show quiz box

    showQuestions(0); // Display first question
    questionCounter(1); // Initialize question counter
    headerScore(); // Initialize score display
};

// Try Again Button Click Event
tryAgainBtn.onclick = () => {
    quizBox.classList.add('active'); // Restart quiz
    nextBtn.classList.remove('active'); // Disable Next button
    resultBox.classList.remove('active'); // Hide result box

    // Reset quiz variables
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount); // Display first question
    questionCounter(questionNumb); // Reset question counter
    headerScore(); // Reset score
};

// Go Home Button Click Event
goHomeBtn.onclick = () => {
    quizSection.classList.remove('active'); // Hide quiz section
    nextBtn.classList.remove('active'); // Disable Next button
    resultBox.classList.remove('active'); // Hide result box

    // Reset quiz variables
    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount); // Reset first question
    questionCounter(questionNumb); // Reset question counter
};

// Quiz Variables
let questionCount = 0; // Current question index
let questionNumb = 1; // Current question number
let userScore = 0; // User score

// Next Button Functionality
const nextBtn = document.querySelector('.next-btn'); // Next button

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++; // Move to the next question
        showQuestions(questionCount); // Display the next question
        questionNumb++; // Increment question number
        questionCounter(questionNumb); // Update counter
        nextBtn.classList.remove('active'); // Disable Next button
    } else {
        showResultBox(); // Show result if all questions are answered
    }
};

// Function to Display Questions
const optionList = document.querySelector('.option-list'); // Option container

function showQuestions(index) {
    const questionText = document.querySelector('.question-text'); // Question text container
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`; // Set question text

    // Generate option elements
    let optionTag = '';
    for (let i = 0; i < questions[index].options.length; i++) {
        optionTag += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
    }
    optionList.innerHTML = optionTag; // Add options to the container

    // Attach click event to each option
    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

// Function to Handle Option Selection
function optionSelected(answer) {
    let userAnswer = answer.textContent; // Selected answer text
    let correctAnswer = questions[questionCount].answer; // Correct answer
    let allOptions = optionList.children.length; // Total options

    if (userAnswer === correctAnswer) {
        answer.classList.add('correct'); // Highlight correct answer
        userScore += 1; // Increment score
        headerScore(); // Update score display
    } else {
        answer.classList.add('incorrect'); // Highlight incorrect answer
        // Highlight the correct answer
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent === correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    // Disable all options after selection
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active'); // Enable Next button
}

// Function to Update Question Counter
function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total'); // Counter display
    questionTotal.textContent = `${index} of ${questions.length} Questions`; // Update counter
}

// Function to Update Score in Header
function headerScore() {
    const headerScoreText = document.querySelector('.header-score'); // Score display
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`; // Update score
}

// Function to Show Result Box
function showResultBox() {
    quizBox.classList.remove('active'); // Hide quiz box
    resultBox.classList.add('active'); // Show result box

    const scoreText = document.querySelector('.score-text'); // Score text display
    scoreText.textContent = `Your Score: ${userScore} out of ${questions.length}`; // Display score

    // Circular progress bar animation
    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = (userScore / questions.length) * 100; // Calculate percentage
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`; // Update percentage text

        // Update circular progress bar
        circularProgress.style.background = `conic-gradient(#c40094 ${progressStartValue * 3.6}deg, rgba(255,255,255,.1) 0deg)`;

        if (progressStartValue === progressEndValue) {
            clearInterval(progress); // Stop animation when complete
        }
    }, speed);
}
