import React, { Component, SyntheticEvent, FormEvent } from 'react';
// import { RouteComponentProps } from 'react-router-dom';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signInWithGoogle, auth } from '../../firebase';
import './signin.styles.scss';

interface SignInState {
  email: string;
  password: string;
  [key: string]: any;
}

interface ISignInProps {
  [key: string]: any;
}

class SignIn extends Component<ISignInProps, SignInState> {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log('error: ', error.message);
    }
  };

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    // console.log('signIn:', this.props);

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
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

          <div className="buttons">
            <CustomButton type="submit">Submit Form</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
