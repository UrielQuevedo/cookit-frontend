import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './CardRecipe.css';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid, Grow } from '@material-ui/core';
import useTimeAgo from 'hooks/useTimeAgo';

const TEXT_LIMIT = 150;

const CardRecipe = ({ imageUrl, description, created_at, name, id }) => {
  const { push } = useHistory();
  const value = useTimeAgo(new Date(created_at));

  const goToRecipe = () => {
    push(`/recipes/${id}`);
  };

  const visualDescription =
    description.length > TEXT_LIMIT
      ? description
          .slice(0, TEXT_LIMIT)
          .split(' ')
          .slice(0, -1)
          .join(' ')
      : description;

  return (
    <Grow in>
      <Card className="cardRecipe">
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className="cardRecipe-avatar">
              U
            </Avatar>
          }
          title="Nombre de la Persona"
          subheader={value}
        />
        <CardMedia
          className="cardRecipe-image"
          image={imageUrl}
          title={name}
          onClick={goToRecipe}
        />
        <CardContent>
          <Typography variant="h6" className="title">
            {name}
          </Typography>
          <Typography
            variant="body2"
            className={description.length >= TEXT_LIMIT ? 'extends' : ''}
            color="textSecondary"
            component="p"
          >
            {visualDescription}
          </Typography>
        </CardContent>
        <Grid item className="actions">
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Card>
    </Grow>
  );
};

CardRecipe.propTypes = {
  created_at: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default CardRecipe;
