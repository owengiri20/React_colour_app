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

import PaletteMetaForm from "./PaletteMetaForm";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


import { styles, drawerWidth } from "./styles/PaletteFormNavStyles"


class PaletteFormNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPaletteName: "",
            formShowing: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);


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

    showForm() {
        this.setState({ formShowing: true })
        console.log(123);
    }

    hideForm() {
        this.setState({ formShowing: false })
    }

    render() {
        const { classes, open, palettes, handleSubmit } = this.props;
        const { newPaletteName } = this.state;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    color="default"
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
                            <ChevronRightIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Create a Palette
                        </Typography>

                    </Toolbar>

                    <div className={classes.navBtns}>

                        <Link to="/" className={classes.link}>
                            <Button
                                variant="contained"
                                className={classes.button}
                                color="secondary">
                                Go Back
                             </Button>
                        </Link>

                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            onClick={this.showForm}>
                            Save
                        </Button>
                    </div>
                </AppBar>
                {this.state.formShowing ? <PaletteMetaForm
                    palettes={palettes}
                    handleSubmit={handleSubmit}
                    hideForm={this.hideForm} /> : ""}
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);