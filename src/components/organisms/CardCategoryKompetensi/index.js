import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { TextBody } from 'components/atoms';
import { ScoreSurvey, ContentCardSurvey } from 'components/molecules';

// style
import './styles.scss';

class CardCategoryKompetensi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataChart: [
        {
          subject: '1',
          A: 4,
          fullMark: 10
        },
        {
          subject: '2',
          A: 3,
          fullMark: 10
        },
        {
          subject: '3',
          A: 9,
          fullMark: 10
        },
        {
          subject: '4',
          A: 5,
          fullMark: 10
        },
        {
          subject: '5',
          A: 8,
          fullMark: 10
        },
        {
          subject: '6',
          A: 2,
          fullMark: 10
        },
        {
          subject: '7',
          A: 2,
          fullMark: 10
        },
        {
          subject: '8',
          A: 2,
          fullMark: 10
        },
        {
          subject: '9',
          A: 6,
          fullMark: 10
        },
        {
          subject: '10',
          A: 5,
          fullMark: 10
        },
        {
          subject: '11',
          A: 7,
          fullMark: 10
        },
        {
          subject: '12',
          A: 6,
          fullMark: 10
        }
      ]
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps() {
    this.handleDataChart();
  }

  handleDataChart = () => {};

  render() {
    const {
      state: { dataChart },
      props: { dataList, date, nameUmkm, score }
    } = this;

    const classNames = classname('o-card-category-kompetensi', {});
    const classContent = classname(
      'o-card-category-kompetensi__content-wrapper',
      {}
    );
    const classHeader = classname(
      'o-card-category-kompetensi__header-wrapper',
      {}
    );

    return (
      <div className={classNames}>
        <div className={classHeader}>
          <TextBody weight="bold" color="black">
            KATEGORI KOMPETENSI
          </TextBody>
          <TextBody
            weight="regular"
            color="black"
          >{`Berdasarkan hasil survey ${date}`}</TextBody>
          <ScoreSurvey nameUmkm={nameUmkm} score={score} />
        </div>
        <div className={classContent}>
          <ContentCardSurvey
            dataChart={dataChart}
            dataKriteria={dataList}
            dataKriteria2={dataList}
            infoChart
          />
          {/* {contentCard} */}
        </div>
      </div>
    );
  }
}

CardCategoryKompetensi.propTypes = {
  date: PropTypes.string,
  dataList: PropTypes.array,
  nameUmkm: PropTypes.string,
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CardCategoryKompetensi.defaultProps = {
  date: '',
  dataList: [],
  nameUmkm: '',
  score: ''
};

export default CardCategoryKompetensi;
