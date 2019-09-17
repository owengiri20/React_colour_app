import React from "react";
import { withStyles } from "@material-ui/core";

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px"
    }
}

function DraggableColourBox(props) {
    const { classes } = props;
    return (
        <div
            style={{ backgroundColor: props.colour }}
            className={classes.root}>
            {props.colour}
        </div>
    )
}

export default withStyles(styles)(DraggableColourBox)