const questions = [
    { text: "Do you use renewable energy?", percentage: 5 },
    { text: "Have you implemented energy-efficient practices?", percentage: 4 },
    { text: "Do you reduce waste regularly?", percentage: 3 },
    { text: "Have you optimized your transportation system?", percentage: 7 },
    { text: "Do you use sustainable materials?", percentage: 6 },
    { text: "Have you implemented a methane capture system?", percentage: 8 },
    { text: "Do you compost organic waste?", percentage: 4 },
    { text: "Are you using electric vehicles?", percentage: 5 },
    { text: "Have you reduced your water consumption?", percentage: 2 },
    { text: "Do you use low-emission machinery?", percentage: 6 },
    { text: "Have you planted trees or vegetation?", percentage: 3 },
    { text: "Are you part of a climate change mitigation program?", percentage: 7 },
    { text: "Do you educate your staff on sustainability?", percentage: 4 },
    { text: "Do you monitor methane emissions regularly?", percentage: 10 }
];

let currentQuestionIndex = 0;
let totalScore = 0;

function nextQuestion() {
    const answer = confirm(questions[currentQuestionIndex].text);
    
    if (answer) {
        totalScore += questions[currentQuestionIndex].percentage;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        // Display next question
        document.getElementById('question-container').innerText = questions[currentQuestionIndex].text;
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';

    document.getElementById('final-score').innerText = totalScore;
    const message = totalScore > 30
        ? "Congratulations! You have successfully created a national methane roadmap."
        : "Unfortunately, you did not successfully reduce methane by over 30%.";
    
    document.getElementById('result-message').innerText = message;
}

function restartQuiz() {
    totalScore = 0;
    currentQuestionIndex = 0;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    nextQuestion();
}

// Initialize the first question
nextQuestion();
