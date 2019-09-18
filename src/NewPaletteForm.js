import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { ChromePicker } from "react-color";
import { Button } from '@material-ui/core';
import DraggableColourBox from "./DraggableColourBox";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DraggableColourList from "./DraggableColourList";
import { arrayMove } from "react-sortable-hoc";

const drawerWidth = 400;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
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
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: "calc(100vh - 64px)",
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});

class NewPaletteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            currentColour: "teal",
            colors: [{ name: "red", color: "red" }],
            newColourName: "",
            newPaletteName: ""
        };
        this.addNewColour = this.addNewColour.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateCurrentColour = this.updateCurrentColour.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteColour = this.deleteColour.bind(this);

    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColourNameUnique', value => {
            return this.state.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        });

        ValidatorForm.addValidationRule('isColourUnique', value => {
            return this.state.colors.every(
                ({ color }) => color !== this.state.currentColour
            )
        });

        ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
            return this.props.palettes.every(
                ({ paletteName }) => paletteName.toLocaleLowerCase() !== value.toLocaleLowerCase()
            )
        });
    }

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    updateCurrentColour(newColour) {
        this.setState({ currentColour: newColour })
    }

    addNewColour() {
        const { currentColour, newColourName } = this.state;
        const newColour = { name: newColourName, color: currentColour };
        this.setState((st) => ({ colors: [...st.colors, newColour], newColourName: "" }));
    }

    /////////////////////////////////////////// 
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });

    }
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colors }) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }));
    };

    handleSubmit() {
        let newName = this.state.newPaletteName;
        const newPalette = { paletteName: newName, id: newName.toLocaleLowerCase().replace(/ /g, "-"), colors: this.state.colors };
        this.props.savePalette(newPalette);
        this.props.history.push("/")
        console.log(newPalette);
    }

    deleteColour(colourName) {
        this.setState((st) => ({
            colors: st.colors.filter(colour => colourName !== colour.name)
        }))
    }

    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Persistent drawer
                        </Typography>

                        <ValidatorForm onSubmit={this.handleSubmit}>
                            <TextValidator
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={["this field is required", "Palette name already used"]}
                                label="Palette Name"
                                value={this.state.newPaletteName}
                                onChange={this.handleChange}
                                name="newPaletteName"
                            />
                            <Button variant="contained" color="secondary" type="submit">Save Palette</Button>
                        </ValidatorForm>

                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <Typography variant="h4">Design your Palette</Typography>
                    <div>
                        <Button variant="contained" color="secondary">Clear Palette</Button>
                        <Button variant="contained" color="primary">Random Colour</Button>
                    </div>

                    <ChromePicker color={this.state.currentColour} onChangeComplete={(newColour) => {
                        this.updateCurrentColour(newColour.hex)

                    }} />

                    <ValidatorForm onSubmit={this.addNewColour}>
                        <TextValidator
                            value={this.state.newColourName}
                            name="newColourName"
                            validators={['required', 'isColourNameUnique', 'isColourUnique']}
                            errorMessages={['field required', 'Colour name must be unique', 'colour must be unique']}
                            onChange={this.handleChange}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ backgroundColor: this.state.currentColour }}
                            // onClick={this.addNewColour}
                            type="submit"
                        >
                            Add Colour
                    </Button>
                    </ValidatorForm>



                </Drawer>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}>

                    <div className={classes.drawerHeader} />
                    {/* Dnd colour boxes goes here! */}
                    <DraggableColourList
                        axis="xy"
                        colors={this.state.colors}
                        deleteColour={this.deleteColour}
                        onSortEnd={this.onSortEnd}
                    />

                </main>
            </div>
        );
    }
}


export default withStyles(styles, { withTheme: true })(NewPaletteForm);