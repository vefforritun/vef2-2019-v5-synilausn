import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import Home from './routes/home/Home';
import Lecture from './routes/lecture/Lecture';
import NotFound from './routes/not-found/NotFound';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet defaultTitle="Fyrirlestrar" titleTemplate="%s – Fyrirlestrar" />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/:slug" component={Lecture} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
