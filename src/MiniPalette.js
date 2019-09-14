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
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"

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
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColour: {
        height: "24%",
        width: "20%",
        // backgroundColor: "red"
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    }
}

function MiniPalette(props) {
    const { classes, paletteName, emoji, colors } = props;
    const miniColorBoxes = colors.map(c => (
        <div className={classes.miniColour} style={{ backgroundColor: c.color }} key={c.id}></div>
    ))

    return (
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colours}>{miniColorBoxes}</div>
            <h5 className={classes.title}>{paletteName}</h5>
            <span className={classes.emoji}>{emoji}</span>
        </div>
    )
}
export default withStyles(styles)(MiniPalette);
