import { DRAWER_WIDTH } from "../constants";
const drawerWidth = DRAWER_WIDTH;
const styles = (theme) => ({
    root: {
        display: "flex"
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    navBtns: {
        marginRight: "1rem",
        display: "flex"
    },
    button: {
        margin: "0rem 0.5rem",
        padding: "0 .5rem",
        // display: "inline-block"
        // color: "red"
    },
    link: {
        textDecoration: "none"

    },
    hide: {
        display: 'none',
    },
})

export { styles, drawerWidth }