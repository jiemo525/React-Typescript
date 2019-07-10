import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../App';
import TopicDetail from '../pages/TopicDetail';
import User from '../pages/User';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/topic/:id' component={TopicDetail} />
    <Route path='/user/:name' component={User} />
  </Router>
)