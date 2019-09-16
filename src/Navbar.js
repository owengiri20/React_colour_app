import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Slider, { Range } from 'rc-slider';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import 'rc-slider/assets/index.css';
import { withStyles } from "@material-ui/styles"
import IconButton from '@material-ui/core/IconButton';
import styles from "./styles/NavbarStyles"

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
        const { level, changeLevel, showingAllColours, classes } = this.props;
        const { format } = this.state
        return (
            <div className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to="/">ReactColours</Link>
                </div>
                {showingAllColours && <div>
                    <span>Level: {level}</span>
                    <div className={classes.Slider}>
                        <Slider defaultValue={level} min={100} max={900}
                            step={100} onAfterChange={changeLevel} />
                    </div>
                </div>}

                <div className={classes.selectContainer}>
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

export default withStyles(styles)(Navbar);