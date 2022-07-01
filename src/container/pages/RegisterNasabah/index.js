import React, { Component } from 'react';
import {
  Header,
  Footer,
  HeaderBanner,
  CardSteper,
  H3,
  TextBody,
  Input,
  Button,
  Links,
  Notification
} from 'components';
import classname from 'classnames';
import PropTypes from 'prop-types';
import ImageBanner from 'assets/images/banner/banner-lupa-pin.png';
import ImageBannerMobile from 'assets/images/banner/banner-lupa-pin-mobile.png';
import moment from 'moment';

// Network
import axios from 'axios';
import { verifyOtp, register } from '../../../services';
// styles
import './styles.scss';

class RegisterNasabah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      notif: '',
      notifOTP: '',
      notifText: [],
      dataForOTP: '',
      contentActive: 1,
      valueNik: '',
      valuePin: '',
      valuePin2: '',
      valuePinError: null,
      valueNoHp: '',
      valueFullName: '',
      valueEmail: '',
      valueCity: '',
      valueBirthDay: '',
      valueOtp1: '',
      valueOtp2: '',
      valueOtp3: '',
      valueOtp4: '',
      valueOtp5: '',
      valueOtp6: '',
      selectOptions: [],
      step: [
        {
          status: 'is-active',
          text: 'Data KTP',
          withLine: true,
          value: '1',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Data diri',
          withLine: true,
          value: '2',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Masukkan OTP',
          withLine: false,
          value: '3',
          onClick: () => {}
        }
      ]
    };
    this.handleChangeNik = this.handleChangeNik.bind(this);
    this.handleChangePin = this.handleChangePin.bind(this);
    this.handleChangePin2 = this.handleChangePin2.bind(this);
    this.handleChangeNoHp = this.handleChangeNoHp.bind(this);
    this.handleChangeFullName = this.handleChangeFullName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeOTP1 = this.handleChangeOTP1.bind(this);
    this.handleChangeOTP2 = this.handleChangeOTP2.bind(this);
    this.handleChangeOTP3 = this.handleChangeOTP3.bind(this);
    this.handleChangeOTP4 = this.handleChangeOTP4.bind(this);
    this.handleChangeOTP5 = this.handleChangeOTP5.bind(this);
    this.handleChangeOTP6 = this.handleChangeOTP6.bind(this);
  }

  componentDidMount() {
    this.displaForm();
    this.getOptions();
  }

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

    this.setState({ selectOptions: options });
  }

  handleChangeDate = (date) => {
    const dateFormat = moment(date).format('YYYY-MM-DD');
    this.setState({
      startDate: date,
      valueBirthDay: dateFormat
    });
  };

  handleButtonStepperNext = (data, active) => {
    const { step, contentActive } = this.state;
    step[active - 1].status = 'is-done';
    step[active].status = 'is-active';

    this.setState({
      contentActive: contentActive + 1,
      step
    });
  };

  handleConfirmOTP = () => {
    const {
      valueNoHp,
      dataForOTP,
      valueOtp1,
      valueOtp2,
      valueOtp3,
      valueOtp4,
      valueOtp6,
      valueOtp5
    } = this.state;

    const dataVerify = {
      phone_number: valueNoHp,
      session_id: dataForOTP.session_id,
      code: `${valueOtp1}${valueOtp2}${valueOtp3}${valueOtp4}${valueOtp5}${valueOtp6}`,
      is_reset_pin: false
    };
    const {
      history: { push }
    } = this.props;
    verifyOtp(dataVerify)
      .then((response) => {
        localStorage.setItem('token', `Token ${response.data.token}`);
        push('/home');
      })
      .catch((err) => {
        this.setState({ notifOTP: 'error' });
      });
  };

  handleButtonStepperBack = (data, active) => {
    const { step, contentActive } = this.state;
    step[active - 2].status = 'is-active';
    step[active - 1].status = ' ';
    this.setState({
      contentActive: contentActive - 1,
      step
    });
  };

  displaForm = () => {
    const { contentActive } = this.state;
    if (contentActive === 1) {
      const active = this.contentDataKTP();
      return active;
    }
    if (contentActive === 2) {
      const active = this.contentDataPersonal();
      return active;
    }
    const active = this.contentFormOTP();
    return active;
  };

  handleButtonRegister = () => {
    const {
      valueNik,
      valuePin,
      valuePin2,
      valueNoHp,
      valueEmail,
      valueFullName,
      valueBirthDay,
      valueCity
    } = this.state;
    const userRegister = {
      email: valueEmail,
      phone_number: valueNoHp,
      pin: valuePin,
      nik: valueNik,
      full_name: valueFullName,
      birth_date: valueBirthDay,
      birth_place: valueCity
    };

    if (valuePin2 === valuePin) {
      register(userRegister)
        .then((response) => {
          this.setState({
            dataForOTP: response.data
          });
          this.handleButtonStepperNext('data', 2);
        })
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

      this.setState({
        valuePinError: null
      });
    } else {
      this.setState({
        valuePinError: 'Pin tidak sesuai'
      });
    }
  };

  contentFormOTP = () => {
    const {
      state: { notifOTP },
      handleConfirmOTP,
      handleButtonStepperBack,
      handleChangeOTP1,
      handleChangeOTP2,
      handleChangeOTP3,
      handleChangeOTP4,
      handleChangeOTP5,
      handleChangeOTP6
    } = this;
    return (
      <section>
        <H3 color="black" weight="bold">
          Masukkan OTP
        </H3>
        <TextBody color="gray" weight="light">
          Masukkan kode OTP yang telah kami kirimkan melalui SMS ke nomor
          handphone Anda.
        </TextBody>
        <Notification status={notifOTP} title="Maaf, OTP Kamu Salah . . ." />
        <div className="o-input-otp">
          <Input
            type="text"
            id="input1"
            placeholder="-"
            variant="title-black input-gray"
            handleChange={handleChangeOTP1}
          />
          <Input
            type="text"
            id="input2"
            placeholder="-"
            variant="title-black input-gray"
            handleChange={handleChangeOTP2}
          />
          <Input
            type="text"
            id="input3"
            placeholder="-"
            variant="title-black input-gray"
            handleChange={handleChangeOTP3}
          />
          <Input
            type="text"
            id="input4"
            placeholder="-"
            variant="title-black input-gray"
            handleChange={handleChangeOTP4}
          />
          <Input
            type="text"
            id="input5"
            placeholder="-"
            variant="title-black input-gray"
            handleChange={handleChangeOTP5}
          />
          <Input
            type="text"
            id="input6"
            placeholder="-"
            variant="title-black input-gray"
            handleChange={handleChangeOTP6}
          />
        </div>
        <TextBody color="gray" weight="light">
          Tidak menerima kode OTP pada handphone Anda?
        </TextBody>
        <div className="text-otp-wrapper">
          <Links
            underline
            className=""
            to=""
            variant="links-additional-info"
            color="orange"
            tabIndex="0"
            type="link"
            weight="black"
          >
            KIRIM ULANG KODE OTPM
          </Links>

          <TextBody color="black" weight="bold">
            ( 00.00 )
          </TextBody>
        </div>
        <Links
          underline
          className=""
          to=""
          variant="links-additional-info"
          color="orange"
          tabIndex="0"
          type="link"
          weight="black"
        >
          GANTI NOMOR HANDPHONE
        </Links>
        <div className="button-wrapper">
          <Button
            variant="secondary"
            onClick={() => {
              handleButtonStepperBack('data', 3);
            }}
          >
            KEMBALI
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleConfirmOTP();
            }}
          >
            KONFIRMASI OTP
          </Button>
        </div>
      </section>
      // OTP FIeld
    );
  };

  contentDataPersonal = () => {
    const {
      state: {
        notif,
        valueEmail,
        valuePin,
        valuePin2,
        valueNoHp,
        notifText,
        valuePinError
      },

      handleButtonRegister,
      handleButtonStepperBack,
      handleChangePin,
      handleChangePin2,
      handleChangeEmail,
      handleChangeNoHp
    } = this;
    return (
      <section>
        <H3 color="black" weight="bold">
          Data Diri
        </H3>
        <Notification
          status={notif}
          title="Maaf, Kamu gagal Melakukan Register . . ."
        />
        <form>
          <Input
            type="number"
            id="handphone"
            placeholder="+62 81XXXXXXXX"
            title="No. HP"
            variant={`title-black ${
              notifText.phone_number != null ? 'input-red' : 'input-gray'
            } half`}
            handleChange={handleChangeNoHp}
            value={valueNoHp}
            titleBottom={
              notifText.phone_number != null ? notifText.phone_number : false
            }
          />
          <Input
            type="email"
            id="email"
            placeholder="Masukkan emailmu yang aktif"
            title="Email (Tidak Wajib)"
            variant={`title-black ${
              notifText.email != null ? 'input-red' : 'input-gray'
            } half`}
            handleChange={handleChangeEmail}
            value={valueEmail}
            titleBottom={notifText.email != null ? notifText.email : false}
          />
          <Input
            type="password"
            id="pin"
            placeholder=""
            title="Buat PIN"
            titleBottom="6 angka yang digunakan ketika login"
            titleBottomColor="black"
            variant="title-black input-gray half"
            handleChange={handleChangePin}
            value={valuePin}
          />
          <Input
            type="password"
            id="re-pin"
            placeholder=""
            title="Masukkan ulang PIN"
            variant={`title-black ${
              valuePinError != null ? 'input-red' : 'input-gray'
            } small`}
            handleChange={handleChangePin2}
            value={valuePin2}
            titleBottom={valuePinError != null ? valuePinError : false}
          />
          <div className="button-wrapper">
            <Button
              variant="secondary"
              onClick={() => {
                handleButtonStepperBack('data', 2);
              }}
            >
              KEMBALI
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleButtonRegister();
              }}
            >
              LANJUT
            </Button>
          </div>
        </form>
      </section>
      // OTP FIeld
    );
  };

  contentDataKTP = () => {
    const {
      state: {
        valueNik,
        valueFullName,
        notifText,
        valueCity,
        startDate,
        selectOptions
      },

      handleButtonStepperNext,
      handleChangeNik,
      handleChangeFullName,
      handleChangeCity
    } = this;
    return (
      <section>
        <H3 color="black" weight="bold">
          Data KTP
        </H3>
        <form>
          <Input
            type="number"
            id="nik"
            placeholder="12345 . . . "
            title="NIK"
            variant={`title-black ${
              notifText.nik != null ? 'input-red' : 'input-gray'
            } width-full`}
            handleChange={handleChangeNik}
            value={valueNik}
            titleBottom={notifText.nik}
            maxlength={16}
          />
          <Input
            type="text"
            id="name"
            placeholder="Masukkan Nama Anda"
            title="Nama Lengkap"
            variant={`title-black ${
              notifText.name != null ? 'input-red' : 'input-gray'
            } half`}
            handleChange={handleChangeFullName}
            value={valueFullName}
            titleBottom={notifText.name}
          />

          <div className="select-wrapper">
            <div className="row">
              <div className="col-md-6">
                <Input
                  type="text"
                  id="city"
                  placeholder="Masukkan Kota Kelahiran"
                  title="Kota kelahiran"
                  value={valueCity}
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

            <div className="button-wrapper">
              <Button
                variant="primary"
                onClick={() => {
                  handleButtonStepperNext('data', 1);
                }}
              >
                LANJUT
              </Button>
            </div>
          </div>
        </form>
      </section>
      // OTP FIeld
    );
  };

  handleChange(e) {
    this.setState({});
  }

  handleChangeNik(event) {
    this.setState({ valueNik: event.target.value });
  }

  handleChangePin(event) {
    this.setState({ valuePin: event.target.value });
  }

  handleChangePin2(event) {
    this.setState({ valuePin2: event.target.value });
  }

  handleChangeNoHp(event) {
    this.setState({ valueNoHp: event.target.value });
  }

  handleChangeFullName(event) {
    this.setState({ valueFullName: event.target.value });
  }

  handleChangeCity(event) {
    this.setState({ valueCity: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ valueEmail: event.target.value });
  }

  handleChangeOTP1(event) {
    this.setState({ valueOtp1: event.target.value });
  }

  handleChangeOTP2(event) {
    this.setState({ valueOtp2: event.target.value });
  }

  handleChangeOTP3(event) {
    this.setState({ valueOtp3: event.target.value });
  }

  handleChangeOTP4(event) {
    this.setState({ valueOtp4: event.target.value });
  }

  handleChangeOTP5(event) {
    this.setState({ valueOtp5: event.target.value });
  }

  handleChangeOTP6(event) {
    this.setState({ valueOtp6: event.target.value });
  }

  render() {
    const {
      state: { step },
      displaForm
    } = this;
    const classNames = classname('o-register-nasabah', {});
    return (
      <div className={classNames}>
        <div className="register-nasabah-header">
          <Header activeMenu="" />
        </div>
        <HeaderBanner
          imageDesktop={ImageBanner}
          imageMobile={ImageBannerMobile}
          title="Selamat datang"
          subtitle="Lengkapi form di bawah ini untuk mendaftarkan diri."
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <CardSteper dataStepper={step} contentCard={displaForm()} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

RegisterNasabah.propTypes = {
  history: PropTypes.instanceOf(Object)
};

RegisterNasabah.defaultProps = {
  history: { push: '/' }
};

export default RegisterNasabah;
