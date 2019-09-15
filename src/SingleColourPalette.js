import React, { Component } from 'react';
import ColourBox from "./ColourBox";
import Navbar from "./Navbar";
import PaletteFooter from "./paletteFooter";
import { Link } from "react-router-dom";
import "./ColourBox.css";



class SingleColourPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colourId)
        this.state = {
            format: "hex"
        }
        this.changeFormat = this.changeFormat.bind(this)
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

    changeFormat(value) {
        this.setState({ format: value })
    }

    render() {
        const { paletteName, emoji, id } = this.props.palette;
        const { format } = this.state;
        const colourBoxes = this._shades.map(colour => (
            <ColourBox key={colour.name} name={colour.name} background={colour[format]} showLink={false} />
        ))
        return (
            <div className="SingleColourPalette Palette">
                <Navbar handleChange={() => this.changeFormat()} showingAllColours={false} />
                <div className="Palette-colours">
                    {colourBoxes}
                    <div className="go-back ColourBox"><Link to={`/palette/${id}`} className="back-btn">Go Back</Link></div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default SingleColourPalette;