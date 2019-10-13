import React from 'react';
import { connect } from "react-redux";
import './Map.css';

const mapStateToProps = state => ({
  player: state.control.player
});

function ConnectedUserMap({player}) {

  const rotate = (key) => {
    switch (key) {
      case 'up':
        return 270;
      case 'right':
        return 0;
      case 'down':
        return 90;
      case 'left':
        return 180;  
      default:
        break;
    }
  }

  return (
    <div id="userMap" className="userMap">
      <img
        className='item'
        style={{
          transform: `rotate(${rotate(player.direction)}deg)`,
          marginLeft: `${player.position.x*32}px`,
          marginTop: `${player.position.y*32}px`
        }}
        alt=''
        id={player.id}
        key={player.id}
        src={player.img}
      />
    </div>
  );
}

const UserMap = connect(mapStateToProps)(ConnectedUserMap);

export default UserMap;
