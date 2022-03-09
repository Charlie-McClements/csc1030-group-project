function endScreen(){
    stopTimer();
    document.getElementById('endScreen').className = "showMe";
    document.getElementById('gameScreen').className = "hideMe";
    document.getElementById('startScreen').className = "hideMe";

}