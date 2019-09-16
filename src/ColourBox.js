import React, { Component } from 'react';
import "./ColourBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
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
        const { name, background, paletteId, colourId, showLink } = this.props;
        const { copied } = this.state;
        const isDarkColour = chroma(background).luminance() <= .2; // up to 5.37
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className="ColourBox">
                    <div style={{ background }} className={`copy-overlay ${copied && "show"}`}></div>
                    <div className={`copy-msg ${copied && "show"}`}>
                        <h1>copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                    </div>
                    <div className="box-content">
                        <span className={isDarkColour && `light-text`}>{name}</span>
                    </div>
                    <button className="copy-button">
                        copy!
                </button>
                    {showLink && <Link to={`/palette/${paletteId}/${colourId}`}><span className="see-more">More</span></Link>}

                </div>
            </CopyToClipboard>

        );
    }
}

export default ColourBox;