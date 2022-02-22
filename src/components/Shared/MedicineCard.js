import React from 'react';
import { makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid } from '@material-ui/core/';

import MedImage from '../../assets/medicine-item.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const MedicineCard = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={MedImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>

          <h4 size="small" color="primary">
            <span>&#8377;</span>{props.price}
          </h4>
          <Button size="small" color="primary">
            View Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MedicineCard;