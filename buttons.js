function buttonLeft(){
    gameCanvas.dispatchEvent(new KeyboardEvent('keydown', {'key': 'a'}))
}

function buttonRight(){
    gameCanvas.dispatchEvent(new KeyboardEvent('keydown', {'key': 'd'}))
}

function buttonUp(){
    gameCanvas.dispatchEvent(new KeyboardEvent('keydown', {'key': 'w'}))
}

function buttonDown(){
    gameCanvas.dispatchEvent(new KeyboardEvent('keydown', {'key': 's'}))
}

//just some code to map the buttons on the html page to keypresses

