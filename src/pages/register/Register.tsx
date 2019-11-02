import React, { FC } from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './register.styles.scss';

interface IRegisterProps {
  [key: string]: any;
}

const RegisterPage: FC<IRegisterProps> = () => {
  return (
    <div className="register">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default RegisterPage;
