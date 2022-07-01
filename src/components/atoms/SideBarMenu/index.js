import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

import SystemIcon from '../SystemIcon';
import NavItem from '../NavItem';
// Styles
import './styles.scss';

const SideBarMenu = ({ className, status, icon, value, text, onClick }) => {
  const classNames = classname('o-sidebar-menu', className, status, {});
  const classText = classname('o-sidebar-menu__text-wrapper', {
    'is-active': status === 'is-active'
  });
  const classStep = classname('o-sidebar-menu__step-wrapper', {});
  return (
    <div>
      <div className={classNames}>
        <div onClick={onClick} className={classStep}>
          <SystemIcon name={icon} />
        </div>
        <div className={classText}>
          {status === 'is-done' ? (
            <NavItem variant="transparent" onClick={onClick}>
              {text}
            </NavItem>
          ) : (
            <NavItem variant="transparent is-active" onClick={onClick}>
              {text}
            </NavItem>
          )}
        </div>
      </div>
    </div>
  );
};

SideBarMenu.propTypes = {
  className: PropTypes.string,
  status: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
};

SideBarMenu.defaultProps = {
  className: '',
  status: '',
  icon: '',
  value: '',
  text: '',
  onClick: () => {}
};

export default SideBarMenu;
