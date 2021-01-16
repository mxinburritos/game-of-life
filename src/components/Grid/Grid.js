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
      leftIsPressed: false,
      rightIsPressed: false,
      modalOpen: false,
      play: false,
    };
  }

  async handleMouseEnter(e, row, col) {
    if (!this.state.leftIsPressed && !this.state.rightIsPressed) return;
    if (this.state.leftIsPressed) {
      const newGrid = this.props.getNewGridWithWallEnabled(this.props.grid, row, col);
      this.props.handleGridChange({ grid: newGrid });
    } else if (this.state.rightIsPressed) {
      const newGrid = this.props.getNewGridWithWallDisabled(this.props.grid, row, col);
      this.props.handleGridChange({ grid: newGrid });
    }
  }

  handleMouseDown(e, row, col) {
    e.persist();
    if (e.button === 0) {
      const newGrid = this.props.getNewGridWithWallEnabled(this.props.grid, row, col);
      this.setState({ grid: newGrid, leftIsPressed: true });
    } else if (e.button === 2) {
      const newGrid = this.props.getNewGridWithWallDisabled(this.props.grid, row, col);
      this.setState({ grid: newGrid, rightIsPressed: true });
    }
  }

  handleMouseUp(e) {
    this.setState({ leftIsPressed: false });
    this.setState({ rightIsPressed: false });
  }

  next() {
    const newGrid = GameOfLife(this.props.grid);
    this.props.handleGridChange(newGrid);
  }

  render() {
    return (
      <div className='grid' onContextMenu={(e) => e.preventDefault()}>
        <Button onClick={() => {this.next()}}>Next</Button>
        {console.log(this.props.grid)}
        {this.props.grid.map((row, rowIdx) => {
          return (
            <div key={rowIdx} className='row'>
              {row.map((node, nodeIdx) => {
                const { row, col, isSelected } = node;
                return (
                  <Node
                    key={nodeIdx}
                    col={col}
                    isSelected={isSelected}
                    leftIsPressed={this.state.leftIsPressed}
                    rightIsPressed={this.state.rightIsPressed}
                    onMouseDown={(e, row, col) => this.handleMouseDown(e, row, col)}
                    onMouseEnter={(e, row, col) => {
                      this.handleMouseEnter(e, row, col);
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

export default Grid;
