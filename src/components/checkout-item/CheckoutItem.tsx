import React, { FC } from 'react';
import { connect } from 'react-redux';
import { removeCartItem, increaseCartItemQuantity, decreaseCartItemQuantity } from '../../store/actions';
import { ApplicationState } from '../../store/reducers';
import { ShoppingItem } from '../../types';
import './checkout-item.styles.scss';

interface ICheckoutItemProps {
  item: ShoppingItem;
  [key: string]: any;
}

const CheckoutItem: FC<ICheckoutItemProps> = ({ item, dispatch }) => {
  console.log('items11: ', item);
  const { name, imageUrl, quantity, price } = item;

  const deleteCartItem = (removedItem: ShoppingItem) => {
    dispatch(removeCartItem(removedItem));
  };

  const addCartItemQuantity = (updatedItem: ShoppingItem) => {
    dispatch(increaseCartItemQuantity(updatedItem));
  };

  const reduceCartItemQuantity = (updatedItem: ShoppingItem) => {
    dispatch(decreaseCartItemQuantity(updatedItem));
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className={`arrow ${item.quantity === 1 ? 'disabled' : ''}`} onClick={() => reduceCartItemQuantity(item)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addCartItemQuantity(item)}>
          &#10095;
        </span>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => deleteCartItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }: ApplicationState) => {
  console.log('state: ', cartItems);
  return {
    items: cartItems,
  };
};

export default connect(mapStateToProps)(CheckoutItem);
