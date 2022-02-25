import React, { useState, useContext } from "react";

import CartIcon from './CartIcon';
import classes from './HeaderCartButton.module.css';

import CartDialog from '../Cart/Cart';
import CartContext from '../../store/CartContext';

const HeaderCartButton = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currentValue, item) => {
        return currentValue + item.qty;
    }, 0);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <CartDialog
                    isDialogOpened={isOpen}
                    handleCloseDialog={() => setIsOpen(false)}
            />
            <button className={classes.button} onClick={() => handleOpen()}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
        </>
    );
};

export default HeaderCartButton;