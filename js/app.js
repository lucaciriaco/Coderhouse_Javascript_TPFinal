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


//Le agrego el evento a los botones
btnAnswer1.addEventListener('click',() =>{awnser = 1})
btnAnswer2.addEventListener('click',() =>{awnser = 2})
btnAnswer3.addEventListener('click',() =>{awnser = 3})
btnAnswer4.addEventListener('click',() =>{awnser = 4})


//Las preguntas me gustaria guardarlas en un json.
let question1 = new Quiz(0,"Quién pinto 'La Gioconda'?",'Leonardo Da Vinci','','','',0);
let question2 = new Quiz(0,"Quién pinto 'La Gioconda'?",'Leonardo Da Vinci','','','',0);
let question3 = new Quiz(0,"Quién pinto 'La Gioconda'?",'Leonardo Da Vinci','','','',0);
let question4 = new Quiz(0,"Quién pinto 'La Gioconda'?",'Leonardo Da Vinci','','','',0);
let questionsArray = new Array(3);
questionsArray.push('question1','question2','question3','question4');

console.log(questionsArray.length);

window.onload = gameManager();

function gameManager(questionsArray, answer, topScore, scoreBoard){
    let score = 0;
    let win = true;
    do{
        let randomQuiz = Math.floor(Math.random() * questionsArray.length);
        btnAnswer1.innerHTML(randomQuiz.answer1);
        btnAnswer2.innerHTML(randomQuiz.answer2);
        btnAnswer3.innerHTML(randomQuiz.answer3);
        btnAnswer4.innerHTML(randomQuiz.answer4);
        if(answer == questionsArray[randomQuiz].correctNumber)
        {   
            console.log("Correct answer!")
            win = true
            scoreBoard.innerHTML("Puntaje: " + score);
            score++;
        }
        else
        {
            console.log("Wrong answer!")
            win = false;
            gameOver(null,score);
        }
    }while(win == true);
}


//El best score lo voy a agregar cuando sepa guardar cosas en json;
function gameOver(bestScore,score){
    if(score>bestScore){
        bestScore = score;
    }
    document.write("<h6>Fin del juego el puntaje final es: </h6>", + score,"<br><h6>El mejor puntaje es: </h6>" + bestScore);
    if (confirm("Desea jugar otra vez")==true){
        gameManager();
    }
    else
    {
        document.write("<br><h6>Hecho por Luca Ciriaco para <a href='https://www.coderhouse.com/'>Coderhouse</a></h6>");
    }
}

