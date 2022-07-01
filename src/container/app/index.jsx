import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Login, RegisterNasabah, LupaPin, Error404 } from 'container/pages';
import AppRoutes from 'config/routes';

function App() {
  return (
    <Router>
      <Switch>
        {AppRoutes.map((route) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Route key={route.id} {...route} />
        ))}

        <Route key={1} path="/" component={Login} exact />
        <Route
          key={2}
          path="/register-nasabah"
          component={RegisterNasabah}
          exact
        />
        <Route key={4} path="/forgot-pin" component={LupaPin} exact />
        <Route key={9} path="/error-404" component={Error404} exact />
        <Redirect from="/dashboard" to="/home" />
        <Redirect from="/design-system" to="/design-system/introduction" />
        <Redirect from="*" to="/error-404" />
      </Switch>
    </Router>
  );
}

export default App;
