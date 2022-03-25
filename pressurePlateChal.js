var challengeProgress = false;
var running;


function startPressurePChal() {
    var visualAidScreen = document.getElementById('pressurepVisualiser')
    visualAidScreen.className = 'showMe';
    var boardDisplay = document.getElementById('board');
    boardDisplay.style.display = "none";
    var buttonDisplay = document.getElementById('buttons');
    buttonDisplay.style.display = "none";

    var story = document.getElementById("storyText")
    story.innerHTML = "There appears to be a grid of Pressure Plates blocking the path in the corridor, I guess you are gonna have walk through it";
}

function enterChallenge() {
    var visualAidScreen = document.getElementById('pressurepVisualiser')
    visualAidScreen.className = 'hideMe';
    var pressurepGame = document.getElementById('game-container-1');
    pressurepGame.style.display = "initial";

    var story = document.getElementById("storyText")
    story.innerHTML = "This pressure plate seems solid";

    running = setInterval(endPressurePChal, 1000);
}

function endPressurePChal() {
    var pressurepGame = document.getElementById('game-container-1');
    var boardDisplay = document.getElementById('board');
    var buttonDisplay = document.getElementById('buttons');
    var story = document.getElementById("storyText")
    if(challengeProgress == true) {
        clearInterval(running);
        
        pressurepGame.style.display = "none";
        boardDisplay.style.display = "revert";
        buttonDisplay.style.display = "revert";
        story.innerHTML = "Phew, you made it";
    }
}