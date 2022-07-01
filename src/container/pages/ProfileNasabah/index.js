import React, { Component } from 'react';
import {
  Header,
  Footer,
  HeaderBanner,
  CardProgressBar,
  CardProfileNasabah,
  CardUsaha,
  CardPelatihan,
  H4,
  Input,
  Button,
  InputTextArea,
  TextBody,
  Popup,
  H3,
  Notification
} from 'components';
import ImageCardUsaha from 'assets/images/banner/image-card-profile-usaha.png';
import ImageCardUsahaMobile from 'assets/images/banner/image-card-profile-usaha-mobile.png';
import BannerInformasi from 'assets/images/banner/banner-informasi.png';
import ImageCardPelatihan from 'assets/images/banner/image-card-rekomendasi.png';
import IconPelatihan from 'assets/images/banner/icon-card-rekomendasi.png';
import classname from 'classnames';
import axios from 'axios';
import ImageHeaderBanner from '../../../assets/images/banner/header-banner-profil.png';
import ImageHeaderBannerMobile from '../../../assets/images/banner/header-banner-survey-kopetensi-mobile.png';
import Profile from '../../../assets/images/profile.jpg';
import IconCamera from '../../../assets/images/icon-camera.png';

// Network
import {
  getProfileUser,
  updateDataUser,
  getProfileCheckPoint,
  adminitrativeDistrict,
  adminitrativeRegency
} from '../../../services';
// style
import './styles.scss';

