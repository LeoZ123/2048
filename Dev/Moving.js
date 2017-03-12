/**
 * Created by Leo.H & MC.Gong on 2017/3/6.
 */

// This file is the main script file.
// This file is used to move the block.
$(document).ready(function(){
	var setNumber = function (row, col, num) { //TO DO
		var BlockIndex = row * 4 + col;
		BlockTable[row][col] = num;
	    $("#block"+BlockIndex).text(BlockTable);
	}

	var getRandomNumber = function () {
		return Math.random() > 0.5 ? 2 : 4
	}

	var getRandomFreeCell = function () {
		var block = this.$main.find('[num="no"]')
		var count = block.length
		var rand = Math.floor(Math.random() * count)
		return block.eq(rand)
	}

	var	updateBlock = function ($block, num) {
		$block.attr('num',
				num === 0 ?
					"no" :
					num > 2048 ? "super" : num
			)
			.find('div')
			.text(num === 0 ? "" : num)
	}
}