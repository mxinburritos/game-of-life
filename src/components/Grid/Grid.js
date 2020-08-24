import React, { Component, useState } from 'react';
import { Menu, Button, Modal, Header, Icon } from 'semantic-ui-react';

import styles from './Grid.css';
import Node from './Node/Node';

const CELL_SIZE = 20;
const WIDTH = 800;
const HEIGHT = 600;

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      mouseIsPressed: false,
      modalOpen: false,
    };
  }

  componentDidMount() {
    const grid = initializeGrid();
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

  handleClear() {
    const grid = initializeGrid();
    this.setState({ modalOpen: false });
    this.setState({ grid });
  }

  render() {
    const { grid, mouseIsPressed } = this.state;
    return (
      <>
        <div className='grid'>
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
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
        <Menu>
          <Modal
            basic
            onClose={() => this.setState({ modalOpen: false })}
            onOpen={() => this.setState({ modalOpen: true })}
            open={this.state.modalOpen}
            size='small'
            trigger={<Button>Clear Cells</Button>}
            centered={true}
            className='modal'
          >
            <Header icon>
              <Icon name='archive' />
              Archive Old Messages
            </Header>
            <Modal.Content>
              <p>
                Your inbox is getting full, would you like us to enable
                automatic archiving of old messages?
              </p>
            </Modal.Content>
            <Modal.Actions>
              <Button
                basic
                color='red'
                inverted
                onClick={() => this.setState({ modalOpen: false })}
              >
                <Icon name='remove' /> No
              </Button>
              <Button color='green' inverted onClick={() => this.handleClear()}>
                <Icon name='checkmark' /> Yes
              </Button>
            </Modal.Actions>
          </Modal>
        </Menu>
      </>
    );
  }
}

const initializeGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currRow = [];
    for (let col = 0; col < 50; col++) {
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
