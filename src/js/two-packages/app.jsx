import React from 'react';

import IconElement from '../components/iconElement';

import { GENERAL_ICONS, EDITOR_ICONS } from '../common/iconsList.js';

import '../../less/views/two-packages.less';

export default class App extends React.Component {
  render() {
    return (
      <div className="reactWrapper">
        <h5 className="title">fun with icon fonts</h5>
        <h1 className="headline">two font files (general, editor)</h1>
        <ul className="iconsList">
          {GENERAL_ICONS.map((item, index) => {
            return(
              <IconElement iconShape={item} shapeCategory='general' key={index} />
            )
          })}
        </ul>
        <ul className="iconsList">
          {EDITOR_ICONS.map((item, index) => {
            return(
              <IconElement iconShape={item} shapeCategory='editor' key={index} />
            )
          })}
        </ul>
      </div>
    )
  }
}