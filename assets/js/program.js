const countDown = document.querySelector('.quiz-timer');
const cardQuestion = document.querySelector('.card')
var seconds = 120;
var hasTime = true;
let Score=0;

console.log(countDown);

function quizTimer() {

    let timer = setInterval(function() {
        seconds--;
        let mins = Math.floor(seconds / 60);
        let sec = seconds % 60;

        let display = seconds < 10 ? `0${mins}:0${sec}` : `${mins}:${sec}`;

        countDown.textContent = display;

        if (seconds === 0)
        {
            clearInterval(timer);
            hasTime = false;
            console.log(hasTime);
        }
    } , 1000)    
}


const questions = [
    {
        question: "What Does CSS stand for?",
        answers: [
            {text: 'Cascading Structure Sheet', correct: false},
            {text: 'Constructor Style Sheet', correct: false},
            {text: 'Cascading Style Sheet', correct: true},
            {text: 'Container Style Sheet', correct: false},
        ],
        correct: 'Cascading Style Sheet'
    },
    {
        question: "What Accronym do coders strive to achieve?",
        answers: [
            {text: 'API', correct: false},
            {text: 'DRY', correct: true},
            {text: 'SDK', correct: false},
            {text: 'OOP', correct: false},
        ]
    },
    {

        question: "Which programming language does not have garbage collection?",
        answers: [
            {text: 'JAVA', correct: false},
            {text: 'JS', correct: false},
            {text: 'C#', correct: false},
            {text: 'C', correct: true},
        ]
    },
    
];

const startButton = document.getElementById('start-button');
const questionCard = document.getElementById('question-card');
const nextButton = document.getElementById('next-button');
const displayQuestion = document.getElementById('question');
const possibleAnswers = Array.from(document.getElementsByClassName('answer'));

startButton.addEventListener('click', startGame);

var questionIndex = 0;

console.log(possibleAnswers.length)

function startGame() {

    console.log('started');
    quizTimer();
    startButton.classList.add('hidden');
    questionCard.classList.remove('hidden');
    nextButton.classList.remove('hidden');
    setNextQuestion();
}

function setNextQuestion () {
    resetQuiz();
    showQuestion(); 
    
}

function showQuestion() {
    displayQuestion.innerText = questions[questionIndex].question;
    for (let i = 0; i < possibleAnswers.length; i++ ) {
        possibleAnswers[i].innerText = questions[questionIndex].answers[i].text;
        possibleAnswers[i].addEventListener('click', function(event) {
            if (event.answers[questionIndex].correct) {
                console.log('success')

                //i want to access questions.answers.correct and check if true 
                //of false
            }
        });
    }
    questionIndex++;
}

function resetQuiz () {
    nextButton.classList.add('hidden');
}

