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
		
		for(var i = 0; i < 4; i++ ){
	        for( var j = 3;j > 0; j--){
	            if (BlockTable[j][i]!=0) {
	            	if (BlockTable[j-1][i] == 0){
	            		BlockTable[j-1][i] = BlockTable[j][i];
	            	}else if (BlockTable[j][i] == BlockTable[j-1][i]){
	            		BlockTable[j-1][i] = 2*BlockTable[j][i];
	            		BlockTable[j][i] = 0;
	            		j--;
	            		while (BlockTable[j-1][i] == 0 || j>0){
	            			BlockTable[j-1][i] = BlockTable[j][i];
	            			BlockTable[j][i] = 0;
	            			j--;
	            		}
	            	}
	            }
	        }
	    }

		return true;
	};

	// when down key pressed, run DownMoving
	function DownMoving()
	{
		if(!canMoveDown())
		{
			return false;
		}
		
		for(var i = 0; i < 4; i++ ){
	        for( var j = 0;j < 3; j++){
	            if (BlockTable[j][i]!=0) {
	            	if (BlockTable[j+1][i] == 0){
	            		BlockTable[j+1][i] = BlockTable[j][i];
	            	}else if (BlockTable[j][i] == BlockTable[j+1][i]){
	            		BlockTable[j+1][i] = 2*BlockTable[j][i];
	            		BlockTable[j][i] = 0;
	            		j++;
	            		while (BlockTable[j+1][i] == 0 || j<3){
	            			BlockTable[j+1][i] = BlockTable[j][i];
	            			BlockTable[j][i] = 0;
	            			j++;
	            		}
	            	}
	            }
	        }
	    }

		return true;
	};


	// when left key pressed, run LeftMoving
	function LeftMoving()
	{
		if(!canMoveLeft())
		{
			return false;
		}
		
		for(var j = 0; j < 4; j++ ){
	        for( var i = 3;i > 0; i--){
	            if (BlockTable[j][i]!=0) {
	            	if (BlockTable[j][i-1] == 0){
	            		BlockTable[j][i-1] = BlockTable[j][i];
	            	}else if (BlockTable[j][i] == BlockTable[j][i-1]){
	            		BlockTable[j][i-1] = 2*BlockTable[j][i];
	            		BlockTable[j][i] = 0;
	            		i--;
	            		while (BlockTable[j][i-1] == 0 || i>0){
	            			BlockTable[j][i-1] = BlockTable[j][i];
	            			BlockTable[j][i] = 0;
	            			i--;
	            		}
	            	}
	            }
	        }
	    }

		return true;
	};

	// when right key pressed, run RightMoving
	function RightMoving()
	{
		if(!canMoveRight())
		{
			return false;
		}
		
		for(var j = 0; j < 4; j++ ){
	        for( var i = 0;i < 3; i++){
	            if (BlockTable[j][i]!=0) {
	            	if (BlockTable[j][i+1] == 0){
	            		BlockTable[j][i+1] = BlockTable[j][i];
	            	}else if (BlockTable[j][i] == BlockTable[j][i+1]){
	            		BlockTable[j][i+1] = 2*BlockTable[j][i];
	            		BlockTable[j][i] = 0;
	            		i++;
	            		while (BlockTable[j][i+1] == 0 || i<3){
	            			BlockTable[j][i+1] = BlockTable[j][i];
	            			BlockTable[j][i] = 0;
	            			i++;
	            		}
	            	}
	            }
	        }
	    }

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


	var updateBlockTable = function (id, num) {
		var row = id.substring(5,5);
		var col = id.substring(7,7);  
		BlockTable[row][col] = num;
	};
	
