import React, { Component } from 'react';
import "./ColourBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles"
import chroma from "chroma-js";

const styles = {
    colourBox: {
        width: "20%",
        height: props => props.showFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        "&:hover button": {
            opacity: "1"
        }
    },
    copyText: {
        color: (props) => chroma(props.background).luminance() >= .7 ? "black" : "white"
    },
    colourName: {
        color: (props) => chroma(props.background).luminance() <= .15 ? "white" : "black"
    },
    seeMore: {
        color: "white",
        position: "absolute",
        right: "0",
        bottom: "0",
        padding: "10px",
        fontSize: "12px",
        textTransform: "uppercase",
        background: " #00000057",
        border: "0",
        textAlign: "center",

    },
    copyButton: {
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
        opacity: "0"
    }
}

class ColourBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    changeCopyState() {
        this.setState({ copied: true }, () => {
            setTimeout(() => this.setState({ copied: false }), 1100)
        });
    }

    render() {
        const { name, background, paletteId, colourId, classes, showFullPalette } = this.props;
        const { copied } = this.state;

        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className={classes.colourBox}>
                    <div style={{ background }} className={`copy-overlay ${copied && "show"}`}></div>
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1 className={""}>copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div className="copy-container">
                    </div>
                    <div className="box-content">
                        <span className={classes.colourName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>
                        copy!
                </button>
                    {showFullPalette && <Link to={`/palette/${paletteId}/${colourId}`}><span className={classes.seeMore}>More</span></Link>}
                </div>
            </CopyToClipboard>
        );
    }
}

export default withStyles(styles)(ColourBox);