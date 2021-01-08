function GameOfLife(grid) {
    for(var i = 0; i < grid.length; i++) {
        for(var j = 0; j < grid[i]; j++) {
            if((i - 1 in grid && i + 1 in grid) && (j - 1 in grid && i + 1 in grid)) {
                let num = grid[i - 1][j - 1].isSelected + grid[i - 1][j + 1].isSelected + grid[i + 1][j - 1].isSelected + grid[i + 1][j + 1];
                if(grid[i][j].isSelected === true) {
                    if(num < 2 || num > 3) { 
                        grid[i][j].isSelected = false;
                    }
                } else {
                    if(num === 3) {
                        grid[i][j].isSelected = true;
                    }
                }
            }
        }
    }
}

module.exports = GameOfLife;