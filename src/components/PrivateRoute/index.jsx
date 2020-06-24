import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const login = useSelector(state => state);

  return (
    <Route {...rest}
      render={ props => 
        login ? (
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