function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    }

    if ((player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function playerChoice(playerMove) {
    const computerMove = computerChoice();
    const result = determineWinner(playerMove, computerMove);

    const resultElement = document.getElementById('result');
    resultElement.textContent = `You chose ${playerMove}, computer chose ${computerMove}. ${result}`;
}
