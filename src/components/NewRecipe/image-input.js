import { Grid } from '@material-ui/core';
import React from 'react';
import { IMAGE_DEFAULT_RECIPE } from 'utils/constants';
import AbstractInput from '../abstract-input';
import LayoutSection from './layout-section';
import PropTypes from 'prop-types';

const ImageInput = ({ recipe, changeField }) => (
  <LayoutSection>
    <img
      src={recipe?.image_url || IMAGE_DEFAULT_RECIPE}
      alt="The best recipe."
    />
    <Grid container style={{ marginTop: '25px' }}>
      <Grid container item xs={12} xl={2} alignItems="center" justify="center">
        Url de la foto
      </Grid>
      <Grid item xs={12}>
        <AbstractInput
          onChange={changeField}
          type="text"
          placeholder="ej: www.Pizzajpg.com"
          name="image_url"
          className="m5"
        />
      </Grid>
    </Grid>
  </LayoutSection>
);

ImageInput.propTypes = {
  changeField: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired
};

export default ImageInput;