class ProfileNasabah extends Component {
  // _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      notif: '',
      notifText: [],
      popupShow: false,
      startDate: new Date(),
      dataProfile: {},
      contentActive: 1,
      selectOptions: [],
      selectProvince: [],
      selectKab: [],
      selectKec: [],
      selectKel: [],
      dataUser: {},
      valueProvince: {
        value: 0,
        label: 0
      },
      valueKab: {
        value: 0,
        label: 0
      },
      valueKec: {
        value: 0,
        label: 0
      },
      valueKel: {
        value: 0,
        label: 0
      },
      valueNik: '',
      valueName: '',
      valueCity: '',
      valueBirthDay: '',
      valueAddress: '',
      valueHandphone: '',
      valueEmail: '',
      valueAvatar: '',
      dataNav: [
        {
          title: 'Lihat Profil',
          withArrow: false
        }
      ],
      step: [
        {
          status: 'is-active',
          text: 'Akun',
          icon: 'profile-32',
          value: '1',
          onClick: () => {
            this.handleActionSidebar(1);
          }
        },
        {
          status: '',
          text: 'Usaha',
          icon: 'store-24',
          value: '2',
          onClick: () => {
            this.handleActionSidebar(2);
          }
        },
        {
          status: '',
          text: 'Hasil Pelatihan',
          icon: 'share',
          value: '3',
          onClick: () => {
            this.handleActionSidebar(3);
          }
        }
      ],
      usaha: [
        {
          nama: 'Warung Bakso',
          alamat: 'Jl. Green Ville Blok BC No. 05, Jakarta Barat',
          waktu: '10:00 - 21:00',
          foto: 'assets/images/banner/image-card-profile-usaha.png',
          onClick: () => {
            this.contentAkun();
          }
        },
        {
          nama: 'Warung Mie',
          alamat: 'Jl. Raya Melati 217, Jakarta Selatan',
          waktu: '10:00 - 21:00',
          foto: 'assets/images/banner/image-card-profile-usaha.png',
          onClick: () => {
            this.contentAkun();
          }
        }
      ]
    };
    this.handleChangeNik = this.handleChangeNik.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeBirthDay = this.handleChangeBirthDay.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeHandphone = this.handleChangeHandphone.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeAvatar = this.handleChangeAvatar.bind(this);
    this.handleChangeProvince = this.handleChangeProvince.bind(this);
    this.handleChangeKab = this.handleChangeKab.bind(this);
    this.handleChangeKec = this.handleChangeKec.bind(this);
    this.handleChangeKel = this.handleChangeKel.bind(this);
  }

  componentDidMount() {
    this.displayForm();
    this.getDataUser();
    this.handleDataProfile();
    this.getOptions();
  }

  componentWillUnmount() {}

  getDataUser = () => {
    getProfileUser()
      .then((response) => {
        const dataUser = response.data;
        this.setState({
          dataUser: response.data,
          valueAvatar: dataUser.profile && dataUser.profile.avatar,
          valueNik: dataUser.nik,
          valueName: dataUser.full_name,
          valueCity: dataUser.profile && dataUser.profile.birth_place,
          valueAddress: `${
            dataUser.profile &&
            dataUser.profile.addresses &&
            dataUser.profile.addresses.address
          } ${
            dataUser.profile &&
            dataUser.profile.addresses &&
            dataUser.profile.addresses.district
          } ${
            dataUser.profile &&
            dataUser.profile.addresses &&
            dataUser.profile.addresses.regency
          } ${
            dataUser.profile &&
            dataUser.profile.addresses &&
            dataUser.profile.addresses.province
          } ${
            dataUser.profile &&
            dataUser.profile.addresses &&
            dataUser.profile.addresses.postal_code
          }`,
          valueHandphone: dataUser.phone_number,
          valueEmail: dataUser.email
        });
      })
      .catch((err) => {
        throw err;
      });
  };

  async getOptions() {
    const token = localStorage.getItem('token');
    const res = await axios.get(
      'http://139.162.33.205/api/survey/adminitrative/province/',
      {
        headers: {
          Authorization: token
        }
      }
    );
    const data = res.data.results;
    const options = data.map((d) => ({
      value: d.id,
      label: d.name
    }));

    this.setState({ selectProvince: options });
  }

  contentUbahPin = () => {
    return (
      <section>
        <div className="o-profil-nasabah__content-header">
          <H4 color="black" weight="bold">
            Ubah Pin
          </H4>
        </div>
        <div className="o-profil-nasabah content-body">
          <H3 color="black" weight="bold">
            Ubah PIN
          </H3>
          <TextBody color="black" weight="light">
            Demi mengamankan dan melindungi Akun Anda mohon untuk tidak
            memberikan PIN kepada orang lain
          </TextBody>
          <form>
            <Input
              type="text"
              id="buatpin"
              placeholder=""
              title="Buat PIN"
              variant="title-black input-gray small"
            />
            <Input
              type="text"
              id="buatulangpin"
              placeholder=""
              title="Masukkan ulang PIN"
              variant="title-black input-gray small"
            />
            <div className="button-wrapper">
              <Button variant="primary" onClick={() => {}}>
                Simpan
              </Button>
            </div>
          </form>
        </div>
      </section>
    );
  };

  contentAkun = () => {
    const {
      state: {
        valueNik,
        valueName,
        valueCity,
        valueAddress,
        valueHandphone,
        valueEmail,
        valueAvatar,
        popupShow,
        notif,
        notifText,
        startDate,
        selectOptions
      },

      handleChangeNik,
      handleChangeName,
      handleChangeCity,
      handleChangeHandphone,
      handleChangeAddress,
      handleShowPopup,
      handleUpdateProfile
    } = this;
    return (
      <section>
        <div className="o-profil-nasabah__content-header" />
        <div className="o-profil-nasabah content-body">
          <div className="image-wrapper">
            <img src={valueAvatar} alt="profile" />
            <div className="upload--wrapper">
              <img src={IconCamera} alt="profile" />
            </div>
          </div>
          <H3 color="black" weight="bold">
            Profil Saya
          </H3>
          <TextBody color="black" weight="light text-subs">
            Demi mengamankan dan melindungi profil anda. masukkan informasi
            profil anda
          </TextBody>
          <Notification
            status={notif}
            title="Maaf, Isi data kamu dengan benar. . ."
          />
          <form>
            <Input
              type="text"
              id="nik"
              value={valueNik}
              placeholder="NIK"
              title="NIK"
              variant="title-black input-gray width-full"
              handleChange={handleChangeNik}
              isDisable
            />

            <Input
              type="text"
              id="namalengkap"
              value={valueName}
              placeholder="Andranisa"
              title="Nama Lengkap"
              variant={`title-black ${
                notifText.full_name != null ? 'input-red' : 'input-gray'
              } half`}
              handleChange={handleChangeName}
              titleBottom={
                notifText.full_name != null ? notifText.full_name : false
              }
            />

            <div className="select-wrapper">
              <div className="row">
                <div className="col-md-6">
                  <Input
                    type="text"
                    id="city"
                    value={valueCity}
                    placeholder="Masukkan Kota Kelahiran"
                    title="Kota kelahiran"
                    variant={`title-black ${
                      notifText.birth_place != null ? 'input-red' : 'input-gray'
                    } city`}
                    handleChange={handleChangeCity}
                    titleBottom={
                      notifText.birth_place != null
                        ? notifText.birth_place
                        : false
                    }
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="date"
                    id="tgl"
                    title="Tanggal Lahir"
                    variant={`title-black ${
                      notifText.birth_date != null ? 'input-red' : 'input-gray'
                    } date`}
                    selectedDatePicker={startDate}
                    optionSelect={selectOptions}
                    handleChange={this.handleChangeDate}
                    titleBottom={
                      notifText.birth_date != null
                        ? notifText.birth_date
                        : false
                    }
                  />
                </div>
              </div>
            </div>

            <InputTextArea
              type="text"
              id="alamat"
              withIcon
              placeholder="Masukkan alamat"
              title="Alamat"
              variant="title-black input-gray width-full"
              value={valueAddress}
              handleChange={handleChangeAddress}
              isDisable
              handleIcon={() => handleShowPopup('popupShow', popupShow)}
            />

            <Input
              type="text"
              id="nohp"
              placeholder="+62 XXXX XXXX"
              title="NO. Hp"
              value={valueHandphone}
              variant={`title-black ${
                notifText.phone_number != null ? 'input-red' : 'input-gray'
              } city`}
              handleChange={handleChangeHandphone}
              titleBottom={
                notifText.phone_number != null ? notifText.phone_number : false
              }
            />

            <Input
              type="text"
              id="email"
              value={valueEmail}
              placeholder="email2mail.com"
              title="Email (Tidak Wajib)"
              variant={`title-black ${
                notifText.email != null ? 'input-red' : 'input-gray'
              } half`}
              titleBottom={notifText.email != null ? notifText.email : false}
            />

            <div className="button-wrapper">
              <Button
                variant="primary"
                onClick={() => {
                  handleUpdateProfile();
                }}
              >
                Simpan
              </Button>
            </div>
          </form>
        </div>
      </section>
    );
  };

  handleUpdateProfile = () => {
    const {
      valueProvince,
      valueKab,
      valueKec,
      valueKel,
      valueCity,
      valueName,
      valueBirthDay,
      valueAddress,
      valueEmail,
      valueAvatar
    } = this.state;
    const userUpdate = {
      birth_place: valueCity,
      birth_date: valueBirthDay,
      address: valueAddress,
      province_id: valueProvince.value,
      regency_id: valueKab.value,
      district_id: valueKec.value,
      kelurahan_id: valueKel.value,
      avatar: valueAvatar,
      email: valueEmail,
      full_name: valueName
    };
    updateDataUser(userUpdate)
      .then((response) => {})
      .catch((error) => {
        if (error.response) {
          // Request made and server responded
          this.setState({
            notifText: error.response.data
          });
        } else if (error.request) {
          // The request was made but no response was received
        } else {
          // Something happened in set    ting up the request that triggered an Error
        }
        this.setState({ notif: 'error' });
      });
  };

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

  contentUsaha = () => {
    const { usaha } = this.state;

    return (
      <section>
        <div className="o-profil-nasabah__content-header">
          <H3 color="black" weight="bold">
            Usaha Saya
          </H3>
        </div>
        {usaha.map((data, index) => (
          <CardUsaha
            imageBackgroundDesktop={ImageCardUsaha}
            imageBackgroundMobile={ImageCardUsahaMobile}
            contentUsahaCard=""
            titleCardDashboard={data.nama}
            addressCard={data.alamat}
            timeCard={data.waktu}
            actionButton=""
          />
        ))}
        <form>
          <div className="button-wrapper">
            <Button variant="secondary" onClick="">
              Tambah Usaha
            </Button>
            <Button variant="primary" onClick={() => {}}>
              Berikutnya
            </Button>
          </div>
        </form>
      </section>
    );
  };

  contentTambahUsaha = () => {
    return (
      <section>
        <div className="o-profil-nasabah content-body">
          <H3 color="black" weight="bold">
            Tambah Usaha
          </H3>
          <form>
            <Input
              type="text"
              id="namausaha"
              placeholder="Andranisa"
              title="Nama Usaha"
              variant="title-black input-gray default"
            />

            <InputTextArea
              type="text"
              id="alamat"
              placeholder="Masukkan alamat"
              title="Alamat"
              variant="title-black input-gray width-full"
            />

            <div className="form-wrapper">
              <Input
                type="text"
                id="jambuka"
                placeholder=""
                title="Jam Buka"
                variant="title-black input-gray small l"
              />
              <Input
                type="text"
                id="jamtutup"
                placeholder=""
                title="Jam Tutup"
                variant="title-black input-gray small r"
              />
            </div>

            <div className="button-wrapper">
              <Button variant="primary" onClick={() => {}}>
                Simpan
              </Button>
              {/* <Button variant="secondary" onClick={() => { }}>
              {'Kembali'}
            </Button> */}
            </div>
          </form>
        </div>
      </section>
    );
  };

  contentHasilPelatihan = () => {
    return (
      <section>
        <div className="o-profil-nasabah content-body">
          <H3 color="black" weight="bold">
            Pelatihan
          </H3>
          <form>
            <div className="row">
              <div className="col-sm-6">
                <CardPelatihan
                  imageBackgroundDesktop={ImageCardPelatihan}
                  imageBackgroundMobile={ImageCardPelatihan}
                  iconRekomendasi={IconPelatihan}
                  titleRekomendasi="Pola Pikir"
                  descCardSurveyOnProgress="Latihan untuk mengoptimalkan pemikiran Anda, keyakinan Anda, perilaku Anda."
                  nameProgress="PROGRESS PENGERJAAN"
                  valueBar="60%"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  };

  contentInformasiUsaha = () => {
    return (
      <section>
        <div className="o-profil-nasabah__content-header">
          <H3 color="black" weight="bold">
            Informasi Usaha
          </H3>
        </div>
        <div className="row">
          <div className="form-foto">
            <img src={BannerInformasi} alt="banner-informasi" />
          </div>
          <div className="form-profil">
            <img src={BannerInformasi} alt="banner-informasi" />
          </div>
        </div>
        <div className="row rows-two">
          <div className="o-profil-nasabah content-body">
            <form>
              <div className="form-info">
                <div className="form-wrapper">
                  <Input
                    type="text"
                    id="namausaha"
                    placeholder=""
                    title="Nama Usaha"
                    variant="title-black input-gray small l"
                  />
                  <Input
                    type="text"
                    id="kategoriusaha"
                    placeholder=""
                    title="Kategori Usaha"
                    variant="title-black input-gray small r"
                  />
                </div>

                <Input
                  type="text"
                  id="tahunmulaiusaha"
                  placeholder=""
                  title="Tahun mulai usaha"
                  variant="title-black input-gray small"
                />

                <InputTextArea
                  type="text"
                  id="alamat"
                  title="Deskripsi"
                  placeholder="Deskripsikan usahamu"
                  variant="title-black input-gray width-full"
                />
              </div>

              <div className="button-wrapper">
                <Button variant="primary" onClick={() => {}}>
                  Simpan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };

  displayForm = (e) => {
    const { contentActive } = this.state;
    if (contentActive === 1) {
      const active = this.contentAkun();
      return active;
    }
    if (contentActive === 2) {
      const active = this.contentUsaha();
      return active;
    }
    const active = this.contentHasilPelatihan();
    return active;
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

  handleActionSidebar = (active) => {
    this.setState({
      contentActive: active
    });
  };

  handleChangeDate = (date) => {
    this.setState({ startDate: date });
  };

  handleChangeNik(event) {
    this.setState({ valueNik: event.target.value });
  }

  handleChangeName(event) {
    this.setState({ valueName: event.target.value });
  }

  handleChangeCity(event) {
    this.setState({ valueCity: event.target.value });
  }

  handleChangeBirthDay(event) {
    this.setState({ valueBirthDay: event.target.value });
  }

  handleChangeAddress(event) {
    this.setState({ valueAddress: event.target.value });
  }

  handleChangeHandphone(event) {
    this.setState({ valueHandphone: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ valueEmail: event.target.value });
  }

  handleChangeAvatar(event) {
    this.setState({ valueAvatar: event.target.value });
  }

  handleChangeKel(event) {
    this.setState({ valueKel: event });
  }

  handleChangeKec(event) {
    this.setState({ valueKec: event });
    adminitrativeDistrict(event.value).then((response) => {
      const data =
        response.data &&
        response.data.kelurahan &&
        response.data.kelurahan.results;
      const options = data.map((d) => ({
        value: d.id,
        label: d.name
      }));

      this.setState({
        selectKel: options
      });
    });
  }

  handleChangeProvince(event) {
    this.setState({ valueProvince: event });
    adminitrativeRegency(`?province_id=${event.value}`)
      .then((response) => {
        const data = response.data && response.data.results;
        const options = data.map((d) => ({
          value: d.id,
          label: d.name
        }));

        this.setState({
          selectKab: options
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  handleChangeKab(event) {
    this.setState({ valueKab: event });
    adminitrativeDistrict(`?regency_id=${event.value}`)
      .then((response) => {
        const data = response.data && response.data.results;
        const options = data.map((d) => ({
          value: d.id,
          label: d.name
        }));

        this.setState({
          selectKec: options
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const {
      displayForm,
      state: {
        dataNav,
        dataUser,
        dataProfile,
        popupShow,
        selectProvince,
        selectKec,
        selectKab,
        selectKel,
        step
      },
      handleClosePopup,
      handleChangeProvince,
      handleChangeKab,
      handleChangeKec,
      handleChangeKel
    } = this;
    const data = '';
    const nextClass = classname('inner-container', {});
    const classNames = classname('o-profile-nasabah', {});

    return (
      <div className={nextClass}>
        <div className={classNames}>
          <Popup
            showPopup={popupShow}
            onClickClosePopup={() => handleClosePopup('popupShow', popupShow)}
            variant="form"
          >
            <H3 color="black" weight="black">
              Masukkan Alamat
            </H3>
            <TextBody color="" weight="regular">
              Masukkan alamat rumah Anda
            </TextBody>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Input
                    type="select"
                    id="province"
                    title="Provinsi"
                    placeholder="Masukkan Kota Kelahiran"
                    optionSelect={selectProvince}
                    handleChange={handleChangeProvince}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="select"
                    id="province"
                    placeholder="Masukkan Kota Kelahiran"
                    title="Kota/Kabupaten"
                    optionSelect={selectKab}
                    handleChange={handleChangeKab}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="select"
                    id="kec"
                    placeholder="Masukkan Kota Kelahiran"
                    title="Kecamatan"
                    optionSelect={selectKec}
                    handleChange={handleChangeKec}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="select"
                    id="province"
                    placeholder="Masukkan Kota Kelahiran"
                    title="Kelurahan"
                    optionSelect={selectKel}
                    handleChange={handleChangeKel}
                  />
                </div>
                <div className="col-md-12">
                  <InputTextArea
                    type="text"
                    id="alamat"
                    placeholder="Masukkan alamat"
                    title="Alamat"
                    variant="title-black input-gray width-full"
                  />
                </div>
              </div>
            </div>
            <Button variant="primary" onClick={() => {}}>
              SIMPAN
            </Button>
          </Popup>
          <div className="profile-nasabah-header">
            <Header activeMenu="home" imageProfile={Profile} />
          </div>
          <HeaderBanner
            imageDesktop={ImageHeaderBanner}
            imageMobile={ImageHeaderBannerMobile}
            title="Profil"
            withNav={dataNav}
          />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <CardProgressBar
                  nameProgress="LENGKAPI PROFILE"
                  valueBar={`${
                    dataProfile.data &&
                    dataProfile.data.profile &&
                    dataProfile.data.profile.business_progress
                  }%`}
                />
                <CardProfileNasabah
                  imageProfile={dataUser.profile && dataUser.profile.avatar}
                  nameUser={dataUser.full_name}
                  nameUMKM="TRADISIONAL TELADAN"
                  contentCard={displayForm(data)}
                  sidebarCard={step}
                  mSideBar="#"
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

export default ProfileNasabah;
