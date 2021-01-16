import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css';

import './App.css';
import Grid from './Grid/Grid';
import Options from './Options/Options';

const App = () => {
  const [grid, setGrid] = useState(initializeGrid(30,50));

  const handleGridChange = (newGrid) => {
    setGrid(newGrid);
  }

  return (
    <div className='container'>
      <h5>App</h5>
      <Grid initializeGrid={initializeGrid} getNewGridWithWallDisabled={getNewGridWithWallDisabled} getNewGridWithWallEnabled={getNewGridWithWallEnabled} handleGridChange={handleGridChange} grid={grid}/>
      <Options initializeGrid={initializeGrid} handleGridChange={handleGridChange} grid={grid}/>
    </div>
  );
};

const initializeGrid = (i, j) => {
  const grid = [];
  for (let row = 0; row < i; row++) {
    const currRow = [];
    for (let col = 0; col < j; col++) {
      currRow.push(createNode(col, row));
    }
    grid.push(currRow);
  }
  return grid;
};

const getNewGridWithWallDisabled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isSelected: false,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

const getNewGridWithWallEnabled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isSelected: true,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

const createNode = (col, row) => {
  return {
    col,
    row,
    isSelected: false,
  };
};

export default App;
