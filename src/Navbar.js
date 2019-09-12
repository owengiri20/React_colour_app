import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import "./Navbar.css"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ format: e.target.value })
        this.props.handleChange(e.target.value)
    }
    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state
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
                <div className="select-container">
                    <Select onChange={this.handleChange} value={format}>
                        <MenuItem value="hex">HEX: #f4f4f4</MenuItem>
                        <MenuItem value="rgb">RGB: rgb(255,55,67)</MenuItem>
                        <MenuItem value="rgba">RGBA: rgba(255,55,67,0.2)</MenuItem>
                    </Select>
                </div>


            </div>
        );
    }
}

export default Navbar;