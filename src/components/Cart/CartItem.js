import { 
    CartItemStyle,
    CartSummaryStyle,
    CartItemPriceStyle,
    CartItemQtyStyle,
    CartItemActions } from './CartItem.styled';

const CartItem = (props) => {
  const price = `${props.price.toFixed(2)}`;

  return (
    <CartItemStyle>
      <div>
        <h2>{props.name}</h2>
        <CartSummaryStyle>
          <CartItemPriceStyle>&#8377; {price}</CartItemPriceStyle>
          <CartItemQtyStyle>x {props.qty}</CartItemQtyStyle>
        </CartSummaryStyle>
      </div>
      <CartItemActions>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </CartItemActions>
    </CartItemStyle>
  );
};

export default CartItem;
