import React, { Component } from 'react';
import {
  Header,
  Footer,
  HeaderBanner,
  CardProfile,
  CardSurveyOnProgress
} from 'components';
import classname from 'classnames';
import PropTypes from 'prop-types';
import ImageDashboard from '../../../assets/images/banner/image-dashboard.png';
import ImageCardSurveyOnProgress from '../../../assets/images/banner/image-card-survey.png';
import ImageCardSurveyOnProgressMobile from '../../../assets/images/banner/image-card-survey-mobile.png';
import ImageDashboardMobile from '../../../assets/images/banner/image-dashboard-mobile.png';
import Profile from '../../../assets/images/profile.jpg';
import QR from '../../../assets/images/qrcode.png';
// style
import './styles.scss';

class SurveyOnProgress extends Component {
  _isMounted = false;

  componentDidMount() {}

  componentWillUnmount() {}

  handleClickFormSurvey = () => {
    const {
      history: { push }
    } = this.props;
    push('/form-survey');
  };

  render() {
    const greeting = 'Selamat datang di Portal UMKM BRI';
    const nextClass = classname('inner-container', {});
    const classNames = classname('o-survey-on-progress', {});

    const { handleClickFormSurvey } = this;

    return (
      <div className={nextClass}>
        <div className={classNames}>
          <div className="survey-on-progress-header">
            <Header activeMenu="home" imageProfile={Profile} />
          </div>
          <HeaderBanner
            imageDesktop={ImageDashboard}
            imageMobile={ImageDashboardMobile}
            name="Jhone Doe"
            subtitle={greeting}
          />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <CardProfile
                  imageProfile={Profile}
                  nameUser="JHONE DOE"
                  nameUMKM="TRADISIONAL TELADAN"
                  actionButton={() => {}}
                  titleButton="LIHAT PROFILE"
                  qrImage={QR}
                  qrAlt="QR"
                />
                <CardSurveyOnProgress
                  imageBackgroundDesktop={ImageCardSurveyOnProgress}
                  imageBackgroundMobile={ImageCardSurveyOnProgressMobile}
                  titleCardSurveyOnProgress="Selesaikan survey kompetensimu!"
                  descCardSurveyOnProgress="Yuk lanjutkan pengerjaan survey untuk mengetahui seberapa siap kamu dalam menjalankan usaha yang profitable dan berkelanjutan."
                  titleButton="Lanjutkan"
                  actionButton={handleClickFormSurvey}
                  valueBar="60%"
                  nameProgress="PROGRESS PENGERJAAN"
                />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

SurveyOnProgress.propTypes = {
  history: PropTypes.instanceOf(Object)
};

SurveyOnProgress.defaultProps = {
  history: { push: '/' }
};

export default SurveyOnProgress;
