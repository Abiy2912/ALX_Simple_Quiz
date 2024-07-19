document.getElementById('submit-answer').addEventListener('click', checkAnswer);

function checkAnswer() {
  const correctAnswer = "4";
    
    const selectedRadioButton = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedRadioButton.value;
    
    const feedback = document.getElementById('feedback');
        
      if (userAnswer.value === Number(correctAnswer)) {
          feedback.textContent = 'Correct! Well done.';
          feedback.style.color = 'green';
      } else {
          feedback.textContent = 'Thats incorrect. Try again!';
          feedback.style.color = 'red';
      }
    } 
    

