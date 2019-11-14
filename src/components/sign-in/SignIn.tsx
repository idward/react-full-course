import React, { FC, useState, SyntheticEvent, FormEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { RouteComponentProps } from 'react-router-dom';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
// import { signInWithGoogle, auth } from '../../firebase';
import { googleSignInStart, emailSignInStart } from '../../store/actions';
import './signin.styles.scss';

interface SignInState {
  email: string;
  password: string;
  [key: string]: any;
}

interface ISignInProps {
  signInWithGoogle(): void;
  signInWithEmail(email: string, password: string): void;
  [key: string]: any;
}

/**
 * React Hooks
 */
const SignIn: FC<ISignInProps> = ({ signInWithGoogle, signInWithEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!email.trim().length) {
      alert('Email不能为空');
      return;
    }
    if (!password.trim().length) {
      alert('Password不能为空');
      return;
    }
    signInWithEmail(email, password);
  };

  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="Email"
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Submit Form</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

/**
 * React Class component
 */
// class SignIn extends React.Component<ISignInProps, SignInState> {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleSubmit = async (event: FormEvent) => {
//     event.preventDefault();
//     const { email, password } = this.state;
//     if (!email.trim().length) {
//       alert('Email不能为空');
//       return;
//     }
//     if (!password.trim().length) {
//       alert('Password不能为空');
//       return;
//     }
//     this.props.signInWithEmail(email, password);
//     // try {
//     //   await auth.signInWithEmailAndPassword(email, password);
//     //   this.setState({ email: '', password: '' });
//     // } catch (error) {
//     //   console.log('error: ', error.message);
//     // }
//   };

//   handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { email, password } = this.state;
//     const { signInWithGoogle } = this.props;
//     // console.log('signIn:', this.props);

//     return (
//       <div className="sign-in">
//         <h2>I already have an account</h2>
//         <span>Sign in with your email and password</span>

//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//             name="email"
//             type="email"
//             value={email}
//             label="Email"
//             handleChange={this.handleChange}
//             required
//           />
//           <FormInput
//             name="password"
//             type="password"
//             label="Password"
//             value={password}
//             handleChange={this.handleChange}
//             required
//           />

//           <div className="buttons">
//             <CustomButton type="submit">Submit Form</CustomButton>
//             <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
//               SIGN IN WITH GOOGLE
//             </CustomButton>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    signInWithGoogle: () => dispatch(googleSignInStart()),
    signInWithEmail: (email: string, password: string) =>
      dispatch(emailSignInStart(email, password)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
