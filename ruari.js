var myTimer;
var duration;
var minutes;
var seconds;
var dialogue = 1;
var characterName;
var gender;
var challenge;

function pad(num, size) {
    num = num.toString();
    if (num.length < size) {
        num = "0" + num;
        return num;
    } else {
        return num;
    }
}

function startTimer() {
    console.log("time");
    duration = 300;
    var minutes = Math.floor(duration / 60);
    var seconds = duration % 60;
    minutes = pad(minutes, 2);
    seconds = pad(seconds, 2);    
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    myTimer = setInterval('countdown()', 1000);
}

function stopTimer() {
    clearInterval(myTimer);
}

function countdown() {
    duration--;
    var minutes = Math.floor(duration / 60)
    var seconds = duration % 60;
    if (duration >= 0) {
        minutes = pad(minutes, 2);
        seconds = pad(seconds, 2);
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    } else {
        stopTimer();
        // alert("Game Over");
    }
}

function dialogueButton() {
    if (dialogue < 8) {
        document.getElementById('dialogue' + dialogue).className = "hideMe";
        dialogue++;
        document.getElementById('dialogue' + dialogue).className = "showMe";
    } else {
        document.getElementById('dialogue' + dialogue).className = "hideMe";
        document.getElementById('gameText').className = "hideMe";
        // dialogue++;
        // document.getElementById('dialogue'+dialogue).className = "hideMe";
    }
}

function startButton() {
    document.getElementById('startScreen').className = "hideMe"
    document.getElementById('gameScreen').className = "showMe"

    characterName = document.getElementById('characterName').value;

    gender = document.getElementsByName('gender');
    /*for(var i=0; i<gender.length; i++) {
        if(gender[i].checked) {
           
        }
    }*/

    challenge = document.getElementById('difficulty').value;
  

    startTimer();

}            