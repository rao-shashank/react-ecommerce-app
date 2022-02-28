import React, { useState, useContext } from "react";

import CartIcon from './CartIcon';

import CartDialog from '../Cart/Cart';
import CartContext from '../../store/CartContext';
import { HeaderCartButtonStyle, CartIconStyle, CartBadgeStyle } from './HeaderCartButton.styled';

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
            <HeaderCartButtonStyle>
            <button onClick={() => handleOpen()}>
            <CartIconStyle>
            <span>
                <CartIcon />
            </span>
            </CartIconStyle>
            <CartBadgeStyle>
            <span>{numberOfCartItems}</span>
            </CartBadgeStyle>
            </button>
            </HeaderCartButtonStyle>
        </>
    );
};

export default HeaderCartButton;