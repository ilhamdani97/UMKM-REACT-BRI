import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Links, StepperFormVertikal } from 'components/atoms';
import classname from 'classnames';

// style
import './styles.scss';

class CardFormSurvey extends Component {
  render() {
    const {
      props: { mSideBar, contentCard, sidebarCard }
    } = this;

    const classNames = classname('o-card-form-vertikal', {});
    return (
      <div className={classNames}>
        <div className="o-card-form-vertikal__sidebar gray">
          <div className="o-card-form-vertikal__sidebar__text-content-sidebar--d">
            {sidebarCard.map((data, index) => (
              <div>
                <StepperFormVertikal
                  key={index}
                  status={data.status}
                  value={data.value}
                  text={data.text}
                  onClick={data.onClick}
                />
                {data.withLine ? <div className="line-v" /> : ''}
              </div>
            ))}
          </div>
          <div className="o-card-form-vertikal__sidebar__text-content-sidebar--m">
            <div className="text-left-page">1 dari 13</div>
            <div className="title-left">
              {sidebarCard.map((data, index) => (
                <div>
                  <StepperFormVertikal
                    key={index}
                    status={data.status}
                    value={data.value}
                    text={data.text}
                    onClick={data.onClick}
                  />
                  {data.withLine ? <div className="line-v" /> : ''}
                </div>
              ))}
            </div>
            <div className="title-right">
              <Links
                underline
                className=""
                to={mSideBar}
                variant="links-additional-info"
                color="orange"
                tabIndex="-1"
                type="link"
              >
                LIHAT SEMUA
              </Links>
            </div>
          </div>
        </div>
        <div className="o-card-form-vertikal__content">{contentCard}</div>
      </div>
    );
  }
}

CardFormSurvey.propTypes = {
  mSideBar: PropTypes.func,
  contentCard: PropTypes.func,
  sidebarCard: PropTypes.array
};

CardFormSurvey.defaultProps = {
  mSideBar: () => {},
  contentCard: () => {},
  sidebarCard: [{}]
};

export default CardFormSurvey;
