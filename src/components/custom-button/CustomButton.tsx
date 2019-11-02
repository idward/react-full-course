import React, { FC } from 'react';
import './custom-button.styles.scss';

interface ICustomButtonProps {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  [key: string]: any;
}

const CustomButton: FC<ICustomButtonProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
