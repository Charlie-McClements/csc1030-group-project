// declare variables

// load canvas
canvas = document.getElementById("gameCanvas");
context = canvas.getContext("2d");

//game vars
const FPS = 60;
var charx, chary;     //position of the top left of the squares
var canvas, context;
var difficulty = 5;
var wallSize = 1 * difficulty;
var charSize = 10 * difficulty;    //size of square in pixels
var square = wallSize + charSize;   //size of each grid square on the board
var boardSize = Math.floor(canvas.width / (wallSize + charSize)) * square;
var Cells = (boardSize / square); 
var allCells = [] 
    for(let incx = 0; incx < Cells; incx++){
        for(let incy =0; incy < Cells; incy++){
            x = wallSize + (square * incx)
            y = wallSize + (square * incy)
            coord = [x,y]
            allCells.push(coord);
        }    
    }

//colours
var wallColour = 'rgba(128,128,128, 255)';
var wallColourQ = [128, 128, 128, 255];
var floorColour = 'rgba(0,0,0, 255)';
var floorColourQ = [0, 0, 0, 255];
var winColour = 'rgba(0,256,0, 256)';
var winColourQ = [0,255,0, 255];
var charColour = 'rgb(255,128,0)';

// set up interval (game loop)
setInterval(update, 1000/FPS);

// character starting position
charx = wallSize;
chary = wallSize;

