import React, { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";

import CartItem from './CartItem';
import CartContext from "../../contexts/CartContext";
import AlertDialog from '../Shared/AlertDialog';
import { CartItemStyle, CartTotalAmountStyle } from './Cart.styled';

export default function CartDialog({ isDialogOpened, handleCloseDialog }) {
  const cartCtx = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, qty: 1});
  };

  const cartItems = (
    <CartItemStyle>
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
    </CartItemStyle>
  );

  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth] = React.useState("sm");

  const handleClose = () => {
    handleCloseDialog(false);
  };

  return (
    <>
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
                <CartTotalAmountStyle>
                    <span>Total Amount</span>
                    <span>&#8377; {totalAmount}</span>
                </CartTotalAmountStyle>
            </div> }
            { !hasItems && <div>Your Basket is empty! Pick up where you left off</div> }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <AlertDialog isDialogOpened={isOpen}
                         handleCloseDialog={() => setIsOpen(false)}
                         titleText='Order Placed'
                         alertText='Your Order has been placed successfully'
                         buttonText='Ok'/>
            <Button color="primary" variant="contained" type="cancel" onClick={handleClose}>Cancel</Button>
            {hasItems &&
            <Button 
              color="primary"
              variant="contained"
              onClick={() => handleOpen()}>
                Place Order
            </Button>}
        </DialogActions>
      </Dialog>
    </>
  );
}
