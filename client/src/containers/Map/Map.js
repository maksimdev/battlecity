import React from 'react';
import './Map.css';

function Map({ initMap }) {

  const createItem = (item, x, y) => {
    return <img className='item' alt={`${x}:${y}`} id={`${x}:${y}`} key={`${x}:${y}`} src={item}></img>
  }

  return (
    <div id="map" className="map">
      {initMap().map((items, x) => items.map((item, y) => createItem(item.img, x, y)))}
    </div>
  );
}

export default Map;
