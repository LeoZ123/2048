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

//start the game
$(document).ready(function ()
{
    refresh();
    /*$(document).keydown(function (event)
    {
        //if(!noMove())
		//{
			//Move Up
			if(event.keyCode == 38)
			{
				if(canMoveUp()){
					UpMoving();
					show();
					showValue(getRandomFreeCell(),getRandomNumber());
				}

			}

			//Move Down
			if(event.keyCode == 40)
			{
				if(canMoveDown(())
				{
					DownMoving();
					show();
					showValue(getRandomFreeCell(),getRandomNumber());
				}
			}

			//Move Left
			if(event.keyCode == 37)
			{
				if(canMoveLeft(())
				{
					LeftMoving();
					show();
					showValue(getRandomFreeCell(),getRandomNumber());
				}
			}

			//Move Right
			if(event.keyCode == 49)
			{
				if(canMoveRight())
				{
					RightMoving();
					show();
					showValue(getRandomFreeCell(),getRandomNumber());
				}
			}
		//}
	});*/
});

//play again
function refresh () {
    for (var i=0;i<4;i++)
    {
        for(var j=0;j<4;j++)
        {
            document.getElementById("block"+i+"-"+j).innerHTML="";
            BlockTable[i][j]=0;
        }
    }
    showValue(getRandomFreeCell(),getRandomNumber());
    showValue(getRandomFreeCell(),getRandomNumber());
}
