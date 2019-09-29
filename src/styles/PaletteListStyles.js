import sizes from "./sizes";
import bg from "./bg1.svg";
export default {
    root: {
        backgroundColor: "blue",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#f3ffd1",
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
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
        color: "#333",
        "& a": {
            color: "#333",
            textDecoration: "none",
            border: "1px solid #333",
            padding: ".3rem .5rem",
            borderRadius: "10px",
            transition: ".2s ease-in-out",
            "&:hover": {
                color: "#f4f4f4",
                backgroundColor: "#333",
                transition: ".1s ease-in-out"

            }
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
