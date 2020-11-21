import { Grid, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import AbstractInput from '../abstract-input';
import LayoutSection from './layout-section';
import PropTypes from 'prop-types';

const RecipeInputs = ({ changeField, recipe }) => (
  <LayoutSection>
    <AbstractInput
      onChange={changeField}
      type="text"
      placeholder="ej: Masa de Pizza"
      name="name"
      className="m5"
      value={recipe.name}
    />
    {console.log(recipe.name)}
    <AbstractInput
      onChange={changeField}
      type="text"
      placeholder="ej: Pizza exquisita como si fueran hechas en italia"
      className="m5"
      name="description"
      multiline
      rows={4}
      rowsMax={6}
      defaultValue={recipe.description}
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
          value={recipe.comensales}
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
          value={recipe.time}
        />
      </Grid>
      <Grid
        container
        style={{ marginTop: '8px' }}
        item
        xs={12}
        sm={2}
        justify="flex-end"
      >
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

RecipeInputs.propTypes = {
  changeField: PropTypes.func.isRequired
};

export default RecipeInputs;
