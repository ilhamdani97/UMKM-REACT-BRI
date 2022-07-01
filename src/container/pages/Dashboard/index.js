import React, { Component } from 'react';
import {
  Header,
  Footer,
  HeaderBanner,
  CardProfile,
  CardDashboard,
  MoreAll,
  CardRekomendasi,
  Popup,
  H3,
  TextBody,
  Button,
  CheckBox,
  CardSurveyOnProgress
} from 'components';
import PropTypes from 'prop-types';
import ImageDashboard from 'assets/images/banner/image-dashboard.png';
import ImageCardDashboard from 'assets/images/banner/image-card-dashboard.png';
import ImageCardDashboardMobile from 'assets/images/banner/image-card-dashboard-mobile.png';
import ImageDashboardMobile from 'assets/images/banner/image-dashboard-mobile.png';
import IconRekomendasi from 'assets/images/banner/icon-card-rekomendasi.png';
import ImageCardRecomendasi from 'assets/images/banner/image-card-rekomendasi.png';
import Profile from 'assets/images/profile.jpg';
import QR from 'assets/images/qrcode.png';
import classname from 'classnames';
import ImageCardSurveyOnProgressMobile from '../../../assets/images/banner/image-card-survey-mobile.png';
import ImageCardSurveyOnProgress from '../../../assets/images/banner/image-card-survey.png';
// style
import './styles.scss';

// Network
import { getProfileUser, getProfileCheckPoint } from '../../../services';

class Dashboard extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      dataProfile: {},
      dataUser: {},
      popupShow: false
    };
  }

  componentDidMount() {
    this.handleDataProfile();
    this.getDataUser();
  }

  componentWillUnmount() {}

  handleShowPopup = (target, status) => {
    this.setState({
      [target]: !status
    });
  };

  handleClosePopup = (target, status) => {
    this.setState({
      [target]: !status
    });
  };

  handleSurveyScoring = () => {
    const {
      state: { dataProfile }
    } = this;
    const {
      history: { push }
    } = this.props;
    if (dataProfile.data?.profile?.average_progres !== 100) {
      push('/profile-nasabah');
    } else {
      push('/form-survey');
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

  handleDataProfile = () => {
    getProfileCheckPoint()
      .then((response) => {
        this.setState({
          dataProfile: response.data
        });
      })
      .catch((err) => {
        throw err;
      });
  };

  render() {
    const greeting = 'Selamat datang di Portal UMKM BRI';
    const nextClass = classname('inner-container', {});
    const classNames = classname('o-dashboard', {});

    const {
      handleShowPopup,
      handleClosePopup,
      handleSurveyScoring,
      state: { popupShow, dataProfile, dataUser }
    } = this;

    return (
      <div className={nextClass}>
        <Popup
          showPopup={popupShow}
          onClickClosePopup={() => handleClosePopup('popupShow', popupShow)}
        >
          <H3 color="black" weight="black">
            Salam Naik Kelas!
          </H3>
          <TextBody color="black" weight="black">
            Mau tahu kondisi kesiapan usaha kita untuk memotret atau mendiagnosa
            kondisi kesiapan usaha kita untuk membesarkan usaha secara
            berkelanjutan. Yuk coba mengisi form survey ini!
          </TextBody>
          <CheckBox
            id="select-all"
            // onChange={(e) => onChange(e)}
            isChecked=""
          >
            <TextBody color="black" weight="black">
              Saya setuju untuk memberikan izin bagi PT Bank Rakyat Indonesia
              untuk merekam jawaban saya
            </TextBody>
          </CheckBox>
          <Button
            variant="primary"
            onClick={() => {
              handleSurveyScoring();
            }}
          >
            AMBIL SURVEY UMKM SCORING
          </Button>
        </Popup>
        <div className={classNames}>
          <div className="dashboard-header">
            <Header activeMenu="home" imageProfile={Profile} />
          </div>
          <HeaderBanner
            imageDesktop={ImageDashboard}
            imageMobile={ImageDashboardMobile}
            name={dataUser.full_name}
            subtitle={greeting}
          />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <CardProfile
                  imageProfile={dataUser.profile?.avatar}
                  nameUser={dataUser.full_name}
                  nameUMKM="TRADISIONAL TELADAN"
                  actionButton={() => {
                    const {
                      history: { push }
                    } = this.props;
                    push('/profile-nasabah');
                  }}
                  titleButton="LIHAT PROFILE"
                  qrImage={QR}
                  qrAlt="QR"
                />
                {dataProfile.data?.profile?.business_progress > 0 ? (
                  <>
                    <CardSurveyOnProgress
                      imageBackgroundDesktop={ImageCardSurveyOnProgress}
                      imageBackgroundMobile={ImageCardSurveyOnProgressMobile}
                      titleCardSurveyOnProgress="Selesaikan survey kompetensimu!"
                      descCardSurveyOnProgress="Yuk lanjutkan pengerjaan survey untuk mengetahui seberapa siap kamu dalam menjalankan usaha yang profitable dan berkelanjutan."
                      titleButton="Lanjutkan"
                      actionButton={() =>
                        handleShowPopup('popupShow', popupShow)
                      }
                      valueBar={`${dataProfile.data.profile.business_progress}%`}
                      nameProgress="PROGRESS PENGERJAAN"
                    />
                  </>
                ) : dataProfile.data?.profile?.average_progres === 100 ? (
                  <>
                    <MoreAll
                      titleCard="Kelas rekomendasi"
                      titleButton="LIHAT SEMUA KELAS"
                    />
                    <div className="row">
                      <div className="col-sm-4">
                        <CardRekomendasi
                          imageBackgroundDesktop={ImageCardRecomendasi}
                          imageBackgroundMobile={ImageCardRecomendasi}
                          iconRekomendasi={IconRekomendasi}
                          titleRekomendasi="Pola Pikir"
                        />
                      </div>
                      <div className="col-sm-4">
                        <CardRekomendasi
                          imageBackgroundDesktop={ImageCardRecomendasi}
                          imageBackgroundMobile={ImageCardRecomendasi}
                          iconRekomendasi={IconRekomendasi}
                          titleRekomendasi="Pola Pikir"
                        />
                      </div>
                      <div className="col-sm-4">
                        <CardRekomendasi
                          imageBackgroundDesktop={ImageCardRecomendasi}
                          imageBackgroundMobile={ImageCardRecomendasi}
                          iconRekomendasi={IconRekomendasi}
                          titleRekomendasi="Pola Pikir"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <CardDashboard
                      imageBackgroundDesktop={ImageCardDashboard}
                      imageBackgroundMobile={ImageCardDashboardMobile}
                      titleCardDashboard="Cek kompetensi usahamu"
                      descCardDashboard="Cari tahu seberapa siap kamu dalam menjalankan usaha yang profitabel dan berkelanjutan."
                      actionButton={() =>
                        handleShowPopup('popupShow', popupShow)
                      }
                      titleButton="Cek Sekarang"
                    />
                  </>
                )}
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  history: PropTypes.instanceOf(Object)
};

Dashboard.defaultProps = {
  history: { push: '/' }
};

export default Dashboard;
