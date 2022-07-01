import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextBody } from 'components/atoms';
import IconChevron from 'assets/images/carret-down.png';
import classname from 'classnames';

// style
import './styles.scss';

class MenuAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusContent: ''
    };
  }

  componentDidMount() {
    const {
      props: { statusContent }
    } = this;

    this.setState({
      statusContent
    });
  }

  handelClickAccordion = () => {
    const {
      state: { statusContent }
    } = this;

    if (statusContent === 'is_active') {
      this.setState({
        statusContent: ''
      });
    } else {
      this.setState({
        statusContent: 'is_active'
      });
    }
  };

  render() {
    const {
      handelClickAccordion,
      props: { contentAccordion, date },
      state: { statusContent }
    } = this;
    const classNames = classname('o-menu-accordion', {});
    const classHeader = classname('o-menu-accordion__header-wrapper', {});
    const classIcon = classname('icon-wrapper', {});
    const classContent = classname('o-menu-accordion__content-wrapper', {
      is_active: statusContent === 'is_active'
    });
    return (
      <div className={classNames}>
        <div className={classHeader} onClick={handelClickAccordion}>
          <TextBody weight="regular" color="black">
            {date}
          </TextBody>
          <div className={classIcon}>
            <img className={statusContent} src={IconChevron} alt="icon" />
          </div>
        </div>
        {contentAccordion && (
          <div className={classContent}>{contentAccordion}</div>
        )}
      </div>
    );
  }
}

MenuAccordion.propTypes = {
  statusContent: PropTypes.string,
  contentAccordion: PropTypes.func,
  date: PropTypes.string
};

MenuAccordion.defaultProps = {
  statusContent: '',
  contentAccordion: () => {},
  date: ''
};

export default MenuAccordion;
