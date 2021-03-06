// Guardo los elementos del dom.
let topScoreard = document.getElementById("topScore");
let scoreBoard = document.getElementById("score");
let btns = document.getElementsByClassName("answer");
let startBtn = document.getElementById("startBtn");
let question = document.getElementById("question");

//Variables globales
let score = 0;
let win;
let highScore = loadHighScore();
let answer;
let msj;

//Variables de audio
let backgroundMusic;
let correctAudio = new Audio('./audio/correct.mp3');
let incorrectAudio = new Audio('./audio/incorrect.mp3');

//Antes que nada ocultamos los botones
hideButtons();

//Agrego los eventos a los botones pasando por parametro el indice del boton
btns[0].addEventListener('click',() =>{gameManager(0)})
btns[1].addEventListener('click',() =>{gameManager(1)})
btns[2].addEventListener('click',() =>{gameManager(2)})
btns[3].addEventListener('click',() =>{gameManager(3)})
startBtn.addEventListener('click',() => startGame())

//Se ejecuta con el boton startbtn reinicia las variables y actualiza el puntaje
function startGame(){
    score = 0;
    question.hidden = false;
    scoreBoard.innerHTML= "Puntaje: " + score;
    topScoreard.innerText=loadHighScore();
    showButtons();
    loadQuiz();
}

//Carga completamente al azar una pregunta desde la API y la muestra en el DOM
function loadQuiz(){
    fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple')
        .then((response) => response.json())
        .then((data) => {
            const quiz = data.results[0]
            question.innerText = quiz.question;
            const random = Math.floor(Math.random() * 4);
            let incorrectIndex = 0;
            for (let index = 0; index < 4; index++) {
                if(index==random){
                    console.log(quiz.correct_answer)
                    btns[index].innerText = quiz.correct_answer;
                    answer = index;
                    msj = quiz.correct_answer;
                }
                else{
                    btns[index].innerText = quiz.incorrect_answers[incorrectIndex];
                    incorrectIndex++;
                }
                
            }
        })
        showButtons();
}

//Comprueba si la respuesta es correcta, si lo es aumenta el puntaje y carga una nueva pregunta. Si no lo es reinicia el juego y muestra en una alerta la respuesta correcta
function gameManager(value){
    if(value==answer)
    {
        score++;
        scoreBoard.innerHTML= "Puntaje: " + score;
        if(score>highScore){
            saveHighScore(score);
        }
        alertPopUp('Correct!','success');
        correctAudio.play();
        loadQuiz();
    }
    else{
        alertPopUp(msj,'error');
        incorrectAudio.play();
        hideButtons();
        topScoreard.innerText=loadHighScore();
    } 
}

//Carga el puntaje mas alto almacenado desde localstorage de no existir lo inicia en 0
function loadHighScore(){
    let highScore = localStorage.getItem("highScore");
    if(highScore == null){
        highScore = 0;
    }
    return highScore;
}

//Guarda el puntaje mas alto en localstorage
function saveHighScore(newHighScore){
    localStorage.setItem("highScore",newHighScore);
}

//Muestra los botones con las respuestas y oculta el boton de empezar el juego
function showButtons(){
    for(i = 0; i < btns.length; i++){
        btns[i].hidden = false;
    }
    startBtn.hidden = true;
    question.hidden = false;
}

//Muestra el boton de empezar el juego y oculta los botones de las respuestas
function hideButtons(){
    for(i = 0; i < btns.length; i++){
        btns[i].hidden = true;
    }
    startBtn.hidden = false;
    question.hidden = true;
}

//Crea una alerta con la libreria SweetAlertJS
function alertPopUp(correct_answer,icon){
    Swal.fire({
        title: '<strong>The correct answer was:</strong> <br>'+ correct_answer,
        icon:icon
    });
}