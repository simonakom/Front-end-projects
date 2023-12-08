function result()
{
    let score=0;
    if(document.getElementById('true1').checked){
        score++;
    }
    if(document.getElementById('true2').checked){
        score++;
    }
    if(document.getElementById('true3').checked){
        score++;
    }
    if(document.getElementById('true4').checked){
        score++;
    }
    if(document.getElementById('true5').checked){
        score++;
    }


    document.write(`Your Score: ${score} out of 5.`);

}