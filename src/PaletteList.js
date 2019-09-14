import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { withStyles } from "@material-ui/styles"
import MiniPalette from "./MiniPalette"

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",

    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        // border: "3px solid white"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"

    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"

    },
    linkPalette: {
        textDecoration: "none",
        color: "#000",
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.05)"
        }

    }
}

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
        const { palettes, classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colours</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map(p => {
                            return (
                                <MiniPalette {...p} handleClick={() => this.gotToPalette(p.id)} />
                            )
                        })}
                    </div>
                </div>

            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);