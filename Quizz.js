const questions = [
    {
        question: "who has one the most Ballon-d'or?",
        options: ["Lionel Messi", "Raphinha", "Wahbi Khazri", "Ronaldinho"],
        correctAnswer: "Lionel Messi"
    },
    {
        question: "Whats my favorite fictinal caracter?",
        options: ["Spider-Man", "Batman", "Superman", "The flash"],
        correctAnswer: "Batman"
    },
    {
        question: "For those who know me, whats my dream car?",
        options: ["Lexus LFA", "Supra", "Dodge Charger", "Skyline R-34"],
        correctAnswer: "Skyline R-34"
    },
    {
        question: "who's my favorite music artist?",
        options: ["Eminem", "Samir Lousif", "G-eazy", "Rihanna"],
        correctAnswer: "G-eazy"
    },
    {
        question: "who holds the most title in Tennis?",
        options: ["Rafael Nadal", "Roger Federer", "Novak Djolovic", "Grigor Dimitrov"],
        correctAnswer: "Roger Federer"
    },
    {
        question: "Finish the sentence: What goes around, ....",
        options: ["Comes aroud", "Goes", "Never returns", "Dissapears"],
        correctAnswer: "Comes aroud"
    },
    {
        question: "How old am I?",
        options: ["56", "12", "21", "300"],
        correctAnswer: "21"
    },
    {
        question: "What's my favorite passion?",
        options: ["Tennis", "Music", "Video games", ""],
        correctAnswer: "Tennis"
    },
    {
        question: "whats my favorite dish?",
        options: ["Couscous", "lasgna", "mosli", "chakchouka"],
        correctAnswer: "Couscous"
    },
    {
        question: "What city did i visit last summer?",
        options: ["Binzart", "Touzer", "Sousse", "Mahdia"],
        correctAnswer: "Binzart"
    },
    {
        question: "Whats my favorite sport to watch?",
        options: ["American football", "football", "Handball", "Formula1"],
        correctAnswer: "football"
    },
    {
        question: "What car do i drive?",
        options: ["RollsRoys phantom", "elwa7ch 206", "bugatti chiron", "Ferrari spider"],
        correctAnswer: "elwa7ch 206"
    },
    
];

let userAnswers = [];
let score = 0;

function loadQuiz() {
    const quizForm = document.getElementById('quiz-form');
    questions.forEach((q, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');
        questionContainer.innerHTML = `
            <h5>${q.question}</h5>
            <ul class="answer-options" id="question-${index}">
                ${q.options.map(option => 
                    `<li onclick="selectAnswer(${index}, '${option}')">${option}</li>`
                ).join('')}
            </ul>
        `;
        quizForm.appendChild(questionContainer);
    });
}

function selectAnswer(questionIndex, answer) {
    userAnswers[questionIndex] = answer;
    const options = document.querySelectorAll(`#question-${questionIndex} li`);
    options.forEach(option => option.style.backgroundColor = ''); // Reset background
    const selectedOption = Array.from(options).find(option => option.innerText === answer);
    selectedOption.style.backgroundColor = '#cce7ff'; // Highlight selected
}

function submitQuiz() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
            score++;
        }
    });

    document.getElementById('score').innerText = `You scored ${score} out of ${questions.length}`;
    const correctAnswers = questions.map((q, index) => {
        return `Q${index + 1}: Correct answer is "${q.correctAnswer}". Your answer: "${userAnswers[index] || 'Not Answered'}".`;
    }).join('<br>');
    document.getElementById('correct-answers').innerHTML = correctAnswers;

    document.getElementById('result').style.display = 'block';
}

window.onload = loadQuiz;
