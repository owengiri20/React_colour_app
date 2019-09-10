import React, { Component } from 'react';
import ColourBox from "./ColourBox";

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
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
                <div className="Slider">
                    <Slider defaultValue={level} min={100} max={900}
                        step={100} onAfterChange={this.changeLevel} />
                </div>
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