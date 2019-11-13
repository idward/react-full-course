import React, { Component, SyntheticEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { signupStart } from '../../store/actions';
// import { RouteComponentProps } from 'react-router-dom';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
// import { auth, createUserProfileDocument } from '../../firebase';
import './signup.styles.scss';

interface SignUpState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
  [key: string]: any;
}

interface ISignUpProps {
  signup(email: string, password: string, displayName: string): void;
  [key: string]: any;
}

class SignUp extends Component<ISignUpProps, SignUpState> {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Password does not match confirmPassword');
      return;
    }

    await this.props.signup(email, password, displayName);
    // const { user } = await auth.createUserWithEmailAndPassword(email, password);
    // await createUserProfileDocument(user, { displayName });
    this.setState({ displayName: '', email: '', password: '', confirmPassword: '' });
  };

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    // console.log('signUp:', this.props);

    return (
      <div className="sign-up">
        <h2 className="title">I already have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            label="DisplayName"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            label="Email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            label="ConfirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signup: (email: string, password: string, displayName: string) =>
      dispatch(signupStart(email, password, displayName)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
