import React from 'react';
import './App.css';
import initMap from '../../initMap';

import Map from '../Map/Map';

function App() {
  return (
    <div className="App">
      <Map initMap={initMap} />
    </div>
  );
}

export default App;
