var completed2 = false;
var option = 0;
var story;
var challengeStarted = false;
var returnx = 0;
var returny = 0;
var first = true;
var currentTorch;
var spiderRunning;
var notPlayedWinSound = true;

function spiderChallenge() {
    var boardDisplay = document.getElementById('board');
    boardDisplay.style.display = "none";
    var buttonDisplay = document.getElementById('buttons');
    buttonDisplay.style.display = "none";
    var spiderBoard = document.getElementById("spiderChallengeDiv");
    story = document.getElementById("storyText")
    if (completed2 === true) { //if the challenge is over and you want to go back to the main screen
        sfxMusic.play();
        sfxMusicBattle.pause();
        clearInterval(spiderRunning);
        endChallenge();
       if(currentLanguage == 'English') {
            story.innerHTML = "You continue on your adventure. The incident with the deadly spider is in the past now."
        }
        else if(currentLanguage == 'Spanish') {
            story.innerHTML = "Contin&uacute;a su aventura. El incidente con la ara&ntilde;a mortal ya forma parte del pasado."
        }
        resetButtons();
        challengeStarted = false;
        charx = returnx;
        chary = returny;
        notPlayedWinSound = true;

        if(lives <= 0){
            endScreen('Bad luck, ' + characterName + '. You ran out of lives!');
            sfxMusic.pause();
            sfxDamage.play();
        }
    }
    else {
        if (option == 1) {
            spiderBoard.style.backgroundImage = "url(images/spider_fire.png)";
            if(notPlayedWinSound){
                notPlayedWinSound = false;
                sfxChalWin.play();
            }
            if(currentLanguage == 'English') {
                story.innerHTML = "You hit the beast with fire! You watch as it goes up in smoke, along with <b>-20</b> of your torch fuel."
            }
            else if(currentLanguage == 'Spanish') {
                story.innerHTML = "&iexcl;Golpeas a la bestia con fuego! Ves c&oacute;mo se convierte en humo, junto con <b>-20</b> del combustible de tu antorcha."
            }
            torchStrength -= 20;
            setTimeout(() => { completed2 = true; }, 4000);
        }
        else if (option == 2) {
            if(currentLanguage == 'English') {
                story.innerHTML = "You attempt to outrun the spider, but it trips you up and gnaws at one of your limbs. Before you can retaliate, it scuttles off."
            }
            else if(currentLanguage == 'Spanish') {
                story.innerHTML = "Intentas huir de la ara&ntilde;a, pero &eacute;sta te hace tropezar y te roe una de las extremidades. Antes de que puedas contraatacar, se escapa."
            }
            spiderBoard.style.backgroundImage = "url(images/spider_lose.png)";
            returnx = wallSize;
            returny = wallSize;
            setTimeout(() => { completed2 = true; }, 4000);
            if (first == true) {  //need this clause as this if statement is triggered more than once before the timeout finishes
                first = false;
                lives -= 1;
            }

        }
        else if (option == 3) {
            if(currentLanguage == 'English') {
                story.innerHTML = "You greet the spider with a right-hand blow, but it strikes back in kind and gnaws at one of your limbs. Before you can retaliate, it scuttles off."
            }
            else if(currentLanguage == 'Spanish') {
                story.innerHTML = "Saludas a la ara&ntilde;a con un golpe de derecha, pero &eacute;sta te devuelve el golpe y te roe una de las extremidades. Antes de que puedas contraatacar, se escapa."
            }
            spiderBoard.style.backgroundImage = "url(images/spider_lose.png)";
            setTimeout(() => { completed2 = true; }, 4000);
            if (first == true) { //need this clause as this if statement is triggered more than once before the timeout finishes
                first = false;
                lives -= 1;
            }
           
        }

        else if (option == 4) {
            if(currentLanguage == 'English') {
                story.innerHTML = "You shamfully retreat at great cost to your honour and torch fuel."
            }
            else if(currentLanguage == 'Spanish') {
                story.innerHTML = "Te retiras vergonzosamente a costa de tu honor y del combustible de la antorcha."
            }
            spiderBoard.style.backgroundImage = "url(images/spider_skip.png)";
            setTimeout(() => { completed2 = true; }, 4000);
            if (first == true) { //need this clause as this if statement is triggered more than once before the timeout finishes
                first = false;
                lives -= 1;
                torchStrength -= 50;
            }
        }
    }
}

