/**
 * Created by Leo.H & MC.Gong on 2017/3/14.
 */
// This file is used to start and restart the game

var isGameOver;

/* mapping the game table*/
var BlockTable = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
];


var newGame = function () {
    InitialGame();
};

var gameOver = function () {
    isGameOver = true;
};


//check if it is full
var isFull = function()         //Need to be updated
{
    if (RestBlock === 16)
    {
        return isGameOver=true;
    }
    return isGameOver=false;
};

/*RestBlock to record how many empty block left and available to create new value*/
var RestBlock;
var Score;

function InitialGame()
{
    RestBlock=16;
    Score=0;
    isGameOver=false;
}

//start the game
var StartGame=function ()
{
    InitialGame();
    refresh();
};

//play again
var refresh = function () {
    for (var i=0;i<4;i++)
    {
        for(var j=0;j<4;j++)
        {
            document.getElementById("block"+i+"-"+j).innerHTML="";
        }
    }
    showValue(getRandomFreeCell(),getRandomNumber());
    showValue(getRandomFreeCell(),getRandomNumber());
};
