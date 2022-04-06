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
var notPlayedWinSound = true;

function challenge1(){
    var board = document.getElementById("challengeBoard");
    story = document.getElementById("storyText")
    if(completed === true){ //if the challenge is over and you want to go back to the main screen
        clearInterval(running);
        var cBoard = document.getElementById('challengeBoard');
        var mazeCanvas = document.getElementById("gameCanvas");
        mazeCanvas.className = "showMe";
        if(currentLanguage == 'English') {
            story.innerHTML = "Find the trapdoor!";
        } else if(currentLanguage == 'Spanish') {
            story.innerHTML = "&iexcl;Encuentra la trampilla!";
        }
        cBoard.remove();
        resetButtons();
        challengeStarted = false;
        charx = returnx;
        chary = returny;  
        torchStrength = currentTorch;    
        torchStrength += 20;
        notPlayedWinSound = true;
    }
    else{
        if(pass == true && pass1 == true){
            board.style.backgroundImage = "url(images/button_challenge_cleared.png)";
            if(currentLanguage == 'English') {
                story.innerHTML = "Well done! That's done the trick!";
            } else if(currentLanguage == 'Spanish') {
                story.innerHTML = "&iexcl;Bien hecho! &iexcl;Eso ha hecho el truco!";
            }
            if(notPlayedWinSound){
                notPlayedWinSound = false;
                sfxChalWin.play();
            }
            setTimeout(() => {completed = true;}, 3000);     
                 
        }
        else if (option == 1 && pass != true){   
            if(currentLanguage == 'English') {
                story.innerHTML = "I'm sure it did something...";
            } else if(currentLanguage == 'Spanish') {
                story.innerHTML = "Estoy seguro de que hizo algo ...";
            }          
            pass = true;
        }
        else if(option == 2){
            if(currentLanguage == 'English') {
                story.innerHTML = "Well now that's unfortunate";
            } else if(currentLanguage == 'Spanish') {
                story.innerHTML = "Bueno, eso es desafortunado";
            }
            board.style.backgroundImage = "url(images/button_challenge_failed.png)";
            returnx = wallSize;
            returny = wallSize;            
            setTimeout(() => {completed = true;}, 3000);  
            if(first == true){  //need this clause as this if statement is triggered more than once before the timeout finishes
                first = false;
                lives -= 1;

            }
            
        }
        else if(option == 3 && pass1 != true){
            if(currentLanguage == 'English') {
                story.innerHTML = "I'm sure it did something...";
            } else if(currentLanguage == 'Spanish') {
                story.innerHTML = "Estoy seguro de que hizo algo ...";
            }
            pass1 = true;
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
    pass = false;
    pass1 = false;
    completed = false;
    var screen = document.createElement('div');       
    screen.style.maxWidth = '610px';
    screen.style.height = '610px';
    screen.style.margin = "auto";
    screen.style.backgroundImage = "url(images/button_challenge.png)";
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
    button1.value="Left Button";
    button2.value="Middle Button";
    button3.value="Right Button";
    button4.value="";
    story = document.getElementById("storyText")
    //story.innerHTML = "If I'm not mistaken, pressing two of those buttons will open the gate. Unfortunately one will also send you down the trapdoor....";
    if(currentLanguage == 'English') {
        story.innerHTML = "If I'm not mistaken, pressing two of those buttons will open the gate. Unfortunately one will also send you down the trapdoor...";
    } else if(currentLanguage == 'Spanish') {
        story.innerHTML = "Si no me equivoco, presionar dos de esos botones abrira la puerta. Desafortunadamente, uno tambien te enviara por la trampilla...";
    }
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
    sfxClick.play();
    option = 1;
}

function button2Event(){
    sfxClick.play();
    option = 2;
}

function button3Event(){
    sfxClick.play();
    option = 3;
}

function button4Event(){
    sfxClick.play();
    option = 4;
}
