import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  App,
  ErrorPage,
  Talks,
  Attendees,
} from 'pages';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/talks' component={Talks} />
        <Route exact path='/attendees' component={Attendees} />
        <Route exact path='/404' component={ErrorPage} />
        <Redirect to="/404" />
      </Switch>
    );
  }
}

export default Main;
