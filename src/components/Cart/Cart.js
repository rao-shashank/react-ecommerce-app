import React, { useContext, useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from "../../store/CartContext";

export default function CartDialog({ isDialogOpened, handleCloseDialog }) {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {};

  const cartItemAddHandler = item => {};

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          qty={item.qty}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth] = React.useState("sm");

  const handleClose = () => {
    handleCloseDialog(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={isDialogOpened}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Basket</DialogTitle>
        <DialogContent>
          <DialogContentText>
            { hasItems && <div>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>&#8377; {totalAmount}</span>
                </div>
            </div> }
            { !hasItems && <div>Your Basket is empty! Pick up where you left off</div> }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button color="primary" variant="contained" type="cancel" onClick={handleClose}>Cancel</Button>
            {hasItems && <Button color="primary" variant="contained">Order</Button>}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
