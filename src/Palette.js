import React, { Component } from 'react';
import ColourBox from "./ColourBox";
import Navbar from "./Navbar"
import "./Palette.css";


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
        this.changeLevel = this.changeLevel.bind(this)
    }
    changeLevel(level) {
        this.setState({ level })
        // console.log(level);

    }
    render() {
        const { colours } = this.props.palette
        const { level } = this.state
        const colourBoxes = colours[level].map(colour =>
            <ColourBox background={colour.hex} name={colour.name} />
        )
        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel} />

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