import React, {useEffect, useState} from 'react';
import 'semantic-ui-css/semantic.min.css';

import './App.css';

const App = () => {
  const HEIGHT = 50;
  const WIDTH = 50;
  const [grid, setGrid] = useState([]);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    generateGrid();
  }, [])

  useEffect(() => {
    cycle();
  })

  const generateGrid = () => {
    let grid = Array(HEIGHT).fill().map(() => Array(WIDTH).fill(0));
    setGrid(grid);
  }

  const handleClick = (row, col) => {
    let newGrid = grid;
    newGrid[row][col] = grid[row][col] === 1 ? 0 : 1
    setGrid([...newGrid]);
  }

  const cycle = () => {
    if(!running) {
      return;
    }
    let newGrid = grid;
    newGrid[15][15] = grid[15][15] === 1 ? 0 : 1
    setGrid([...newGrid]);
  }

  return (
    <div className='container'>
      <button onClick={() => {setRunning(!running)}}>{running ? "Stop" : "Start"}</button>
      {grid.map((row, i) => {
        return <div id={`${i}`} style={{display: 'flex', flexDirection: 'row'}}>
        {row.map((col, j) => {
          return <div onClick={() => {handleClick(i, j)}} id={`${i} ${j}`} style={{ backgroundColor: grid[i][j] === 1 ? 'pink' : 'white', width: '20px', height: '20px', outline: '1px solid black'}}></div>
        })}
        </div>
      })}
    </div>
  );
};

export default App;
