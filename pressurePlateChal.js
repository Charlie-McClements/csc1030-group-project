var challengeProgress = false;
var running;


function startPressurePChal() {
    var pressurepGame = document.getElementById('game-container-1');
    pressurepGame.style.display = "initial";
    var boardDisplay = document.getElementById('board');
    boardDisplay.style.display = "none";
    var buttonDisplay = document.getElementById('buttons');
    buttonDisplay.style.display = "none";

    running = setInterval(endPressurePChal, 1000);
}

function endPressurePChal() {
    var pressurepGame = document.getElementById('game-container-1');
    var boardDisplay = document.getElementById('board');
    var buttonDisplay = document.getElementById('buttons');
    if(challengeProgress == true) {
        clearInterval(running);
        pressurepGame.style.display = "none";
        boardDisplay.style.display = "revert";
        buttonDisplay.style.display = "revert";
    }
}