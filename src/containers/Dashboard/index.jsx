import React from 'react';
import './styles.css';

import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';
import Main from '../../components/Main';

const Dashboard = () => {
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
          <Main />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;