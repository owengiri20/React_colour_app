import React, { Component } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles"
import styles from "./styles/ColourBoxStyles"
import chroma from "chroma-js";

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
            <CopyToClipboard
                text={background}
                onCopy={this.changeCopyState}>
                <div
                    style={{ background }}
                    className={classes.colourBox}>
                    <div
                        style={{ background }}
                        className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}></div>
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