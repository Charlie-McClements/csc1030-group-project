var completed = false;
var running;
var option = 0;
var story;
var challengeStarted = false;
var returnx = 0;
var returny = 0;
var first = true;
var currentTorch;

function waterChallenge(){
    var board = document.getElementById("challengeBoard");
    story = document.getElementById("storyText")
    if(completed === true){ //if the challenge is over and you want to go back to the main screen
        clearInterval(running);
        var cBoard = document.getElementById('challengeBoard');
        var mazeCanvas = document.getElementById("gameCanvas");
        mazeCanvas.className = "showMe";
        cBoard.remove();
        resetButtons();
        challengeStarted = false;
        charx = returnx;
        chary = returny;  
        torchStrength = currentTorch;    
        torchStrength += 20;  
    }
    else{
        if(option == 1){
            story.innerHTML = "Well done! That's done the trick!"
            screen.style.backgroundImage = "url(images/water/water_challenge0-0.png)";
        }
        else if (option == 2){   
            story.innerHTML = "I'm sure it did something...";            
            completed == true;
        }
        else if(option == 3){
        }

        else if(option == 4){
        }
    }
}

function startWaterChallenge(){
    challengeStarted = true;
    currentTorch = torchStrength;
    first = true;
    returnx = charx;
    returny = chary;
    option = 0;
    pass = false;
    pass1 = false;
    completed = false;
    var screen = document.createElement('div');       
    screen.style.maxWidth = '610px';
    screen.style.height = '610px';
    screen.style.margin = "auto";
    screen.style.backgroundImage = "url(images/water/water_challenge.png)";
    screen.id = 'challengeBoard';   
    var mazeCanvas = document.getElementById("gameCanvas");
    mazeCanvas.className = "hideMe";
    var boardDiv = document.getElementById("board");
    boardDiv.appendChild(screen);
    var button1 = document.getElementById("up");
    var button2 = document.getElementById("left");
    var button3 = document.getElementById("down");
    var button4 = document.getElementById("right");
    button1.onclick = button1Event;
    button2.onclick = button2Event;
    button3.onclick = button3Event;
    button4.onclick = button4Event;
    button1.value="Attempt challenge";
    button1.style.fontSize = "10px";
    button2.value="Skip challenge";
    button2.style.fontSize = "10px";
    button3.value="";
    button3.style.fontSize = "10px";
    button4.value="";
    button4.style.fontSize = "10px";
    story = document.getElementById("storyText")
    story.innerHTML = " Before you stands a raised slab holding two empty vases; your adventurer's intuition tells you that one vase can hold THREE LITRES, and the other can hold FIVE LITRES. Glyphs promise a great reward to anyone wise enough to pour out exactly four gallons of water. However, it warns of a swift death befalling anyone who would try and fail.";
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
