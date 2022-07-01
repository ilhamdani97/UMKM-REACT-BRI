import React, { Component } from 'react';
import { Header, Footer, H1, Button, Input, Links } from 'components';
import BgRegister from 'assets/images/banner/bg-register.png';
import BgRegisterMobile from 'assets/images/banner/bg-register-mobile.png';
import classname from 'classnames';
// style
import './styles.scss';

class Register extends Component {
  _isMounted = false;

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const nextClass = classname('inner-container', {});
    const classNames = classname('o-register', {});
    return (
      <div className={nextClass}>
        <div className={classNames}>
          <div className="o-register__image-wrapper o-card-dashboard__image-wrapper--d">
            <img src={BgRegister} alt="bg-register" />
          </div>
          <div className="o-register__image-wrapper o-card-dashboard__image-wrapper--m">
            <img src={BgRegisterMobile} alt="bg-register" />
          </div>
          <div className="login-header">
            <Header />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 login-title">
                <H1 weight="bold" color="white" className="desktop-only">
                  Daftar
                </H1>
                <div className="title-content">Silahkan masukkan NIK Anda</div>
                <form>
                  <Input
                    type="text"
                    id="nik"
                    placeholder="Masukkan No.KTP"
                    title="NIK"
                    variant="small"
                  />

                  <Button variant="primary">Daftar</Button>
                  <div className="link-section">
                    <div className="title-content">Sudah punya akun?</div>
                    <Links
                      underline
                      className=""
                      to="/"
                      variant="links-additional-info"
                      color="white"
                      tabIndex="-1"
                      type="link"
                    >
                      LOGIN DISINI
                    </Links>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Register;
