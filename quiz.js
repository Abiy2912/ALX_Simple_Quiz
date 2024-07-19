const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);


function checkAnswer() {
  const correctAnswer = "4";
  
    const selectedRadioButton = document.querySelector('input[name="quiz"]');
    const userAnswer = selectedRadioButton.value;
    
    const feedback = document.getElementById('feedback');
        
      if (userAnswer === correctAnswer) {
          feedback.textContent = 'Correct! Well done.';
          feedback.style.color = 'green';
      } else {
          feedback.textContent = 'Thats incorrect. Try again!';
          feedback.style.color = 'red';
      }
    } 
    

