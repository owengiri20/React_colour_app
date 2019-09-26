import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';


class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPaletteName: "",
            open: true,
        };
        this.handleChange = this.handleChange.bind(this);

    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isColourNameUnique', value => {
            return this.state.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        });
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }


    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
        this.props.hideForm();
    };

    render() {
        const { newPaletteName } = this.state;
        return (
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                <ValidatorForm onSubmit={() => this.props.handleSubmit(newPaletteName)}>
                    <DialogContent>

                        <DialogContentText>
                            enter a unique name for your beautiful new palette.
                        </DialogContentText>
                        <Picker />

                        <TextValidator
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["this field is required", "Palette name already used"]}
                            label="Palette Name"
                            value={newPaletteName}
                            onChange={this.handleChange}
                            name="newPaletteName"
                            fullWidth
                            margin="normal"
                        // variant="fill"
                        />



                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={this.handleClose} color="primary">
                            Cancel
                         </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                        >
                            Save Palette
                            </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        );
    }
}

export default PaletteMetaForm;