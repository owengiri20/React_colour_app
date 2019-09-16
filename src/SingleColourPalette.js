import React, { Component } from 'react';
import ColourBox from "./ColourBox";
import Navbar from "./Navbar";
import PaletteFooter from "./paletteFooter";
import { Link } from "react-router-dom";
import "./ColourBox.css";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyles"



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
        const { format } = this.state;
        const { paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const colourBoxes = this._shades.map(colour => (
            <ColourBox
                key={colour.name}
                name={colour.name}
                background={colour[format]}
                showFullPalette={false}
            />
        ))
        return (
            <div className={classes.Palette}>
                <Navbar handleChange={() => this.changeFormat()} showingAllColours={false} />
                <div className={classes.colours}>
                    {colourBoxes}
                    <div className={classes.goBack}><Link to={`/palette/${id}`}>Go Back</Link></div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(SingleColourPalette);