import React, { Component } from 'react';
import {
  H2,
  Header,
  Footer,
  HeaderBanner,
  CardSurveyOnProgress,
  MenuAccordion,
  ContentCardSurvey,
  ScoreSurvey
} from 'components';

import classname from 'classnames';
import PropTypes from 'prop-types';
import ImageHeaderBanner from '../../../assets/images/banner/bg-riwayat-survey-desktop.png';
import ImageHeaderBannerMobile from '../../../assets/images/banner/bg-riwayat-survey-mobile.png';
import ImageCardSurveyOnProgress from '../../../assets/images/banner/image-card-survey.png';
import ImageCardSurveyOnProgressMobile from '../../../assets/images/banner/image-card-survey-mobile.png';
import Profile from '../../../assets/images/profile.jpg';
// style
import './styles.scss';

class SurveyKompetensiOnProgress extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      dataNav: [
        {
          title: 'UMKM Smart',
          withArrow: true
        },
        {
          title: 'Riwayat Survey Kompetensi',
          withArrow: false
        }
      ],
      data: [
        {
          subject: 'A',
          A: 4,
          fullMark: 10
        },
        {
          subject: 'B',
          A: 3,
          fullMark: 10
        },
        {
          subject: 'C',
          A: 9,
          fullMark: 10
        },
        {
          subject: 'D',
          A: 5,
          fullMark: 10
        },
        {
          subject: 'E',
          A: 8,
          fullMark: 10
        },
        {
          subject: 'F',
          A: 2,
          fullMark: 10
        },
        {
          subject: 'G',
          A: 2,
          fullMark: 10
        },
        {
          subject: 'H',
          A: 2,
          fullMark: 10
        },
        {
          subject: 'I',
          A: 6,
          fullMark: 10
        },
        {
          subject: 'J',
          A: 5,
          fullMark: 10
        },
        {
          subject: 'K',
          A: 7,
          fullMark: 10
        },
        {
          subject: 'L',
          A: 6,
          fullMark: 10
        }
      ],
      dataKriteria: [
        {
          kriteriaScore: 4,
          nameKriteria: 'Skala Usaha',
          nameList: 'A'
        },
        {
          kriteriaScore: 3,
          nameKriteria: 'Kepemimpinan',
          nameList: 'B'
        },
        {
          kriteriaScore: 9,
          nameKriteria: 'Pola Pikir',
          nameList: 'C'
        },
        {
          kriteriaScore: 5,
          nameKriteria: 'Budaya Inovasi',
          nameList: 'D'
        },
        {
          kriteriaScore: 8,
          nameKriteria: 'Manajemen Pemasaran',
          nameList: 'E'
        },
        {
          kriteriaScore: 2,
          nameKriteria: 'Manajemen Keuangan',
          nameList: 'F'
        }
      ],
      dataKriteria2: [
        {
          kriteriaScore: 2,
          nameKriteria: 'Manajemen Operasional',
          nameList: 'G'
        },
        {
          kriteriaScore: 1,
          nameKriteria: 'Manajemen SDM',
          nameList: 'H'
        },
        {
          kriteriaScore: 6,
          nameKriteria: 'Legalitas & Kepatuhan',
          nameList: 'I'
        },
        {
          kriteriaScore: 5,
          nameKriteria: 'Sosial & Lingkungan',
          nameList: 'J'
        },
        {
          kriteriaScore: 7,
          nameKriteria: 'Pemahaman Industri',
          nameList: 'K'
        },
        {
          kriteriaScore: 6,
          nameKriteria: 'Manajemen Rantai Pasok',
          nameList: 'L'
        }
      ],

      menuAccordion: [
        {
          date: '20 Mei 2020',
          statusContent: 'is_active',
          contentAccordion: () => {
            this.contentAccordion();
          }
        },
        {
          date: '2 November 2019'
        },
        {
          date: '13 Juni 2019'
        },
        {
          date: '1 Desember 2018'
        },
        {
          date: '20 Juni 2018'
        },
        {
          date: '18 Januari 2018'
        }
      ]
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  handleClickFormSurvey = () => {
    const {
      history: { push }
    } = this.props;
    push('/form-survey');
  };

  contentAccordion = () => {
    const {
      state: { data, dataKriteria, dataKriteria2 }
    } = this;

    return (
      <section>
        <ScoreSurvey nameUmkm="Tradisional Teladan" score="4" />
        <ContentCardSurvey
          dataChart={data}
          dataKriteria={dataKriteria}
          dataKriteria2={dataKriteria2}
          infoChart={false}
        />
      </section>
    );
  };

  render() {
    const {
      handleClickFormSurvey,
      contentAccordion,
      state: { dataNav, menuAccordion }
    } = this;
    const classNames = classname('o-riwayat-survey-on-progress', {});
    return (
      <div className={classNames}>
        <div className="riwayat-survey-on-progress-header">
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
              <div className="a-h2-wrapper">
                <H2 weight="bold" color="black">
                  Survey Sebelumnya
                </H2>
              </div>
              {menuAccordion.map((value, index) => (
                <>
                  <MenuAccordion
                    key={index}
                    date={value.date}
                    statusContent={value.statusContent}
                    contentAccordion={contentAccordion()}
                  />
                </>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

SurveyKompetensiOnProgress.propTypes = {
  history: PropTypes.instanceOf(Object)
};

SurveyKompetensiOnProgress.defaultProps = {
  history: { push: '/' }
};

export default SurveyKompetensiOnProgress;
