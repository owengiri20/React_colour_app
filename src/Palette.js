import React, { Component } from 'react';
import ColourBox from "./ColourBox"
import "./Palette.css"

class Palette extends Component {
    render() {
        const colourBoxes = this.props.colors.map(colour => (
            <ColourBox background={colour.color} name={colour.name} />
        ))
        return (
            <div className="Palette">
                {/* NAV goes here */}
                <div className="Palette-colours">
                    {/* bunch of colour boxes */}
                    {colourBoxes}
                </div>
                {/* footer eventually */}
            </div>
        );
    }
}


export default Palette;
/// the basics 175