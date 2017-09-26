import React from 'react';

import IconElement from '../components/iconElement';

import { GENERAL_ICONS } from '../common/iconsList.js';

import '../../less/views/one-package.less';

export default class App extends React.Component {
  render() {
    return (
      <div className="reactWrapper">
        <h5 className="title">fun with icon fonts</h5>
        <h1 className="headline">one font file (general)</h1>
        <ul className="iconsList">
          {GENERAL_ICONS.map((item, index) => {
            return(
              <IconElement iconShape={item} shapeCategory='general' key={index} />
            )
          })}
        </ul>
        <a href="two-packages.html">go to editor silulation</a>
      </div>
    )
  }
}