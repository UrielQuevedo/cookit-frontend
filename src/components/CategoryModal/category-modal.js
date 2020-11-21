import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContent, TextField } from '@material-ui/core';
import { createCategory } from 'service/user-service';
import { UserContext } from 'context/user-context';

const CategoryModal = ({ openModal, closeModal, onSuccess }) => {
  const [body, setBody] = useState({});
  const { user } = useContext(UserContext);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await createCategory(user.id, body.name);
    } catch (error) {
      console.log(error);
    }
    setBody({});
    closeModal();
    onSuccess();
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setBody({ [name]: value });
  };

  return (
    <Dialog
      open={openModal}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle id="alert-dialog-title">{'Crear Categoria'}</DialogTitle>
        <DialogContent>
          <TextField
            required
            id="name-basic"
            name="name"
            label="Nombre"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={closeModal}>
            Cancelar
          </Button>
          <Button color="primary" variant="contained" type="submit">
            Agregar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CategoryModal;
