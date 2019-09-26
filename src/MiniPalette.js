import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

class MiniPalette extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.deletePalette = this.deletePalette.bind(this);
    }

    deletePalette(evt) {
        evt.stopPropagation();
        this.props.deletePalette(this.props.id);
    }

    render() {
        const { classes, paletteName, emoji, colors, handleClick } = this.props;
        const miniColorBoxes = colors.map(c => (
            <div
                className={classes.miniColour}
                style={{ backgroundColor: c.color }}
                key={c.id}>
            </div>
        ))
        return (
            <div className={classes.root} onClick={handleClick}>
                <DeleteIcon
                    className={classes.deleteBtn}
                    onClick={this.deletePalette} />
                <div className={classes.colours}>{miniColorBoxes}</div>
                <h5 className={classes.title}>{paletteName}</h5>
                <span className={classes.emoji}>{emoji}</span>
            </div>
        )
    }

}
export default withStyles(styles)(MiniPalette);
