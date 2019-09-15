import React, { Component } from 'react';
import ColourBox from "./ColourBox"

class SingleColourPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colourId)
        // console.log("Shades", this._shades);

    }
    gatherShades(palette, colourToFilterBy) {
        // return all shades of given colour
        let shades = [];
        let allColours = palette.colours;
        for (let key in allColours) {
            shades = shades.concat(
                allColours[key].filter(colour => colour.id == colourToFilterBy)
            )
        }

        return shades.slice(1);
    }
    render() {
        const colourBoxes = this._shades.map(colour => (
            <ColourBox key={colour.id} name={colour.name} background={colour.hex} showLink={false} />
        ))
        return (
            <div className="Palette">
                <h1>SingleColourPalette </h1>
                <div className="Palette-colours">
                    {colourBoxes}
                </div>
            </div>
        );
    }
}

export default SingleColourPalette;