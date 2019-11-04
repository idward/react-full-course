import React, { ComponentType } from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

interface IComponentProps {
  isLoading: boolean;
  [key: string]: any;
}

/**
 * High Order Component(高阶组件)
 * @param WrappedComponent 
 */
const WithSpinner = (WrappedComponent: ComponentType) => ({ isLoading, ...otherProps }: IComponentProps) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
