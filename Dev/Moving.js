/**
 * Created by Leo.H & MC.Gong on 2017/3/6.
 */

// This file is the main script file.
// This file is used to move the block.

/*-----------------------------keypressed Function---------------------------*/
	//keypressed function to move blocks
	function KeyPressed(event)
	{
			var code = event.which || event.keyCode;

			//Move Up
			if( code == 38 || code == 119)
			{
				UpMoving();
			}

			//Move Down
			if(code == 40 || code ==115)
			{
				DownMoving();
			}

			//Move Left
			if(code == 37 || code ==97)
			{
				LeftMoving();
			}

			//Move Right
			if(code == 49 || code ==100)
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
	        for( var j = 3;j > 0; j--){
	            if (BlockTable[j][i]!=0) {
	            	if (BlockTable[j-1][i] == 0){
	            		BlockTable[j-1][i] = BlockTable[j][i];
	            		BlockTable[j][i] = 0;
	            		if (i<3) {
	            			if (BlockTable[j+1][i] !=0 && i<3){
	            			BlockTable[j][i]=BlockTable[j+1][i];
	            			BlockTable[j+1][i]=0;
	            			}
	            		}
	            		
	            		show = true;
	            	}else if (BlockTable[j][i] == BlockTable[j-1][i]){
	            		BlockTable[j-1][i] = 2*BlockTable[j][i];
	            		BlockTable[j][i] = 0;

	            		while (BlockTable[j-2][i] == 0){
	            			if (i<3){
	            				if (BlockTable[j+1][i] !=0){
	            					BlockTable[j][i]=BlockTable[j+1][i];
	            				}
	            			}
	            			
	            			BlockTable[j-2][i] = BlockTable[j-1][i];
	            			BlockTable[j-1][i] = 0;
	            			j--;
	            			if(j-2<0){
	            				break;
	            			}
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

	// when down key pressed, run DownMoving
	function DownMoving()
	{
		var show = false;
		for(var i = 0; i < 4; i++ ){
	        for( var j = 0;j < 3; j++){
	            if (BlockTable[j][i]!=0) {
	            	if (BlockTable[j+1][i] == 0){
	            		BlockTable[j+1][i] = BlockTable[j][i];
	            		BlockTable[j][i] = 0;
	            		if(j>0){
	            			if (BlockTable[j-1][i] !=0){
	            			BlockTable[j][i]=BlockTable[j-1][i];
	            			BlockTable[j-1][i]=0;
	            			}
	            		}
	            		
	            		show = true;
	            	}else if (BlockTable[j][i] == BlockTable[j+1][i]){
	            		BlockTable[j+1][i] = 2*BlockTable[j][i];
	            		BlockTable[j][i] = 0;
	            		while (BlockTable[j+2][i] == 0){
	            			if (j>0){
	            				if (BlockTable[j-1][i] !=0 ){
	            					BlockTable[j][i]=BlockTable[j-1][i];
	            				}
	            			}
	            			
	            			BlockTable[j+2][i] = BlockTable[j+1][i];
	            			BlockTable[j+1][i] = 0;
	            			j++;
	            			if(j+2>3){
	            				break;
	            			}
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


	// when left key pressed, run LeftMoving
	function LeftMoving()
	{
		var show = false;
		for(var j = 0; j < 4; j++ ){
	        for( var i = 3;i > 0; i--){
	            if (BlockTable[j][i]!=0) {
	            	if (BlockTable[j][i-1] == 0){
	            		BlockTable[j][i-1] = BlockTable[j][i];
	            		BlockTable[j][i] = 0;
	            		if(i<3){
	            			if (BlockTable[j][i+1] !=0){
	            				BlockTable[j][i]=BlockTable[j][i+1];
	            				BlockTable[j][i+1]=0;
	            			}
	            		}
	            	
	            		show = true;
	            	}else if (BlockTable[j][i] == BlockTable[j][i-1]){
	            		BlockTable[j][i-1] = 2*BlockTable[j][i];
	            		BlockTable[j][i] = 0;
	            		while (BlockTable[j][i-2] == 0){
	            			if(i<3){
	            				if (BlockTable[j][i+1] !=0 ){
	            					BlockTable[j][i]=BlockTable[j][i+1];
	            				}	
	            			}
	            			
	            			BlockTable[j][i-2] = BlockTable[j][i-1];
	            			BlockTable[j][i-1] = 0;
	            			i--;
	            			if(i-2<0){
	            				break;
	            			}
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

	// when right key pressed, run RightMoving
	function RightMoving()
	{
		var show = false;
		for(var j = 0; j < 4; j++ ){
	        for( var i = 0;i < 3; i++){
	            if (BlockTable[j][i]!=0) {
	            	if (BlockTable[j][i+1] == 0){
	            		BlockTable[j][i+1] = BlockTable[j][i];
	            		BlockTable[j][i] = 0;
	            		if (i>0){
	            			if (BlockTable[j][i-1] !=0 ){
	            			BlockTable[j][i]=BlockTable[j][i-1];
	            			BlockTable[j][i-1]=0;
	            		}
	            		}
	            		
	            		show = true;
	            	}else if (BlockTable[j][i] == BlockTable[j][i+1]){
	            		BlockTable[j][i+1] = 2*BlockTable[j][i];
	            		BlockTable[j][i] = 0;
	            		while (BlockTable[j][i+2] == 0){
	            			if(i>0){
	            				if (BlockTable[j][i-1] !=0 ){
	            					BlockTable[j][i]=BlockTable[j][i-1];
	            				}
	            			}
	            			
	            			BlockTable[j][i+2] = BlockTable[j][i+1];
	            			BlockTable[j][i+1] = 0;
	            			i++;
	            			if(i+2>4){
	            				break;
	            			}
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

	function afterMove()
	{
		show();
		showValue(getRandomFreeCell(),getRandomNumber());
	}
/*-------------------------------Display Function---------------------------*/
	function getRandomNumber () {
		return Math.random() > 0.3 ? 2 : 4;
	};

	//generate a valid to store an random num created from getRandomNumber
	function getRandomFreeCell () {
		var count = 4;
		var RandColumn = Math.floor(Math.random() * count);
		var RandRow = Math.floor(Math.random() * count);
		var cellValue = document.getElementById("block"+RandRow+"-"+RandColumn).innerHTML;

		if (cellValue == ''){
			return "block"+RandRow+"-"+RandColumn;
		}
	}


	function updateBlockTable (id, num) {
		var row = id.substring(5,6);
		var col = id.substring(7,8);
		BlockTable[row][col] = num;
	}