function getRndInteger(min, max) {  //random number generator function
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function move(direction){
    switch(direction){
        case "down":
            checkx = charx;
            checky = chary + charSize;
            var canvas = gameCanvas.getContext('2d');
            var colour = canvas.getImageData(checkx, checky, 1, 1).data;
            if(colour[0] == floorColourQ[0],colour[1] == floorColourQ[1],colour[2] == floorColourQ[2]){
                chary += square;
            }
            break;
        case "up":
            checkx = charx;
            checky = chary - 1;
            var canvas = gameCanvas.getContext('2d');
            var colour = canvas.getImageData(checkx, checky, 1, 1).data;
            if(colour[0] == floorColourQ[0] && colour[1] == floorColourQ[1] && colour[2] == floorColourQ[2]){
                chary -= square;
            }
            break;
        case "right":
            checkx = charx + charSize;
            checky = chary;
            var canvas = gameCanvas.getContext('2d');
            var colour = canvas.getImageData(checkx, checky, 1, 1).data;
            if(colour[0] == floorColourQ[0] && colour[1] == floorColourQ[1] && colour[2] == floorColourQ[2]){
                charx += square;
            }
            break;
        case "left":
            checkx = charx - 1;
            checky = chary;
            var canvas = gameCanvas.getContext('2d');
            var colour = canvas.getImageData(checkx, checky, 1, 1).data;
            if(colour[0] == floorColourQ[0] && colour[1] == floorColourQ[1] && colour[2] == floorColourQ[2]){
                charx -= square;
            }
            break;
    }
}

window.addEventListener("keydown", function (event) {   //handles keyboard input, for now allows you to use arrow keys to move the character
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }  
    switch (event.key) {
      case "s":
        // code for "down arrow" key press.
         move("down");
         break;
      case "w":
        // code for "up arrow" key press.
        move("up");
        break;
      case "a":
        // code for "left arrow" key press.
        move("left");
        break;
      case "d":
        // code for "right arrow" key press.
        move("right");
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    event.preventDefault();
  }, true);

function win_check(){
    var canvas = gameCanvas.getContext('2d');
    var colour = canvas.getImageData(charx + 5, chary + 5, 1, 1).data;
    if(colour[0] == winColourQ[0] && colour[1] == winColourQ[1] && colour[2] == winColourQ[2]){
        alert("Congratulations, you have completed the maze")
        charx = wallSize;
        chary = wallSize;
    }
}
function draw_grid(){
    wallNumber = (canvas.width + wallSize) / difficulty;
    wallSpace = charSize + wallSize;
    x=0;
    for(let inc=0; inc<wallNumber; inc++){   //draw grey lines spaced apart evenly until the board is full  
    context.fillStyle = wallColour;
    context.fillRect(x, 0, wallSize, boardSize);
    context.fillRect(0, x, boardSize + wallSize, wallSize);
    x += wallSpace;
    }

}

function in_array(array, coord){
    for(let i =0; i<array.length; i++){
        if(array[i][0] == coord[0] && array[i][1] == coord[1]){
            return true
        }
    }
    return false;
}

function generate_maze(){
    draw_grid();
    var currentCell = [wallSize,wallSize]   //start in the top right    
    var totalCells = (boardSize / square) * (boardSize / square);  
    console.log(totalCells)
    var forceQuit = false;  
    var visited = [];    //array containing the coordinates of all the squares that have been visited    
    while(visited.length < totalCells && forceQuit == false){               
        var choices = [];
        var right = [currentCell[0] + square, currentCell[1]];
        var left = [currentCell[0] - square, currentCell[1]];
        var up = [currentCell[0], currentCell[1] - square];
        var down = [currentCell[0], currentCell[1] + square];    
        if(right[0] < boardSize && in_array(visited,right) == false){
            choices.push(right);            
        }
        if(left[0] >= wallSize && in_array(visited,left) == false){
            choices.push(left);
        }
        if(up[1] >= wallSize && in_array(visited,up) == false){
            choices.push(up);
        }
        if(down[1] < boardSize && in_array(visited, down) == false){
            choices.push(down);
        }
        if(choices.length != 0){   
            option = choices[getRndInteger(0, choices.length -1)];   
                     
            if(option[0] > currentCell[0]){ //delete wall to right if you're moving to the right
                //delete right wall
                context.fillStyle = floorColour;
                context.fillRect(currentCell[0] + charSize,currentCell[1],wallSize,charSize);
            }
            else if(option[0] < currentCell[0]){
                //delete left wall
                context.fillStyle = floorColour;
                context.fillRect(currentCell[0] - wallSize,currentCell[1],wallSize,charSize);
            }
            else if(option[1] > currentCell[1]){
                //delete down wall
                context.fillStyle = floorColour;
                context.fillRect(currentCell[0],currentCell[1] + charSize,charSize,wallSize);
            }
            else if (option[1] < currentCell[1]){
                //delete up wall
                context.fillStyle = floorColour;
                context.fillRect(currentCell[0],currentCell[1] - wallSize,charSize,wallSize);                              
            }
            currentCell = option;
            visited.push(currentCell); 
        }
        else{
            inc = 1;
            while(true){
                inc ++;
                if(inc>visited.length){
                    forceQuit = true;
                }
                var len = visited.length - inc;
                x = visited[len][0];
                y = visited[len][1];
                currentCell = [x,y];
                var choices = [];
                var right = [currentCell[0] + square, currentCell[1]];
                var left = [currentCell[0] - square, currentCell[1]];
                var up = [currentCell[0], currentCell[1] - square];
                var down = [currentCell[0], currentCell[1] + square];    
                if(right[0] < boardSize && in_array(visited,right) == false){
                    break;         
                }
                if(left[0] >= wallSize && in_array(visited,left) == false){
                    break;
                }
                if(up[1] >= wallSize && in_array(visited,up) == false){
                    break;
                }
                if(down[1] < boardSize && in_array(visited, down) == false){
                    break;
                }   
            } 
        }     
    }    
}
generate_maze();

// update function
function update() {
    //check for win
    win_check();

    // draw background      
    for(let inc = 0;inc<allCells.length;inc++){
        context.fillStyle = floorColour;
        context.fillRect(allCells[inc][0], allCells[inc][1], charSize, charSize);
    }
    //draw player
    context.fillStyle = charColour;
    context.fillRect(charx, chary, charSize, charSize);
    //draw finish
    context.fillStyle = winColour;
    context.fillRect(boardSize - charSize, boardSize - charSize, charSize, charSize);
    
}