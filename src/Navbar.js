import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./Navbar.css"

class Navbar extends Component {
    render() {
        const { level, changeLevel } = this.props;
        return (
            <div className="Navbar">
                <div className="logo">
                    <a href="/">ReactColours</a>
                </div>
                <div className="Slider-container">
                    <span>Level: {level}</span>
                    <div className="Slider">
                        <Slider defaultValue={level} min={100} max={900}
                            step={100} onAfterChange={changeLevel} />
                    </div>
                </div>


            </div>
        );
    }
}

export default Navbar;