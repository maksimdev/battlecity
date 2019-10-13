import React from 'react';
import './App.css';
import initMap from '../../initMap';

import Map from '../Map/Map';
import Controls from '../Controls/Controls';

function App() {
  return (
    <div className="App">
      <Controls>
        <Map initMap={initMap} />
      </ Controls>
    </div>
  );
}

export default App;
