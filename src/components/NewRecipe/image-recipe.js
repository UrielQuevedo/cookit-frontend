import { Grid, Button } from '@material-ui/core';
import React from 'react';
import { IMAGE_DEFAULT_RECIPE } from 'utils/constants';
import AbstractInput from '../abstract-input';
import LayoutSection from './layout-section';
import PropTypes from 'prop-types';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';

const IMAGE_LABEL_NAME = 'Url de la foto';

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
}));

const ImageRecipe = ({ recipe, setImageUrl }) => {

  const classes = useStyles();

  const readFile = () => {
    var file = document.querySelector('input[type=file]')['files'][0];
    var reader = new FileReader();
    var baseString;
    reader.onloadend = function () {
      baseString = reader.result;
      const imageRecipe = document.getElementById('image-recipe');
      imageRecipe.src = baseString;
      setImageUrl(baseString);
    };
    reader.readAsDataURL(file);
  }

  return (
    <LayoutSection>
      <img
        id="image-recipe"
        src={recipe?.image_url || IMAGE_DEFAULT_RECIPE}
        alt="The best recipe."
      />
      <Grid container justify="center" style={{ marginTop: '25px' }}>
        <Grid item xs={12}>
          <div style={{ textAlign: 'center' }}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={readFile}
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                startIcon={<CloudUploadIcon />}
              >
                Subir imagen
            </Button>
            </label>
          </div>
        </Grid>
      </Grid>
    </LayoutSection>
  )
};

export default ImageRecipe;
