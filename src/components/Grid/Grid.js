import React, { Component, useState } from 'react';
import styles from './Grid.module.css';

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

class Grid extends Component {
  constructor() {
    super();
    this.rows = HEIGHT / CELL_SIZE;
    this.cols = WIDTH / CELL_SIZE;
    this.board = this.makeEmptyBoard();
    this.state = { cells: [] };
  }

  makeEmptyBoard() {
    let board = [];
    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[x][y] = false;
      }
    }
    return board;
  }

  makeCells() {
    let cells = [];
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[x][y]) {
          cells.push({ x, y });
        }
      }
    }
    return cells;
  }

  render() {
    return (
      <div>
        <div
          className={styles.Board}
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
          }}
          onClick={this.handleClick}
        ></div>
      </div>
    );
  }
}

export default Grid;
