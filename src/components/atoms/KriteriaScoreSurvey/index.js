import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import TextBody from '../TextBody';
// Styles
import './styles.scss';

const KriteriaScoreSurvey = ({
  className,
  kriteriaScore,
  nameKriteria,
  nameList,
  chartInfoNew,
  chartInfoLates,
  nameInfoCart
}) => {
  const classNames = classname('o-kriteria-survey', className, {});
  const classkriteriaList = classname('o-kriteria-survey__list-wrapper', {});
  const classChartInfoNew = classname(
    'o-kriteria-survey__chart-info-list-new',
    {}
  );
  const classChartInfoLates = classname(
    'o-kriteria-survey__chart-info-list-lates',
    {}
  );
  const classkriteriaScore = classname('o-kriteria-survey__kriteria_score');
  return (
    <div className={classNames}>
      {chartInfoNew ? (
        <>
          <div className={classChartInfoNew} />
          <TextBody color="black" weight="regular">
            {nameInfoCart}
          </TextBody>
        </>
      ) : chartInfoLates ? (
        <>
          <div className={classChartInfoLates} />
          <TextBody color="black" weight="regular">
            {nameInfoCart}
          </TextBody>
        </>
      ) : (
        <>
          <div className={classkriteriaList}>
            <TextBody color="black" weight="regular">
              {nameList}
            </TextBody>
          </div>
          <TextBody color="black" weight="regular">
            {nameKriteria}
          </TextBody>

          <div className={classkriteriaScore}>
            <TextBody
              color={
                kriteriaScore < 3
                  ? 'error'
                  : kriteriaScore > 7
                  ? 'success'
                  : 'black'
              }
              weight={
                kriteriaScore < 3
                  ? 'bold'
                  : kriteriaScore > 7
                  ? 'bold'
                  : 'regular'
              }
            >{`${kriteriaScore} / 10`}</TextBody>
          </div>
        </>
      )}
    </div>
  );
};

KriteriaScoreSurvey.propTypes = {
  className: PropTypes.string,
  kriteriaScore: PropTypes.string,
  nameKriteria: PropTypes.string,
  nameList: PropTypes.string,
  chartInfoNew: PropTypes.bool,
  chartInfoLates: PropTypes.bool,
  nameInfoCart: PropTypes.string
};

KriteriaScoreSurvey.defaultProps = {
  className: '',
  kriteriaScore: '',
  nameKriteria: '',
  nameList: '',
  chartInfoNew: false,
  chartInfoLates: false,
  nameInfoCart: ''
};

export default KriteriaScoreSurvey;
