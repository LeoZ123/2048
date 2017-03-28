/**
 * Created by Leo.H & MC.Gong on 2017/3/14.
 */
// This file is used to start and restart the game

var score = 0;
var pageBestScore = 0;
/*scoreTable to  calculate the score*/
var scoreTable ={
    score0:0,
    score2:2,
    score4:5,
    score8:10,
    score16:25,
    score32:50,
    score64:125,
    score128:250,
    score256:500,
    score512:1000,
    score1024:2000,
    score2048:4000,
    score4096:8000,
    score8192:16000,
    score16384:32000
};

//Color table to display background-color for different value num.
var ScoreColorTable = {
    score0:"#dfdfdf",
    score2:"rgb(250, 236, 177)",
    score4:"rgb(247, 217, 150)",
    score8:"rgb(255, 175, 82)",
    score16:"rgb(255, 200, 74)",
    score32:"rgb(255, 210, 61)",
    score64:"rgb(255, 240, 48)",
    score128:"rgb(255, 255, 33)",
    score256:"rgb(250, 173, 84)",
    score512:"rgb(238, 130, 60)",
    score1024:"rgb(238, 160, 70)",
    score2048:"rgb(238, 190, 80)",
    score4096:"rgb(255, 85, 31)",
    score8192:"rgb(209, 53, 3)",
    score16384:"rgb(255, 49, 4)"
};

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
    pageBestScore = localStorage.getItem("bestScore");
    document.getElementById("bestScore").innerHTML = pageBestScore == null ? 0 : pageBestScore;
});

//play again
function refresh () {
    score = 0;
    document.getElementById("yourScore").innerHTML = score;
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
    show();
}
