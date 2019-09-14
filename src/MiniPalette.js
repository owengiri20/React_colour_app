import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colours: {
        backgroundColor: "gray"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        paddingTop: ".5rem",
        fontSize: "1rem",
        position: "relative"


    },
    colours: {

    },
    emoji: {

    }
}

function MiniPalette(props) {
    const { classes, paletteName, emoji } = props;
    console.log(classes);

    return (
        <div className={classes.root}>
            <div className={classes.colours}></div>
            <h5 className={classes.title}>{paletteName}</h5>
            <span className={classes.emoji}>{emoji}</span>
        </div>
    )
}
export default withStyles(styles)(MiniPalette);