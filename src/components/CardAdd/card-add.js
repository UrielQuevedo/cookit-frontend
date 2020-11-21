import React, { useContext, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './CardAdd.css';
import PropTypes from 'prop-types';
import { Grid, Grow } from '@material-ui/core';

const CardAdd = ({ action }) => {
  return (
    <Grow in>
      <Card className="cardAdd" onClick={action}>
        <Grid container justify="center">
          <CardContent>
            <img src="/add-button.svg" height="200px" alt="" />
          </CardContent>
          <Typography variant="h5" style={{ marginBottom: '25px' }}>
            Agregar Categoria
          </Typography>
        </Grid>
      </Card>
    </Grow>
  );
};

CardAdd.propTypes = {
  created_at: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default CardAdd;
