import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { H3, TextBody } from 'components/atoms';
import { ProgressBarPage } from 'components/molecules';
import classname from 'classnames';

// style
import './styles.scss';

class CardPelatihan extends Component {
  render() {
    const {
      props: {
        imageBackgroundDesktop,
        imageBackgroundMobile,
        altImage,
        iconRekomendasi,
        titleRekomendasi,
        descCardSurveyOnProgress,
        valueBar,
        nameProgress
      }
    } = this;
    const classNames = classname('o-card-pelatihan', {});
    return (
      <div className={classNames}>
        <div className="o-card-pelatihan__image-wrapper o-card-pelatihan__image-wrapper--d">
          <img src={imageBackgroundDesktop} alt={altImage} />
        </div>
        <div className="o-card-pelatihan__image-wrapper o-card-pelatihan__image-wrapper--m">
          <img src={imageBackgroundMobile} alt={altImage} />
        </div>
        <div className="o-card-pelatihan__wrapper">
          <div className="o-card-pelatihan__icon-wrapper">
            <img src={iconRekomendasi} alt={altImage} />
          </div>
        </div>
        <div className="o-card-pelatihan__wrapper">
          <div className="o-card-pelatihan__text-wrapper">
            <H3 weight="bold" color="black" className="desktop-only">
              {titleRekomendasi}
            </H3>
            <TextBody
              weight="regular"
              color="secondary"
              className="desktop-only"
            >
              {descCardSurveyOnProgress}
            </TextBody>
            <ProgressBarPage nameProgress={nameProgress} valueBar={valueBar} />
          </div>
        </div>
      </div>
    );
  }
}

CardPelatihan.propTypes = {
  imageBackgroundDesktop: PropTypes.string,
  imageBackgroundMobile: PropTypes.string,
  iconRekomendasi: PropTypes.string,
  titleRekomendasi: PropTypes.string,
  altImage: PropTypes.string,
  descCardSurveyOnProgress: PropTypes.string,
  valueBar: PropTypes.string,
  nameProgress: PropTypes.string
};

CardPelatihan.defaultProps = {
  imageBackgroundDesktop: '',
  imageBackgroundMobile: '',
  iconRekomendasi: '',
  titleRekomendasi: '',
  altImage: '',
  descCardSurveyOnProgress: '',
  valueBar: '',
  nameProgress: ''
};

export default CardPelatihan;
