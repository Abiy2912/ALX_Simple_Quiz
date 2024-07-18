document.getElementById('submit-answer').addEventListener('click', checkAnswer);

function checkAnswer() {
  const correctAnswer = '4';
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    const feedback = document.getElementById('feedback');
        
      if (userAnswer === correctAnswer) {
          feedback.textContent = 'Correct! Well done.';
          feedback.style.color = 'green';
      } else {
          feedback.textContent = 'Thats incorrect. Try again!';
          feedback.style.color = 'red';
      }
    } 
    

