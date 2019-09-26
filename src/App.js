import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
// COMPONENTS 
import Palette from "./Palette"
import PaletteList from "./PaletteList"
import SeedColours from './SeedColours';
import SingleColourPalette from "./SingleColourPalette";
import NewPaletteForm from "./NewPaletteForm"
import { generatePalette } from "./colourHelpers";


class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes ? savedPalettes : SeedColours
    }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }

  savePalette(newPalette) {
    this.setState((st) => ({ palettes: [...st.palettes, newPalette] }), () => {
      this.syncLocalStorage()
    });

  }
  findPalette(id) {
    const { palettes } = this.state;

    // returns a palette based on id
    return palettes.find((p => {
      return p.id === id;
    }))
  }

  syncLocalStorage() {
    // save palettes to local storage
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes))
  }

  render() {
    const { palettes } = this.state;
    return (
      <Switch>
        {/* NEW PALETTE FORM */}
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => <NewPaletteForm {...routeProps} savePalette={this.savePalette} palettes={palettes} />} />

        {/* LIST OF PALETTES */}
        <Route
          exact
          path="/"
          render={(routeProps) =>
            <PaletteList palettes={palettes} {...routeProps} />
          } />

        <Route
          exact
          path="/palette/:id" render={(routeProps) =>
            <Palette palette={generatePalette(
              this.findPalette(routeProps.match.params.id))} />} />
        <Route
          exact
          path="/palette/:paletteId/:colourId" render={(routeProps) =>
            <SingleColourPalette
              colourId={routeProps.match.params.colourId}
              palette={
                generatePalette(
                  this.findPalette(routeProps.match.params.paletteId))} {...routeProps} />} />
      </Switch>
    );
  }

}

export default App;
