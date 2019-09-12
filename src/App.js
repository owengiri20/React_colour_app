import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
// COMPONENTS 
import Palette from "./Palette"
import SeedColours from './SeedColours';
import { generatePalette } from "./colourHelpers"


class App extends Component {
  render() {
    console.log(generatePalette(SeedColours[4]));

    return (
      <Switch>
        <Route exact path="/" render={() => <h1>hello</h1>} />
        <Route exact path="/palette/:id" render={() => <h1>induvidual palette</h1>} />
      </Switch>
      // <div className="App" >
      //   <Palette palette={generatePalette(SeedColours[4])} />
      // </div>
    );
  }

}

export default App;
