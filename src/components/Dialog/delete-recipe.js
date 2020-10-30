import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { deleteRecipeById } from '../../service/recipe-service';

const DeleteRecipe = ( { idRecipe, setRecipes } ) => {
    
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const deleteRecipe = async () => {
        const _ = await deleteRecipeById(idRecipe);
        setRecipes(recipes => recipes.filter(r => r.id !== idRecipe));
        handleClose();
    };

    return (
    <div>
        <IconButton aria-label="delete recipe" onClick={handleClickOpen}>
            <DeleteIcon />
        </IconButton>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"¿Esta seguro que desea eliminar esta receta?"}</DialogTitle>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancelar
            </Button>
            <Button onClick={deleteRecipe} color="primary" autoFocus>
                Eliminar
            </Button>
            </DialogActions>
        </Dialog>
    </div>
    )
}


export default DeleteRecipe;