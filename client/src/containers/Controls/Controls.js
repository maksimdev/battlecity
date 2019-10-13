import React from 'react';
import './Controls.css';

import { store } from '../../redux/store';
import { moveUp, moveRight, moveDown, moveLeft } from '../../redux/control';

function Controls(props) {
  
  const handleKeyPress = ({key}) => {
    switch (key) {
      case 'ArrowUp':
        store.dispatch(moveUp());
      break;
      case 'ArrowRight':
        store.dispatch(moveRight());
      break;
      case 'ArrowDown':
        store.dispatch(moveDown());
      break;
      case 'ArrowLeft':
        store.dispatch(moveLeft());
      break;
      default:
      break;
    }
  }

  document.addEventListener('keydown', handleKeyPress);
  
  return (
    <div className='controls'>
      Controls
      {props.children}
    </div>
  )
}

export default Controls;