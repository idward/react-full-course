import React, { FC } from 'react';
import { SpinnerContainer, SpinnerOverlay } from '../with-spinner/with-spinner.styles';

interface ISpinnerProps {
  [key: string]: any;
}

const Spinner: FC<ISpinnerProps> = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
