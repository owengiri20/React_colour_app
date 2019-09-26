export default {
    root: {
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: ".15s ease-in-out",
        "&:hover svg": {
            opacity: 1,
            transition: ".2s ease-in"
        }
    },
    colours: {
        backgroundColor: "#dae1e4",
        height: "150px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"

    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        paddingTop: ".5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColour: {
        height: "24%",
        width: "20%",
        // backgroundColor: "red"
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    },
    delete: {
        // position: "relative"
    },
    deleteBtn: {
        position: "absolute",
        color: "white",
        backgroundColor: "red",
        width: "20px",
        height: "20px",
        right: "0",
        top: "0",
        padding: "10px",
        zIndex: "10",
        borderRadius: "2px",
        opacity: 0,


    }
}