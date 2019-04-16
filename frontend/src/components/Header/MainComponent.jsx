import * as React from 'react';
import * as Styles from './HeaderStyles';

export class Header extends React.Component {
  render() {
    return (
      <div style={Styles.block} >
        <div style={Styles.logo} >
          Header Block
        </div>
      </div>
    );
  }
}