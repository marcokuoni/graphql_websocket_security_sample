import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {

  render() {
    return (
      <div className="authentication-type authentication-type-concrete active">
        <form
          method="post"
          action="https://vivaelfutbol.lemonbrain.ch/login/authenticate/concrete"
        >
          <div className="form-group">
            <label className="control-label" htmlFor="uName">
              Email Address
            </label>
            <input
              name="uName"
              id="uName"
              className="form-control"
              autoFocus="autofocus"
            />
          </div>

          <div className="form-group">
            <label className="control-label" htmlFor="uPassword">
              Password
            </label>
            <input
              name="uPassword"
              id="uPassword"
              className="form-control"
              type="password"
            />
          </div>

          <div className="checkbox">
            <label>
              <input type="checkbox" name="uMaintainLogin" value="1" />
              Stay signed in for two weeks
            </label>
          </div>

          <div className="form-group">
            <button className="btn btn-primary">Log in</button>
            <Link
              to="/login/concrete/forgot_password"
              className="btn float-right"
            >
              Forgot Password
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
