import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

function MiniPalette(props) {
    const { classes, paletteName, emoji, colors } = props;
    console.log(props.colors);

    const miniColorBoxes = colors.map(c => (
        <div className={classes.miniColour} style={{ backgroundColor: c.color }} key={c.id}></div>
    ))

    return (
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.delete}>
                <DeleteIcon className={classes.deleteBtn} />
            </div>
            <div className={classes.colours}>{miniColorBoxes}</div>
            <h5 className={classes.title}>{paletteName}</h5>
            <span className={classes.emoji}>{emoji}</span>
        </div>
    )
}
export default withStyles(styles)(MiniPalette);
