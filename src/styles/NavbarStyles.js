import sizes from "./sizes";
const styles = {
    Navbar: {
        display: "flex",
        height: "7vh",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    logo: {
        marginRight: "15px",
        padding: "0 15px",
        fontSize: "22px",
        background: "#eceff1",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "#252525"
        },
        // from xs and down
        [sizes.down("xs")]: {
            display: "none"
        }
    },
    Slider: {
        width: "340px",
        display: "inline-block",
        margin: "0 3px",
        "& .rc-slider-rail": {
            height: "8px",
        },
        "& rc-slider-handle .rc-slider-handle:focus, .rc-slider-handle, .rc-slider-handle:hover": {
            background: "#229267",
            border: "0",
            outline: "none",
            boxShadow: "none",
            width: "30px",
            height: "16px",
            borderRadius: "10px",


        },
        "& .rc-slider-track": {
            backgroundColor: "transparent",
        },
        [sizes.down("md")]: {
            width: "160px"
        }
    },
    selectContainer: {
        marginRight: "1rem",
        marginLeft: "auto"

    }
}

export default styles;