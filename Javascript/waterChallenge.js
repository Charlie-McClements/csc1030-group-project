var completed = false;
var running;
var option = 0;
var story;
var challengeStarted = false;
var returnx = 0;
var returny = 0;
var first = true;
var currentTorch;
var bigJ=  0;
var smallJ = 0;

function waterChallenge(){
    var board = document.getElementById("challengeBoard");
    story = document.getElementById("storyText")
    //place code for disoplayijg iimages here

    //if big j has 4parts then completed = true
    if(completed === true){ //if the challenge is over and you want to go back to the main screen
        clearInterval(running);
        var cBoard = document.getElementById('challengeBoard');
        var mazeCanvas = document.getElementById("gameCanvas");
        story.innerHTML = "Find the trapdoor!";
        mazeCanvas.className = "showMe";
        cBoard.remove();
        resetButtons();
        challengeStarted = false;
        charx = returnx;
        chary = returny;  
        torchStrength = currentTorch;    
        torchStrength += 60;  
    }
    else{
        if(option == 1){
            story.innerHTML = "Fill Up Big Jug"
            bigJ = 5;
            board.style.backgroundImage = "url(images/water/water_challenge0-0.png)";
        }
        else if (option == 2){   
            story.innerHTML = "Pour Big Jug Into Small Jug";
            var spaceInSmallJug = 3 - smallJ;
            if(bigJ > spaceInSmallJug){
                smallJ = 3
                bigJ -= spaceInSmallJug;
            }
            else{
                smallJ += bigJ;
                bigJ = 0;
            }
        }
        else if(option == 3){
            story.innerHTML = "Empty Small Jug";
            smallJ = 0; 
        }

        else if(option == 4){
            story.innerHTML = "Empty Big Jug";
            bigJ = 0;
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
    button2.value="Skip challenge";
    button3.value="";
    button4.value="";
    story = document.getElementById("storyText")
    story.innerHTML = " Before you stands a raised slab holding two empty vases; your adventurer's intuition tells you that one vase can hold THREE LITRES, and the other can hold FIVE LITRES. Glyphs promise a great reward to anyone wise enough to pour out exactly four gallons of water. However, it warns of a swift death befalling anyone who would try and fail.";
    //var board = document.getElementById('gameScreen');
    //board.className = "hideMe";
    running = setInterval(waterStartScreen, 1000/FPS);
    
}

function waterStartScreen(){
    if(option == 1){
        clearInterval(running);
        var button1 = document.getElementById("up");
        var button2 = document.getElementById("left");
        var button3 = document.getElementById("down");
        var button4 = document.getElementById("right");
        button1.value="Option 1";
        button2.value="Option 2";
        button3.value="Option 3";
        button4.value="Option 4";
        running = setInterval(waterChallenge, 1000/FPS);
    }
    else if (option == 2){   
        story = document.getElementById("storyText")
        clearInterval(running);
        var cBoard = document.getElementById('challengeBoard');
        var mazeCanvas = document.getElementById("gameCanvas");
        story.innerHTML = "Find the trapdoor!";
        mazeCanvas.className = "showMe";
        cBoard.remove();
        resetButtons();
        challengeStarted = false;
        charx = returnx;
        chary = returny;  
        torchStrength = currentTorch;    
        torchStrength -= 20;  
    }
    else if(option == 3){
    }

    else if(option == 4){
    }
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
