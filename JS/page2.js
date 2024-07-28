function chk(quizName, correctAnswerId) {
    const selectedAnswer = document.querySelector(`input[name="${quizName}"]:checked`);
    if (selectedAnswer && selectedAnswer.id === correctAnswerId) {
        alert('正解です！');
    } else {
        alert('不正解です。もう一度試してください。');
    }
}
