import sizes from "./sizes"
export default {
    root: {
        backgroundColor: "blue",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        marginBottom: "2rem",
        [sizes.down("md")]: {
            width: "70%",
        },
        [sizes.down("sm")]: {
            width: "75%",
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        "& a": {
            color: "#fff",
            textDecoration: "none",
        }

    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2rem",
        [sizes.down("sm")]: {
            gridTemplateColumns: "repeat(2, 50%)",
        },

        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
        }

    },
    linkPalette: {
        textDecoration: "none",
        color: "#000",
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.05)"
        }

    }
}
