import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { H4, SideBarMenu } from 'components/atoms';

// style
import './styles.scss';

class CardProfileUsaha extends Component {
  render() {
    const {
      props: {
        imageProfile,
        altImage,
        nameUser,
        nameUMKM,
        contentCard,
        sidebarCard
      }
    } = this;

    const classNames = classname('o-card-profile-nasabah', {});
    return (
      <div className={classNames}>
        <div className="o-card-profile-nasabah__sidebar white">
          <div className="o-card-profile-nasabah__sidebar__text-content-sidebar">
            <div className="o-card-profile-nasabah__sidebar__text-content-sidebar one--d">
              <div className="page-profile">
                <div className="a-avatars">
                  <img src={imageProfile} alt={altImage} />
                </div>
                <div className="text-wrapper">
                  <H4 weight="bold">{nameUser}</H4>
                  <div className="text-wrapper__subs">
                    <H4 weight="bold" color="primary">
                      {nameUMKM}
                    </H4>
                  </div>
                </div>
              </div>
            </div>
            <div className="o-card-profile-nasabah__sidebar__text-content-sidebar two--d">
              <div className="page-profile">
                {sidebarCard.map((data, index) => (
                  <div className="sidebar-menu">
                    <SideBarMenu
                      key={index}
                      status={data.status}
                      icon={data.icon}
                      value={data.value}
                      text={data.text}
                      onClick={data.onClick}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="o-card-profile-nasabah__content-center">
          {contentCard}
        </div>
      </div>
    );
  }
}

CardProfileUsaha.propTypes = {
  imageProfile: PropTypes.string,
  altImage: PropTypes.string,
  nameUser: PropTypes.string,
  nameUMKM: PropTypes.string,
  contentCard: PropTypes.func,
  sidebarCard: PropTypes.array
};

CardProfileUsaha.defaultProps = {
  imageProfile: '',
  altImage: '',
  nameUser: '',
  nameUMKM: '',
  contentCard: () => {},
  sidebarCard: [{}]
};

export default CardProfileUsaha;
