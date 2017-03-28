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
		var ScoreIndex;
	    for (var i=0;i<4;i++)
	    {
	        for (var j=0;j<4;j++)
	        {
	            if(BlockTable[i][j] !== 0)
	            {
					ScoreIndex = "score" + BlockTable[i][j];
	                document.getElementById("block" + i + "-" + j).innerHTML = BlockTable[i][j];
					document.getElementById("block" + i + "-" + j).style.backgroundColor = ScoreColorTable[ScoreIndex];
	            }
	            else
	            {
					ScoreIndex = "score" + BlockTable[i][j];
	                document.getElementById("block" + i + "-" + j).innerHTML = "";
					document.getElementById("block" + i + "-" + j).style.backgroundColor = ScoreColorTable[ScoreIndex];
				}
	        }
	    }

	    if (score > pageBestScore){
	    	localStorage.setItem("bestScore", score);
	    	document.getElementById("bestScore").innerHTML = score;
	    }
	    document.getElementById("yourScore").innerHTML = score;

	}


/*-------------------------------Update Score---------------------------*/
	function updateScore (mergeValue) {
		var scoreId = "score" + mergeValue;
		score += scoreTable[scoreId];
	}
