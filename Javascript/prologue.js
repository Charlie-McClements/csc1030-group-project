var completed = false;
var running;
var option = 0;
var story;
var pass = false;
var pass1 = false;
var challengeStarted = false;
var returnx = 0;
var returny = 0;
var first = true;
var currentTorch;
var step = 0;
var dialogue = ["Welcome to the Oubliette! There is a trapdoor in the corner of the maze somewhere, you have 5 minutes to find it and climb out to escape.",
                "But beware! You will face obstacles and challenges along the way which may set you back.",
                "You have five minutes before the trapdoor gets locked and you'll be trapped here forever! Good Luck!"]

function prologue(){
    var board = document.getElementById("challengeBoard");
    story.innerHTML = dialogue[step];
    story = document.getElementById("storyText")
    if(completed === true){ //if the challenge is over and you want to go back to the main screen
        clearInterval(running);
        var cBoard = document.getElementById('challengeBoard');
        var mazeCanvas = document.getElementById("gameCanvas");
        mazeCanvas.className = "showMe";
        story.innerHTML = "Find the trapdoor!";
        cBoard.remove();
        resetButtons();
        challengeStarted = false;
        charx = returnx;
        chary = returny;  
        torchStrength = currentTorch;    
        torchStrength += 20;  
    }
    else{
        if (option == 1){   
            step -= 1;
        }
        else if(option == 2){
            step += 1;
            if (step > 2){
                completed = true;
                step = 2;
            }
            
        }
        else if(option == 3 && pass1 != true){            
            completed = true;
        }

        else if(option == 4){
            
        }
    }
}

function startChallenge1(){
    challengeStarted = true;
    currentTorch = torchStrength;
    first = true;
    returnx = charx;
    returny = chary;
    option = 0;
    completed = false;
    var screen = document.createElement('div');       
    screen.style.maxWidth = '610px';
    screen.style.height = '610px';
    screen.style.margin = "auto";
    screen.style.backgroundImage = "url(images/prologue.png)";
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
    button1.value="Previous";
    button1.style.fontSize = "10px";
    button2.value="Continue";
    button2.style.fontSize = "10px";
    button3.value="Skip Prologue";
    button3.style.fontSize = "10px";
    button4.value="";
    button4.style.fontSize = "10px";
    story = document.getElementById("storyText")    
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
