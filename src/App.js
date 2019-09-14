import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
// COMPONENTS 
import Palette from "./Palette"
import PaletteList from "./PaletteList"
import SeedColours from './SeedColours';
import SingleColourPalette from "./SingleColourPalette";
import { generatePalette } from "./colourHelpers";


class App extends Component {

  findPalette(id) {
    // returns a palette based on id
    return SeedColours.find((p => {
      return p.id === id
    }))
  }

  render() {
    console.log(generatePalette(SeedColours[4]));

    return (
      <Switch>
        <Route exact path="/" render={(routeProps) => <PaletteList palettes={SeedColours} {...routeProps} />} />
        <Route exact path="/palette/:id" render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
        <Route path="/palette/:paletteId/:colourId" render={() => <SingleColourPalette />} />
      </Switch>
      // <div className="App" >
      //   <Palette palette={generatePalette(SeedColours[4])} />
      // </div>
    );
  }

}

export default App;
