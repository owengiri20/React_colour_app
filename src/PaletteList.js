import React, { Component } from 'react';
import { Link } from "react-router-dom"
import MiniPalette from "./MiniPalette"
class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (

            <div>
                <h1>React Colours</h1>
                <MiniPalette />
                {palettes.map((p) => (
                    <MiniPalette {...p} />
                ))}
            </div>
        );
    }
}

export default PaletteList;