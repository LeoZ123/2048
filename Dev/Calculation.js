/**
 * Created by Leo.H & MC.Gong on 2017/3/6.
 */

// This file is used to calculate the score of game
$(document).ready(function(){

	/*function is used to call MoveLine function to move block for all rows or columns.*/
	var calculate = function(direction)
	{
	    for(var i=0;i<4;i++)
	    {
	        MoveLine(direction,i);
	    }
	};

	/* A function is used to calculate the score on current table. Score for every block follows the above standard.*/
	var CalculateScore = function()
	{
	    var ScoreTable =[0,2,5,10,25,50,125,250,500,1000,2000,4000,8000,16000,32000];
	    for (var i=0;i<4;i++)
	    {
	        for(var j=0;i<4;j++)
	        {
	            Score+=ScoreTable[Math.log2(BlockTable[i][j])];
	        }
	    }
	    return Score;
	};

	/*A function is used to display the num on every block.*/
	var show = function()
	{
	    for (var i=0;i<4;i++)
	    {
	        for (var j=0;j<4;j++)
	        {
	            var BlockIndex = i * 4 + j; /* transform from 4*4array to block id defined in index.html*/
	            if(BlockTable[i][j] !== 0)
	            {
	                $("#block"+BlockIndex).text(BlockTable);
	            }
	            else
	            {
	                RestBlock--;
	                $("#block"+BlockIndex).text("");
	            }
	        }
	    }
	}
});
