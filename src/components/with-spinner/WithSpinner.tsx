import React, { ComponentType } from 'react';
import Spinner from '../spinner/Spinner';

interface IComponentProps {
  isLoading: boolean;
  [key: string]: any;
}

/**
 * High Order Component(高阶组件)
 * return new hanced component
 * @param WrappedComponent
 */
const WithSpinner = (WrappedComponent: ComponentType) => ({
  isLoading,
  ...otherProps
}: IComponentProps) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinner;
