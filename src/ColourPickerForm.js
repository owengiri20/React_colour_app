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
import { Link } from "react-router-dom";
import styles from "./styles/ColourPickerFormStyles";

class ColourPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newColourName: "",
            currentColour: "teal",
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateCurrentColour = this.updateCurrentColour.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColourNameUnique', value => {
            return this.props.colours.every(
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

    updateCurrentColour(newColour) {
        this.setState({ currentColour: newColour })
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });

    }
    // add new colour
    handleSubmit() {
        const { currentColour, newColourName } = this.state;
        const newColor = {
            color: currentColour,
            name: newColourName
        }
        this.setState({ newColourName: "" })
        this.props.addNewColour(newColor);
    }
    render() {
        const { palettesFull, addNewColour, classes } = this.props;
        const { currentColour, newColourName } = this.state;
        return (
            <div>
                <ChromePicker
                    color={currentColour}
                    onChangeComplete={(newColour) => {
                        this.updateCurrentColour(newColour.hex)
                    }}
                    className={classes.picker} />

                <ValidatorForm onSubmit={this.handleSubmit}>
                    <TextValidator
                        variant="filled"
                        placeholder="Colour Name"
                        className={classes.colourNameInput}
                        value={newColourName}
                        name="newColourName"
                        validators={['required', 'isColourNameUnique', 'isColourUnique']}
                        errorMessages={['field required', 'Colour name must be unique', 'colour must be unique']}
                        onChange={this.handleChange}
                    />
                    <Button
                        disabled={palettesFull}
                        variant="contained"
                        color="primary"
                        className={classes.addColour}
                        style={{ backgroundColor: palettesFull ? "grey" : currentColour }}
                        // onClick={this.addNewColour}
                        type="submit"
                    >
                        {palettesFull ? "palette full" : "Add Colour"}
                    </Button>
                </ValidatorForm>

            </div>
        );
    }
}

export default withStyles(styles)(ColourPickerForm);