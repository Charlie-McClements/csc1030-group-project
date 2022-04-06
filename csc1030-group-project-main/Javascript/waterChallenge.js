var completed = false;
var running;
var option = 0;
var story;
var challengeStarted = false;
var isInWaterChal = false;
var returnx = 0;
var returny = 0;
var first = true;
var currentTorch;
var bigJ=  0;
var smallJ = 0;
var notPlayedWinSound = true;

function waterChallenge(){
    isInWaterChal = true;
    var board = document.getElementById("challengeBoard");
    story = document.getElementById("storyText")
    if(bigJ == 0 && smallJ == 0) { board.style.backgroundImage = "url(images/water/water_challenge0-0.png)"; }
    else if(bigJ == 0 && smallJ == 1) { board.style.backgroundImage = "url(images/water/water_challenge0-1.png)"; }
    else if(bigJ == 0 && smallJ == 2) { board.style.backgroundImage = "url(images/water/water_challenge0-2.png)"; }
    else if(bigJ == 0 && smallJ == 3) { board.style.backgroundImage = "url(images/water/water_challenge0-3.png)"; }
    else if(bigJ == 1 && smallJ == 0) { board.style.backgroundImage = "url(images/water/water_challenge1-0.png)"; }
    else if(bigJ == 1 && smallJ == 1) { board.style.backgroundImage = "url(images/water/water_challenge1-1.png)"; }
    else if(bigJ == 1 && smallJ == 2) { board.style.backgroundImage = "url(images/water/water_challenge1-2.png)"; }
    else if(bigJ == 1 && smallJ == 3) { board.style.backgroundImage = "url(images/water/water_challenge1-3.png)"; }
    else if(bigJ == 2 && smallJ == 0) { board.style.backgroundImage = "url(images/water/water_challenge2-0.png)"; }
    else if(bigJ == 2 && smallJ == 1) { board.style.backgroundImage = "url(images/water/water_challenge2-1.png)"; }
    else if(bigJ == 2 && smallJ == 2) { board.style.backgroundImage = "url(images/water/water_challenge2-2.png)"; }
    else if(bigJ == 2 && smallJ == 3) { board.style.backgroundImage = "url(images/water/water_challenge2-3.png)"; }
    else if(bigJ == 3 && smallJ == 0) { board.style.backgroundImage = "url(images/water/water_challenge3-0.png)"; }
    else if(bigJ == 3 && smallJ == 1) { board.style.backgroundImage = "url(images/water/water_challenge3-1.png)"; }
    else if(bigJ == 3 && smallJ == 2) { board.style.backgroundImage = "url(images/water/water_challenge3-2.png)"; }
    else if(bigJ == 3 && smallJ == 3) { board.style.backgroundImage = "url(images/water/water_challenge3-3.png)"; }
    else if(bigJ == 4 && smallJ == 0) { board.style.backgroundImage = "url(images/water/water_challenge4-0.png)"; }
    else if(bigJ == 4 && smallJ == 1) { board.style.backgroundImage = "url(images/water/water_challenge4-1.png)"; }
    else if(bigJ == 4 && smallJ == 2) { board.style.backgroundImage = "url(images/water/water_challenge4-2.png)"; }
    else if(bigJ == 4 && smallJ == 3) { board.style.backgroundImage = "url(images/water/water_challenge4-3.png)"; }
    else if(bigJ == 5 && smallJ == 0) { board.style.backgroundImage = "url(images/water/water_challenge5-0.png)"; }
    else if(bigJ == 5 && smallJ == 1) { board.style.backgroundImage = "url(images/water/water_challenge5-1.png)"; }
    else if(bigJ == 5 && smallJ == 2) { board.style.backgroundImage = "url(images/water/water_challenge5-2.png)"; }
    else if(bigJ == 5 && smallJ == 3) { board.style.backgroundImage = "url(images/water/water_challenge5-3.png)"; }

    if(bigJ == 4){
        if(currentLanguage == 'English') {
            story.innerHTML = "You have successfully ended up with four litres in the big jug! Congratulations.<br>You receive <b>+50</b> torch fuel!"
        }
        else if(currentLanguage == 'Spanish') {
            story.innerHTML = "&iexcl;Has conseguido acabar con cuatro litros en la jarra grande! Enhorabuena.<br>&iexcl;Recibes <b>+50</b> de combustible para antorchas!"
        }
        if(notPlayedWinSound){
            notPlayedWinSound = false;
            sfxChalWin.play();
        }
        setTimeout(() => { completed = true; }, 5000);
    }

    if(completed === true){ //if the challenge is over and you want to go back to the main screen
        clearInterval(running);
        var cBoard = document.getElementById('challengeBoard');
        var mazeCanvas = document.getElementById("gameCanvas");
        if(currentLanguage == 'English') {
            story.innerHTML = "You return to the maze having bested one of its challenges.";
        }
        else if(currentLanguage == 'Spanish') {
            story.innerHTML = "Vuelves al laberinto habiendo superado uno de sus retos.";
        }
        mazeCanvas.className = "showMe";
        cBoard.remove();
        resetButtons();
        challengeStarted = false;
        charx = returnx;
        chary = returny;  
        torchStrength = currentTorch;    
        torchStrength += 50;
        isInWaterChal = false;
        notPlayedWinSound = true;
    }
    else{
        if(option == 1 && bigJ != 4){
            if(currentLanguage == 'English') {
                story.innerHTML = "Remember: your goal is to have four litres in the five litre jug.<br><br>You fill the five litre jug to the top."
            }
            else if(currentLanguage == 'Spanish') {
                story.innerHTML = "Recuerda: tu objetivo es tener cuatro litros en la jarra de cinco litros.<br><br>Llenas la jarra de cinco litros hasta arriba."
            }
            bigJ = 5;
        }
        else if (option == 2 && bigJ != 4){
            if(currentLanguage == 'English') {
                story.innerHTML = "Remember: your goal is to have four litres in the five litre jug.<br><br>You use the five litre jug to pour water into the three litre jug."
            }
            else if(currentLanguage == 'Spanish') {
                story.innerHTML = "Recuerda: tu objetivo es tener cuatro litros en la jarra de cinco litros.<br><br>Con la jarra de cinco litros se vierte agua en la jarra de tres litros."
            }
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
        else if(option == 3 && bigJ != 4){
            if(currentLanguage == 'English') {
                story.innerHTML = "Remember: your goal is to have four litres in the five litre jug.<br><br>There is nothing in the big jug."
            }
            else if(currentLanguage == 'Spanish') {
                story.innerHTML = "Recuerda: tu objetivo es tener cuatro litros en la jarra de cinco litros.<br><br>No hay nada en la gran jarra."
            }
            bigJ = 0; 
        }

        else if(option == 4 && bigJ != 4){
            if(currentLanguage == 'English') {
                story.innerHTML = "Remember: your goal is to have four litres in the five litre jug.<br><br>There is nothing in the small jug."
            }
            else if(currentLanguage == 'Spanish') {
                story.innerHTML = "Recuerda: tu objetivo es tener cuatro litros en la jarra de cinco litros.<br><br>No hay nada en la jarra peque&ntilde;a"
            }
            smallJ = 0;
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
    if(currentLanguage == 'English') {
        button1.value="Attempt challenge";
        button2.value="Skip challenge";
        button3.value="";
        button4.value="";
        story = document.getElementById("storyText")
        story.innerHTML = "Before you stands a raised slab holding two empty vases; your adventurer's intuition tells you that one vase can hold <b>THREE LITRES</b>, and the other can hold <b>FIVE LITRES</b>. Glyphs promise a great reward to anyone wise enough to pour out exactly four litres of water. However, it warns of a swift death befalling anyone who would try and fail.";
    }
    else if(currentLanguage == 'Spanish') {
        // Machine translated, i don't know spanish
        button1.value="Intentar el reto";
        button2.value="Saltearse el reto";
        button3.value="";
        button4.value="";
        story = document.getElementById("storyText")
        story.innerHTML = "Frente a ti hay una losa elevada que contiene dos jarrones vacios; tu intuicion de aventurero te dice que en uno de ellos caben <b>TRES LITROS</b> y en el otro <b>CINCO LITROS</b>. Los glifos prometen una gran recompensa a quien sea lo suficientemente sabio como para verter exactamente cuatro litros de agua. Sin embargo, advierte de una muerte rapida a quien lo intente y fracase.";
    }
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
        if(currentLanguage == 'English') {
            button1.value="Fill big jug to max";
            button2.value="Pour big jug into small jug";
            button3.value="Empty big jug";
            button4.value="Empty small jug";
        }
        else if(currentLanguage == 'Spanish') {
            button1.value="Llena la jarra grande al maximo";
            button2.value="Vierta la jarra grande en la jarra pequena";
            button3.value="Vaciar la jarra grande";
            button4.value="Vaciar la jarra pequena";
        }
        running = setInterval(waterChallenge, 1000/FPS);
    }
    else if (option == 2){   
        story = document.getElementById("storyText")
        clearInterval(running);
        var cBoard = document.getElementById('challengeBoard');
        var mazeCanvas = document.getElementById("gameCanvas");
        if(currentLanguage == 'English') {
            story.innerHTML = "Returning to the maze, you can't help but wonder what could have been. Nonetheless, you still devote yourself to finding the exit.";
        }
        else if(currentLanguage == 'Spanish') {
            story.innerHTML = "Al volver al laberinto, no puedes evitar preguntarte qu&eacute; podr&iacute;a haber sido. Sin embargo, te dedicas a encontrar la salida.";
        }
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
    isInWaterChal = false;
}

function button1Event(){
    if(isInWaterChal) { sfxWater.play(); }
    option = 1;
}

function button2Event(){;
    if(isInWaterChal) { sfxWater.play(); }
    option = 2;
}

function button3Event(){
    if(isInWaterChal) { sfxWater.play(); }
    option = 3;
}

function button4Event(){
    if(isInWaterChal) { sfxWater.play(); }
    option = 4;
}