import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../../less/components/iconsList.less'

export default class IconElement extends React.Component {
  render() {
    const classes = classNames(
      'iconsList__element',
      this.props.iconShape
    );

    return (
      <li className={classes}>
        <span className="iconsList__name">{this.props.name}</span>
      </li>
    );
  }
}

IconElement.propTypes = {
  iconShape: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};