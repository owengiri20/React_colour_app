export default {
    Palette: {
        height: "100vh",
        overflow: "scroll",
        flexDirection: "column"
    },
    colours: {
        height: "87%"
    },
    goBack: {
        width: "20%",
        height: props => props.showFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
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
        }
    }
}