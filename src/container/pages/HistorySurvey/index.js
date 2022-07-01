import React, { Component } from 'react';
import {
  Header,
  Footer,
  HeaderBanner,
  CardProfile,
  CardRekomendasi
} from 'components';
import ImageDashboard from 'assets/images/banner/image-dashboard.png';
import ImageCardDashboard from 'assets/images/banner/image-card-rekomendasi.png';
import ImageDashboardMobile from 'assets/images/banner/image-dashboard-mobile.png';
import IconRekomendasi from 'assets/images/banner/icon-card-rekomendasi.png';
import Profile from 'assets/images/profile.jpg';
import QR from 'assets/images/qrcode.png';
import MoreAll from 'components/molecules/MoreAll';

import classname from 'classnames';
// style
import './styles.scss';

class HistorySurvey extends Component {
  _isMounted = false;

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const greeting = 'Selamat datang di Portal UMKM BRI';
    const nextClass = classname('inner-container', {});
    const classNames = classname('o-dashboard', {});
    return (
      <div className={nextClass}>
        <div className={classNames}>
          <div className="dashboard-header">
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
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <MoreAll
                  titleCard="Kelas rekomendasi"
                  titleButton="LIHAT SEMUA KELAS"
                />
                <div className="row">
                  <div className="col-sm-4">
                    <CardRekomendasi
                      imageBackgroundDesktop={ImageCardDashboard}
                      imageBackgroundMobile={ImageCardDashboard}
                      iconRekomendasi={IconRekomendasi}
                      titleRekomendasi="Pola Pikir"
                    />
                  </div>
                  <div className="col-sm-4">
                    <CardRekomendasi
                      imageBackgroundDesktop={ImageCardDashboard}
                      imageBackgroundMobile={ImageCardDashboard}
                      iconRekomendasi={IconRekomendasi}
                      titleRekomendasi="Pola Pikir"
                    />
                  </div>
                  <div className="col-sm-4">
                    <CardRekomendasi
                      imageBackgroundDesktop={ImageCardDashboard}
                      imageBackgroundMobile={ImageCardDashboard}
                      iconRekomendasi={IconRekomendasi}
                      titleRekomendasi="Pola Pikir"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default HistorySurvey;
