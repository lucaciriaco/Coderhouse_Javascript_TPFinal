class Quiz {
    constructor(type,question,answer,correctNumber){
        //El tipo seria diferente categoria de preguntas que voy a agregar mas tarde
        this.type = type;
        this.question = question;
        this.answer = answer;
        this.correctNumber = correctNumber;
    }
}

// Variable global que va a guardar la respuesta de los botones.
var answer = null;
let score = 0;
let win = true;
let highScore =loadHighScore();
const quizJson='[{"type":"0","question":"Pregunta 1","answer":["1","2","3","4"],"correctNumber":"1"},{"type":"0","question":"Pregunta 2","answer":["2","3","4","1"],"correctNumber":"2"},{"type":"0","question":"Pregunta 3","answer":["3","4","1","2"],"correctNumber":"3"},{"type":"0","question":"Pregunta 4","answer":["4","1","2","3"],"correctNumber":"4"}]'
var quizArray = JSON.parse(quizJson);
let actualQuiz = {};
// Guardo los elementos del dom.
let question = document.getElementById("question");
let startBtn = document.getElementById("startBtn");
let btns = document.getElementsByClassName("answer");
let topScoreard = document.getElementById("topScore");
let scoreBoard = document.getElementById("score");

//Le agrego el evento a los botones
btns[0].addEventListener('click',() =>{answer = 1;gameManager()})
btns[1].addEventListener('click',() =>{answer = 2;gameManager()})
btns[2].addEventListener('click',() =>{answer = 3;gameManager()})
btns[3].addEventListener('click',() =>{answer = 4;gameManager()})
startBtn.addEventListener('click',() => startGame())
startGame()

function startGame(){
    console.log("start Game")
    win=true;
    score=0;
    topScoreard.innerText=loadHighScore();
    showButtons();
    loadQuiz();
    
}

function loadQuiz(){
    if(win==true)
    {
        let random = loadRandomQuiz();
        actualQuiz = quizArray[random];
        question.innerText = actualQuiz.question;
        btns[0].innerText=actualQuiz.answer[0]
        btns[1].innerText=actualQuiz.answer[1]
        btns[2].innerText=actualQuiz.answer[2]
        btns[3].innerText=actualQuiz.answer[3]
    }
    
}

function gameManager(){
    if(win==true)
    {
        if(answer == actualQuiz.correctNumber){   
            win = true
            score++;
            scoreBoard.innerHTML= "Puntaje: " + score;
            if(score>highScore){
                saveHighScore(score);
            }
        }
        else{
            win = false;
            hideButtons();
            topScoreard.innerText=loadHighScore();
        }
        loadQuiz();
    }
}



function loadRandomQuiz(){
    let randomQuizObject =Math.floor(Math.random() * quizArray.length);
    return randomQuizObject;
}

function loadHighScore(){
    let highScore = localStorage.getItem("highScore");
    if(highScore==null){
        highScore = 0;
    }
    return highScore;
}

function saveHighScore(newHighScore){
    localStorage.setItem("highScore",newHighScore);
}

function showAnswers(btns,quiz){
    for(i = 0; i < btns.length ; i++){
        btns[i].innerText = quiz.answer[i];
    }
}

function loadQuizJson(){
    //arreglar luego
}

function showButtons(){
    for(i = 0; i < btns.length; i++){
        btns[i].hidden = false;
    }

    startBtn.hidden=true;
}

function hideButtons(){
    for(i = 0; i < btns.length; i++){
        btns[i].hidden = true;
    }

    startBtn.hidden=false;
}

function gameOver(){

}