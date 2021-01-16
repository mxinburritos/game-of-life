var _ = require("lodash/core")

function GameOfLife(grid) {
    var newTable = []; while (newTable.push([]) < grid.length);
    for(var i = 0; i < grid.length; i++) {
        for(var j = 0; j < grid[i].length; j++) {
            let aliveNeighbors = CountNeighbors(grid, i, j);
            if (grid[i][j].isSelected === true && aliveNeighbors < 2) {
                newTable[i][j] = {
                    row: i,
                    col: j,
                    isSelected: false
                }
            } else if (grid[i][j].isSelected === true && aliveNeighbors > 3) {
                newTable[i][j] = {
                    row: i,
                    col: j,
                    isSelected: false
                }
            } else if (grid[i][j].isSelected === false && aliveNeighbors === 3) {
                newTable[i][j] = {
                    row: i,
                    col: j,
                    isSelected: true
                }
            } else {
                newTable[i][j] = {
                    row: i,
                    col: j,
                    isSelected: grid[i][j].isSelected
                }
            }
        }
    }
    return newTable;
}

function CountNeighbors(grid, r, c) {
    let aliveNeighbors = 0;
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
            if (!(i === 0 && j === 0) && (i + r >= 0 && i + r < grid.length) && (j + c >= 0 && j + c < grid[0].length)) {
                if (grid[i + r][j + c].isSelected) {
                    aliveNeighbors = aliveNeighbors + 1;
                }
            }
        }
    }
    return aliveNeighbors;
}

module.exports = GameOfLife;