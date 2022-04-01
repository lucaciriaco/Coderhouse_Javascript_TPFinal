class Quiz {
    constructor(type,questions,correctNumber){
        //El tipo seria diferente categoria de preguntas que voy a agregar mas tarde
        this.type = type;
        this.questions = questions;
        this.correctNumber = correctNumber;
    }
}

//Las preguntas me gustaria guardarlas en un json.
let question1 = new Quiz(0,"¿Quién pinto 'La Gioconda'? <br> [ 0 ] Leonardo Da Vinci <br> [ 1 ] Rafael Sanzio <br> [ 2 ] Donatello <br> [ 3 ]" ,0);
let question2 = new Quiz(0,"",3);
let question3 = new Quiz(0,"",2);
let question4 = new Quiz(0,"",4);

function gameManager(){
    let score = 0;
    let questionsArray[question1,];

    do{
        let awnser = Number(prompt("Ingrese numero de respuesta numerica"));
    }while(isNaN(awnser) && awnser < 3)




    if(awnser == questionsArray[i].correctNumber)
    {

        score++;
    }else
    {
        gameOver(null,score);
    }
}

//El best score lo voy a agregar cuando sepa guardar cosas en json;
function gameOver(bestScore,score){
    if(score>bestScore){
        bestScore = score;
    }
    document.write("<h6>Fin del juego el puntaje final es: </h6>", + score,"<br><h6>El mejor puntaje es: </h6>" + bestScore);
    if (confirm("Desea jugar otra vez")==true){
        gameManager();
    }else{
        document.write("<br><h6>Hecho por Luca Ciriaco para <a href='https://www.coderhouse.com/'>Coderhouse</a></h6>");
    }
}

