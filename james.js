function endScreen() {

    var minutesLeft = document.getElementById('minutesLeft');
    var secondsLeft = document.getElementById('secondsLeft');

    // fetch minutes and seconds
    var minutes = document.getElementById('minutes').innerHTML;
    var seconds = document.getElementById('seconds').innerHTML;
    // set mins and seconds
    minutesLeft.innerHTML = minutes;
    secondsLeft.innerHTML = seconds;

    console.log(minutes, seconds);


    document.getElementById('endScreen').className = "showMe";
    document.getElementById('gameScreen').className = "hideMe";
    document.getElementById('startScreen').className = "hideMe";
}

function changeBg() {
    var bg = document.getElementById('bgColour').value;
    document.body.style.backgroundColor = bg;
}