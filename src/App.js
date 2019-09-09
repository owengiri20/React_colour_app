import React, { Component } from 'react';

// COMPONENTS 
import Palette from "./Palette"
import SeedColours from './SeedColours';
import { generatePalette } from "./colourHelpers"


class App extends Component {
  render() {
    console.log(generatePalette(SeedColours[4]));

    return (
      <div className="App" >
        <Palette {...SeedColours[4]} />
      </div>
    );
  }

}

export default App;
