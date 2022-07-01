import React, { Component } from 'react';
import {
  Header,
  Footer,
  HeaderBanner,
  CardDashboard,
  CardDashboardMedium,
  Popup,
  H3,
  TextBody,
  Button,
  CheckBox
} from 'components';
import classname from 'classnames';
import Profile from 'assets/images/profile.jpg';
import ImageDashboard from 'assets/images/banner/header-banner-umkm-smart.png';
import ImageDashboardMobile from 'assets/images/banner/header-banner-umkm-smart-mobile.png';
import ImageCardUMKM from 'assets/images/banner/image-card-dashboard.png';
import ImageCardUMKMMobile from 'assets/images/banner/image-card-dashboard-mobile.png';
import ImageCardMediumUMKM from 'assets/images/banner/banner-medium-umkm-smart.png';
import ImageCardMediumUMKMMobile from 'assets/images/banner/banner-medium-umkm-smart-mobile.png';
// style
import './styles.scss';

class UmkmSmart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNav: [
        {
          title: 'UMKM Smart',
          withArrow: false
        }
      ],
      popupShow: false
    };
  }

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

  render() {
    const {
      handleShowPopup,
      handleClosePopup,
      state: { dataNav, popupShow }
    } = this;
    const nextClass = classname('inner-container', {});
    const classNames = classname('o-umkm-smart', {});
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
          <Button variant="primary" onClick={() => {}}>
            AMBIL SURVEY UMKM SCORING
          </Button>
        </Popup>
        <div className={classNames}>
          <div className="umkm-header">
            <Header activeMenu="home" imageProfile={Profile} />
          </div>
          <HeaderBanner
            imageDesktop={ImageDashboard}
            imageMobile={ImageDashboardMobile}
            title="UMKM Smart"
            subtitle="Tingkatkan uji kompetensi usahamu dengan kelas-kelas berkualitas dari para ahli di bidangnya."
            withNav={dataNav}
          />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <CardDashboard
                  imageBackgroundDesktop={ImageCardUMKM}
                  imageBackgroundMobile={ImageCardUMKMMobile}
                  titleCardDashboard="Cek kompetensi usahamu"
                  descCardDashboard="Cari tahu seberapa siap kamu dalam menjalankan usaha yang profitabel dan berkelanjutan."
                  titleButton="Cek Sekarang"
                  actionButton={() => handleShowPopup('popupShow', popupShow)}
                />

                <CardDashboardMedium
                  imageBackgroundDesktop={ImageCardMediumUMKM}
                  imageBackgroundMobile={ImageCardMediumUMKMMobile}
                  titleCardDashboard="Simulasi laporan keuangan"
                  descCardDashboard="Cari tahu keuntungan yang diperoleh dari usahamu melalui simulasi ini"
                  titleButton="Cek Sekarang"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default UmkmSmart;
