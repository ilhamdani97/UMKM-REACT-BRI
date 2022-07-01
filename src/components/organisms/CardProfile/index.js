import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Avatar, Button, H4 } from 'components/atoms';

// style
import './styles.scss';

class CardProfile extends Component {
  render() {
    const {
      props: {
        imageProfile,
        initial,
        nameUser,
        nameUMKM,
        actionButton,
        titleButton,
        qrImage,
        qrAlt
      }
    } = this;
    const classNames = classname('o-card-profile', {});
    return (
      <div className={classNames}>
        <div className="o-card-profile__profile-wrapper">
          <Avatar size="40" initial={initial} name="" image={imageProfile} />
          <div className="title-profile-wrapper">
            <H4 weight="bold" className="desktop-only">
              {nameUser}
            </H4>
            <div className="title-profile-wrapper__subs">
              <H4 weight="bold" color="primary" className="desktop-only">
                {nameUMKM}
              </H4>
            </div>
          </div>
          <div className="a-button-wrapper">
            <Button variant="secondary" onClick={actionButton}>
              {titleButton}
            </Button>
          </div>
          <div className="qr-wrapper">
            <img src={qrImage} alt={qrAlt} />
          </div>
        </div>
      </div>
    );
  }
}
CardProfile.propTypes = {
  imageProfile: PropTypes.string,
  initial: PropTypes.string,
  nameUser: PropTypes.string,
  nameUMKM: PropTypes.string,
  actionButton: PropTypes.func,
  titleButton: PropTypes.string,
  qrImage: PropTypes.string,
  qrAlt: PropTypes.string
};

CardProfile.defaultProps = {
  imageProfile: '',
  initial: '',
  nameUser: '',
  nameUMKM: '',
  actionButton: () => {},
  titleButton: '',
  qrImage: '',
  qrAlt: ''
};

export default CardProfile;
