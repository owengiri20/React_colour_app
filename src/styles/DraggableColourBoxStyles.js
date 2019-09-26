const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4.5px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.4)"
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