document.getElementById('submit-answer').addEventListener('click', checkAnswer);

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    
    const feedback = document.getElementById('feedback');
  
    if (selectedAnswer) {
        
        if (selectedAnswer.value === '4') {
            feedback.textContent = 'Correct! 2 + 2 is 4.';
            feedback.style.color = 'green';
        } else {
            feedback.textContent = 'Incorrect. Please try again.';
            feedback.style.color = 'red';
        }
    } else {
        feedback.textContent = 'Please select an answer.';
        feedback.style.color = 'red';
    }
}
