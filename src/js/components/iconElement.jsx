import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class IconElement extends React.Component {
  render() {
    const classes = classNames(
      'iconsList__element',
      `iconFull--${this.props.iconShape}`
    );

    return (
      <li className={classes}>
        <span className="iconsList__name">{this.props.iconShape}</span>
      </li>
    );
  }
}

IconElement.propTypes = {
  iconShape: PropTypes.string.isRequired,
};