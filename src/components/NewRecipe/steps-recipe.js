import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import AbstractInput from '../abstract-input';
import LayoutSection from './layout-section';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import { useChangeFieldOnList } from '../../hooks/useChangeFieldOnList';
import PropTypes from 'prop-types';

const StepsRecipe = ({ stepsRecipes, setStepsRecipes }) => {
  const [changeSteps, newStep, removeStep] = useChangeFieldOnList(
    stepsRecipes,
    setStepsRecipes
  );

  return (
    <LayoutSection>
      <h2>Pasos</h2>
      {stepsRecipes.map(({ description }, i) => (
        <Grid
          key={i}
          container
          justify="center"
          direction="row"
          style={{ marginBottom: '10px' }}
        >
          <Grid
            item
            xs={12}
            sm={1}
            container
            justify="flex-start"
            alignContent="center"
          >
            <span
              style={{
                background: '#4a4a4a',
                color: '#fff',
                borderRadius: '16px',
                height: '24px',
                width: '24px',
                padding: '4px',
                textAlign: 'center',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              {i + 1}
            </span>
          </Grid>
          <Grid item xs={11} sm={10}>
            <AbstractInput
              onChange={changeSteps(i)}
              type="text"
              placeholder="ej: Batir bien en ..."
              className="m5"
              name="description"
              multiline
              rows={4}
              rowsMax={6}
              value={description}
            />
          </Grid>
          <Grid item xs={1} style={{ textAlign: 'end' }}>
            <IconButton onClick={removeStep(i)}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <IconButton onClick={newStep}>
        <AddIcon />
      </IconButton>
    </LayoutSection>
  );
};

StepsRecipe.defaultProps = {
  stepsRecipes: []
};

StepsRecipe.propTypes = {
  setStepsRecipes: PropTypes.func.isRequired,
  stepsRecipes: PropTypes.array
};

export default StepsRecipe;
