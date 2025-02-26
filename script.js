
const quizData = {
    oops: [
        { question: "What is OOP?", options: ["Object-Oriented Programming", "Operating System", "Open Online Platform"], answer: "Object-Oriented Programming" },
        { question: "Which language supports OOP?", options: ["C", "Java", "HTML"], answer: "Java" }
    ],
    dbms: [
        { question: "What does DBMS stand for?", options: ["Data Base Management System", "Digital Base Module Service", "Data Build Model Structure"], answer: "Data Base Management System" }
    ],
    os: [
        { question: "What is a kernel?", options: ["Core of OS", "Type of software", "Programming language"], answer: "Core of OS" }
    ],
    cn: [
        { question: "What does TCP stand for?", options: ["Transfer Control Protocol", "Transmission Control Protocol", "Traffic Control Protocol"], answer: "Transmission Control Protocol" }
    ],
    coa: [
        { question: "What is a register?", options: ["Memory Storage", "CPU Component", "Cache"], answer: "CPU Component" }
    ]
};


// Get elements from the document
const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const quitBtn = document.getElementById("quit-btn");
const result = document.querySelector(".result");
const scoreSpan = document.getElementById("score");
const totalSpan = document.getElementById("total");
const quizContainer = document.getElementById("quiz-container");
const landing = document.getElementById("landing");
const quizTitle = document.getElementById("quiz-title");
const questionCountInput = document.getElementById("question-count");

let score = 0;
let total = 0;
let currentQuestionIndex = 0;
let selectedQuiz = [];
let selectedQuestions = [];
let numberOfQuestions = 5;
let timerInterval;

// Function to start the quiz
function startQuiz(topic) {
    const inputValue = parseInt(questionCountInput.value);
    numberOfQuestions = isNaN(inputValue) || inputValue <= 0 ? 5 : inputValue;

    landing.style.display = "none";
    quizContainer.style.display = "block";
    result.style.display = "none"; // Hide result section when starting quiz
    quizTitle.textContent = `${topic.toUpperCase()} Quiz`;

    selectedQuiz = quizData[topic];
    score = 0;
    total = numberOfQuestions;
    scoreSpan.textContent = score;
    totalSpan.textContent = total;

    selectedQuestions = generateRandomQuestions(selectedQuiz, numberOfQuestions);
    currentQuestionIndex = 0;
    clearInterval(timerInterval); // Clear any existing timer
    startTimer();
    loadQuestion();
}

// Function to randomly select questions
function generateRandomQuestions(questionSet, count) {
    let questions = [];
    let usedIndices = new Set();
    
    // Limit count to the available questions
    count = Math.min(count, questionSet.length);
    
    while (questions.length < count && usedIndices.size < questionSet.length) {
        let randomIndex = Math.floor(Math.random() * questionSet.length);
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            questions.push(questionSet[randomIndex]);
        }
    }
    return questions;
}

// Function to load a question
function loadQuestion() {
    if (currentQuestionIndex < selectedQuestions.length) {
        let q = selectedQuestions[currentQuestionIndex];
        question.textContent = q.question;
        options.innerHTML = "";
        
        q.options.forEach(option => {
            let li = document.createElement("li");
            li.textContent = option;
            li.dataset.answer = option === q.answer ? "correct" : "wrong";
            li.classList.remove("correct", "wrong");
            li.addEventListener("click", selectOption);
            options.appendChild(li);
        });

        nextBtn.disabled = true;
    } else {
        showResult(); // Show result when all questions are completed
    }
}

// Function to handle option selection
function selectOption(event) {
    let selected = event.target;
    let correct = selected.dataset.answer === "correct";
    selected.classList.add(correct ? "correct" : "wrong");

    document.querySelectorAll(".options li").forEach(li => li.classList.add("disabled"));

    if (correct) score++;
    scoreSpan.textContent = score;
    nextBtn.disabled = false;
}

// Next button functionality
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex >= selectedQuestions.length) {
        showResult(); // Show result when all questions are completed
    } else {
        loadQuestion();
        clearInterval(timerInterval); // Reset timer for next question
        startTimer();
    }
});

// Quit button functionality
quitBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    showResult();
});

// Function to display result and motivational message
function showResult() {
    clearInterval(timerInterval);
    question.textContent = ""; // Clear the question
    options.innerHTML = ""; // Clear the options
    nextBtn.style.display = "none"; // Hide next button
    quitBtn.style.display = "none"; // Hide quit button
    
    // Calculate percentage for better messaging
    const percentage = (score / total) * 100;
    
    let message;
    let additionalMsg = "";
    
    // Motivational messages based on score
    if (percentage === 100) {
        message = "Excellent! You got everything right!";
        additionalMsg = "You're a true master of this subject!";
    } else if (percentage >= 70) {
        message = "Great job! Keep practicing to perfect your skills!";
        additionalMsg = "You're on your way to becoming an expert!";
    } else if (percentage >= 40) {
        message = "Good effort! Try again to improve!";
        additionalMsg = "With a bit more study, you'll do even better next time!";
    } else {
        message = "Don't give up! Keep learning and try again!";
        additionalMsg = "Everyone starts somewhere. Regular practice will help you improve!";
    }

    // Display the result section
    quizContainer.style.display = "block";
    result.style.display = "block";
    result.innerHTML = `
        <h2>Your Score: ${score} / ${total}</h2>
        <p>${message}</p>
        <p>${additionalMsg}</p>
        <button class="btn" onclick="restartQuiz()">Try Again</button>
        <button class="btn" onclick="goToLanding()">Choose Another Topic</button>
    `;
}

// Function to restart the quiz with same topic
function restartQuiz() {
    result.style.display = "none";
    nextBtn.style.display = "block";
    quitBtn.style.display = "block";
    startQuiz(selectedQuiz.topic || 'oops'); // Restart with the same topic
}

// Function to go back to landing page
function goToLanding() {
    result.style.display = "none";
    quizContainer.style.display = "none";
    landing.style.display = "block";
    nextBtn.style.display = "block";
    quitBtn.style.display = "block";
}

// Timer function
function startTimer() {
    let timeLeft = 30;
    document.getElementById("time").textContent = timeLeft;
    
    // Clear any existing timer first
    clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            currentQuestionIndex++; // Move to next question
            if (currentQuestionIndex >= selectedQuestions.length) {
                showResult();
            } else {
                loadQuestion();
                startTimer();
            }
        }
    }, 1000);
}

// Make sure the quizData object exists
// This is a placeholder - ensure you have your actual quiz data defined
if (typeof quizData === 'undefined') {
    const quizData = {
        oops: [], dbms: [], os: [], cn: [], coa: []
    };
    console.error("Quiz data is not defined. Please define your quiz questions.");
}