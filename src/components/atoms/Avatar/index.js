// Avatar Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Avatar = ({
  className,
  size,
  image,
  name,
  icon,
  initial,
  variant,
  product,
  bgColor,
  hasBadge
}) => {
  const classNames = classname(
    'a-avatar',
    className,
    icon,
    variant,
    initial,
    bgColor,
    {
      'size-40': size === '40',
      'size-64': size === '64',
      'size-80': size === '80'
    },
    {
      'has-badge': hasBadge
    }
  );
  return (
    <div className={classNames}>
      {/* {hasBadge && <Notification />} */}
      {image !== '' && <img src={image} alt={name} />}
      {/* {icon !== '' && (
        <Fragment>
          {product && <ProductIcon name={icon} />}
          {!product && <SystemIcon name={icon} />}
        </Fragment>
      )} */}
      {initial !== '' && <h3>{initial}</h3>}
    </div>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  initial: PropTypes.string,
  variant: PropTypes.string,
  bgColor: PropTypes.string,
  product: PropTypes.bool,
  hasBadge: PropTypes.bool
};

Avatar.defaultProps = {
  className: '',
  size: '',
  image: '',
  name: '',
  icon: '',
  initial: '',
  variant: '',
  bgColor: 'primary100',
  product: false,
  hasBadge: false
};

export default Avatar;
