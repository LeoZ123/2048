/**
 * Created by Leo.H & MC.Gong on 2017/3/14.
 */


// This file is used to start and restart the game

/* mapping the game table*/
var BlockTable = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

//check if it is full
var isFull = function()
{
    if (RestBlock === 16)
    {
        return true;
    }
    return false;
};

/*RestBlock to record how many empty block left and available to create new value*/
var RestBlock;
var Score;

//start the game
var StartGame=function ()
{
    RestBlock=16;
    Score=0;
    getRandomFreeCell();                //generate two blocks to start
    getRandomFreeCell();
};
