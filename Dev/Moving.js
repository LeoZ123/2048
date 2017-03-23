/**
 * Created by Leo.H & MC.Gong on 2017/3/6.
 */

// This file is the main script file.
// This file is used to move the block.

/*-----------------------------keypressed Function---------------------------*/
	//keypressed function to move blocks
/*	document.KeyPressed=function(event)
	{
		if(!isGameOver)
		{
			//Move Up
			if(event.keycode == 38)
			{
				if(UpMoving())
				getRandomFreeCell();
			}

			//Move Down
			if(event.keycode == 40)
			{
				if(DownMoving(())
				{
					getRandomFreeCell();
				}
			}

			//Move Left
			if(event.keycode == 37)
			{
				if(LeftMoving(())
				{
					getRandomFreeCell();
				}
			}

			//Move Right
			if(event.keycode == 49)
			{
				if(RightMoving())
				{
					getRandomFreeCell();
				}
			}

			if(noMove())
			{
				isGameOver = true;
			}

		}
	};
*/
/*-------------------------------Moving Function---------------------------*/
	// when up key pressed, run UpMoving
	function UpMoving()
	{
		if(!canMoveUp())
		{
			return false;
		}
		// TODO

		return true;
	};

	// when down key pressed, run DownMoving
	function DownMoving()
	{
		if(!canMoveDown())
		{
			return false;
		}
		// TODO

		return true;
	};


	// when left key pressed, run LeftMoving
	function LeftMoving()
	{
		if(!canMoveLeft())
		{
			return false;
		}
		//TODO

		return true;
	};

	// when right key pressed, run RightMoving
	function RightMoving()
	{
		if(!canMoveRight())
		{
			return false;
		}
		//TODO
		return true;
	};


/*-------------------------------Display Function---------------------------*/
	var getRandomNumber = function () {
		return Math.random() > 0.3 ? 2 : 4;
	};


	//generate a valid to store an random num created from getRandomNumber
	var getRandomFreeCell = function () {
		var count = 4;
		var RandColumn = Math.floor(Math.random() * count);
		var RandRow = Math.floor(Math.random() * count);
		var cellValue = document.getElementById("block"+RandRow+"-"+RandColumn).innerHTML;

		if (cellValue == ''){
			return "block"+RandRow+"-"+RandColumn;
		}
	};



	
