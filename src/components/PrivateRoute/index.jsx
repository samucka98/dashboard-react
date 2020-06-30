import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const section = useSelector(state => state.section);

  return (
    <Route {...rest}
      render={ props => 
        section ? (
          <Component { ...props } />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      }
      ></Route>
  );
}

export default PrivateRoute;