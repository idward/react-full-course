import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { selectCartStatus } from '../../store/reducers/cart.selectors';
import { selectCurrentUser } from '../../store/reducers/user.selectors';
import { auth } from '../../firebase';
import { ApplicationState } from '../../store/reducers';
import { AuthUser } from '../../types';

import './header.styles.scss';
import Logo from '../../Icons/Crown';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

interface IHeaderProps {
  currentUser: AuthUser | null;
  showStatus: boolean;
}

const Header: FC<Partial<IHeaderProps>> = ({ currentUser, showStatus }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option signout" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/register">
            Register
          </Link>
        )}
        <CartIcon />
      </div>
      {showStatus ? <CartDropdown /> : null}
    </div>
  );
};

// const mapStateToProp = createStructuredSelector<any, any>({
//   currentUser: selectCurrentUser,
//   showStatus: selectCartStatus,
// });
const mapStateToProp = (state: ApplicationState) => {
  return {
    currentUser: selectCurrentUser(state),
    showStatus: selectCartStatus(state),
  };
};

export default connect(mapStateToProp)(Header);
