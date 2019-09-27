import React from "react";
import { withStyles } from "@material-ui/styles";
import sizes from "./styles/sizes";

const styles = {
    PaletteFooter: {
        display: "flex",
        justifyContent: "flex-end",
        height: "6vh",
        alignItems: "center",
        bottom: 0,
        [sizes.down("xs")]: {
            textAlign: "center",
            justifyContent: "center",
            height: "4vh",
        }
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