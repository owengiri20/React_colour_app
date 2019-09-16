import React, { Component } from 'react';
import ColourBox from "./ColourBox";
import Navbar from "./Navbar";
import PaletteFooter from "./paletteFooter";
import "./Palette.css";
import { withStyles } from "@material-ui/styles"

const styles = {
    Palette: {
        height: "100vh",
        overflow: "hidden",
        flexDirection: "column"
    },
    colours: {
        height: "87%"
    }
}

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500, format: "hex"
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }
    changeLevel(level) {
        this.setState({ level })
    }

    changeFormat(value) {
        this.setState({ format: value })
    }
    render() {
        const { colours, paletteName, emoji, id } = this.props.palette
        const { level, format } = this.state
        const { classes } = this.props;
        const colourBoxes = colours[level].map(colour =>
            <ColourBox
                background={colour[format]}
                name={colour.name}
                key={colour.id}
                colourId={colour.id}
                paletteId={id}
                showLink={true}
                showFullPalette />
        )
        return (
            <div className={classes.Palette}>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColours />
                <div className={classes.colours}>
                    {/* bunch of colour boxes */}
                    {colourBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />

            </div>
        );
    }
}


export default withStyles(styles)(Palette);
/// the basics 175