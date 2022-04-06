var myTimer;
var duration;
var minutes;
var seconds;
var dialogue = 1;
var characterName;
var gender;
var challenge;
var currentLanguage = 'English';
var myTorchStrength

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
        endScreen('Unlucky, '+characterName+'. Out of time!');
        stopTimer();
    }
}

function decreaseTorch() {
    if (torchStrength >= 50) {
        torchStrength = torchStrength - 0.33;
    } else {
        clearInterval(myTorchStrength);
    }
}

function startButton() {
    document.getElementById('startScreen').className = "hideMe"
    document.getElementById('avatarDetails').className = "showMe"
    sfxClick.play();
}

function accessibilityButton() {
    document.getElementById('startScreen').className = "hideMe"
    document.getElementById('accessibilityScreen').className = "showMe"
    sfxClick.play();
}

function accessBackButton() {
    document.getElementById('startScreen').className = "showMe"
    document.getElementById('accessibilityScreen').className = "hideMe"
    sfxClick.play();
}

function begin() {
    document.getElementById('avatarDetails').className = "hideMe"
    document.getElementById('gameScreen').className = "showMe"

    sfxClick.play();

    characterName = document.getElementById('characterName').value;

    challenge = document.getElementById('difficulty').value;
    if(challenge == 'Easy'){
        setDifficulty(10);
    } else if (challenge == 'Medium') {
        setDifficulty(5);
    } else if(challenge == 'Hard') {
        setDifficulty(3);
    }
    console.log(difficulty);
    // set up interval (game loop)
    setInterval(update, 1000 / FPS);
    populate_grid();
    generate_maze(); 
    startPrologue();
    startTimer();
    myTorchStrength = setInterval('decreaseTorch()', 1000);
    console.log(seedValue);

}

function sizeInfo() {
    if(currentLanguage == 'English') {
        document.getElementById('accessibilityDescription').innerHTML = 'Select game text size if you have troubled vision. <br>Normal = 1x text size<br>Large = 1.5x text size<br>Huge = 2x text size';
    } else if(currentLanguage == 'Spanish') {
        document.getElementById('accessibilityDescription').innerHTML = 'Seleccione el tamano del texto del juego si tiene problemas de vision. <br>Normal = 1x tamano de texto<br>Grande = 1.5x tamano de texto<br>Enorme = 2x tamano de texto';
    }
}
function languageInfo() {
    if(currentLanguage == 'English') {
        document.getElementById('accessibilityDescription').innerHTML = 'Select language to play the game in. <br>Current options: English, Spanish'
    } else if(currentLanguage == 'Spanish') {
        document.getElementById('accessibilityDescription').innerHTML = 'Seleccione el idioma para jugar. <br>Opciones actuales: ingles, espanol';
    }
}
function clearInfo() {
    document.getElementById('accessibilityDescription').innerHTML = '';
}

function swapStyleSheet(sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
}

function changeLanguage() {
    var language = document.getElementById('language');
    for (var i = 0; i < language.length; i++) {
        if (language[i].selected) {
            if(language[i].value == 'English') {
                currentLanguage = 'English';
                changeToEnglish();
            } else if(language[i].value == 'Spanish') {
                currentLanguage = 'Spanish';
                changeToSpanish();
            }
        }
    }
}

