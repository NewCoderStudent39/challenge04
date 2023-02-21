const countDown = document.querySelector('.quiz-timer');
const cardQuestion = document.querySelector('.card')
var seconds = 120;
var score = 0;
const maxQuestions = 3;
var timer;
var lastTime;

console.log(countDown);

function quizTimer() {

    timer = setInterval(function() {
        seconds--;
        let mins = Math.floor(seconds / 60);
        let sec = seconds % 60;

        let display = seconds < 10 ? `0${mins}:0${sec}` : `${mins}:${sec}`;

        countDown.textContent = display;

        if (seconds <= 0)
        {
            clearTimer();
            endGame();
        }
    } , 1000)   
}

function clearTimer() {
    lastTime = seconds;
    clearInterval(timer);
    countDown.textContent = '00:00';
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
const endButton = document.getElementById('end-button');
const initials = document.querySelector('highscore');
const initialsInput = document.querySelector('highscore-input');
const submitHighScore = document.querySelector('submit-button');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', setNextQuestion);
endButton.addEventListener('click', clearBoard)

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
    addScore();
    showQuestion(); 
}

function clearBoard() {
    clearTimer();
    console.log(lastTime)
    score = lastTime * 5;
    console.log(score)
    resetQuiz();
    endButton.classList.add('hidden');
    nextButton.classList.add('hidden');
    displayQuestion.classList.add('hidden');
    for (let i = 0; i < possibleAnswers.length; i++) {
        possibleAnswers[i].classList.add('hidden');
    }
    addHighScore();    
}

function addHighScore() {
    initials.classList.remove('hidden');
    initialsInput.classList.remove('hidden');
    submitHighScore.classList.remove('hidden');
}

function addScore() { //adding multiple times error
    score = score + 100;
    console.log('add score ...');
    console.log(score);
}

function showQuestion() {
    displayQuestion.innerText = questions[questionIndex].question;
        for (let i = 0; i < possibleAnswers.length; i++ ) {
        possibleAnswers[i].innerText = questions[questionIndex].answers[i].text;
        possibleAnswers[i].classList.add(questions[questionIndex].answers[i].correct);
        possibleAnswers[i].addEventListener('click', function(event){
            if (event.target.classList.contains('true'))
            {
                    event.target.classList.add('correct');
                    nextButton.classList.remove('hidden');
                    console.log(questionIndex);
                    if (questionIndex == maxQuestions) {
                        endButton.classList.remove('hidden');
                        nextButton.classList.add('hidden');
                    }
            }
            else {
                seconds = seconds -10;
                event.target.classList.add('wrong');
            }
        });
    }
    questionIndex++;
    console.log(questionIndex);
}



function resetQuiz () {
    nextButton.classList.add('hidden');
    for (let i = 0; i < possibleAnswers.length; i++) {
        possibleAnswers[i].classList.remove('correct');
        possibleAnswers[i].classList.remove('wrong');
        possibleAnswers[i].classList.remove('true');
        possibleAnswers[i].classList.remove('false');
    }
}
