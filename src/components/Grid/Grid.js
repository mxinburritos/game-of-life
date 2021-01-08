import React, { Component, useState } from 'react';

import styles from './Grid.css';
import Node from './Node/Node';
import GameOfLife from '../../algorithms/GameOfLife';
import { Button, Typography } from '@material-ui/core';

const CELL_SIZE = 50;
const WIDTH = 800;
const HEIGHT = 600;

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
      modalOpen: false,
      play: false,
    };
  }

  componentDidMount() {
    const grid = initializeGrid(20, 50);
    this.setState({ grid });
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid });
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  next() {
    const newGrid = GameOfLife(this.state.grid);
    this.setState({grid: newGrid});
  }

  render() {
    const { grid, mouseIsPressed } = this.state;
    return (
      <div className='grid'>
        <Button>Next</Button>
        {grid.map((row, rowIdx) => {
          return (
            <div key={rowIdx} className='row'>
              {row.map((node, nodeIdx) => {
                const { row, col, isSelected } = node;
                return (
                  <Node
                    key={nodeIdx}
                    col={col}
                    isSelected={isSelected}
                    mouseIsPressed={mouseIsPressed}
                    onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                    onMouseEnter={(row, col) => {
                      this.handleMouseEnter(row, col);
                    }}
                    onMouseUp={() => this.handleMouseUp()}
                    row={row}
                  ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

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

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isSelected: !node.isSelected,
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

export default Grid;
