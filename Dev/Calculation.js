/**
 * Created by Leo.H & MC.Gong on 2017/3/6.
 */

// This file is used to calculate the score of game

	//display value to the cell
	function showValue (id, num) {
		updateBlockTable(id, num);
		document.getElementById(id).innerHTML= num;
	}

	function updateBlockTable (id, num) {
		var row = id.substring(5,6);
		var col = id.substring(7,8);
		BlockTable[row][col] = num;
	}

	/*A function is used to display the num on every block.*/
	function show ()
	{
	    for (var i=0;i<4;i++)
	    {
	        for (var j=0;j<4;j++)
	        {
	            if(BlockTable[i][j] !== 0)
	            {
	                document.getElementById("block" + i + "-" + j).innerHTML = BlockTable[i][j];
	            }
	            else
	            {
	                document.getElementById("block" + i + "-" + j).innerHTML = "";
	            }
	        }
	    }
	    if (score>0){
	    	if (score > pageBestScore){
	    		localStorage.setItem("bestScore", score);
	    		document.getElementById("bestScore").innerHTML = score;
	    	}
	    	document.getElementById("yourScore").innerHTML = score;
	    }
	}


/*-------------------------------Update Score---------------------------*/
	function updateScore (mergeValue) {
		var scoreId = "score" + mergeValue;
		score += scoreTable[scoreId];
	}