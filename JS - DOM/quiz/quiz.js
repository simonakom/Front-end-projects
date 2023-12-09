function markSelectedAnswer(questionId, selectedAnswerId) {
    // Remove 'selected' class from all answer options for the given question
    let answerOptions = document.querySelectorAll(`#${questionId} .answer-option`);
    answerOptions.forEach(option => option.classList.remove('selected'));

    // Add 'selected' class to the chosen answer option
    let selectedOption = document.querySelector(`#${questionId} #${selectedAnswerId}`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
    }
}



function calculateScore() {

  
    
                        // Count total Score
                        let correctAnswers = 0;

                        if (document.querySelector('#paris').classList.contains('selected')) {
                            correctAnswers++;
                        }
                        if (document.querySelector('#seven').classList.contains('selected')) {
                            correctAnswers++;
                        }
                        if (document.querySelector('#mars').classList.contains('selected')) {
                            correctAnswers++;
                        }
                        if (document.querySelector('#dioxide').classList.contains('selected')) {
                            correctAnswers++;
                        }
                        if (document.querySelector('#whale').classList.contains('selected')) {
                            correctAnswers++;
                        }

                        let score = document.getElementById('result');
                        if (correctAnswers === 5) {
                            score.innerHTML += "<br><span style='color: #ea226c; font-size: 20px;'>Congratulations! You answered all questions correctly! 🥳</span>";
                        } else {
                            score.innerText = `Your Score: ${correctAnswers} out of 5. You can do better! 😓`
                        }

                        // Display correct answers
                        // 1 question
                        let selectOne = document.querySelector('#paris');
                        let selectTwo = document.querySelector('#london');
                        let selectThree = document.querySelector('#berlin');

                        let displayAnswerOne = document.querySelector('#displayCorrectAnswer1');
                        if (document.querySelector('#paris').classList.contains('selected')) {
                            displayAnswerOne.innerText = `You are right! 👏`;
                            displayAnswerOne.style.color = '#309a53d2'; 
                            selectOne.classList.add('selected2');
                        }else if (document.querySelector('#london').classList.contains('selected')) {
                            selectTwo.classList.add('selected3');
                            displayAnswerOne.innerText = `Correct Answer: C) Paris! 😢`;
                        }
                        else if (document.querySelector('#berlin').classList.contains('selected')) {
                            selectThree.classList.add('selected3');
                            displayAnswerOne.innerText = `Correct Answer: C) Paris! 😢`;
                        }else {
                            displayAnswerOne.innerText = `You didn't select...\n but correct Answer was C) Paris! 😢`;
                        }
                        

                        // 2 question
                        let select11 = document.querySelector('#five');
                        let select22 = document.querySelector('#seven');
                        let select33 = document.querySelector('#six');

                        let displayAnswerTwo = document.querySelector('#displayCorrectAnswer2');
                        if (document.querySelector('#seven').classList.contains('selected')) {
                            displayAnswerTwo.innerText = `You are right! 👏`;
                            displayAnswerTwo.style.color = '#309a53d2'; 
                            select22.classList.add('selected2');
                        }else if (document.querySelector('#five').classList.contains('selected')) {
                            select11.classList.add('selected3');
                            displayAnswerTwo.innerText = `Correct Answer: B) Seven! 😢`;
                        }
                        else if (document.querySelector('#six').classList.contains('selected')) {
                            select33.classList.add('selected3');
                            displayAnswerTwo.innerText = `Correct Answer: B) Seven! 😢`;
                        }else {
                            displayAnswerTwo.innerText = `You didn't select...\n but correct Answer was B) Seven! 😢`;
                        }

                        // 3 question
                        let select111 = document.querySelector('#mars');
                        let select222 = document.querySelector('#jupiter');
                        let select333 = document.querySelector('#saturn');

                        let displayAnswerThree = document.querySelector('#displayCorrectAnswer3');
                        if (document.querySelector('#mars').classList.contains('selected')) {
                            displayAnswerThree.innerText = `You are right! 👏`;
                            displayAnswerThree.style.color = '#309a53d2'; 
                            select111.classList.add('selected2');
                        }else if (document.querySelector('#jupiter').classList.contains('selected')) {
                            select222.classList.add('selected3');
                            displayAnswerThree.innerText = `Correct Answer: A) Mars! 😢`;
                        }
                        else if (document.querySelector('#saturn').classList.contains('selected')) {
                            select333.classList.add('selected3');
                            displayAnswerThree.innerText = `Correct Answer: A) Mars! 😢`;
                        }else {
                            displayAnswerThree.innerText = `You didn't select...\n but correct Answer was A) Mars! 😢`;
                        }

                        // 4 question
                        let select1111 = document.querySelector('#oxygen');
                        let select2222 = document.querySelector('#dioxide');
                        let select3333 = document.querySelector('#nitrogen');

                        let displayAnswerFour = document.querySelector('#displayCorrectAnswer4');
                        if (document.querySelector('#dioxide').classList.contains('selected')) {
                            displayAnswerFour.innerText = `You are right! 👏`;
                            displayAnswerFour.style.color = '#309a53d2'; 
                            select2222.classList.add('selected2');
                        }else if (document.querySelector('#oxygen').classList.contains('selected')) {
                            select1111.classList.add('selected3');
                            displayAnswerFour.innerText = `Correct Answer:\n B) Carbon Dioxide
                            ! 😢`;
                        }
                        else if (document.querySelector('#nitrogen').classList.contains('selected')) {
                            select3333.classList.add('selected3');
                            displayAnswerFour.innerText = `Correct Answer:\n B) Carbon Dioxide
                            ! 😢`;
                        }else {
                            displayAnswerFour.innerText = `You didn't select...\n but correct Answer was B) Carbon Dioxide! 😢`;
                        }

                        // 5 question
                        let select11111 = document.querySelector('#elephant');
                        let select22222 = document.querySelector('#whale');
                        let select33333 = document.querySelector('#giraffe');

                        let displayAnswerFive = document.querySelector('#displayCorrectAnswer5');
                        if (document.querySelector('#whale').classList.contains('selected')) {
                            displayAnswerFive.innerText = `You are right! 👏`;
                            displayAnswerFive.style.color = '#309a53d2'; 
                            select22222.classList.add('selected2');
                        }else if (document.querySelector('#elephant').classList.contains('selected')) {
                            select11111.classList.add('selected3');
                            displayAnswerFive.innerText = `Correct Answer: B) Blue Whale
                            ! 😢`;
                        }
                        else if (document.querySelector('#giraffe').classList.contains('selected')) {
                            select33333.classList.add('selected3');
                            displayAnswerFive.innerText = `Correct Answer:\n B) Blue Whale
                            ! 😢`;
                        }else {
                            displayAnswerFive.innerText = `You didn't select... but correct Answer was B) Blue Whale! 😢`;
                        }

                        document.querySelector('#hide').onclick = playAgain;
                        document.querySelector('#hide').innerHTML = 'Play Again!';
}




function playAgain() {
    location.reload();

    let button =  document.querySelector('#hide');
    button.innerText = `Play Again`;

  }