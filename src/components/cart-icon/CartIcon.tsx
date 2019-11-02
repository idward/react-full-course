import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleCartStatus } from '../../store/actions';
import { ApplicationState } from '../../store/reducers';
import { selectCartItemsCount } from '../../store/reducers/cart.selectors';
import ShoppingBag from '../../Icons/ShoppingBag';
import './cart-icon.styles.scss';

interface ICartIconProps {
  itemCount: number;
  changeCartStatus(): void;
}

const CartIcon: FC<ICartIconProps> = ({ itemCount, changeCartStatus }) => {
  console.log('CartIcon component render');
  return (
    <div className="cart-icon" onClick={changeCartStatus}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    itemCount: selectCartItemsCount(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeCartStatus: () => dispatch(toggleCartStatus()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartIcon);
