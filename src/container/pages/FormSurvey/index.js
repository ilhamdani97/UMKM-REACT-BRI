/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import {
  Header,
  Footer,
  HeaderBanner,
  CardProgressBar,
  CardFormSurvey,
  H4,
  Button,
  Radio,
  CheckBox,
  TextBody,
  Popup,
  H3,
  Skeleton
} from 'components';
import classname from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import ImageHeaderBanner from '../../../assets/images/banner/header-banner-survey-kopetensi.png';
import ImageHeaderBannerMobile from '../../../assets/images/banner/header-banner-survey-kopetensi-mobile.png';
import Profile from '../../../assets/images/profile.jpg';

// Network

import { surveyGroupId, answerBulk } from '../../../services';

// style
import './styles.scss';

class FormSurvey extends Component {
  // _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isProgress: 0,
      contentActive: 1,
      popupShow: false,
      question1: [],
      question2: [],
      question3: [],
      question4: [],
      question5: [],
      question6: [],
      question7: [],
      question8: [],
      question9: [],
      question10: [],
      question11: [],
      question12: [],
      dataAnswers1: [],
      dataAnswersGroup1: {
        group_id62: '',
        answers: []
      },
      dataAnswers2: [],
      dataAnswersGroup2: {
        group_id62: '',
        answers: []
      },
      dataAnswers3: [],
      dataAnswersGroup3: {
        group_id62: '',
        answers: []
      },
      dataAnswers4: [],
      dataAnswersGroup4: {
        group_id62: '',
        answers: []
      },
      dataAnswers5: [],
      dataAnswersGroup5: {
        group_id62: '',
        answers: []
      },
      dataAnswers6: [],
      dataAnswersGroup6: {
        group_id62: '',
        answers: []
      },
      dataAnswers7: [],
      dataAnswersGroup7: {
        group_id62: '',
        answers: []
      },
      dataAnswers8: [],
      dataAnswersGroup8: {
        group_id62: '',
        answers: []
      },
      dataAnswers9: [],
      dataAnswersGroup9: {
        group_id62: '',
        answers: []
      },
      dataAnswers10: [],
      dataAnswersGroup10: {
        group_id62: '',
        answers: []
      },
      dataAnswers11: [],
      dataAnswersGroup11: {
        group_id62: '',
        answers: []
      },
      dataAnswers12: [],
      dataAnswersGroup12: {
        group_id62: '',
        answers: []
      },
      code: '',
      dataNav: [
        {
          title: 'UMKM Smart',
          withArrow: true
        },
        {
          title: 'Survey Kopetensi',
          withArrow: false
        }
      ],
      step: [
        {
          status: 'is-active',
          text: 'Skala Usaha',
          withLine: true,
          value: '1',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Kepemimpinan',
          withLine: true,
          value: '2',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Pola Pikir & Cara Pandang',
          withLine: true,
          value: '3',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Budaya Inovasi',
          withLine: true,
          value: '4',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Manajemen Pemasaran',
          withLine: true,
          value: '5',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Manajemen Operasional',
          withLine: true,
          value: '6',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Manajemen Keuangan',
          withLine: true,
          value: '7',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Manajemen SDM',
          withLine: true,
          value: '8',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Legalitas & Kepatuhan',
          withLine: true,
          value: '9',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Sosial & Lingkungan',
          withLine: true,
          value: '10',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Pemahaman Industri',
          withLine: true,
          value: '11',
          onClick: () => {}
        },
        {
          status: '',
          text: 'Manajemen Rantai Pasok',
          withLine: false,
          value: '12',
          onClick: () => {}
        }
      ]
    };

    this.handleChangeValue1 = this.handleChangeValue1.bind(this);
  }

  componentDidMount() {
    this.displayForm();
    this.generateCode();
    this.loadData1('B');
    this.loadData2('C');
    this.loadData3('D');
    this.loadData4('E');
    this.loadData5('F');
    this.loadData6('G');
    this.loadData7('H');
    this.loadData8('I');
    this.loadData9('J');
    this.loadData10('K');
    this.loadData11('L');
    this.loadData12('M');
  }

  componentWillUnmount() {}

  displayForm = () => {
    const { contentActive } = this.state;
    if (contentActive === 1) {
      const active = this.contentSkalaUsaha();
      // this.loadData1("B");
      return active;
    }
    if (contentActive === 2) {
      const active = this.contentKepemimpinan();
      // this.loadData2("C");
      return active;
    }
    if (contentActive === 3) {
      const active = this.contentPolaPikir();
      // this.loadData3("D");
      return active;
    }
    if (contentActive === 4) {
      const active = this.contentBudayaInovasi();
      // this.loadData4("E");
      return active;
    }
    if (contentActive === 5) {
      const active = this.contentManajemenPemasaran();
      // this.loadData5("F");
      return active;
    }
    if (contentActive === 6) {
      const active = this.contentManajemenOperasional();
      // this.loadData6("G");
      return active;
    }
    if (contentActive === 7) {
      const active = this.contentManajemenKeuangan();
      // this.loadData7("H");
      return active;
    }
    if (contentActive === 8) {
      const active = this.contentManajemenSdm();
      // this.loadData8("I");
      return active;
    }
    if (contentActive === 9) {
      const active = this.contentLegalitas();
      // this.loadData9("J");
      return active;
    }
    if (contentActive === 10) {
      const active = this.contentSosial();
      // this.loadData10("K");
      return active;
    }
    if (contentActive === 11) {
      const active = this.contentPemahamanIndustri();
      // this.loadData11("L");
      return active;
    }
    const active = this.contentManajemenRantai();
    // this.loadData12("M");
    return active;
  };

  loadData1 = (data) => {
    surveyGroupId(data)
      .then((response) => {
        const dataquestion = response.data.questions;
        this.setState({ question1: dataquestion, isLoading: false });
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  loadData2 = (data) => {
    surveyGroupId(data)
      .then((response) => {
        const dataquestion = response.data.questions;
        this.setState({ question2: dataquestion, isLoading: false });
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  loadData3 = (data) => {
    surveyGroupId(data)
      .then((response) => {
        const dataquestion = response.data.questions;
        this.setState({ question3: dataquestion, isLoading: false });
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  loadData4 = (data) => {
    surveyGroupId(data)
      .then((response) => {
        const dataquestion = response.data.questions;
        this.setState({ question4: dataquestion, isLoading: false });
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  loadData5 = (data) => {
    surveyGroupId(data)
      .then((response) => {
        const dataquestion = response.data.questions;
        this.setState({ question5: dataquestion, isLoading: false });
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  loadData6 = (data) => {
    surveyGroupId(data)
      .then((response) => {
        const dataquestion = response.data.questions;
        this.setState({ question6: dataquestion, isLoading: false });
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  loadData7 = (data) => {
    surveyGroupId(data)
      .then((response) => {
        const dataquestion = response.data.questions;
        this.setState({ question7: dataquestion, isLoading: false });
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  loadData8 = (data) => {
    surveyGroupId(data)
      .then((response) => {
        const dataquestion = response.data.questions;
        this.setState({ question8: dataquestion, isLoading: false });
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  loadData9 = (data) => {
    surveyGroupId(data)
      .then((response) => {
        const dataquestion = response.data.questions;
        this.setState({ question9: dataquestion, isLoading: false });
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  loadData10 = (data) => {
    surveyGroupId(data)
      .then((response) => {
        const dataquestion = response.data.questions;
        this.setState({ question10: dataquestion, isLoading: false });
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  loadData11 = (data) => {
    surveyGroupId(data)
      .then((response) => {
        const dataquestion = response.data.questions;
        this.setState({ question11: dataquestion, isLoading: false });
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  loadData12 = (data) => {
    surveyGroupId(data)
      .then((response) => {
        const dataquestion = response.data.questions;
        this.setState({ question12: dataquestion, isLoading: false });
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  generateCode = () => {
    const c = uuidv4();
    this.setState({
      code: c
    });
  };

  postData = (data) => {
    const datas = data.answers;
    datas.splice(0, 1);
    const datas2 = {
      group_id62: data.group_id62,
      answers: datas
    };
    // console.log('cek data slice = ', datas2);
    answerBulk(datas2)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  handleButtonStepperNext = (data, active) => {
    const { step, contentActive } = this.state;
    step[active - 1].status = 'is-done';
    step[active].status = 'is-active';
    this.postData(data);

    this.setState({
      isLoading: true,
      contentActive: contentActive + 1
    });
  };

  handleButtonStepperBack = (data, active) => {
    const { step, contentActive } = this.state;
    step[active - 2].status = 'is-active';
    step[active - 1].status = ' ';
    this.setState({
      isLoading: true,
      contentActive: contentActive - 1,
      step
    });
    // setTimeout(this.fetchData, 1000);
  };

  handleChangeValue1 = (item, item2, item3) => {
    const {
      state: { dataAnswers1, dataAnswersGroup1, code }
    } = this;

    const data = {
      nonce: code,
      question_id62: item.id62,
      answers: []
    };

    data.answers.push({ id62: item2.id62 });
    this.setState({ dataAnswers1: data });
    // dataAnswer ini ambil soal 1 dan jawaban 1

    if (dataAnswers1.question_id62 !== item.id62) {
      const l = dataAnswersGroup1.answers.push(dataAnswers1);
      const data2 = { group_id62: item3, l };
      this.setState({ dataAnswersGroup1: { ...dataAnswersGroup1, ...data2 } });
      // data answer group soal b

      if (
        dataAnswers1.question_id62 === item.id62 &&
        Array.isArray(dataAnswers1.answers) &&
        dataAnswers1.answers.length &&
        dataAnswers1.answers[0].id62 !== item2.id62
      ) {
        data.answers.push({ id62: item2.id62 });
        this.setState({ dataAnswers1: data });
      }
    }
  };

  contentSkalaUsaha = () => {
    const {
      handleButtonStepperNext,
      state: { question1, dataAnswersGroup1 }
    } = this;

    let listQuestion = [];
    listQuestion = question1.results || [];

    const item3 = 'B';

    return (
      <section>
        <H4 color="black" weight="bold">
          SKALA USAHA
        </H4>
        <form>
          {listQuestion.length > 0 ? (
            listQuestion.map((item, index) => {
              // console.log('cek data === ', item);
              const group = `group1${item.id62}`;

              return (
                <div className="form-relative">
                  <TextBody color="black" weight="black">
                    {item.title}
                  </TextBody>
                  {/* <TextBody color="black" children={' Bisa jawab lebih dari 1 pilihan'} weight="light" /> */}
                  {item.type === 'checkbox'
                    ? item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <CheckBox
                            id={item2.id62}
                            isChecked=""
                            onChange={this.handleChangeValue1.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </CheckBox>
                        </div>
                      ))
                    : item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <Radio
                            id={item2.id62}
                            isChecked=""
                            name={group}
                            onChange={this.handleChangeValue1.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </Radio>
                        </div>
                      ))}
                </div>
              );
            })
          ) : (
            <div>
              <Skeleton />
            </div>
          )}
          <div className="button-wrapper">
            <Button
              variant="primary"
              onClick={() => {
                handleButtonStepperNext(dataAnswersGroup1, 1);
              }}
            >
              Lanjutkan
            </Button>
          </div>
        </form>
      </section>
    );
  };

  handleChangeValue2 = (item, item2, item3) => {
    const {
      state: { dataAnswers2, dataAnswersGroup2, code }
    } = this;

    const data = {
      nonce: code,
      question_id62: item.id62,
      answers: []
    };

    data.answers.push({ id62: item2.id62 });
    this.setState({ dataAnswers2: data });
    if (dataAnswers2.question_id62 !== item.id62) {
      const l = dataAnswersGroup2.answers.push(dataAnswers2);
      const data2 = { group_id62: item3, l };
      this.setState({ dataAnswersGroup2: { ...dataAnswersGroup2, ...data2 } });
      if (
        dataAnswers2.question_id62 === item.id62 &&
        Array.isArray(dataAnswers2.answers) &&
        dataAnswers2.answers.length &&
        dataAnswers2.answers[0].id62 !== item2.id62
      ) {
        data.answers.push({ id62: item2.id62 });
        this.setState({ dataAnswers2: data });
      }
    }
  };

  contentKepemimpinan = () => {
    const {
      handleButtonStepperNext,
      handleButtonStepperBack,
      state: { question2, isLoading, dataAnswers2, dataAnswersGroup2 }
    } = this;

    let listQuestion = [];
    listQuestion = question2.results || [];

    const item3 = 'C';

    return (
      <section>
        <H4 color="black" weight="bold">
          KEPEMIMPINAN
        </H4>
        <form>
          {isLoading ? (
            listQuestion.map((item, index) => {
              const group = `group1${item.id62}`;

              return (
                <div className="form-relative">
                  <TextBody color="black" weight="black">
                    {item.title}
                  </TextBody>
                  {/* <TextBody color="black" children={' Bisa jawab lebih dari 1 pilihan'} weight="light" /> */}
                  {item.type === 'checkbox'
                    ? item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <CheckBox
                            id={item2.id62}
                            isChecked={dataAnswers2.id62 === item2.id62}
                            onChange={this.handleChangeValue2.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </CheckBox>
                        </div>
                      ))
                    : item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <Radio
                            id={item2.id62}
                            isChecked={dataAnswers2.id62 === item2.id62}
                            name={group}
                            onChange={this.handleChangeValue2.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </Radio>
                        </div>
                      ))}
                </div>
              );
            })
          ) : (
            <div>
              <Skeleton />
            </div>
          )}
          <div className="button-wrapper">
            <Button
              variant="primary"
              onClick={() => {
                handleButtonStepperNext(dataAnswersGroup2, 2);
              }}
            >
              Lanjutkan
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                handleButtonStepperBack('data', 2);
              }}
            >
              Kembali
            </Button>
          </div>
        </form>
      </section>
    );
  };

  handleChangeValue3 = (item, item2, item3) => {
    const {
      state: { dataAnswers3, dataAnswersGroup3, code }
    } = this;

    const data = {
      nonce: code,
      question_id62: item.id62,
      answers: []
    };

    data.answers.push({ id62: item2.id62 });
    this.setState({ dataAnswers3: data });
    // dataAnswer ini ambil soal 1 dan jawaban 1

    if (dataAnswers3.question_id62 !== item.id62) {
      const l = dataAnswersGroup3.answers.push(dataAnswers3);
      const data2 = { group_id62: item3, l };
      this.setState({ dataAnswersGroup3: { ...dataAnswersGroup3, ...data2 } });
      // data answer group soal b

      if (
        dataAnswers3.question_id62 === item.id62 &&
        Array.isArray(dataAnswers3.answers) &&
        dataAnswers3.answers.length &&
        dataAnswers3.answers[0].id62 !== item2.id62
      ) {
        data.answers.push({ id62: item2.id62 });
        this.setState({ dataAnswers3: data });
      }
    }
  };

  contentPolaPikir = () => {
    const {
      handleButtonStepperNext,
      handleButtonStepperBack,
      state: { question3, isLoading, dataAnswersGroup3 }
    } = this;

    let listQuestion = [];
    listQuestion = question3.results || [];

    const item3 = 'D';

    return (
      <section>
        <H4 color="black" weight="bold">
          POLA PIKIR & CARA PANDANG
        </H4>
        <form>
          {isLoading ? (
            listQuestion.map((item, index) => {
              const group = `group1${item.id62}`;

              return (
                <div className="form-relative">
                  <TextBody color="black" weight="black">
                    {item.title}
                  </TextBody>
                  {/* <TextBody color="black" children={' Bisa jawab lebih dari 1 pilihan'} weight="light" /> */}
                  {item.type === 'checkbox'
                    ? item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <CheckBox
                            id={item2.id62}
                            isChecked=""
                            onChange={this.handleChangeValue3.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </CheckBox>
                        </div>
                      ))
                    : item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <Radio
                            id={item2.id62}
                            isChecked=""
                            name={group}
                            onChange={this.handleChangeValue3.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </Radio>
                        </div>
                      ))}
                </div>
              );
            })
          ) : (
            <div>
              <Skeleton />
            </div>
          )}
          <div className="button-wrapper">
            <Button
              variant="primary"
              onClick={() => {
                handleButtonStepperNext(dataAnswersGroup3, 3);
              }}
            >
              Lanjutkan
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                handleButtonStepperBack('data', 3);
              }}
            >
              Kembali
            </Button>
          </div>
        </form>
      </section>
    );
  };

  handleChangeValue4 = (item, item2, item3) => {
    const {
      state: { dataAnswers4, dataAnswersGroup4, code }
    } = this;

    const data = {
      nonce: code,
      question_id62: item.id62,
      answers: []
    };

    data.answers.push({ id62: item2.id62 });
    this.setState({ dataAnswers4: data });
    // dataAnswer ini ambil soal 1 dan jawaban 1

    if (dataAnswers4.question_id62 !== item.id62) {
      const l = dataAnswersGroup4.answers.push(dataAnswers4);
      const data2 = { group_id62: item3, l };
      this.setState({ dataAnswersGroup4: { ...dataAnswersGroup4, ...data2 } });
      // data answer group soal b

      if (
        dataAnswers4.question_id62 === item.id62 &&
        Array.isArray(dataAnswers4.answers) &&
        dataAnswers4.answers.length &&
        dataAnswers4.answers[0].id62 !== item2.id62
      ) {
        data.answers.push({ id62: item2.id62 });
        this.setState({ dataAnswers4: data });
      }
    }
  };

  contentBudayaInovasi = () => {
    const {
      handleButtonStepperNext,
      handleButtonStepperBack,
      state: { question4, isLoading, dataAnswersGroup4 }
    } = this;

    let listQuestion = [];
    listQuestion = question4.results || [];

    const item3 = 'E';

    return (
      <section>
        <H4 color="black" weight="bold">
          BUDAYA INOVASI
        </H4>
        <form>
          {isLoading ? (
            listQuestion.map((item, index) => {
              const group = `group1${item.id62}`;

              return (
                <div className="form-relative">
                  <TextBody color="black" weight="black">
                    {item.title}
                  </TextBody>
                  {/* <TextBody color="black" children={' Bisa jawab lebih dari 1 pilihan'} weight="light" /> */}
                  {item.type === 'checkbox'
                    ? item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <CheckBox
                            id={item2.id62}
                            isChecked=""
                            onChange={this.handleChangeValue4.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </CheckBox>
                        </div>
                      ))
                    : item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <Radio
                            id={item2.id62}
                            isChecked=""
                            name={group}
                            onChange={this.handleChangeValue4.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </Radio>
                        </div>
                      ))}
                </div>
              );
            })
          ) : (
            <div>
              <Skeleton />
            </div>
          )}
          <div className="button-wrapper">
            <Button
              variant="primary"
              onClick={() => {
                handleButtonStepperNext(dataAnswersGroup4, 4);
              }}
            >
              Lanjutkan
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                handleButtonStepperBack('data', 4);
              }}
            >
              Kembali
            </Button>
          </div>
        </form>
      </section>
    );
  };

  handleChangeValue5 = (item, item2, item3) => {
    const {
      state: { dataAnswers5, dataAnswersGroup5, code }
    } = this;

    const data = {
      nonce: code,
      question_id62: item.id62,
      answers: []
    };

    data.answers.push({ id62: item2.id62 });
    this.setState({ dataAnswers5: data });
    // dataAnswer ini ambil soal 1 dan jawaban 1

    if (dataAnswers5.question_id62 !== item.id62) {
      const l = dataAnswersGroup5.answers.push(dataAnswers5);
      const data2 = { group_id62: item3, l };
      this.setState({ dataAnswersGroup5: { ...dataAnswersGroup5, ...data2 } });
      // data answer group soal b

      if (
        dataAnswers5.question_id62 === item.id62 &&
        Array.isArray(dataAnswers5.answers) &&
        dataAnswers5.answers.length &&
        dataAnswers5.answers[0].id62 !== item2.id62
      ) {
        data.answers.push({ id62: item2.id62 });
        this.setState({ dataAnswers5: data });
      }
    }
  };

  contentManajemenPemasaran = () => {
    const {
      handleButtonStepperNext,
      handleButtonStepperBack,
      state: { question5, isLoading, dataAnswersGroup5 }
    } = this;

    let listQuestion = [];
    listQuestion = question5.results || [];

    const item3 = 'F';

    return (
      <section>
        <H4 color="black" weight="bold">
          MANAJEMEN PEMASARAN
        </H4>
        <form>
          {isLoading ? (
            listQuestion.map((item, index) => {
              return (
                <div className="form-relative">
                  <TextBody color="black" weight="black">
                    {item.title}
                  </TextBody>
                  {/* <TextBody color="black" children={' Bisa jawab lebih dari 1 pilihan'} weight="light" /> */}
                  {item.type === 'checkbox'
                    ? item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <CheckBox
                            id={item2.id62}
                            isChecked=""
                            onChange={this.handleChangeValue5.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </CheckBox>
                        </div>
                      ))
                    : item.choices.map((item2, index) => (
                        <div className="form-relative">
                          {/* <Radio id={item2.id62} isChecked={""} name={group} onChange={this.handleChangeValue5.bind(this, item, item2, item3)} >
                                <TextBody
                                  color="black"
                                  children={item2.display_name}
                                  weight="black"
                                />
                              </Radio> */}
                        </div>
                      ))}
                </div>
              );
            })
          ) : (
            <div>
              <Skeleton />
            </div>
          )}
          <div className="button-wrapper">
            <Button
              variant="primary"
              onClick={() => {
                handleButtonStepperNext(dataAnswersGroup5, 5);
              }}
            >
              Lanjutkan
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                handleButtonStepperBack('data', 5);
              }}
            >
              Kembali
            </Button>
          </div>
        </form>
      </section>
    );
  };

  handleChangeValue6 = (item, item2, item3) => {
    const {
      state: { dataAnswers6, dataAnswersGroup6, code }
    } = this;

    const data = {
      nonce: code,
      question_id62: item.id62,
      answers: []
    };

    data.answers.push({ id62: item2.id62 });
    this.setState({ dataAnswers6: data });
    // dataAnswer ini ambil soal 1 dan jawaban 1

    if (dataAnswers6.question_id62 !== item.id62) {
      const l = dataAnswersGroup6.answers.push(dataAnswers6);
      const data2 = { group_id62: item3, l };
      this.setState({ dataAnswersGroup6: { ...dataAnswersGroup6, ...data2 } });
      // data answer group soal b

      if (
        dataAnswers6.question_id62 === item.id62 &&
        Array.isArray(dataAnswers6.answers) &&
        dataAnswers6.answers.length &&
        dataAnswers6.answers[0].id62 !== item2.id62
      ) {
        data.answers.push({ id62: item2.id62 });
        this.setState({ dataAnswers6: data });
      }
    }
  };

  contentManajemenOperasional = () => {
    const {
      handleButtonStepperNext,
      handleButtonStepperBack,
      state: { question6, isLoading, dataAnswersGroup6 }
    } = this;

    let listQuestion = [];
    listQuestion = question6.results || [];

    const item3 = 'G';
    return (
      <section>
        <H4 color="black" weight="bold">
          MANAJEMEN OPERASIONAL
        </H4>
        <form>
          {isLoading ? (
            listQuestion.map((item, index) => {
              const group = `group1${item.id62}`;

              return (
                <div className="form-relative">
                  <TextBody color="black" weight="black">
                    {item.title}
                  </TextBody>
                  {/* <TextBody color="black" children={' Bisa jawab lebih dari 1 pilihan'} weight="light" /> */}
                  {item.type === 'checkbox'
                    ? item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <CheckBox
                            id={item2.id62}
                            isChecked=""
                            onChange={this.handleChangeValue6.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </CheckBox>
                        </div>
                      ))
                    : item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <Radio
                            id={item2.id62}
                            isChecked=""
                            name={group}
                            onChange={this.handleChangeValue6.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </Radio>
                        </div>
                      ))}
                </div>
              );
            })
          ) : (
            <div>
              <Skeleton />
            </div>
          )}
          <div className="button-wrapper">
            <Button
              variant="primary"
              onClick={() => {
                handleButtonStepperNext(dataAnswersGroup6, 6);
              }}
            >
              Lanjutkan
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                handleButtonStepperBack('data', 6);
              }}
            >
              Kembali
            </Button>
          </div>
        </form>
      </section>
    );
  };

  handleChangeValue7 = (item, item2, item3) => {
    const {
      state: { dataAnswers7, dataAnswersGroup7, code }
    } = this;

    const data = {
      nonce: code,
      question_id62: item.id62,
      answers: []
    };

    data.answers.push({ id62: item2.id62 });
    this.setState({ dataAnswers7: data });
    // dataAnswer ini ambil soal 1 dan jawaban 1

    if (dataAnswers7.question_id62 !== item.id62) {
      const l = dataAnswersGroup7.answers.push(dataAnswers7);
      const data2 = { group_id62: item3, l };
      this.setState({ dataAnswersGroup7: { ...dataAnswersGroup7, ...data2 } });
      // data answer group soal b

      if (
        dataAnswers7.question_id62 === item.id62 &&
        Array.isArray(dataAnswers7.answers) &&
        dataAnswers7.answers.length &&
        dataAnswers7.answers[0].id62 !== item2.id62
      ) {
        data.answers.push({ id62: item2.id62 });
        this.setState({ dataAnswers7: data });
      }
    }
  };

  contentManajemenKeuangan = () => {
    const {
      handleButtonStepperNext,
      handleButtonStepperBack,
      state: { question7, isLoading, dataAnswersGroup7 }
    } = this;

    let listQuestion = [];
    listQuestion = question7.results || [];

    const item3 = 'H';

    return (
      <section>
        <H4 color="black" weight="bold">
          MANAJEMEN KEUANGAN
        </H4>
        <form>
          {isLoading ? (
            listQuestion.map((item, index) => {
              const group = `group1${item.id62}`;

              return (
                <div className="form-relative">
                  <TextBody color="black" weight="black">
                    {item.title}
                  </TextBody>
                  {/* <TextBody color="black" children={' Bisa jawab lebih dari 1 pilihan'} weight="light" /> */}
                  {item.type === 'checkbox'
                    ? item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <CheckBox
                            id={item2.id62}
                            isChecked=""
                            onChange={this.handleChangeValue7.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </CheckBox>
                        </div>
                      ))
                    : item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <Radio
                            id={item2.id62}
                            isChecked=""
                            name={group}
                            onChange={this.handleChangeValue7.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </Radio>
                        </div>
                      ))}
                </div>
              );
            })
          ) : (
            <div>
              <Skeleton />
            </div>
          )}
          <div className="button-wrapper">
            <Button
              variant="primary"
              onClick={() => {
                handleButtonStepperNext(dataAnswersGroup7, 7);
              }}
            >
              Lanjutkan
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                handleButtonStepperBack('data', 7);
              }}
            >
              Kembali
            </Button>
          </div>
        </form>
      </section>
    );
  };

  handleChangeValue8 = (item, item2, item3) => {
    const {
      state: { dataAnswers8, dataAnswersGroup8, code }
    } = this;

    const data = {
      nonce: code,
      question_id62: item.id62,
      answers: []
    };

    data.answers.push({ id62: item2.id62 });
    this.setState({ dataAnswers8: data });
    // dataAnswer ini ambil soal 1 dan jawaban 1

    if (dataAnswers8.question_id62 !== item.id62) {
      const l = dataAnswersGroup8.answers.push(dataAnswers8);
      const data2 = { group_id62: item3, l };
      this.setState({ dataAnswersGroup8: { ...dataAnswersGroup8, ...data2 } });
      // data answer group soal b

      if (
        dataAnswers8.question_id62 === item.id62 &&
        Array.isArray(dataAnswers8.answers) &&
        dataAnswers8.answers.length &&
        dataAnswers8.answers[0].id62 !== item2.id62
      ) {
        data.answers.push({ id62: item2.id62 });
        this.setState({ dataAnswers8: data });
      }
    }
  };

  contentManajemenSdm = () => {
    const {
      handleButtonStepperNext,
      handleButtonStepperBack,
      state: { question8, isLoading, dataAnswersGroup8 }
    } = this;

    let listQuestion = [];
    listQuestion = question8.results || [];

    const item3 = 'I';

    return (
      <section>
        <H4 color="black" weight="bold">
          MANAJEMEN SDM
        </H4>
        <form>
          {isLoading ? (
            listQuestion.map((item, index) => {
              const group = `group1${item.id62}`;

              return (
                <div className="form-relative">
                  <TextBody color="black" weight="black">
                    {item.title}
                  </TextBody>
                  {/* <TextBody color="black" children={' Bisa jawab lebih dari 1 pilihan'} weight="light" /> */}
                  {item.type === 'checkbox'
                    ? item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <CheckBox
                            id={item2.id62}
                            isChecked=""
                            onChange={this.handleChangeValue8.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </CheckBox>
                        </div>
                      ))
                    : item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <Radio
                            id={item2.id62}
                            isChecked=""
                            name={group}
                            onChange={this.handleChangeValue8.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </Radio>
                        </div>
                      ))}
                </div>
              );
            })
          ) : (
            <div>
              <Skeleton />
            </div>
          )}
          <div className="button-wrapper">
            <Button
              variant="primary"
              onClick={() => {
                handleButtonStepperNext(dataAnswersGroup8, 8);
              }}
            >
              Lanjutkan
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                handleButtonStepperBack('data', 8);
              }}
            >
              Kembali
            </Button>
          </div>
        </form>
      </section>
    );
  };

  handleChangeValue9 = (item, item2, item3) => {
    const {
      state: { dataAnswers9, dataAnswersGroup9, code }
    } = this;

    const data = {
      nonce: code,
      question_id62: item.id62,
      answers: []
    };

    data.answers.push({ id62: item2.id62 });
    this.setState({ dataAnswers9: data });
    // dataAnswer ini ambil soal 1 dan jawaban 1

    if (dataAnswers9.question_id62 !== item.id62) {
      const l = dataAnswersGroup9.answers.push(dataAnswers9);
      const data2 = { group_id62: item3, l };
      this.setState({ dataAnswersGroup9: { ...dataAnswersGroup9, ...data2 } });
      // data answer group soal b

      if (
        dataAnswers9.question_id62 === item.id62 &&
        Array.isArray(dataAnswers9.answers) &&
        dataAnswers9.answers.length &&
        dataAnswers9.answers[0].id62 !== item2.id62
      ) {
        data.answers.push({ id62: item2.id62 });
        this.setState({ dataAnswers9: data });
      }
    }
  };

  contentLegalitas = () => {
    const {
      handleButtonStepperNext,
      handleButtonStepperBack,
      state: { question9, isLoading, dataAnswersGroup9 }
    } = this;

    let listQuestion = [];
    listQuestion = question9.results || [];

    const item3 = 'J';

    return (
      <section>
        <H4 color="black" weight="bold">
          LEGALITAS & KEPATUHAN
        </H4>
        <form>
          {isLoading ? (
            listQuestion.map((item, index) => {
              const group = `group1${item.id62}`;

              return (
                <div className="form-relative">
                  <TextBody color="black" weight="black">
                    {item.title}
                  </TextBody>
                  {/* <TextBody color="black" children={' Bisa jawab lebih dari 1 pilihan'} weight="light" /> */}
                  {item.type === 'checkbox'
                    ? item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <CheckBox
                            id={item2.id62}
                            isChecked=""
                            onChange={this.handleChangeValue9.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </CheckBox>
                        </div>
                      ))
                    : item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <Radio
                            id={item2.id62}
                            isChecked=""
                            name={group}
                            onChange={this.handleChangeValue9.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </Radio>
                        </div>
                      ))}
                </div>
              );
            })
          ) : (
            <div>
              <Skeleton />
            </div>
          )}
          <div className="button-wrapper">
            <Button
              variant="primary"
              onClick={() => {
                handleButtonStepperNext(dataAnswersGroup9, 9);
              }}
            >
              Lanjutkan
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                handleButtonStepperBack('data', 9);
              }}
            >
              Kembali
            </Button>
          </div>
        </form>
      </section>
    );
  };

  handleChangeValue10 = (item, item2, item3) => {
    const {
      state: { dataAnswers10, dataAnswersGroup10, code }
    } = this;

    const data = {
      nonce: code,
      question_id62: item.id62,
      answers: []
    };

    data.answers.push({ id62: item2.id62 });
    this.setState({ dataAnswers10: data });
    // dataAnswer ini ambil soal 1 dan jawaban 1

    if (dataAnswers10.question_id62 !== item.id62) {
      const l = dataAnswersGroup10.answers.push(dataAnswers10);
      const data2 = { group_id62: item3, l };
      this.setState({
        dataAnswersGroup10: { ...dataAnswersGroup10, ...data2 }
      });
      // data answer group soal b

      if (
        dataAnswers10.question_id62 === item.id62 &&
        Array.isArray(dataAnswers10.answers) &&
        dataAnswers10.answers.length &&
        dataAnswers10.answers[0].id62 !== item2.id62
      ) {
        data.answers.push({ id62: item2.id62 });
        this.setState({ dataAnswers10: data });
      }
    }
  };

  contentSosial = () => {
    const {
      handleButtonStepperNext,
      handleButtonStepperBack,
      state: { question10, isLoading, dataAnswersGroup10 }
    } = this;

    let listQuestion = [];
    listQuestion = question10.results || [];

    const item3 = 'K';

    return (
      <section>
        <H4 color="black" weight="bold">
          SOSIAL & LINGKUNGAN
        </H4>
        <form>
          {isLoading ? (
            listQuestion.map((item, index) => {
              const group = `group1${item.id62}`;

              return (
                <div className="form-relative">
                  <TextBody color="black" weight="black">
                    {item.title}
                  </TextBody>
                  {/* <TextBody color="black" children={' Bisa jawab lebih dari 1 pilihan'} weight="light" /> */}
                  {item.type === 'checkbox'
                    ? item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <CheckBox
                            id={item2.id62}
                            isChecked=""
                            onChange={this.handleChangeValue10.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </CheckBox>
                        </div>
                      ))
                    : item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <Radio
                            id={item2.id62}
                            isChecked=""
                            name={group}
                            onChange={this.handleChangeValue10.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </Radio>
                        </div>
                      ))}
                </div>
              );
            })
          ) : (
            <div>
              <Skeleton />
            </div>
          )}
          <div className="button-wrapper">
            <Button
              variant="primary"
              onClick={() => {
                handleButtonStepperNext(dataAnswersGroup10, 10);
              }}
            >
              Lanjutkan
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                handleButtonStepperBack('data', 10);
              }}
            >
              Kembali
            </Button>
          </div>
        </form>
      </section>
    );
  };

  handleChangeValue11 = (item, item2, item3) => {
    const {
      state: { dataAnswers11, dataAnswersGroup11, code }
    } = this;

    const data = {
      nonce: code,
      question_id62: item.id62,
      answers: []
    };

    data.answers.push({ id62: item2.id62 });
    this.setState({ dataAnswers11: data });
    // dataAnswer ini ambil soal 1 dan jawaban 1

    if (dataAnswers11.question_id62 !== item.id62) {
      const l = dataAnswersGroup11.answers.push(dataAnswers11);
      const data2 = { group_id62: item3, l };
      this.setState({
        dataAnswersGroup11: { ...dataAnswersGroup11, ...data2 }
      });
      // data answer group soal b

      // this.setState({dataAnswersGroup});
      if (
        dataAnswers11.question_id62 === item.id62 &&
        Array.isArray(dataAnswers11.answers) &&
        dataAnswers11.answers.length &&
        dataAnswers11.answers[0].id62 !== item2.id62
      ) {
        data.answers.push({ id62: item2.id62 });
        this.setState({ dataAnswers11: data });
      }
    }
  };

  contentPemahamanIndustri = () => {
    const {
      handleButtonStepperNext,
      handleButtonStepperBack,
      state: { question11, isLoading, dataAnswersGroup11 }
    } = this;

    let listQuestion = [];
    listQuestion = question11.results || [];

    const item3 = 'L';

    return (
      <section>
        <H4 color="black" weight="bold">
          PEMAHAMAN INDUSTRI
        </H4>
        <form>
          {isLoading ? (
            listQuestion.map((item, index) => {
              const group = `group1${item.id62}`;

              return (
                <div className="form-relative">
                  <TextBody color="black" weight="black">
                    {item.title}
                  </TextBody>
                  {/* <TextBody color="black" children={' Bisa jawab lebih dari 1 pilihan'} weight="light" /> */}
                  {item.type === 'checkbox'
                    ? item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <CheckBox
                            id={item2.id62}
                            isChecked=""
                            onChange={this.handleChangeValue11.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </CheckBox>
                        </div>
                      ))
                    : item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <Radio
                            id={item2.id62}
                            isChecked=""
                            name={group}
                            onChange={this.handleChangeValue11.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </Radio>
                        </div>
                      ))}
                </div>
              );
            })
          ) : (
            <div>
              <Skeleton />
            </div>
          )}
          <div className="button-wrapper">
            <Button
              variant="primary"
              onClick={() => {
                handleButtonStepperNext(dataAnswersGroup11, 11);
              }}
            >
              Lanjutkan
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                handleButtonStepperBack('data', 11);
              }}
            >
              Kembali
            </Button>
          </div>
        </form>
      </section>
    );
  };

  handleChangeValue12 = (item, item2, item3) => {
    const {
      state: { dataAnswers12, dataAnswersGroup12, code }
    } = this;

    const data = {
      nonce: code,
      question_id62: item.id62,
      answers: []
    };

    data.answers.push({ id62: item2.id62 });
    this.setState({ dataAnswers12: data });
    // dataAnswer ini ambil soal 1 dan jawaban 1

    if (dataAnswers12.question_id62 !== item.id62) {
      const l = dataAnswersGroup12.answers.push(dataAnswers12);
      const data2 = { group_id62: item3, l };
      this.setState({
        dataAnswersGroup12: { ...dataAnswersGroup12, ...data2 }
      });
      // data answer group soal b

      if (
        dataAnswers12.question_id62 === item.id62 &&
        Array.isArray(dataAnswers12.answers) &&
        dataAnswers12.answers.length &&
        dataAnswers12.answers[0].id62 !== item2.id62
      ) {
        data.answers.push({ id62: item2.id62 });
        this.setState({ dataAnswers12: data });
      }
    }
  };

  contentManajemenRantai = () => {
    const {
      handleButtonStepperBack,
      state: { question12, isLoading }
    } = this;

    let listQuestion = [];
    listQuestion = question12.results || [];

    const item3 = 'M';

    return (
      <section>
        <H4 color="black" weight="bold">
          MANAJEMEN RANTAI PASOK
        </H4>
        <form>
          {isLoading ? (
            listQuestion.map((item, index) => {
              const group = `group1${item.id62}`;

              return (
                <div className="form-relative">
                  <TextBody color="black" weight="black">
                    {item.title}
                  </TextBody>
                  {/* <TextBody color="black" children={' Bisa jawab lebih dari 1 pilihan'} weight="light" /> */}
                  {item.type === 'checkbox'
                    ? item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <CheckBox
                            id={item2.id62}
                            isChecked=""
                            onChange={this.handleChangeValue12.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </CheckBox>
                        </div>
                      ))
                    : item.choices.map((item2, index) => (
                        <div className="form-relative">
                          <Radio
                            id={item2.id62}
                            isChecked=""
                            name={group}
                            onChange={this.handleChangeValue12.bind(
                              this,
                              item,
                              item2,
                              item3
                            )}
                          >
                            <TextBody color="black" weight="black">
                              {item2.display_name}
                            </TextBody>
                          </Radio>
                        </div>
                      ))}
                </div>
              );
            })
          ) : (
            <div>
              <Skeleton />
            </div>
          )}
          <div className="button-wrapper">
            <Button variant="primary" onClick={() => {}}>
              Simpan
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                handleButtonStepperBack('data', 12);
              }}
            >
              Kembali
            </Button>
          </div>
        </form>
      </section>
    );
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

  render() {
    const {
      displayForm,
      handleShowPopup,
      handleClosePopup,
      state: { dataNav, popupShow, isProgress, step }
    } = this;
    const nextClass = classname('inner-container', {});
    const classNames = classname('o-form-survey', {});
    return (
      <div className={nextClass}>
        <Popup
          showPopup={popupShow}
          onClickClosePopup={() => handleClosePopup('popupShow', popupShow)}
        >
          <H3 color="black" weight="black">
            Salam Naik Kelas!
          </H3>
          <TextBody color="black" weight="light">
            Mau tahu kondisi kesiapan usaha kita untuk memotret atau mendiagnosa
            kondisi kesiapan usaha kita untuk membesarkan usaha secara
            berkelanjutan. Yuk coba mengisi form survey ini!
          </TextBody>
        </Popup>
        <div className={classNames}>
          <div className="form-survey-header">
            <Header activeMenu="home" imageProfile={Profile} />
          </div>
          <HeaderBanner
            imageDesktop={ImageHeaderBanner}
            imageMobile={ImageHeaderBannerMobile}
            title="Survey Kompetensi"
            withNav={dataNav}
          />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <CardProgressBar
                  nameProgress="PROGRESS"
                  valueBar={`${isProgress}%`}
                />
                <CardFormSurvey
                  contentCard={displayForm()}
                  sidebarCard={step}
                  mSideBar={() => handleShowPopup('popupShow', popupShow)}
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

export default FormSurvey;
