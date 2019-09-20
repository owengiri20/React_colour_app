import React, { Component } from 'react';

import PaletteFormNav from "./PaletteFormNav";
import ColourPickerForm from "./ColourPickerForm";


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
import { Link } from "react-router-dom";

const drawerWidth = 400;

const styles = theme => ({
    root: {
        display: 'flex',
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
    static defaultProps = {
        maxColours: 20
    }
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            colors: this.props.palettes[0].colors,
        };
        this.addNewColour = this.addNewColour.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteColour = this.deleteColour.bind(this);
        this.clearColours = this.clearColours.bind(this);
        this.addRandomColour = this.addRandomColour.bind(this);



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

    addNewColour(newColour) {
        this.setState((st) => ({ colors: [...st.colors, newColour], newColourName: "" }));
    }

    /////////////////////////////////////////// 
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colors }) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }));
    };

    handleSubmit(newPaletteName) {
        // let newPaletteName = this.state.newPaletteName;
        const newPalette = { paletteName: newPaletteName, id: newPaletteName.toLocaleLowerCase().replace(/ /g, "-"), colors: this.state.colors };
        this.props.savePalette(newPalette);
        this.props.history.push("/")
        console.log(newPalette);
    }

    clearColours() {
        this.setState({ colors: [] })

    }

    deleteColour(colourName) {
        this.setState((st) => ({
            colors: st.colors.filter(colour => colourName !== colour.name)
        }))
    }

    addRandomColour() {
        // pick random colour 
        const allColours = this.props.palettes.map(p => p.colors).flat();
        let rand = Math.floor(Math.random() * allColours.length)
        const randColour = allColours[rand];
        this.setState((st) => ({ colors: [...st.colors, randColour] }))
    }

    render() {
        const { classes, theme, palettes } = this.props;
        const { open, currentColour, colors } = this.state;
        const palettesFull = this.state.colors.length === this.props.maxColours;

        return (
            <div className={classes.root}>
                {/* NAVBAR */}
                <PaletteFormNav
                    open={open}
                    classes={classes}
                    palettes={palettes}
                    handleSubmit={this.handleSubmit}
                    handleDrawerOpen={this.handleDrawerOpen} />
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
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={this.clearColours}>
                            Clear Palette
                        </Button>
                        <Button
                            disabled={palettesFull}
                            variant="contained"
                            color="primary"
                            onClick={this.addRandomColour}>
                            Random Colour
                        </Button>
                    </div>

                    <ColourPickerForm
                        palettesFull={palettesFull}
                        addNewColour={this.addNewColour}
                        colours={colors} />
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