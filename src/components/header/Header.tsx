import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
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
/**
 * 样式组件开始
 */
const optionStyles = css`
  padding: 10px 15px;
`;

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 80px;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;
`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LinkContainer = styled(Link)`
  ${optionStyles}
`;

const SignOutContainer = styled.div`
  ${optionStyles}
  cursor: pointer;
`;
/**
 * 样式组件结束
 */

const Header: FC<Partial<IHeaderProps>> = ({ currentUser, showStatus }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <LinkContainer to="/shop">SHOP</LinkContainer>
        <LinkContainer to="contact">CONTACT</LinkContainer>
        {currentUser ? (
          <SignOutContainer onClick={() => auth.signOut()}>Sign Out</SignOutContainer>
        ) : (
          <LinkContainer to="/register">Register</LinkContainer>
        )}
        <CartIcon />
      </OptionsContainer>
      {showStatus ? <CartDropdown /> : null}
    </HeaderContainer>
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
