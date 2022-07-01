import React from 'react';
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import { Links, KriteriaScoreSurvey } from 'components/atoms';
// style
import './styles.scss';

const ContentCardSurvey = ({
  dataChart,
  dataKriteria,
  dataKriteria2,
  infoChart
}) => {
  return (
    <div className="">
      <div className="row">
        <div className="col-md-4">
          <RadarChart
            cx={window.innerWidth > 768 ? 175 : 140}
            cy={174}
            outerRadius={window.innerWidth > 768 ? 150 : 120}
            width={window.innerWidth > 768 ? 500 : 320}
            height={window.innerWidth > 768 ? 340 : 360}
            data={dataChart}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#0CB751"
              fill="rgba(12, 183, 81, 0.2)"
              fillOpacity={1}
            />
          </RadarChart>
        </div>
        <div className="col-md-4">
          {dataKriteria.map((value, index) =>
            index < 6 ? (
              <KriteriaScoreSurvey
                key={index}
                nameList={index + 1}
                nameKriteria={value.group}
                kriteriaScore={value.score}
              />
            ) : (
              false
            )
          )}
        </div>
        <div className="col-md-4">
          {dataKriteria2.map((value, index) =>
            index > 5 ? (
              <KriteriaScoreSurvey
                key={index}
                nameList={index + 1}
                nameKriteria={value.group}
                kriteriaScore={value.score}
              />
            ) : (
              false
            )
          )}
        </div>
      </div>

      <div className="info-chart-wrapper">
        {infoChart && (
          <>
            <KriteriaScoreSurvey
              chartInfoNew
              nameInfoCart="Hasil survey terbaru"
            />
            <KriteriaScoreSurvey
              chartInfoLates
              nameInfoCart="Hasil survey sebelumnya"
            />
          </>
        )}

        <Links
          underline
          className=""
          to="/forgot-pin"
          variant="links-additional-info bold"
          color="orange"
          tabIndex="-1"
          type="link"
        >
          UNDUH SERTIFIKAT
        </Links>
      </div>
    </div>
  );
};

ContentCardSurvey.propTypes = {
  dataChart: PropTypes.array,
  dataKriteria: PropTypes.array,
  dataKriteria2: PropTypes.array,
  infoChart: PropTypes.bool
};

ContentCardSurvey.defaultProps = {
  dataChart: [{}],
  dataKriteria: [{}],
  dataKriteria2: [{}],
  infoChart: false
};

export default ContentCardSurvey;
