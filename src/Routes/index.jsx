import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../containers/Login';
import DashboardRoute from './DashboardRoute';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/dashboard" component={DashboardRoute} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;