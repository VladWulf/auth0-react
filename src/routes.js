import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) =>
          {
            handleAuthentication(props)
            return <App auth={auth} {...props} />
          }}/>
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        </div>
      </Router>
  );
}
