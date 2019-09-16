import React from "react";
import { withStyles } from "@material-ui/styles";
const styles = {
    PaletteFooter: {
        display: "flex",
        justifyContent: "flex-end",
        height: "6vh",
        alignItems: "center"
    },
    emoji: {
        marginLeft: "1rem",
        marginRight: "1rem"
    }

}
function PaletteFooter(props) {
    const { paletteName, emoji, classes } = props;
    return (
        <footer className={classes.PaletteFooter}>
            {paletteName}
            <span className={classes.emoji}>
                {emoji}
            </span>
        </footer>
    )
}
export default withStyles(styles)(PaletteFooter);