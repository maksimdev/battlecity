import React from 'react';
import './Map.css';

function Map({ initMap }) {

  const createItem = ({ position: { x, y }, img}) => {
    return <img className='item' alt='' id={`${x}:${y}`} key={`${x}:${y}`} src={img}></img>
  }

  return (
    <div id="map" className="map">
      {initMap().map((items) => items.map((item) => createItem(item)))}
    </div>
  );
}

export default Map;
