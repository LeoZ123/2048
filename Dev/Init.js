/**
 * Created by Leo.H & MC.Gong on 2017/3/14.
 */
// This file is used to start and restart the game

var score = 0;
var pageBestScore = 0;
var scoreTable ={ score0:0, score2:2, score4:5, score8:10,score16:25,score32:50,score64:125,score128:250,score256:500,score512:1000,score1024:2000,score2048:4000,score4096:8000,score8192:16000,score16384:32000};
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
}
