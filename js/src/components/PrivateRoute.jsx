import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { getIsLoggedIn } from "Utils/Token";
// eslint-disable-next-line no-unused-vars
import log from "Log";

function PrivateRoute({ component: Component, ...rest }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        function handleIsLoggedInChange(e) {
            setIsLoggedIn(e.detail && parseInt(e.detail.uID) > 0);
        }
        window.addEventListener("isloggedin", handleIsLoggedInChange);
        return () => {
            window.removeEventListener("isloggedin", handleIsLoggedInChange);
        };
    });
    const isLoggedInInput = isLoggedIn || getIsLoggedIn();
    //TODO: creates a lot of rerenders
    return (
        <Route
            {...rest}
            render={props =>
                isLoggedInInput ? (
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
