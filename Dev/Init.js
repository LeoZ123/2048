/**
 * Created by Leo.H & MC.Gong on 2017/3/14.
 */


// This file is used to start and restart the game

var isFull()
{
    if (RestBlock === 16)
    {
        return true;
    }
    return false;
}

var start=function ()
{
    /* mapping the game table*/
    var BlockTable = [
	    [0, 0, 0, 0],
	    [0, 0, 0, 0],
	    [0, 0, 0, 0],
	    [0, 0, 0, 0]
	];
    getRandomFreeCell();                //generate two blocks to start
    getRandomFreeCell();

}
