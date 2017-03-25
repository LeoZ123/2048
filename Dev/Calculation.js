/**
 * Created by Leo.H & MC.Gong on 2017/3/6.
 */

// This file is used to calculate the score of game

	var Score=0;

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
		//var ScoreTable =[0,2,5,10,25,50,125,250,500,1000,2000,4000,8000,16000,32000];
	    for (var i=0;i<4;i++)
	    {
	        for (var j=0;j<4;j++)
	        {
				//Score+=ScoreTable[Math.log2(BlockTable[i][j])];
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
		//document.getElementById(YourScore).innerText='Your Score:' + Score;
	}
