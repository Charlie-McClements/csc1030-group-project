function endScreen(message) {
    

    document.getElementById('GameOverText').innerHTML = message;

    // minutes and seconds left 
    var minutes = document.getElementById('minutes').innerHTML;
    var seconds = document.getElementById('seconds').innerHTML;
    var minutesLeft = document.getElementById('minutesLeft');
    var secondsLeft = document.getElementById('secondsLeft');
    minutesLeft.innerHTML = minutes;
    secondsLeft.innerHTML = seconds;

    // distance travelled
    var distance = distanceMoved;
    document.getElementById('distanceTravelledStat').innerHTML = distance;

    // challenges completed
    var challengesStat = challengesEncountered;
    if(challengesStat>6)challengesStat=6;
    document.getElementById('challengesComp').innerHTML = challengesStat;

    // lives left
    var liveLeft1 = document.getElementById('livesLeftStat1');
    var liveLeft2 = document.getElementById('livesLeftStat2');
    var liveLeft3 = document.getElementById('livesLeftStat3');
    liveLeft1.style.backgroundImage = 'url(images/emptyHeart.png)'
    liveLeft2.style.backgroundImage = 'url(images/emptyHeart.png)'
    liveLeft3.style.backgroundImage = 'url(images/emptyHeart.png)'


    if (lives > 0) {
        liveLeft1.style.backgroundImage = 'url(images/heart.png)'
    }
    if (lives > 1) {
        liveLeft2.style.backgroundImage = 'url(images/heart.png)'
    }
    if (lives > 2) {
        liveLeft3.style.backgroundImage = 'url(images/heart.png)'
    }


    document.getElementById('endScreen').className = "showMe";
    document.getElementById('gameScreen').className = "hideMe";
    document.getElementById('startScreen').className = "hideMe";
}

function changeBg() {
    var bg = document.getElementById('bgColour').value;
    document.body.style.backgroundColor = bg;
}

function changeSprite1(){
    var colour = document.getElementById('orange').value;
    charColour = colour;
}
function changeSprite2(){
    var colour = document.getElementById('white').value;
    charColour = colour;
}
function changeSprite3(){
    var colour = document.getElementById('lightcoral').value;
    charColour = colour;
}
function changeSprite4(){
    var colour = document.getElementById('yellow').value;
    charColour = colour;
}

function customizeButton() {
    document.getElementById('startScreen').className = "hideMe"
    document.getElementById('customise').className = "showMe"
    sfxClick.play();
    console.log(seedValue);
    seedValue = Math.floor(Math.random() * 1000000);
    document.getElementById('changeSeed').value = String(seedValue)
}

function returnToMenu(){
    document.getElementById('startScreen').className = "showMe"
    document.getElementById('customise').className = "hideMe"
    var newSeed = document.getElementById('changeSeed').value;
    seedValue = String(newSeed);
    console.log(seedValue);
}

function drawSprite(charx, chary, charSize){
    sprite = document.createElement('div');
    sprite.style.backgroundImage = 'url(images/heart.png)';
    sprite.style.width = charSize+'px';
    sprite.style.height = charSize+'px';
    var boardDiv = document.getElementById("board");
    boardDiv.appendChild(sprite);
    console.log('complete');
}
