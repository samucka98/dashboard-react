import React from 'react';
import { BrowserRouter, Switch, Route, useRouteMatch } from 'react-router-dom';
import './styles.css';

import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';
import CadUser from '../../components/CadUser';
import ListUser from '../../components/ListUser';

const Dashboard = () => {

  let match = useRouteMatch();

  return(
    <div className="dashboard">
      <div className="dashboard__sideBar">
        <SideBar />
      </div>

      <div className="dashboard__content">
        <div className="dashboard__content-nav">
          <NavBar />
        </div>

        <div className="dashboard__content-main">
          <BrowserRouter>
            <Switch>
              <Route exact path={`${match.path}/cad`} render={CadUser} />
              <Route exact path={`${match.path}/list`} render={ListUser} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;