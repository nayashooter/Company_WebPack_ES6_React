import React        from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
  // browserHistory
}                   from 'react-router';
import App          from '../containers/app/App.jsx';
import Home         from '../views/home/Home.jsx';
import Evaluate     from '../views/evaluate/Evaluate.jsx';
import Report       from '../views/report/Report.jsx';
import Admin        from '../views/admin/Admin.jsx';

export const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/evaluate" component={Evaluate} />
        <Route path="/report" component={Report} />
        <Route path="/admin" component={Admin} />
      </Route>
    </Router>
  );
};
