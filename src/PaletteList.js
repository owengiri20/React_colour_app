import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/styles"
import MiniPalette from "./MiniPalette"
import styles from "./styles/PaletteListStyles"


class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.gotToPalette = this.gotToPalette.bind(this)
    }

    gotToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }

    render() {
        const { palettes, classes, deletePalette } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colours</h1>
                        <Link to="/palette/new">Create New Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(p => {
                            return (
                                <MiniPalette
                                    deletePalette={deletePalette}
                                    {...p}
                                    handleClick={() => this.gotToPalette(p.id)}
                                    key={p.id}
                                    id={p.id} />
                            )
                        })}
                    </div>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);