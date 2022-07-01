// Header Component
// ---------------------

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Avatar, Logo, TextTopNav, SystemIcon, H4 } from 'components/atoms';
import './styles.scss';
// Network
import { getProfileUser } from '../../../services';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusNav: '',
      dataUser: {}
    };
  }

  componentDidMount() {
    this.getDataUser();
  }

  handleClickLogout = () => {
    localStorage.clear();
  };

  handleClickNav = () => {
    const { statusNav } = this.state;
    if (statusNav === 'is_active') {
      this.setState({
        statusNav: ''
      });
    }
    if (statusNav === '') {
      this.setState({
        statusNav: 'is_active'
      });
    }
  };

  getDataUser = () => {
    getProfileUser()
      .then((response) => {
        this.setState({
          dataUser: response.data
        });
      })
      .catch((err) => {
        throw err;
      });
  };

  onCloseNav = () => {
    this.setState({
      statusNav: ''
    });

    this.handleClickLogout();
  };

  render() {
    const {
      state: { statusNav, dataUser },
      props: { activeMenu, transparent },
      handleClickNav,
      onCloseNav,
      handleClickLogout
    } = this;

    const classNames = classname('o-header', {
      transparent
    });
    return (
      <div className={classNames}>
        <div className={`nav-wrapper-mobile ${statusNav}`}>
          <div className="nav-wrapper-mobile__profile-wrapper">
            <Avatar
              size="40"
              initial=""
              name=""
              image={dataUser.profile && dataUser.profile.avatar}
            />
            <div className="title-profile-wrapper">
              <H4 weight="bold" className="desktop-only">
                Jhone Doe
              </H4>
              <div className="title-profile-wrapper__subs">
                <H4 weight="bold" color="primary" className="desktop-only">
                  Tradisional Teladan
                </H4>
              </div>
            </div>
          </div>
          <div className="nav-wrapper-mobile__menu-wrapper">
            <TextTopNav
              to="/dashboard"
              color="white"
              onClick={() => {
                onCloseNav();
              }}
            >
              <span className="text-menu">HOME</span>
            </TextTopNav>
          </div>
          <div className="nav-wrapper-mobile__menu-wrapper">
            <TextTopNav
              to="/"
              color="white"
              onClick={() => {
                onCloseNav();
              }}
            >
              <span className="text-menu">HISTORY SURVEY</span>
            </TextTopNav>
          </div>
          <div className="nav-wrapper-mobile__menu-wrapper">
            <TextTopNav
              to="/"
              color="white"
              onClick={() => {
                onCloseNav();
              }}
            >
              <span className="text-menu">UIMKM</span>
            </TextTopNav>
          </div>
          <div className="nav-wrapper-mobile__menu-wrapper">
            <TextTopNav
              to="/"
              color="white"
              onClick={() => {
                onCloseNav();
              }}
            >
              <span className="text-menu">FAQ</span>
            </TextTopNav>
          </div>
          <div className="nav-wrapper-mobile__logout-wrapper">
            <TextTopNav
              to="/"
              color="white"
              onClick={() => {
                onCloseNav();
              }}
            >
              <span className="text-menu">LogOUT</span>
            </TextTopNav>
          </div>
        </div>
        <div className="container">
          <div className="row pr-0">
            <div className="col-sm-12">
              <div className="o-header-wrapper">
                <div className="logo-section">
                  <div className="bri-logo">
                    <a
                      href="www.goggle.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Logo name="briWhite" />
                    </a>
                  </div>
                </div>
                {activeMenu === 'home' && (
                  <div className="navigation-button">
                    <button
                      type="button"
                      className="button-item burger-button"
                      onClick={() => {
                        handleClickNav();
                      }}
                    >
                      <SystemIcon
                        name={statusNav === '' ? 'menu' : 'close-32'}
                      />
                    </button>
                  </div>
                )}
                <div className="navigation-bg-mobile" />

                <div className="navigation-section">
                  {activeMenu === 'home' && (
                    <div className="navigation-wrapper">
                      <button
                        type="button"
                        className="close-button"
                        // onClick={handleMobileNavigation}
                      >
                        <SystemIcon name="close-32" />
                      </button>

                      <ul className="navigation-menu desktop-text">
                        <>
                          <li className="active">
                            <TextTopNav to="/home" color="white">
                              <span className="text-menu">HOME</span>
                            </TextTopNav>
                          </li>
                          <li>
                            <TextTopNav
                              to="/riwayat-survey-kompetensi"
                              color="white"
                            >
                              <span className="text-menu">HISTORY SURVEY</span>
                            </TextTopNav>
                          </li>
                          <li>
                            <TextTopNav to="#" color="white">
                              <span className="text-menu">UMKM</span>
                            </TextTopNav>
                          </li>
                          <li>
                            <TextTopNav to="#" color="white">
                              <span className="text-menu">FAQ</span>
                            </TextTopNav>
                          </li>
                          <li>
                            <TextTopNav
                              to="/"
                              color="white"
                              onClick={() => {
                                handleClickLogout();
                              }}
                            >
                              <span className="text-menu">LOGOUT</span>
                            </TextTopNav>
                          </li>
                        </>
                      </ul>
                      <div className="user-profile">
                        <div className="user-profile-avatar">
                          <TextTopNav to="#" color="white">
                            <Avatar
                              size="40"
                              name="Hamish Daud"
                              image={
                                dataUser.profile && dataUser.profile.avatar
                              }
                            />
                          </TextTopNav>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  activeMenu: PropTypes.string,
  transparent: PropTypes.bool
};

Header.defaultProps = {
  activeMenu: '',
  transparent: false
};

export default Header;
