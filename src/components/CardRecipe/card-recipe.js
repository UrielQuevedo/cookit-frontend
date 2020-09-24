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

const CardRecipe = ({ imageUrl, description, name, id }) => {
  const { push } = useHistory();

  const goToRecipe = () => {
    push(`/recipes/${id}`);
  };

  return (
    <Card className="cardRecipe">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className="cardRecipe-avatar">
            U
          </Avatar>
        }
        title="Nombre de la Persona"
        subheader="September 11, 1997"
      />
      <CardMedia
        className="cardRecipe-image"
        image={imageUrl}
        title={name}
        onClick={goToRecipe}
      />
      <CardContent>
        <Typography variant="h6" style={{ padding: '10px 0 10px 0' }}>
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardRecipe;
