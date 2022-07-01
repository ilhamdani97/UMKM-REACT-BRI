// Checkbox Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

import './styles.scss';

const Radio = ({
  className,
  id,
  name,
  children,
  onChange,
  isChecked,
  isMultipleChoice,
  disabled
}) => {
  const classNames = classname('a-radio', className);
  return (
    <div className={classNames}>
      {isMultipleChoice ? (
        <input
          type="radio"
          name={name}
          id={id}
          onChange={(e) => onChange(e)}
          checked={isChecked}
          disabled={disabled}
        />
      ) : (
        <input type="radio" name={name} id={id} onChange={(e) => onChange(e)} />
      )}
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

Radio.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
  isMultipleChoice: PropTypes.bool,
  disabled: PropTypes.bool
};

Radio.defaultProps = {
  className: '',
  id: 'dummyid',
  name: 'dummyname',
  children: '',
  onChange: () => {},
  isChecked: false,
  isMultipleChoice: false,
  disabled: false
};

export default Radio;
