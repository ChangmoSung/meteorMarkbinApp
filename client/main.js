import './main.html'
import React from 'react';
import ReactDOM from 'react-dom'
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/header'
import BinsMain from './components/bins/binsMain'
import BinsList from './components/bins/binsList'

const routes = (
  <Router>
    <Header />

    <Switch>
      <Route path='/bins/:binId' component={BinsMain} />

      <Route path='/' component={BinsList} />
    </Switch>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'))
})