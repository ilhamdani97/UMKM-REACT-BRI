// Input Otp Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import Input from '../Input';
import './styles.scss';

const InputOtp = ({ id, className, type, variant }) => {
  const classNames = classname('o-input-otp', className, variant);
  const dataOtp = [
    {
      id,
      className,
      type,
      variant
    },
    {
      id,
      className,
      type,
      variant
    },
    {
      id,
      className,
      type,
      variant
    },
    {
      id,
      className,
      type,
      variant
    },
    {
      id,
      className,
      type,
      variant
    },
    {
      id,
      className,
      type,
      variant
    }
  ];
  return (
    <div className={classNames}>
      {dataOtp.map((val, index) => (
        <Input
          type={val.type}
          id={`${val.id}-${index + 1}`}
          placeholder="-"
          variant={val.variant}
        />
      ))}
    </div>
  );
};

InputOtp.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  variant: PropTypes.string
};

InputOtp.defaultProps = {
  className: '',
  type: '',
  id: '',
  variant: ''
};

export default InputOtp;
