import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class IconElement extends React.Component {
  shapeCategory() {
    switch(this.props.shapeCategory) {
      case 'general':
        return 'iconGeneral';
        break;
      case 'editor':
        return 'iconEditor';
        break;
      default:
        return 'iconFull';
        break;
    }
  }

  render() {
    const classes = classNames(
      'iconsList__element',
      this.shapeCategory(),
      `${this.shapeCategory()}--${this.props.iconShape}`
    );

    return (
      <li className={classes}>
        <span className="iconsList__name">{this.props.iconShape}</span>
      </li>
    );
  }
}

IconElement.propTypes = {
  shapeCategory: PropTypes.string.isRequired,
  iconShape: PropTypes.string.isRequired,
};

IconElement.defaultProps = {
  shapeCategory: 'full'
};