import React from 'react';

// COMPONENTS 
import Palette from "./Palette"
import SeedColours from './SeedColours';

function App() {
  return (
    <div className="App">
      <Palette {...SeedColours[4]} />
    </div>
  );
}

export default App;
