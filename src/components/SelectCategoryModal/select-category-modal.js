import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core';
import { UserContext } from 'context/user-context';
import React, { useContext, useEffect, useState } from 'react';
import { createCategory, getCategories } from 'service/user-service';

const SelectCategoryModal = ({ open, closeOpen, onSuccess }) => {
  const [body, setBody] = useState({});
  const { user } = useContext(UserContext);
  const [categories, setCategories] = useState([]);

  const handleSubmit = async event => {
    event.preventDefault();
    setBody({});
    closeOpen();
    onSuccess(body.idCategory);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setBody({ [name]: value });
  };

  useEffect(() => {
    getCategories(user.id).then(categories_ => setCategories(categories_));
  }, []);

  return (
    <Dialog
      open={open}
      onClose={closeOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle id="alert-dialog-title">
          {'Seleccionar Categoria'}
        </DialogTitle>
        <DialogContent>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="idCategory"
            value={body.idCategory}
            fullWidth
            onChange={handleChange}
          >
            {(categories || []).map(({ id, name }) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={closeOpen}>
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

export default SelectCategoryModal;
