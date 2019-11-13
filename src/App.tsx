import React from 'react';
import { Switch, Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Unsubscribe } from 'firebase';
// import { auth, createUserProfileDocument } from './firebase';
import { checkUserSession } from './store/actions';
import { ApplicationState } from './store/reducers';
import { selectCurrentUser } from './store/reducers/user.selectors';
// import { AuthUser } from './types';

import HomePage from './pages/home/Home';
import ShopPage from './pages/shop/Shop';
import RegisterPage from './pages/register/Register';
import CheckoutPage from './pages/checkout/Checkout';
import Header from './components/header/Header';
import './app.styles.scss';

interface AppComponentProps {
  checkUserSession(): void;
  [key: string]: any;
}

type IAppProps = AppComponentProps & RouteComponentProps;

class App extends React.Component<IAppProps, {}> {
  userAuthSubs: Unsubscribe | null = null;
  userSnapshotSubs: Unsubscribe | null = null;

  /**
   * 获取用户权限(用户是否登录)
   */
  componentDidMount() {
    this.props.checkUserSession();
  }

  /**
   * 清除监听资源, 防止内存中驻留，泄漏（组件销毁）
   */
  componentWillUnmount() {
    // if (this.userAuthSubs) {
    //   this.userAuthSubs();
    // }
    // if (this.userSnapshotSubs) {
    //   this.userSnapshotSubs();
    // }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          {/** 路由认证问题 放在路由解析中会是更好的解决方案 */}
          <Route
            exact
            path="/register"
            render={() => (this.props.currentUser ? <Redirect to="/" /> : <RegisterPage />)}
          />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

/**
 * memorize to improve preformance
 * @param state
 */
const mapStateToProps = (state: ApplicationState) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    checkUserSession: () => dispatch(checkUserSession()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(App));
