import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from '../store/store';
import PrivateRouter from '../components/PrivateRoute';

import Login from '../containers/Login';
import Dashboard from '../containers/Dashboard';
import { Provider } from 'react-redux';

const Routes = () => {
  return(
    <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default Routes;