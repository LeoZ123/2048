/**
 * Created by Leo.H & MC.Gong on 2017/3/21.
 */

 /*This file is uesd to check wheather it is available to move when then key pressed*/

//Method: On the key pressed direction, if there exists a 0 block, or two adjcent equal value bloacks, then it can move through the key pressed direction.*/


 //Check Move Up
function canMoveUp()
{
    for(var i = 0; i < 4; i++ )
    {
        for( var j = 1;j< 4; j++)
        {
            if (BlockTable[j][i]!=0)
            {
                if(BlockTable[j-1][i] == 0 || BlockTable[j][i] == BlockTable[j-1][i])
                {
                    return true;
                }
            }
        }
    }
    return false;
};

 //Check Move Down
function canMoveDown()
{
    for(var i = 0; i < 4; i++ )
    {
        for( var j = 2;j < 0; j--)
        {
            if (BlockTable[j][i]!=0)
            {
                if(BlockTable[j+1][i] == 0 || BlockTable[j][i] == BlockTable[j+1][i])
                {
                    return true;
                }
            }
        }
    }
    return false;
};

 //Check Move Left
function canMoveLeft()
{
    for(var i = 0; i < 4; i++ )
    {
        for( var j = 1;j< 4; j++)
        {
            if (BlockTable[i][j]!=0)
            {
                if(BlockTable[i][j-1] == 0 || BlockTable[i][j] == BlockTable[i][j-1])
                {
                    return true;
                }
            }
        }
    }
    return false;
};

 //Check Move Right
 function canMoveRight()
 {
     for(var i = 0; i < 4; i++ )
     {
         for( var j = 2;j>=0 ; j--)
         {
             if (BlockTable[j][i]!=0)
             {
                 if(BlockTable[i][j+1] == 0 || BlockTable[i][j] == BlockTable[i][j+1])
                 {
                     return true;
                 }
             }
         }
     }
     return false;
 };

//cannot move
 function noMove()
 {
    return !(canMoveLeft() || canMoveUp() ||
    canMoveRight() || canMoveBottom());
};
