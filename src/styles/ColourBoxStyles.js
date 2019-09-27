import chroma from "chroma-js";
import sizes from "./sizes";
const styles = {
    colourBox: {
        width: "20%",
        height: props => props.showFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: "1"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: props => props.showFullPalette ? "20%" : "50%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: props => props.showFullPalette ? "10%" : "50%"

        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props => props.showFullPalette ? "5%" : "10%"
        },

    },

    goBack: {
        backgroundColor: "black"
    },
    copyText: {
        color: (props) => chroma(props.background).luminance() >= .7 ? "black" : "white"
    },
    colourName: {
        color: (props) => chroma(props.background).luminance() <= .15 ? "white" : "black"
    },
    seeMore: {
        color: "white",
        position: "absolute",
        right: "0",
        bottom: "0",
        padding: "10px",
        fontSize: "12px",
        textTransform: "uppercase",
        background: " #00000057",
        border: "0",
        textAlign: "center",

    },
    copyButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        outline: "none",
        background: "#38383842",
        border: "0",
        textTransform: "uppercase",
        color: "#fff",
        opacity: "0",
        cursor: "pointer",
        transition: ".12s"
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        color: "#000"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 1s ease-in-out",
        transform: "scale(0.1)",
        overflow: "hidden"


    },
    showOverlay: {
        opacity: "1",
        transform: "scale(20)",
        zIndex: "10",
        position: "absolute",
        overflow: "hidden"
    },
    copyMsg: {
        position: "fixed",
        left: "0",
        bottom: "0",
        top: "0",
        right: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3rem",
        transform: "scale(.1)",
        opacity: "0",
        color: "#fff",
        overflowY: "hidden",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px #0000008e",
            background: "#ffffff42",
            marginBottom: "0",
            width: "100%",
            textAlign: "center",
            alignContent: "center",
            textTransform: "uppercase"
        }
    },
    showCopyMsg: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "20",
        transition: "all .5s",
        transitionDelay: ".3s",
        overflowY: "hidden",
        "& p": {
            fontSize: "2rem",
            fontWeight: "200"
        }
    }
}

export default styles;