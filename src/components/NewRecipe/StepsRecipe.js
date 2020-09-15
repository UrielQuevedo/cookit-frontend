import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import AbstractInput from '../AbstractInput';
import LayoutSection from './LayoutSection';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import { useChangeFieldOnList } from '../../hooks/useChangeFieldOnList';

const StepsRecipe = ({ stepsRecipes, setStepsRecipes }) => {
  const [changeSteps, newStep, removeStep] = useChangeFieldOnList(stepsRecipes, setStepsRecipes)

  return (
    <LayoutSection>
      <h2>Pasos</h2>
      {stepsRecipes.map(({ description }, i) => (
        <Grid key={i} container justify="center" direction="row" style={{ marginBottom:'10px'}}>
          <Grid item xs={1}>
            <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
              {i + 1}.
            </span>
          </Grid>
          <Grid item xs={10}>
            <AbstractInput
              onChange={changeSteps(i)}
              type="text"
              placeholder="ej: Batir bien en ..."
              className="m5"
              name="description"
              multiline={true}
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

export default StepsRecipe;
