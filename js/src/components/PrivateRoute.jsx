import React from "react";
import PropTypes from "prop-types";
import {
  Route,
  Redirect,
} from "react-router-dom";

import { getIsLoggedIn } from "Utils/Token";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        getIsLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
    component: PropTypes.object,
    location: PropTypes.string,
};

export default PrivateRoute;
