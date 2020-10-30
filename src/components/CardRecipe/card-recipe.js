import React, { useContext, useState } from 'react';
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
import { Grid, Grow, Snackbar } from '@material-ui/core';
import useTimeAgo from 'hooks/useTimeAgo';
import { UserContext } from 'context/user-context';
import { deleteRecipeToFavorite, postAddFavorite } from 'service/user-service';
import Alert from '@material-ui/lab/Alert';
import AvatarImage from 'components/User/avatar-image';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteRecipe from '../Dialog/delete-recipe';

const TEXT_LIMIT = 150;
const MESSAGE_FAVORITE_SUCCESSFUL = 'Se agrego correctamente a favoritos';

const CardRecipe = ({ recipe, setRecipes }) => {
  const { imageUrl, description, created_at, name, id, user } = recipe;
  const { push } = useHistory();
  const value = useTimeAgo(new Date(created_at));

  const {
    lastname,
    name: userName,
    imageUrl: userImageUrl,
    id: recipeUserId
  } = user;
  const { user: myUser, setUser } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  const goToRecipe = () => {
    push(`/recipes/${id}`);
  };

  const addToFavorite = () => {
    postAddFavorite(myUser.id, id);
    setUser(u => ({ ...u, favorites: [...u.favorites, recipe] }));
    setOpen(true);
  };

  const removeToFavorite = () => {
    deleteRecipeToFavorite(myUser.id, id);
    setUser(u => ({ ...u, favorites: u.favorites.filter(f => f.id !== id) }));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
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
            <AvatarImage
              name={userName}
              lastname={lastname}
              imageUrl={userImageUrl}
            />
          }
          title={`${userName} ${lastname}`}
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
            {(myUser.favorites || []).find(f => f.id === id) ? (
              <IconButton
                aria-label="add to favorites"
                onClick={removeToFavorite}
              >
                <FavoriteIcon style={{ color: 'red' }} />
              </IconButton>
            ) : (
              <IconButton aria-label="add to favorites" onClick={addToFavorite}>
                <FavoriteIcon />
              </IconButton>
            )}
            {recipeUserId === myUser.id && (
              <>
                <IconButton aria-label="add to favorites">
                  <EditIcon />
                </IconButton>
                <DeleteRecipe idRecipe={id} setRecipes={setRecipes}/>
              </>
            )}
          </CardActions>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={3000}
          onClose={handleClose}
          open={open}
        >
          <Alert onClose={handleClose} severity="success">
            {MESSAGE_FAVORITE_SUCCESSFUL}
          </Alert>
        </Snackbar>
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
