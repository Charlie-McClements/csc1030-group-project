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
    duration = 300;
    minutes = Math.floor(duration / 60);
    seconds = duration % 60;
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
        endScreen('Out of time!');
        stopTimer();
    }
}

/*function dialogueButton() {
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
}*/

function startButton() {
    document.getElementById('startScreen').className = "hideMe"
    document.getElementById('avatarDetails').className = "showMe"
} 

function begin() {
    document.getElementById('avatarDetails').className = "hideMe"
    document.getElementById('gameScreen').className = "showMe"

    characterName = document.getElementById('characterName').value;

    gender = document.getElementsByName('gender');
    /*for(var i=0; i<gender.length; i++) {
        if(gender[i].checked) {
           
        }
    }*/

    challenge = document.getElementById('difficulty').value;
    if(challenge == 'Easy'){
        difficulty = 10;
    } else if (challenge == 'Medium') {
        difficulty = 5;
    } else if(challenge == 'Hard') {
        difficulty = 2;
    }
    // set up interval (game loop)
    setInterval(update, 1000 / FPS);
    populate_grid();
    generate_maze();
    
    startTimer();

}              