function endChallenge() {
    var button1 = document.getElementById("Spider1");
    var button2 = document.getElementById("Spider2");
    var button3 = document.getElementById("Spider3");
    var button4 = document.getElementById("Spider4");
    var bg = document.getElementById('spiderChallengeDiv');
    var boardDisplay = document.getElementById('board');
    var buttonDisplay = document.getElementById('buttons');

    clearInterval(spiderRunning);
    challengeStarted = false;
    charx = returnx;
    chary = returny;
    boardDisplay.style.display = "revert";
    boardDisplay.style.backgroundImage = "";
    buttonDisplay.style.display = "revert";
    bg.style.display = "none";
    button1.className = "hideMe";
    button2.className = "hideMe";
    button3.className = "hideMe";
    button4.className = "hideMe";
}

function startSpiderChallenge() {
    sfxMusic.pause();
    sfxMusicBattle.play();
    var boardDisplay = document.getElementById('board');
    boardDisplay.style.display = "none";
    var buttonDisplay = document.getElementById('buttons');
    buttonDisplay.style.display = "none";

    challengeStarted = true;
    first = true;
    returnx = charx;
    returny = chary;
    option = 0;
    completed2 = false;

    var bg = document.getElementById('spiderChallengeDiv');
    bg.style.display = "flex";
    bg.style.backgroundImage = "url(images/spider_start.png)";

    // Setup buttons
    var button1 = document.getElementById("Spider1");
    var button2 = document.getElementById("Spider2");
    var button3 = document.getElementById("Spider3");
    var button4 = document.getElementById("Spider4");
    button1.className = "showMe";
    button2.className = "showMe";
    button3.className = "showMe";
    button4.className = "showMe";
    button1.onclick = button1Event;
    button2.onclick = button2Event;
    button3.onclick = button3Event;
    button4.onclick = button4Event;
    if(currentLanguage == 'English') {
        story.innerHTML = "As you descend deeper into the maze, you are caught off guard by a monstrous spider plunging onto your path from above! It seems to be looking for its next meal..."
        button1.innerHTML = "Attack with your torch! However, torch strength will decrease!";
        button2.innerHTML = "Try to run past, you might be quick enough.";
        button3.innerHTML = "Attack it with your fists";
        button4.innerHTML = "Skip this challenge (Lose a life and torch strength!)";
    }
    else if(currentLanguage == 'Spanish') {
        story.innerHTML = "&iexcl;Mientras desciendes por el laberinto, te pilla desprevenido una monstruosa ara&ntilde;a que se precipita sobre tu camino desde arriba! Parece estar buscando su pr&oacute;xima comida..."
        button1.innerHTML = "&iexcl;Ataquen con su antorcha! Sin embargo, la fuerza de la antorcha disminuir&aacute;.";
        button2.innerHTML = "Intenta pasar corriendo, puede que seas lo suficientemente r&aacute;pido.";
        button3.innerHTML = "Ataca con tus pu&ntilde;os";
        button4.innerHTML = "S&aacute;ltate este reto (&iexcl;Pierde una vida y antorcha de fuerza!)";
    }
    story = document.getElementById("storyText")
    //var board = document.getElementById('gameScreen');
    //board.className = "hideMe";
    spiderRunning = setInterval(spiderChallenge, 1000 / FPS);

}

function resetButtons() {
    var gameButtons = document.getElementById('gameButtons');
    gameButtons.style.display = "revert";
}

function button1Event() {
    sfxClick.play();
    option = 1;
}

function button2Event() {
    sfxClick.play();
    option = 2;
}

function button3Event() {
    sfxClick.play();
    option = 3;
}

function button4Event() {
    sfxClick.play();
    option = 4;
}
