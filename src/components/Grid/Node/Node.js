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
        onMouseDown={(e) => onMouseDown(e, row, col)}
        onMouseEnter={(e) => onMouseEnter(e, row, col)}
        onMouseUp={(e) => onMouseUp(e)}
      ></div>
    );
  }
}

export default Node;
