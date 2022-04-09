class Quiz {
    constructor(type,question,answer1,answer2,answer3,answer4,correctNumber){
        //El tipo seria diferente categoria de preguntas que voy a agregar mas tarde
        this.type = type;
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.correctNumber = correctNumber;
    }
}

//
let question = document.getElementById("question");
let btnAnswer1 = document.getElementById("answer1");
let btnAnswer2 = document.getElementById("answer2");
let btnAnswer3 = document.getElementById("answer3");
let btnAnswer4 = document.getElementById("answer4");
let topScoreard = document.getElementById("topScore");
let scoreBoard = document.getElementById("Score");

var awnser;

//Las preguntas me gustaria guardarlas en un json.
let question1 = new Quiz(0,"Quién pinto 'La Gioconda'?",'Leonardo Da Vinci','','','',0);
let questionsArray = new Array(3);
questionsArray.push('question1','question2','question3','question4');

btnAnswer1.addEventListener('click',() =>{awnser = 1})
btnAnswer2.addEventListener('click',() =>{awnser = 2})
btnAnswer3.addEventListener('click',() =>{awnser = 3})
btnAnswer4.addEventListener('click',() =>{awnser = 4})


function returnBtn(btn){

}
