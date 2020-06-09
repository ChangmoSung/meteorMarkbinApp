import './main.html'
import React from 'react';
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import App from './components/app'
import BinsMain from './components/bins/binsMain'
import BinsList from './components/bins/binsList'
import { Bins } from '../imports/collections/bins'

const routes = (
  <Router>
    <App />

    <Switch>
      <Route path='/bins' component={BinsMain} />

      <Route path='/' component={BinsList} />
    </Switch>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'))
})