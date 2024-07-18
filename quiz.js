document.getElementById('submit-answer').addEventListener('click', checkAnswer);

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    
    const feedback = document.getElementById('feedback');
        
      if (selectedAnswer.value === '4') {
          feedback.textContent = 'Correct! Well done.';
          feedback.style.color = 'green';
      } else {
          feedback.textContent = 'Thats incorrect. Try again!';
          feedback.style.color = 'red';
      }
    } 
    

