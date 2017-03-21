/**
 * Created by Leo.H & MC.Gong on 2017/3/14.
 */
// This file is used to start and restart the game

var Score = document.querySelector(".score");
var isGameOver;

var button = document.querySelector(".btn-slide");

/* mapping the game table*/
var BlockTable = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];


var newGame = function () {
    initGame();
    isGameOver = false;
    front.zIndex = "1";
    game_over.display = "none";
    score.innerHTML = "";
};

var gameOver = function () {
    isGameOver = true;
    front.zIndex = "-";
    game_over.display = "block";
    score.innerHTML = "Your Score: " + CalculateScore().toString();
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
    getRandomFreeCell();                //generate two blocks to start
    getRandomFreeCell();
    Score.innerHTML = "Your Score: " + CalculateScore().toString();
};
