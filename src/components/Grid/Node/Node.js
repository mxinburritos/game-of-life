import React, { Component } from 'react';

import './Node.css';

class Node extends Component {
  render() {
    const {
      col,
      isSelected,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row,
    } = this.props;

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${isSelected ? 'node-selected' : ''}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      ></div>
    );
  }
}

export default Node;
