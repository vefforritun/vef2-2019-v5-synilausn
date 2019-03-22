import React, { Component } from 'react';

import { getLectureList } from '../../api';

import Header from '../../components/header/Header';
import Filters from '../../components/filters/Filters';
import Lectures from '../../components/lectures/Lectures';

export default class Home extends Component {

  state = {
    lectures: getLectureList(),
  }

  onFilter = (filters) => {
    this.setState({ lectures: getLectureList(filters) });
  }

  render() {
    const { lectures } = this.state;

    return (
      <React.Fragment>
        <Header category="Vefforritun" title="Fyrirlestrar" />
        <Filters onFilter={this.onFilter} />
        <Lectures lectures={lectures} />
      </React.Fragment>
    );
  }
}
