import React, { Component } from 'react';
import { Link } from "react-router-dom"
class PaletteList extends Component {
    render() {
        const { palettes } = this.props;
        return (

            <div>
                {palettes.map((p) => (
                    <Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
                ))}
            </div>
        );
    }
}

export default PaletteList;