import React, { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ShoppingItem } from '../../types';
import { toggleCartStatus } from '../../store/actions';
import { ApplicationState } from '../../store/reducers';
import { selectCartItems } from '../../store/reducers/cart.selectors';
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.styles.scss';

interface ICartDropdownProps {
  items: ShoppingItem[];
  closeCartDropdown(): void;
}

const CartDropdown: FC<ICartDropdownProps & RouteComponentProps> = ({ items, closeCartDropdown, history }) => {
  console.log('CartDropdown component render');

  /**
   * 导航去Checkout Page
   */
  const navigateToCheckout = () => {
    // 关闭CartDropdown
    closeCartDropdown();
    history.push('/checkout');
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map((item: ShoppingItem, idx: number) => <CartItem key={`${item.name}-${idx}`} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={navigateToCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    items: selectCartItems(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    closeCartDropdown: () => dispatch(toggleCartStatus()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CartDropdown));
