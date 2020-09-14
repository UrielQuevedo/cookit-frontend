import { Grid } from '@material-ui/core';
import React from 'react';
import { IMAGE_DEFAULT_RECIPE } from '../../utils/constants';
import AbstractInput from '../AbstractInput';
import LayoutSection from './LayoutSection';

const ImageInput = ({ recipe, changeField }) => {
  return (
    <LayoutSection>
      <img
        src={recipe?.image_url || IMAGE_DEFAULT_RECIPE}
        alt="The best recipe."
      />
      <Grid container style={{ marginTop: '25px' }}>
        <Grid
          container
          item
          xs={12}
          xl={2}
          alignItems="center"
          justify="center"
        >
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
};

export default ImageInput;
