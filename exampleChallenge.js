var completed = false;
var running;
var option = 0;
var story;

function challenge1(){
    if(completed === true){ //if the challenge is over and you want to go back to the main screen
        clearInterval(running);
        var cBoard = document.getElementById('challengeBoard');
        story = document.getElementById("storyText")
        story.innerHTML = "BACK TO NORMAL TEXT";
        cBoard.remove();
        resetButtons();        
    }
    else{
        if (option == 1){   
            story = document.getElementById("storyText")
            story.innerHTML = "Option 1 was chosen";
        }
        else if(option == 2){
            story = document.getElementById("storyText")
            story.innerHTML = "option 2 was chosen";
        }
        else if(option == 3){
            story = document.getElementById("storyText")
            story.innerHTML = "option 3 was chosen";
        }

        else if(option == 4){
            story = document.getElementById("storyText")
            story.innerHTML = "option 4 was chosen";
        }
    }
}

function startChallenge1(){
    completed = false;
    var screen = document.createElement('div');       
    screen.style.width = '610px';
    screen.style.height = '614px';
    screen.style.backgroundColor = "blue";
    screen.id = 'challengeBoard';   
    document.body.appendChild(screen);
    var button1 = document.getElementById("up");
    var button2 = document.getElementById("left");
    var button3 = document.getElementById("down");
    var button4 = document.getElementById("right");
    button1.onclick = button1Event;
    button2.onclick = button2Event;
    button3.onclick = button3Event;
    button4.onclick = button4Event;
    button1.value="OPTION TEXT 1";
    button1.style.fontSize = "10px";
    button2.value="OPTION TEXT 2";
    button2.style.fontSize = "10px";
    button3.value="OPTION TEXT 3";
    button3.style.fontSize = "10px";
    button4.value="OPTION TEXT 4";
    button4.style.fontSize = "10px";
    story = document.getElementById("storyText")
    story.innerHTML = "YOUR CHALLENGE TEXT GOES HERE";
    //var board = document.getElementById('gameScreen');
    //board.className = "hideMe";
    running = setInterval(challenge1, 1000/FPS);
    
}

function resetButtons(){
    var button1 = document.getElementById("up");
    var button2 = document.getElementById("left");
    var button3 = document.getElementById("down");
    var button4 = document.getElementById("right");
    button1.onclick = buttonUp;
    button2.onclick = buttonLeft;
    button3.onclick = buttonDown;
    button4.onclick = buttonRight;
    button1.value="Up";
    button2.value="Left";
    button3.value="Down";
    button4.value="Right";
}

function removeChallenge(){
    completed = true;
}


function button1Event(){
    option = 1;
}

function button2Event(){;
    option = 2;
}

function button3Event(){
    option = 3;
}

function button4Event(){
    option = 4;
}