function changeToSpanish() {
    //Accessibility Screen
    document.getElementById('accessTitle').innerHTML = 'Accesibilidad';
    document.getElementById('fontText').innerHTML = '<u>Tamano de fuente</u>';
    document.getElementById('normalSized').innerHTML = 'Normal';
    document.getElementById('largeSized').innerHTML = 'Grande';
    document.getElementById('hugeSized').innerHTML = 'Enorme';
    document.getElementById('languageText').innerHTML = '<u>Idioma</u>';
    document.getElementById('englishText').innerHTML = 'Ingles';
    document.getElementById('spanishText').innerHTML = 'Espanol';
    document.getElementById('backButton2').innerHTML = 'Regreso';
    //Start Screen
    document.getElementById('startButton').innerHTML = 'Empezar juego';
    document.getElementById('customizeButton').innerHTML = 'Personalizacion';
    document.getElementById('accessibilityButton').innerHTML = 'Funciones de accesibilidad';
    //Customise Screen
    document.getElementById('customiseCharacterTitle').innerHTML = 'Personalizar';
    document.getElementById('charColourText').innerHTML = '<u> Color del caracter </u>';
    document.getElementById('orangeText').innerHTML = 'Naranja';
    document.getElementById('whiteText').innerHTML = 'Blanco';
    document.getElementById('lightcoralText').innerHTML = 'Coral claro';
    document.getElementById('yellowText').innerHTML = 'Amarillo';
    document.getElementById('bgColourText').innerHTML = '<u>Color de fondo</u>';
    document.getElementById('darkText').innerHTML = 'Oscuro';
    document.getElementById('lightText').innerHTML = 'Ligero';
    document.getElementById('devColText').innerHTML = 'Eleccion del desarrollador';
    document.getElementById('backButton1').innerHTML = 'Regreso';
    //Avatar Details Screen
    document.getElementById('avatarTitle').innerHTML = 'Detalles del avatar';
    document.getElementById('characterNamed').innerHTML = '<u>Nombre del personaje</u>';
    document.getElementById('mDifficulty').innerHTML = '<u>Dificultad del laberinto</u>';
    document.getElementById('easyDiff').innerHTML = 'Facil';
    document.getElementById('mediumDiff').innerHTML = 'Medio';
    document.getElementById('hardDiff').innerHTML = 'Duro';
    document.getElementById('begin').innerHTML = 'Comienzo';
    //Game Screen
    document.getElementById('timer').innerHTML = 'Tiempo restante: <span id="minutes">00</span>:<span id="seconds">00</span>';
    //Pressure Plate Challenge
    document.getElementById('showGameDisplay').innerHTML = 'Introduzca el rompecabezas de la placa de presion';
    document.getElementById('skipPressurePChal').innerHTML = 'Saltar';
    document.getElementById('success-msg').innerHTML = 'Meta alcanzada';
}

function changeToEnglish() {
    //Accessibility Screen
    document.getElementById('accessTitle').innerHTML = 'Accessibility';
    document.getElementById('fontText').innerHTML = '<u>Font Size</u>';
    document.getElementById('normalSized').innerHTML = 'Normal';
    document.getElementById('largeSized').innerHTML = 'Large';
    document.getElementById('hugeSized').innerHTML = 'Huge';
    document.getElementById('languageText').innerHTML = '<u>Language</u>';
    document.getElementById('englishText').innerHTML = 'English';
    document.getElementById('spanishText').innerHTML = 'Spanish';
    document.getElementById('backButton2').innerHTML = 'Return';
    //Start Screen
    document.getElementById('startButton').innerHTML = 'Start Game';
    document.getElementById('customizeButton').innerHTML = 'Customisation';
    document.getElementById('accessibilityButton').innerHTML = 'Accessibility Features';
    //Customise Screen
    document.getElementById('customiseCharacterTitle').innerHTML = 'Customise';
    document.getElementById('charColourText').innerHTML = '<u> Character Colour </u>';
    document.getElementById('orangeText').innerHTML = 'Orange';
    document.getElementById('whiteText').innerHTML = 'White';
    document.getElementById('lightcoralText').innerHTML = 'Lightcoral';
    document.getElementById('yellowText').innerHTML = 'Yellow';
    document.getElementById('bgColourText').innerHTML = '<u>Background Colour</u>';
    document.getElementById('darkText').innerHTML = 'Dark';
    document.getElementById('lightText').innerHTML = 'Light';
    document.getElementById('devColText').innerHTML = 'Developer Choice';
    document.getElementById('backButton1').innerHTML = 'Return';
    //Avatar Details Screen
    document.getElementById('avatarTitle').innerHTML = 'Avatar Details';
    document.getElementById('characterNamed').innerHTML = '<u>Character Name</u>';
    document.getElementById('mDifficulty').innerHTML = '<u>Maze Difficulty</u>';
    document.getElementById('easyDiff').innerHTML = 'Easy';
    document.getElementById('mediumDiff').innerHTML = 'Medium';
    document.getElementById('hardDiff').innerHTML = 'Hard';
    document.getElementById('begin').innerHTML = 'Start';
    //Game Screen
    document.getElementById('timer').innerHTML = 'Time Left: <span id="minutes">00</span>:<span id="seconds">00</span>';
    //Pressure Plate Challenge
    document.getElementById('showGameDisplay').innerHTML = 'Enter Pressure Plate Puzzle';
    document.getElementById('skipPressurePChal').innerHTML = 'Skip';
    document.getElementById('success-msg').innerHTML = 'Goal Reached';
}