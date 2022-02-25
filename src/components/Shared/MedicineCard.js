import React, { useContext } from 'react';
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
import CartContext from '../../store/CartContext';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 300,
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
  },
});

const MedicineCard = (props) => {
  const cartCtx = useContext(CartContext);
  const classes = useStyles();

  const onClickHandler = () => {
    props.onClick(props);
  };

const addToCartHandler = () => {
  cartCtx.addItem({
    id: props.id,
    name: props.name,
    qty: 1,
    price: props.price
});
};

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            onClick={onClickHandler}
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={MedImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <h4 size="small" color="primary">
            <span>&#8377;</span> {props.price.toFixed(2)}
          </h4>
          <Button size="small" color="primary" onClick={addToCartHandler}>
            + Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MedicineCard;