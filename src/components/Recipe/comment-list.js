import React from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
import SectionTitle from './section-title';

const TITLE = 'Comentarios';

const CommentList = ({ comments }) => {

    return (
        <Grid item container xs={12} className="plr-20">
          <SectionTitle title={TITLE} />
        </Grid>
    )
}

export default CommentList;