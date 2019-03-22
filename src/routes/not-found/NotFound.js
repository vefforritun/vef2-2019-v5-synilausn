import React, { Component } from 'react';

import Header from '../../components/header/Header';

export default class NotFound extends Component {

  render() {
    return (
      <React.Fragment>
        <Header category="Vefforritun" title="Fannst ekki!" />
      </React.Fragment>
    );
  }
}
