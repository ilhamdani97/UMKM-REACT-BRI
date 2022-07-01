import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, TextBody } from 'components/atoms';
import classname from 'classnames';

// style
import './styles.scss';

class CardSimpleButton extends Component {
  render() {
    const {
      props: { date, titleCard, titleButton, statusButton, actionButton }
    } = this;

    const classNames = classname('o-card-simple-button', {});

    return (
      <div className={classNames}>
        <div className="o-card-simple-button_wrapper">
          <div className="title-card-wrapper">
            <TextBody color="black" weight="regular">
              {titleCard}
            </TextBody>
          </div>
          <div className="date-wrapper">
            <TextBody color="primary" weight="bold">
              {date}
            </TextBody>
          </div>
          {titleButton && (
            <div className="a-button-wrapper">
              <Button variant={statusButton} onClick={actionButton}>
                {titleButton}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

CardSimpleButton.propTypes = {
  date: PropTypes.string,
  titleCard: PropTypes.string,
  titleButton: PropTypes.string,
  statusButton: PropTypes.string,
  actionButton: PropTypes.func
};

CardSimpleButton.defaultProps = {
  date: '',
  titleCard: '',
  titleButton: '',
  statusButton: '',
  actionButton: () => {}
};

export default CardSimpleButton;
