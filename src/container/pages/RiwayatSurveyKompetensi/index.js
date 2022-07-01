import React, { Component } from 'react';
import {
  Header,
  Footer,
  HeaderBanner,
  CardSimpleButton,
  CardCategoryKompetensi
} from 'components';

import classname from 'classnames';
import ImageHeaderBanner from '../../../assets/images/banner/bg-riwayat-survey-desktop.png';
import ImageHeaderBannerMobile from '../../../assets/images/banner/bg-riwayat-survey-mobile.png';
import Profile from '../../../assets/images/profile.jpg';

import { getDataHistorySurvey, getHistorySurvey } from '../../../services';

// style
import './styles.scss';

class RiwayatSurveyKompetensi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historySurvey: [],
      dataNav: [
        {
          title: 'UMKM Smart',
          withArrow: true
        },
        {
          title: 'Riwayat Survey Kompetensi',
          withArrow: false
        }
      ]
    };
  }

  componentDidMount() {
    this.getDataHistory();
  }

  getDataHistory = () => {
    getDataHistorySurvey()
      .then((response) => {
        this.getHistorySurvey(response.data.results);
      })
      .catch((err) => {
        throw err;
      });
  };

  getHistorySurvey = (data) => {
    if (data.length) {
      getHistorySurvey(data[0].id62)
        .then((response) => {
          this.setState({
            historySurvey: response.data
          });
        })
        .catch((err) => {
          throw err;
        });
    }
  };

  render() {
    const {
      state: { dataNav, historySurvey }
    } = this;
    const classNames = classname('o-riwayat-survey', {});
    return (
      <div className={classNames}>
        <div className="riwayat-survey-header">
          <Header activeMenu="home" imageProfile={Profile} />
        </div>
        <HeaderBanner
          imageDesktop={ImageHeaderBanner}
          imageMobile={ImageHeaderBannerMobile}
          title="Riwayat Survey Kompetensi"
          withNav={dataNav}
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <CardCategoryKompetensi
                nameUmkm="Tradisional Teladan"
                date="1 Mei 2020"
                score={historySurvey.average_score}
                dataList={historySurvey.summary}
              />
              <CardSimpleButton
                date="24 Nov 2020"
                titleCard="Anda bisa mengambil kembali survey pada: "
                titleButton="Lakukan Survey Kembali"
                statusButton="inactive-primary"
                actionButton={() => {}}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default RiwayatSurveyKompetensi;
