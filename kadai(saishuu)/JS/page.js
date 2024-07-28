// 関数を定義
function checkAnswer(quizName, correctAnswerId) {
    // 指定されたクイズの選択された回答を取得
    const selectedAnswer = document.querySelector(`input[name="${quizName}"]:checked`);

    // 選択された回答があり、そのIDが正しい回答のIDと一致するかを確認
    if (selectedAnswer && selectedAnswer.id === correctAnswerId) {
        alert('正解です！'); // 正解の場合のメッセージ
    } else {
        alert('不正解です。もう一度試してください。'); // 不正解の場合のメッセージ
    }
}
