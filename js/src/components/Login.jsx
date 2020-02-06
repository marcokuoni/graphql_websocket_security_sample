import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Loading from "./Loading";

import {UserContext} from 'Utils/UserContext';
import { getUser } from "Utils/Token";
import { globalNames } from "Utils/GetGlobals";
// eslint-disable-next-line no-unused-vars
import log from "Log";

const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            authToken
            error
        }
    }
`;

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uName: "",
            uPassword: "",
            uMaintainLogin: false,
            redirectToReferrer: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value =
            target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.login({
            variables: {
                username: this.state.uName,
                password: this.state.uPassword
            }
        });
    }

    render() {
        const error = this.props.error;

        return (
            <div className="authentication-type authentication-type-concrete active">
                {error && error !== "" && (
                    <div className="ccm-system-errors alert alert-danger alert-dismissable">
                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                        >
                            ×
                        </button>
                        <div>{error}</div>
                    </div>
                )}
                <form onSubmit={this.handleSubmit}>
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
    login: PropTypes.func,
    location: PropTypes.object,
    error: PropTypes.string
};

Login.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object
};

export default function Login({ location, history }) {
    const [user,setUser] = useContext(UserContext);

    const [errorAnswer, setError] = useState("");
    const [login, { loading, error }] = useMutation(LOGIN_USER, {
        onCompleted({ login }) {
            if (login && login.error && login.error !== "") {
                setError(login.error);
            } else if (login.authToken !== '') {
                localStorage.setItem(globalNames.authToken, login.authToken);
                log(getUser().uID);
                log(user.uID);
                if(!user || user.uID !== getUser().uID) {
                    setUser(getUser());
                }
                history.push("/me");
            }
        }
    });
    if (loading) return <Loading />;
    if (error) return <p>An error occurred</p>;

    return <LoginForm login={login} error={errorAnswer} location={location} />;
}
