import React from "react";
import { withStyles } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from "react-sortable-hoc";
import styles from "./styles/DraggableColourBoxStyles";



const DraggableColourBox = SortableElement(function (props) {
    const { classes, name, colour, handleClick } = props;
    return (
        <div
            style={{ backgroundColor: props.colour }}
            className={classes.root}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.delete} onClick={handleClick} />
            </div>
        </div>
    )
})

export default withStyles(styles)(DraggableColourBox)