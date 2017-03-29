/**
 * Created by Leo.H & MC.Gong on 2017/3/6.
 */

// This file is the main script file.
// This file is used to move the block.

/*-----------------------------keypressed Function---------------------------*/
	//keypressed function to move blocks by using Arrow and WASD
	function KeyPressed(event)
	{
			var code = event.which || event.keyCode;

			//Move Up
			if( code == 38 || code == 119)
			{
				UpMoving();
			}

			//Move Down
			if(code == 40 || code == 115)
			{
				DownMoving();
			}

			//Move Left
			if(code == 37 || code == 97)
			{
				LeftMoving();
			}

			//Move Right
			if(code == 49 || code == 100)
			{
				RightMoving();
			}
	}

/*-------------------------------Moving Function---------------------------*/
	// when up key pressed, run UpMoving
	/*
		move from BOTTOM to TOP
		if the top cell of the current cell is 0
			=> just move up
		if it can merge
			=> merge the cell to top and clean the current cell
				=> after the merge, check the top cell is 0
					=> if it is 0, move the cell the top UNTIL it move to the FINAL cell
	*/
	function UpMoving()
	{
		var show = false;
		for(var i = 0; i < 4; i++ ){
	        for( var j = 0;j <4; j++){
	        	if (BlockTable[j][i]==0){
	        		cancelUpZero(j,i);
	        		if(BlockTable[j][i] != 0){
	        			show = true;
	        		}
	        	}
	            if (BlockTable[j][i]!=0 && j>0) {
	            	if (BlockTable[j][i] == BlockTable[j-1][i]){
	            		BlockTable[j-1][i] = 2*BlockTable[j-1][i];
	            		updateScore(BlockTable[j-1][i]);
	            		BlockTable[j][i] = 0;
	            		for (var row=j;row<3;row++) {
	            			cancelUpZero(row,i);
	            		}
	            		j++;
	            		show = true;
	            	}
	            }
	        }
	    }
	    if (show){
	    	afterMove();
	    }
	}

	function cancelUpZero(j,i){
		var tempRow = j;
		while(BlockTable[j][i]==0 && tempRow <3){
		    BlockTable[j][i] = BlockTable[tempRow+1][i];
		    BlockTable[tempRow+1][i] = 0;
		    tempRow++;
		}
	}

	// when down key pressed, run DownMoving
	function DownMoving()
	{
		var show = false;
		for(var i = 0; i < 4; i++ ){
	        for( var j = 3;j >= 0; j--){
	        	if (BlockTable[j][i]==0){
	        		cancelDownZero (j,i);
	        		if(BlockTable[j][i] != 0){
	        			show = true;
	        		}
	        	}
	            if (BlockTable[j][i]!=0 && j<3) {
	            	if (BlockTable[j][i] == BlockTable[j+1][i]){
	            		BlockTable[j+1][i] = 2*BlockTable[j+1][i];
	            		updateScore(BlockTable[j+1][i]);
	            		BlockTable[j][i] = 0;
		        		for (var row=j;row>0;row--) {
	            			cancelDownZero(row,i);
	            		}
	            		j--;
	            		show = true;
	            	}
	            }
	        }
	    }
	    if (show){
	    	afterMove();
	    }
	}

	function cancelDownZero (j,i){
		var tempRow = j;
	    while(BlockTable[j][i]==0 && tempRow >0){
	        BlockTable[j][i] = BlockTable[tempRow-1][i];
	        BlockTable[tempRow-1][i] = 0;
	        tempRow--;
	    }
	}

	// when left key pressed, run LeftMoving
	function LeftMoving()
	{
		var show = false;
		for(var j = 0; j < 4; j++ ){
	        for( var i = 0;i <4; i++){
	        	if (BlockTable[j][i]==0){
	        		cancelLeftZero(j,i);
	        		if(BlockTable[j][i] != 0){
	        			show = true;
	        		}
	        	}
	            if (BlockTable[j][i]!=0 && i>0) {
					if (BlockTable[j][i] == BlockTable[j][i-1]){
	            		BlockTable[j][i-1] = 2*BlockTable[j][i-1];
	            		updateScore(BlockTable[j][i-1]);
	            		BlockTable[j][i] = 0;
	            		for (var col=i;col<3;col++) {
	            			cancelLeftZero(j,col);
	            		}
	            		i++;
	            		show = true;
	            	}
	            }
	        }
	    }
	    if (show){
	    	afterMove();
	    }
	}

	function cancelLeftZero(j,i){
		var tempcol = i;
	    while(BlockTable[j][i]==0 && tempcol <3){
	        BlockTable[j][i] = BlockTable[j][tempcol+1];
	        BlockTable[j][tempcol+1] = 0;
	        tempcol++;
	    }
	}

	// when right key pressed, run RightMoving
	function RightMoving()
	{
		var show = false;
		for(var j = 0; j < 4; j++ ){
	        for( var i = 3;i >= 0; i--){
	        	if (BlockTable[j][i]==0){
	        		cancelRightZero(j,i);
	        		if(BlockTable[j][i] != 0){
	        			show = true;
	        		}
	        	}
	            if (BlockTable[j][i]!=0 && i<3) {
	            	if (BlockTable[j][i] == BlockTable[j][i+1]){
	            		BlockTable[j][i+1] = 2*BlockTable[j][i+1];
	            		updateScore(BlockTable[j][i+1]);
	            		BlockTable[j][i] = 0;
	            		for (var col=i;col>0;col--) {
	            			cancelRightZero(j,col);
	            		}
	            		i--;
	            		show = true;
	            	}
	            }
	        }
	    }
	    if (show){
	    	afterMove();
	    }
	}

	function cancelRightZero(j,i){
		var tempcol = i;
	    while(BlockTable[j][i]==0 && tempcol >0){
	        BlockTable[j][i] = BlockTable[j][tempcol-1];
	        BlockTable[j][tempcol-1] = 0;
	        tempcol--;
	    }
	}

	function afterMove()
	{
		showValue(getRandomFreeCell(),getRandomNumber());
		show();
		if (!canMerge()){
			alert('Game over! \n Your Score:'+ '  ' + score);
			refresh();
		}
	}

/*-------------------------------Display Function---------------------------*/
	function getRandomNumber () {
		return Math.random() > 0.3 ? 2 : 4;
	}

	//generate a valid to store an random num created from getRandomNumber
	function getRandomFreeCell () {
		do{
			var count = 4;
			var RandColumn = Math.floor(Math.random() * count);
			var RandRow = Math.floor(Math.random() * count);
			if (BlockTable[RandRow][RandColumn] == 0){
				return "block"+RandRow+"-"+RandColumn;
			}
		}while(BlockTable[RandRow][RandColumn]!=0)
	}

 	function canMerge (){
 		var merge = false;
 		var value;
 		for (var row = 0; row<=3; row++){
 			for (var col = 0; col<=3; col++){
 				value = BlockTable[row][col];
 				if (value == 0){
 					merge = true;
 				}
 				if (row > 0){
 					if (value == BlockTable[row-1][col]){
 						merge = true;
 					}
 				}
 				if (col > 0){
 					if (value == BlockTable[row][col-1]){
 						merge = true;
 					}
 				}
 			}
 		}
 		return merge;
 	}
