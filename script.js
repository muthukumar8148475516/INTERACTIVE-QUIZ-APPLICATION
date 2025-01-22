// Array containing questions, options, and correct answers
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "What is the largest planet in our Solar System?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Which programming language is primarily used for web development?",
        options: ["C++", "Python", "JavaScript", "Java"],
        correctAnswer: "JavaScript"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to load the current question
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Display the question
    document.getElementById('question').textContent = currentQuestion.question;

    // Clear previous answer options
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    // Display answer options as buttons
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('answer-button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        answersDiv.appendChild(button);
    });

    // Hide "Next Question" button initially
    document.getElementById('next-button').style.display = 'none';
}

// Function to check if the selected answer is correct
function checkAnswer(selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
        alert('Correct!');
    } else {
        alert('Wrong! The correct answer is: ' + correctAnswer);
    }

    // Update score display
    document.getElementById('score').textContent = score;

    // Show "Next Question" button after answer is selected
    document.getElementById('next-button').style.display = 'inline-block';
}

// Function to load the next question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        alert('Quiz completed! Your final score is: ' + score);
        // Restart the quiz
        currentQuestionIndex = 0;
        score = 0;
        document.getElementById('score').textContent = score;
        loadQuestion();
    }
}

// Initialize the first question when the page loads
window.onload = loadQuestion;
