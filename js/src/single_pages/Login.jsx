import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

import Loading from "../components/Loading";

import loadBackgroud from "../oldJquery/LoadBackground";

const LoadableForgotPassword = Loadable({
  loader: () => import("../components/ForgotPassword"),
  loading: Loading
});

const LoadableLogin = Loadable({
  loader: () => import("../components/Login"),
  loading: Loading
});

class Login extends React.Component {
  componentDidMount() {
    loadBackgroud();
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <div className="container">
          <div className="login-page row">
            <div className="col-sm-6 offset-sm-3">
              <h1>Sign In.</h1>
            </div>
            <div className="col-sm-6 offset-sm-3 login-form">
              <div className="row login-row">
                <div className="controls col-sm-12 col-xs-12">
                  <Switch>
                    <Route
                      path={`${match.path}/concrete/forgot_password`}
                      component={LoadableForgotPassword}
                    />
                    <Route exact path={match.path} component={LoadableLogin} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ccm-page-background-credit">
          <div className="ccm-page-background-privacy-notice float-left">
            Image served from concrete5.org.{" "}
            <a
              href="//www.concrete5.org/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Privacy Policy
            </a>
            .{" "}
          </div>
          <div className="ccm-page-background-photo-credit float-right">
            Photo Credit:{" "}
            <a href="http://www.flickr.com/photos/jurvetson/5276291364/">
              Steve Jurvetson
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  match: PropTypes.object
};

export default Login;
