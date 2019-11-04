import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import './custom-button.styles.scss';

interface ICustomButtonProps {
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  [key: string]: any;
}

const getButtonStyles = ({ isGoogleSignIn, inverted }: ICustomButtonProps) => {
  if (isGoogleSignIn) {
    return googleButtonStyle;
  }

  return inverted ? invertedButtonStyle : basicButtonStyle;
};

const basicButtonStyle = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleButtonStyle = css`
  background-color: #4285f4;
  color: white;
  border: none

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${props => getButtonStyles(props)}
`;

const CustomButton: FC<ICustomButtonProps> = ({ children, ...otherProps }: ICustomButtonProps) => {
  return <Button {...otherProps}>{children}</Button>;
};

export default CustomButton;
