import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { Fragment } from 'react';
import { ProjectData } from '../interface/inteface';

function RealizationsCard({ project }: { project: ProjectData }) {
  return (
    <Fragment>
      <Card sx={{
        maxWidth: "200rem",
        minWidth: "100rem",
      }}>
        {
          project.images ? (
            <CardMedia
            sx={{ minHeight: "30rem" }}
            image={ project.images[0].fileUrl }
            title={ project.images[0].title }
          />
          ) : (null)
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">{project.name}</Typography>
          <Typography variant="body2" color="text.secondary">
          {project.shortName}
        </Typography>
        </CardContent>
        <CardActions>
          <Button>Dowiedz się więcej</Button>
        </CardActions>
      </Card>
    </Fragment>
  );
}

export default RealizationsCard;
