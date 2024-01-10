let gameActive = false;
let startTime;

function startGame() {
    gameActive = true;
    document.getElementById('go-button').style.display = 'none';
    
    const gameContainer = document.getElementById('game-container');
    gameContainer.style.backgroundColor = 'red';
    gameContainer.innerHTML = 'Wait for Green...';

    setTimeout(() => {
        if (gameActive) {
            gameContainer.style.backgroundColor = 'green';
            gameContainer.innerHTML = 'Click Now!';
            startTime = new Date().getTime();
        }
    }, Math.random() * 10000);
}

document.getElementById('game-container').addEventListener('click', () => {
    if (gameActive && document.getElementById('game-container').style.backgroundColor === 'green') {
        const endTime = new Date().getTime();
        const reactionTime = endTime - startTime;
        alert(`Your reaction time: ${reactionTime} milliseconds`);
        
        gameActive = false;
        document.getElementById('game-container').style.backgroundColor = 'red';
        document.getElementById('game-container').innerHTML = '';
        document.getElementById('go-button').style.display = 'block';
    }
});
