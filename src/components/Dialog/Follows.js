import {
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core';
import AvatarImage from 'components/User/avatar-image';
import React from 'react';
import { deleteFollowUser } from 'service/user-service';

const FOLLOWEDS_TITLE = 'seguidos';

const Follows = ({
  openModal,
  modalType,
  modalContent,
  closeModal,
  deleteFriend
}) => {
  return (
    <Dialog open={openModal} onClose={closeModal} maxWidth="xs" fullWidth>
      <DialogTitle style={{ textTransform: 'uppercase', textAlign: 'center' }}>
        {modalType}
      </DialogTitle>
      <List>
        {modalContent.map(({ id, name, lastname, imageUrl }) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <AvatarImage
                imageUrl={imageUrl}
                lastname={lastname}
                name={name}
              />
            </ListItemAvatar>
            <ListItemText primary={`${name} ${lastname}`} />
            {modalType === FOLLOWEDS_TITLE && (
              <ListItemSecondaryAction>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={deleteFriend(id)}
                >
                  eliminar
                </Button>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

export default Follows;
