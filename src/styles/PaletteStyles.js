import sizes from "./sizes";
export default {
    Palette: {
        height: "100vh",
        overflow: "scroll",
        flexDirection: "column"
    },
    colours: {
        height: "90%"
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        background: "black",
        "& a": {
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
            cursor: "pointer",
            transition: ".12s",
            textDecoration: "none"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "33.33%"

        },
        [sizes.down("md")]: {
            width: "50%",
            height: "20%"
        },
        [sizes.down("xs")]: {
            height: "10%",
            width: "100%"
        },

    }
}