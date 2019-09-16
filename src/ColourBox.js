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

    goBack: {
        backgroundColor: "black"
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
        opacity: "0",
        cursor: "pointer",
        transition: ".12s"
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        color: "#000"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 1s ease-in-out",
        transform: "scale(0.1)",
        overflow: "hidden"


    },
    showOverlay: {
        opacity: "1",
        transform: "scale(20)",
        zIndex: "10",
        position: "absolute",
        overflow: "hidden"
    },
    copyMsg: {
        position: "fixed",
        left: "0",
        bottom: "0",
        top: "0",
        right: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3rem",
        transform: "scale(.1)",
        opacity: "0",
        color: "#fff",
        overflowY: "hidden",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px #0000008e",
            background: "#ffffff42",
            marginBottom: "0",
            width: "100%",
            textAlign: "center",
            alignContent: "center",
            textTransform: "uppercase"
        }
    },
    showCopyMsg: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "20",
        transition: "all .5s",
        transitionDelay: ".3s",
        overflowY: "hidden",
        "& p": {
            fontSize: "2rem",
            fontWeight: "200"
        }
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
                    <div style={{ background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}></div>
                    <div className={`${classes.copyMsg} ${copied && classes.showCopyMsg}`}>
                        <h1 className={""}>copied!</h1>
                        <p className={classes.copyText}>{background}</p>
                    </div>
                    <div className={classes.boxContent}>
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