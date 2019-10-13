import React from 'react';
import { connect } from "react-redux";
import './Map.css';
import UserMap from './UserMap';

const mapStateToProps = state => ({
  map: state.map.map
});

function ConnectedMap({ map }) {

  console.log('state: ', map);
  const createItem = ({ type, position: { x, y }, img}) => {
    return <img className={`item ${type}`} alt='' id={`${x}:${y}`} key={`${x}:${y}`} src={img}></img>
  }

  return (
    <div>
      <UserMap />
      <div id="map" className="map">
        {map.map((items) => items.map((item) => createItem(item)))}
      </div>
    </div>
  );
}

const Map = connect(mapStateToProps)(ConnectedMap);

export default Map;
