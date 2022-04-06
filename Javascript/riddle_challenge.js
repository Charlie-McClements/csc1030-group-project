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

function riddleChallenge(){
    var board = document.getElementById("challengeBoard");
    story = document.getElementById("storyText")
    if(completed === true){ //if the challenge is over and you want to go back to the main screen
        clearInterval(running);
        var cBoard = document.getElementById('challengeBoard');
        var aBox = document.getElementById('riddleAnswer');
        aBox.remove();
        var mazeCanvas = document.getElementById("gameCanvas");
        mazeCanvas.className = "showMe";
        //story.innerHTML = "Find the trapdoor!";
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
        torchStrength += 40;
        notPlayedWinSound = true;
    }
    else{
        if (option == 1){   
            var ansBox = document.getElementById("riddleAnswer");
            var answer = ansBox.value;
            if(answer == "candle" || answer == "vela" || answer == "pencil" || answer == "lápiz" || answer == "lapiz" || answer == "l&aacute;piz" || answer == "chalk" || answer == "tiza"){
                board.style.backgroundImage = "url(images/riddle_challenge_open.png)";
                if(notPlayedWinSound){
                    notPlayedWinSound = false;
                    sfxChalWin.play();
                }
                if(currentLanguage == 'English') {
                    story.innerHTML = "Well aren't you clever... Enjoy the extra flicker in your flame!<br>You receive <b>+40</b> torch fuel!";
                } else if(currentLanguage == 'Spanish') {
                    story.innerHTML = "Bueno, &iquest;no eres inteligente? &iexcl;Disfruta del parpadeo adicional en tu llama!<br>&iexcl;Recibes <b>+40</b> de combustible para antorchas!";
                }
                setTimeout(() => {completed = true;}, 3000);             
            }         
            pass = true;
        }
        else if(option == 2){
            //story.innerHTML = "Carry on, try not to lose your way!";
            if(currentLanguage == 'English') {
                story.innerHTML = "Carry on, try not to lose your way!";
                board.style.backgroundImage = "url(images/riddle_challenge_open.png)";
            } else if(currentLanguage == 'Spanish') {
                story.innerHTML = "&iexcl;Continua, trata de no perderte!";
                board.style.backgroundImage = "url(images/riddle_challenge_open_es.png)";
            }
            currentTorch -= 50;         
            setTimeout(() => {completed = true;}, 3000);        
        }
        else if(option == 3){
            //story.innerHTML = "I'm sure it did something...";
            if(currentLanguage == 'English') {
                story.innerHTML = "I'm sure it did something...";
            } else if(currentLanguage == 'Spanish') {
                story.innerHTML = "Estoy seguro de que hizo algo...";
            }
            pass1 = true;
        }

        else if(option == 4){
            
        }
    }
}

function startRiddleChallenge(){
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
    screen.id = 'challengeBoard';  
    var riddleAnswer = document.createElement('input');
    riddleAnswer.type = "text";
    riddleAnswer.id = "riddleAnswer";
    riddleAnswer.style.margin = "auto";
    riddleAnswer.style.width = "300px"; 
    riddleAnswer.style.height = "50px";
    var mazeCanvas = document.getElementById("gameCanvas");
    mazeCanvas.className = "hideMe";
    var boardDiv = document.getElementById("board");
    boardDiv.appendChild(screen);
    boardDiv.appendChild(riddleAnswer);
    var button1 = document.getElementById("up");
    var button2 = document.getElementById("left");
    var button3 = document.getElementById("down");
    var button4 = document.getElementById("right");
    button1.onclick = button1Event;
    button2.onclick = button2Event;
    button3.onclick = button3Event;
    button4.onclick = button4Event;
    story = document.getElementById("storyText")
    if(currentLanguage == 'English') {
        story.innerHTML = "Solve the riddle to add flame to your torch. Carry on and you could turn wrong!";
        screen.style.backgroundImage = "url(images/riddle_challenge.png)";
        button1.value="Submit Answer";
        button2.value="Carry On";
        button3.value="";
        button4.value="";
    }
    else if(currentLanguage == 'Spanish') {
        story.innerHTML = "Resuelve el acertijo para agregar llama a tu antorcha. &iexcl;Continua y podrias equivocarte!";
        screen.style.backgroundImage = "url(images/riddle_challenge_es.png)";
        button1.value="Enviar respuesta";
        button2.value="Continuar";
        button3.value="";
        button4.value="";
    }
    //var board = document.getElementById('gameScreen');
    //board.className = "hideMe";
    running = setInterval(riddleChallenge, 1000/FPS);
    
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
    if(currentLanguage == 'English') {
        button1.value="Up";
        button2.value="Left";
        button3.value="Down";
        button4.value="Right";
    }
    else if(currentLanguage == 'Spanish') {
        button1.value="Arriba";
        button2.value="Izquierda";
        button3.value="Abajo";
        button4.value="Derecha";
    }
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
