
// things to do

// number of moves made by character
// make a challenge,
// end screen fixer upper

function endScreen(message, distance) {

    // minutes and seconds left 
    var minutesLeft = document.getElementById('minutesLeft');
    var secondsLeft = document.getElementById('secondsLeft');
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    console.log(minutes, seconds);

    // distance travelled
    var distance = distanceMoved;
    document.getElementById('distanceTravelledStat').innerHTML = distance;

    // lives left
    var livesLeft = lives;
    console.log(livesLeft);
    
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