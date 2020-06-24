import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../containers/Dashboard';

const DashboardRoute = () => {
  return(
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  );
}

export default DashboardRoute;