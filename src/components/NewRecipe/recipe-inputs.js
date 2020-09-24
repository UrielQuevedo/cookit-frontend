import { Grid, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import AbstractInput from '../AbstractInput';
import LayoutSection from './LayoutSection';

const RecipeInputs = ({ changeField }) => {
  return (
    <LayoutSection>
      <AbstractInput
        onChange={changeField}
        type="text"
        placeholder="ej: Masa de Pizza"
        name="name"
        className="m5"
      />
      <AbstractInput
        onChange={changeField}
        type="text"
        placeholder="ej: Pizza exquisita como si fueran hechas en italia"
        className="m5"
        name="description"
        multiline={true}
        rows={4}
        rowsMax={6}
      />
      <Grid container className="m5">
        <Grid container item xs={5} alignItems="center">
          Comensales
        </Grid>
        <Grid item xs={7}>
          <AbstractInput
            onChange={changeField}
            type="number"
            name="comensales"
            placeholder="Numero de personas"
          />
        </Grid>
      </Grid>
      <Grid container className="m5">
        <Grid container item xs={5} alignItems="center">
          Tiempo
        </Grid>
        <Grid item xs={7} sm={5}>
          <AbstractInput
            onChange={changeField}
            type="number"
            name="time"
            placeholder="Tiempo"
          />
        </Grid>
        <Grid container style={{ marginTop:'8px'}} item xs={12} sm={2} justify="flex-end">
          <Select
            size="small"
            id="timeType"
            variant="standard"
            value={10}
            onChange={() => undefined}
          >
            <MenuItem value={10}>Minuto/s</MenuItem>
            <MenuItem value={20}>Hora/s</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </LayoutSection>
  );
}

export default RecipeInputs;