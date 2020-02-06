import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import {UserContext} from 'Utils/UserContext';
// eslint-disable-next-line no-unused-vars
import log from "Log";
import { getUser } from "../utils/Token";

function PrivateRoute({ component: Component, ...rest }) {
    const [user] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={props =>
                getUser(user.token) ? (
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
    component: PropTypes.func,
    location: PropTypes.string
};

export default PrivateRoute;
