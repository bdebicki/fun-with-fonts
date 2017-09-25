import React from 'react';

import IconElement from '../components/iconElement';

import { ONE_ICONS } from './iconsList.js';

import '../../less/views/full-package.less';

export default class App extends React.Component {
  render() {
    return (
      <div className="reactWrapper">
        <h5 className="title">fun with icon fonts</h5>
        <h1 className="headline">one font file (general)</h1>
        <ul className="iconsList iconsList--fullPackage">
          {ONE_ICONS.map((item, index) => {
            return(
              <IconElement iconShape={item} key={index} />
            )
          })}
        </ul>
      </div>
    )
  }
}