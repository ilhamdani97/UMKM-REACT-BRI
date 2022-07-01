import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import IconStar from 'assets/images/icon-star.png';
import { H3 } from 'components/atoms';
// Styles
import './styles.scss';

const ScoreSurvey = ({ className, nameUmkm, score }) => {
  const classNames = classname('o-score-survey', className, {});
  const classScore = classname('o-score-survey_score-wrapper', {});
  const scoreArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={classNames}>
      <H3 color="primary" weight="bold">
        {nameUmkm}
      </H3>
      <div className={classScore}>
        {scoreArray.map((val, index) => (
          <div className="score">
            {index < score && <img src={IconStar} alt={nameUmkm} />}
          </div>
        ))}
      </div>
    </div>
  );
};

ScoreSurvey.propTypes = {
  className: PropTypes.string,
  nameUmkm: PropTypes.string,
  score: PropTypes.string
};

ScoreSurvey.defaultProps = {
  className: '',
  nameUmkm: '',
  score: ''
};

export default ScoreSurvey;
