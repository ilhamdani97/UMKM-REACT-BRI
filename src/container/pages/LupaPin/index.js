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
// style
import './styles.scss';
// Network
import { setPin, resetPin, verifyOtp } from '../../../services';

class LupaPin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notif: '',
      notifText: [],
      contentActive: 1,
      dataForOTP: '',
      valuePinError: null,
      valueHp: '',
      valueNik: '',
      valueOtp1: '',
      valueOtp2: '',
      valueOtp3: '',
      valueOtp4: '',
      valueOtp5: '',
      valueOtp6: '',
      valueToken: '',
      valuePin: '',
      valuePin2: '',
      step: [
        {
          status: 'is-active',
          text: 'Identitas',
          withLine: true,
          value: '1',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Massukan OTP',
          withLine: true,
          value: '2',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Buat PIN baru',
          withLine: false,
          value: '3',
          onClick: () => {}
        }
      ]
    };
    this.handleChangeNik = this.handleChangeNik.bind(this);
    this.handleChangeHp = this.handleChangeHp.bind(this);
    this.handleChangeOTP1 = this.handleChangeOTP1.bind(this);
    this.handleChangeOTP2 = this.handleChangeOTP2.bind(this);
    this.handleChangeOTP3 = this.handleChangeOTP3.bind(this);
    this.handleChangeOTP4 = this.handleChangeOTP4.bind(this);
    this.handleChangeOTP5 = this.handleChangeOTP5.bind(this);
    this.handleChangeOTP6 = this.handleChangeOTP6.bind(this);
    this.handleChangePin = this.handleChangePin.bind(this);
    this.handleChangePin2 = this.handleChangePin2.bind(this);
  }

  componentDidMount() {
    this.displayForm();
  }

  componentWillUnmount() {}

  handleButtonStepperNext = (data, active) => {
    const { step, contentActive } = this.state;
    step[active - 1].status = 'is-done';
    step[active].status = 'is-active';

    this.setState({
      contentActive: contentActive + 1,
      step
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

  handleIdentitas = () => {
    const { valueNik, valueHp } = this.state;
    const dataIdentitas = {
      phone_number: valueHp,
      nik: valueNik
    };

    resetPin(dataIdentitas)
      .then((response) => {
        this.setState({
          dataForOTP: response.data
        });
        this.handleButtonStepperNext('data', 1);
      })
      .catch((error) => {
        this.setState({
          notifText: error.response.data
        });
        this.setState({ notif: 'error' });
      });
  };

  handleConfirmOTP = () => {
    const {
      valueHp,
      dataForOTP,
      valueOtp1,
      valueOtp2,
      valueOtp3,
      valueOtp4,
      valueOtp6,
      valueOtp5
    } = this.state;

    const dataVerify = {
      phone_number: valueHp,
      session_id: dataForOTP.session_id,
      code: `${valueOtp1}${valueOtp2}${valueOtp3}${valueOtp4}${valueOtp5}${valueOtp6}`,
      is_reset_pin: true
    };

    verifyOtp(dataVerify)
      .then((response) => {
        this.handleButtonStepperNext('data', 2);

        this.setState({
          valueToken: response.data.token
        });
      })
      .catch((err) => {
        this.setState({ notifOTP: 'error' });
      });
  };

  handleResetPin = () => {
    const { valuePin, valuePin2, valueToken } = this.state;
    const {
      history: { push }
    } = this.props;
    if (valuePin2 === valuePin) {
      const dataPin = {
        forgot_token: valueToken,
        pin: valuePin2
      };
      setPin(dataPin)
        .then((response) => {
          localStorage.setItem(
            'success_reset',
            `PIN telah diperbaharui. Silahkan login dengan PIn baru.`
          );
          push('/');
        })
        .catch((error) => {
          throw error;
        });
    } else {
      this.setState({
        valuePinError: 'Pin tidak sesuai'
      });
    }
  };

  displayForm = () => {
    const { contentActive } = this.state;
    if (contentActive === 1) {
      const active = this.contentFormIdentitas();
      return active;
    }
    if (contentActive === 2) {
      const active = this.contentFormOTP();
      return active;
    }
    const active = this.contentFormPIN();
    return active;
  };

  contentFormIdentitas = () => {
    const {
      state: { valueHp, valueNik, notif, notifText },
      handleChangeHp,
      handleChangeNik,
      handleIdentitas
    } = this;
    return (
      <section>
        <H3 color="black" weight="bold">
          Identitas
        </H3>
        <TextBody color="gray" weight="light">
          Silahkan masukan identitas untuk verifikasi.
        </TextBody>
        <Notification status={notif} title="Maaf, Terjadi Kesalahan . . ." />
        <form>
          <Input
            type="text"
            id="nik"
            placeholder="Masukkan No.KTP"
            title="NIK"
            handleChange={handleChangeNik}
            value={valueNik}
            variant={`title-black ${
              notifText.nik != null ? 'input-red' : 'input-gray'
            } width-full`}
            titleBottom={notifText.nik != null ? notifText.nik : false}
            maxlength={16}
          />
          <Input
            type="text"
            id="noHp"
            placeholder="+62 81XXXXXXXX"
            title="NO. Handphone"
            handleChange={handleChangeHp}
            value={valueHp}
            variant={`title-black ${
              notifText.phone_number != null ? 'input-red' : 'input-gray'
            } city`}
            titleBottom={
              notifText.phone_number != null ? notifText.phone_number : false
            }
          />
          <div className="button-wrapper">
            <Button
              variant="primary"
              onClick={() => {
                handleIdentitas();
              }}
            >
              Lanjut
            </Button>
          </div>
        </form>
      </section>
    );
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
            weight="bold"
          >
            KIRIM ULANG KODE OTP
          </Links>

          <TextBody color="black" weight="bold">
            ( 00.00 )
          </TextBody>
        </div>
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
              handleConfirmOTP();
            }}
          >
            LANJUT
          </Button>
        </div>
      </section>
      // OTP FIeld
    );
  };

  contentFormPIN = () => {
    const {
      state: { valuePin, valuePin2, valuePinError },
      handleChangePin,
      handleChangePin2,
      handleResetPin,
      handleButtonStepperBack
    } = this;
    return (
      <section>
        <H3 color="black" weight="bold">
          Buat PIN BARU
        </H3>
        <form>
          <div className="o-pin">
            <Input
              type="password"
              id="pin"
              placeholder=""
              title="Buat PIN"
              titleBottom="6 angka yang digunakan ketika login"
              titleBottomColor="black"
              variant="title-black input-gray city"
              handleChange={handleChangePin}
              value={valuePin}
              // maxlength= {6}
            />
            <Input
              type="password"
              id="re-pin"
              placeholder=""
              title="Masukkan ulang PIN"
              variant={`title-black ${
                valuePinError != null ? 'input-red' : 'input-gray'
              } city`}
              handleChange={handleChangePin2}
              value={valuePin2}
              titleBottom={valuePinError != null ? valuePinError : false}
              // maxlength= {6}
            />
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
                  handleResetPin();
                }}
              >
                UBAH PIN
              </Button>
            </div>
          </div>
        </form>
      </section>
    );
  };

  handleChangeNik(event) {
    this.setState({ valueNik: event.target.value });
  }

  handleChangeHp(event) {
    this.setState({ valueHp: event.target.value });
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

  handleChangePin(event) {
    this.setState({ valuePin: event.target.value });
  }

  handleChangePin2(event) {
    this.setState({ valuePin2: event.target.value });
  }

  render() {
    const { displayForm, state } = this;
    const classNames = classname('o-form-pin', {});

    return (
      <div className={classNames}>
        <div className="forgot-pin-header">
          <Header />
        </div>
        <HeaderBanner
          imageDesktop={ImageBanner}
          imageMobile={ImageBannerMobile}
          title="Lupa Pin"
          subtitle="Lengkapi form di bawah ini untuk mendaftarkan diri."
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <CardSteper
                dataStepper={state.step}
                contentCard={displayForm()}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

LupaPin.propTypes = {
  history: PropTypes.instanceOf(Object)
};

LupaPin.defaultProps = {
  history: { push: '/' }
};

export default LupaPin;
