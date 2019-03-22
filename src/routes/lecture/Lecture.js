import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import { getLecture, toggleLectureFinish } from '../../api';

import NotFound from '../not-found/NotFound';

import Header from '../../components/header/Header';
import Lecture from '../../components/lecture/Lecture';

export default class LectureRoute extends Component {

  state = {
    lecture: getLecture(this.props.match.params.slug)
  }

  toggleFinished = (slug) => (e) => {
    toggleLectureFinish(slug);

    this.setState({ lecture: getLecture(this.props.match.params.slug) });
  }

  render() {
    const { lecture } = this.state;

    if (!lecture) {
      return (
        <Route component={NotFound} />
      )
    }

    const { slug, category, title, image, content, finished } = lecture;

    return (
      <React.Fragment>
        <Helmet title={title} />
        <Header category={category} title={title} image={image} />
        <Lecture
          content={content}
          toggleFinished={this.toggleFinished(slug)}
          finished={finished}
        />
      </React.Fragment>
    );
  }
}
