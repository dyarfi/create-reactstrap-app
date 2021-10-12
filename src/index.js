import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import App from './App';
import Dashboard from './Dashboard';
import Documentation from './Documentation';
import Typography from './Typography';
import Buttons from './Buttons';
import Posts from './Posts';
import Employee from './Employee';
import Tables from './Tables';
import Page404 from './Page404';

import * as serviceWorker from './serviceWorker';

const routing = (
  <Suspense
    fallback={
      <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
        <div className="w-50 mx-auto">
          Please wait while we load the live preview examples
        </div>
      </div>
    }
  >
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/pages/dashboard" component={Dashboard} />
        <Route path="/pages/documentation" component={Documentation} />
        <Route path="/pages/typography" component={Typography} />
        <Route path="/pages/buttons" component={Buttons} />
        <Route path="/pages/posts" component={Posts} />
        <Route path="/pages/employees" component={Employee} />
        <Route path="/pages/tables" component={Tables} />
        <Route component={Page404} />
      </Switch>
    </Router>
  </Suspense>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
