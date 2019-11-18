import React, { FC } from 'react';
import './spinner.styles';

interface ISpinnerProps {
  [key: string]: any;
}

const Spinner: FC<ISpinnerProps> = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container"></div>
    </div>
  );
};

export default Spinner;
