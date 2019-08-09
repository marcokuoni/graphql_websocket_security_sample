import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Loading from "./Loading";

import log from "Log";

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uName: "",
      uPassword: "",
      uMaintainLogin: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSignInSubmit(event) {
    event.preventDefault();

    this.props.login(this.state.uName, this.state.uPassword);
  }

  render() {
    return (
      <div className="authentication-type authentication-type-concrete active">
        <form onSubmit={this.handleSignInSubmit}>
          <div className="form-group">
            <label className="control-label" htmlFor="uName">
              Email Address
            </label>
            <input
              name="uName"
              id="uName"
              className="form-control"
              autoFocus="autofocus"
              value={this.state.uName}
              onChange={this.handleInputChange}
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
              value={this.state.uPassword}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="uMaintainLogin"
                value="1"
                checked={this.state.uMaintainLogin}
                onChange={this.handleInputChange}
              />
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

LoginForm.propTypes = {
  login: PropTypes.func
};

export default function Login() {
  const client = useApolloClient();
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      log(login);
      localStorage.setItem("token", login);
      //set also current user and refreshToken
      client.writeData({ data: { isLoggedIn: true } });
    }
  });
log(error);
  if (loading) return <Loading />;
  if (error) return <p>An error occurred</p>;

  return <LoginForm login={login} />;
}
