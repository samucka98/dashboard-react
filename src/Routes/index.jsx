import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;