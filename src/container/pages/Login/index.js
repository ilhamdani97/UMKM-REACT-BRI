import React, { Component } from 'react';
import {
  Header,
  Footer,
  H1,
  Button,
  Input,
  Links,
  Notification
} from 'components';
// import Background from '../../../assets/images/banner/banner-login@4x.png';
import BgLogin from 'assets/images/banner/bg-login-desktop.png';
import BgLoginMobile from 'assets/images/banner/bg-login-mobile.png';
import classname from 'classnames';
import PropTypes from 'prop-types';
// Network
import { login } from '../../../services';
// style
import './styles.scss';

class Login extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      notif: '',
      valueNik: '',
      valuePin: '',
      message: ''
    };

    this.handleChangeNik = this.handleChangeNik.bind(this);
    this.handleChangePin = this.handleChangePin.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleClickLogin = (event) => {
    const { valueNik, valuePin } = this.state;
    const userTemp = {
      nik: valueNik,
      pin: valuePin
    };

    login(userTemp)
      .then((response) => {
        localStorage.setItem('token', `Token ${response.data.token}`);
        const {
          history: { push }
        } = this.props;
        push('/home');
        // return <Redirect to={'/home'} />;
      })
      .catch((err) => {
        if (valueNik.length !== 16 && valuePin.length !== 6) {
          this.setState({
            message: 'NIK harus 16 angka & PIN harus 6 angka'
          });
        } else if (valueNik.length !== 16) {
          this.setState({
            message: 'NIK harus 16 karakter'
          });
        } else if (valuePin.length !== 6) {
          this.setState({
            message: 'PIN harus 6 karakter'
          });
        } else {
          this.setState({
            message: 'NIK atau PIN yang kamu masukkan salah.'
          });
        }

        this.setState({ notif: 'error' });
        const {
          history: { push }
        } = this.props;
        push('/');
      });

    event.preventDefault();
  };

  handleChangeNik(event) {
    this.setState({ valueNik: event.target.value });
  }

  handleChangePin(event) {
    this.setState({ valuePin: event.target.value });
  }

  render() {
    const nextClass = classname('inner-container', {});
    const classNames = classname('o-login', {});
    const {
      state: { notif, valueNik, valuePin, message },
      handleClickLogin,
      handleChangePin,
      handleChangeNik
    } = this;

    return (
      <div className={nextClass}>
        <div className={classNames}>
          <div className="o-login__image-wrapper o-card-dashboard__image-wrapper--d">
            <img src={BgLogin} alt="bg" />
          </div>
          <div className="o-login__image-wrapper o-card-dashboard__image-wrapper--m">
            <img src={BgLoginMobile} alt="bg" />
          </div>
          <div className="login-header">
            <Header />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 login-title">
                <H1 weight="bold" color="white" className="desktop-only">
                  Login
                </H1>
                <div className="title-content">
                  Silahkan masukkan NIK dan PIN Anda
                </div>
                <Notification status={notif} title={message} />
                <form onSubmit={handleClickLogin}>
                  <Input
                    type="text"
                    id="nik"
                    placeholder="Masukkan No.KTP"
                    title="NIK"
                    handleChange={handleChangeNik}
                    value={valueNik}
                  />
                  <div className="link-section-down">
                    <Input
                      type="password"
                      id="pin"
                      placeholder="Masukkan PIN"
                      title="PIN"
                      variant="small"
                      value={valuePin}
                      handleChange={handleChangePin}
                    />
                    <Links
                      underline
                      className=""
                      to="/forgot-pin"
                      variant="links-additional-info"
                      color="white"
                      tabIndex="-1"
                      type="link"
                    >
                      LUPA PIN?
                    </Links>
                  </div>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </form>

                <div className="link-section">
                  <div className="title-content">Belum punya akun?</div>
                  <Links
                    underline
                    className=""
                    to="/register-nasabah"
                    variant="links-additional-info"
                    color="white"
                    tabIndex="-1"
                    type="link"
                  >
                    DAFTAR DISINI
                  </Links>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.instanceOf(Object)
};

Login.defaultProps = {
  history: { push: '/' }
};

export default Login;
