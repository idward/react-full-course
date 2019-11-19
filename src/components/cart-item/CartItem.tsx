import React, { FC } from 'react';
import './cart-item.styles.scss';

interface ICartItemProps {
  [key: string]: any;
}

const CartItem: FC<ICartItemProps> = ({ item: { imageUrl, price, name, quantity } }) => {
  console.log('CartItem render');
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
