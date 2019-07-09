import * as React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../App';
import TopicDetail from '../pages/TopicDetail';

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/topic/:id' component={TopicDetail} />
  </Router>
)