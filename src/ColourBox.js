import React, { Component } from 'react';
import "./ColourBox.css"
import { CopyToClipboard } from "react-copy-to-clipboard"
class ColourBox extends Component {
    render() {
        const { name, background } = this.props;
        return (
            <CopyToClipboard text={background}>
                <div style={{ background }} className="ColourBox">
                    <div className="copy-container">
                    </div>
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">
                        copy!
                </button>
                    <span className="see-more">More</span>
                </div>
            </CopyToClipboard>

        );
    }
}

export default ColourBox;
