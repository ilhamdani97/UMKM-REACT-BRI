// Header Banner Component
// ---------------------

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { H1 } from 'components/atoms';
import './styles.scss';

class HeaderPageBanner extends Component {
  render() {
    const {
      props: { imageDesktop, imageMobile, name, title, alt, subtitle }
    } = this;
    const classNames = classname('o-header-page-banner', {});
    return (
      <div className={classNames}>
        <div className="o-header-page-banner__img-wrapper o-header-page-banner__img-wrapper--d">
          <img src={imageDesktop} alt={alt} />
        </div>
        <div className="o-header-page-banner__img-wrapper o-header-page-banner__img-wrapper--m">
          <img src={imageMobile} alt={alt} />
        </div>
        <div className="o-header-page-banner__text-wrapper">
          <div className="container">
            <div className="row pr-0">
              <div className="col-sm-12 col-md-6">
                <div className="o-header-page-banner__text">{subtitle}</div>
                <H1 weight="bold" color="white" className="desktop-only ">
                  {name}
                  {title}
                </H1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HeaderPageBanner.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  imageDesktop: PropTypes.string,
  imageMobile: PropTypes.string
};

HeaderPageBanner.defaultProps = {
  alt: '',
  name: '',
  title: '',
  subtitle: '',
  imageMobile: '',
  imageDesktop: ''
};

export default HeaderPageBanner;
