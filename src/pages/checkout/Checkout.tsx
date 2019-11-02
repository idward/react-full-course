import React, { FC } from 'react';
import { connect } from 'react-redux';
import { selectCartItemsTotal, selectCartItems } from '../../store/reducers/cart.selectors';
import { ApplicationState } from '../../store/reducers';
import { ShoppingItem } from '../../types';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe-button/StripeButton';
import './checkout.styles.scss';

interface ICheckoutProps {
  total: number;
  items: ShoppingItem[];
}

const Checkout: FC<ICheckoutProps> = ({ total, items }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {items.map((item: ShoppingItem, idx: number) => (
        <CheckoutItem key={`${item.name}-${idx}`} item={item} />
      ))}
      <div className="total">Total: ${total}</div>
      <div className="test-warning">
        *Please use the following test credit card for payements*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    total: selectCartItemsTotal(state),
    items: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(Checkout);
