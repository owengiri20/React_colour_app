import React, { Component } from 'react';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Button } from '@material-ui/core';
import DraggableColourBox from "./DraggableColourBox";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DraggableColourList from "./DraggableColourList";
import { arrayMove } from "react-sortable-hoc";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 400;
const styles = (theme) => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: "row",
        justifyContent: "space-between"
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

    }
})

class PaletteFormNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPaletteName: ""
        }
        this.handleChange = this.handleChange.bind(this);

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

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });

    }

    render() {
        const { classes, open } = this.props;
        const { newPaletteName } = this.state;
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
                            onClick={this.props.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Create a Palette
                        </Typography>

                    </Toolbar>

                    <div className={classes.navBtns}>
                        <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
                            <TextValidator
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={["this field is required", "Palette name already used"]}
                                label="Palette Name"
                                value={this.state.newPaletteName}
                                onChange={this.handleChange}
                                name="newPaletteName"
                            // variant="fill"
                            />
                            <Button
                                variant="contained"
                                color="secondary"
                                type="submit"
                            >
                                Save Palette
                            </Button>

                        </ValidatorForm>
                        <Link to="/">
                            <Button variant="contained" color="secondary">Go Back</Button>
                        </Link>
                    </div>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);