import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Slider, { Range } from 'rc-slider';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import 'rc-slider/assets/index.css';
import "./Navbar.css"
import IconButton from '@material-ui/core/IconButton';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex", open: false
        }
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }

    handleFormatChange(e) {
        this.setState({ format: e.target.value, open: true })
        this.props.handleChange(e.target.value)
    }

    closeSnackbar() {
        this.setState({ open: false })
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state
        return (
            <div className="Navbar">
                <div className="logo">
                    <Link to="/">ReactColours</Link>
                </div>
                <div className="Slider-container">
                    <span>Level: {level}</span>
                    <div className="Slider">
                        <Slider defaultValue={level} min={100} max={900}
                            step={100} onAfterChange={changeLevel} />
                    </div>
                </div>
                <div className="select-container">
                    <Select onChange={this.handleFormatChange} value={format}>
                        <MenuItem value="hex">HEX: #f4f4f4</MenuItem>
                        <MenuItem value="rgb">RGB: rgb(255,55,67)</MenuItem>
                        <MenuItem value="rgba">RGBA: rgba(255,55,67,0.2)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span>Format Changed to: {format.toUpperCase()}</span>}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton color="inherit">
                            <CloseIcon onClick={this.closeSnackbar} />
                        </IconButton>
                    ]} />


            </div>
        );
    }
}

export default Navbar;