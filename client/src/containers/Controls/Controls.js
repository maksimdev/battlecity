import React from 'react';
import './Controls.css';

export default function Controls(props) {

  const handleKeyPress = ({key}) => console.log(key);
  document.addEventListener('keydown', handleKeyPress);
  
  return (
    <div className='controls'>
      Controls
      {props.children}
    </div>
  )
}