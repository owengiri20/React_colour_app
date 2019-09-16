import React, { Component } from 'react';
import ColourBox from "./ColourBox";
import Navbar from "./Navbar";
import PaletteFooter from "./paletteFooter";
import { Link } from "react-router-dom";
import "./ColourBox.css";
import { withStyles } from "@material-ui/styles";

const styles = {
    Palette: {
        height: "100vh",
        overflow: "hidden",
        flexDirection: "column"
    },
    colours: {
        height: "87%"
    },
    goBack: {
        width: "20%",
        height: props => props.showFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        background: "black",
        "& a": {
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            outline: "none",
            background: "#38383842",
            border: "0",
            textTransform: "uppercase",
            color: "#fff",
            cursor: "pointer",
            transition: ".12s",
            textDecoration: "none"
        }
    }
}

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