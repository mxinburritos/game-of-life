function GameOfLife(grid) {
    for(var i = 0; i < grid.length; i++) {
        for(var j = 0; j < grid[i].length; j++) {
            let aliveNeighbors = CountNeighbors(grid, i, j);
            if(grid[i][j].isSelected === true) {
                if(aliveNeighbors < 2 || aliveNeighbors > 3) { 
                    grid[i][j].isSelected = false;
                }
            } else {
                if(aliveNeighbors === 3) {
                    grid[i][j].isSelected = true;
                }
            }
        }
    }
    return grid;
}

function CountNeighbors(grid, r, c) {
    let aliveNeighbors = 0;
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            console.log("control: " + (i + r) + " " + (j + c));
            if (!(i + r === 0 && j + c === 0) && (i + r >= 0 && i + r < grid.length) && (j + c >= 0 && j + c < grid[0].length)) {
                console.log((i + r) + " " + (j + c));
                aliveNeighbors += grid[i + r][j + c].isSelected;
            }
        }
    }
    console.log(" ");
    return aliveNeighbors;
}

module.exports = GameOfLife;