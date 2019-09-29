import sizes from "./sizes"
const styles = {
    root: {
        width: "25%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.4)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%",
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "20%",
        },
        [sizes.down("sm")]: {
            width: "100%",
            height: "10%",
        }

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
        color: "#000",
        display: "flex",
        justifyContent: "space-between"
    },
    delete: {
        color: "rgba(0,0,0,.6)",
        transition: ".1s ease-in-out"
    }
}

export default styles;