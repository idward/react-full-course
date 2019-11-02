import React, { FC } from 'react';
import './form-input.styles.scss';

interface IFormInputProps {
  [key: string]: any;
}

const FormInput: FC<IFormInputProps> = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
