let score = 0
let gameActive = false

const startButton = document.querySelector("#start_button")
const scoreDisplay = document.querySelector("#score")

function startGame(){
    if(gameActive) return;

    score = 0;
    gameActive = true;
    scoreDisplay.textContent = score;

    startButton.textContent = "Кликай!"
    startButton.addEventListener("click", incrementScore);

    setTimeout(endGame, 10000)
}

function incrementScore(){
    if(gameActive){
        score++;
        scoreDisplay.textContent = score;
    }
}

function endGame(){
    gameActive = false;
    startButton.removeEventListener("click", incrementScore)
    startButton.textContent = "Начать игру";


    alert(`Игра окончена! Ваш счет: ${score}`)
}

startButton.addEventListener("click", startGame);