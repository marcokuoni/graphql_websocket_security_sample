import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Loading from "./Loading";
// eslint-disable-next-line no-unused-vars
import log from "Log";

const CHANGE_PASSWORD = gql`
    mutation changePassword(
        $password: String!
        $passwordConfirm: String!
        $token: String!
    ) {
        changePassword(
            password: $password
            passwordConfirm: $passwordConfirm
            token: $token
        )
    }
`;

class ChangePasswordForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            passwordConfirm: "",
            token: ""
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
        const { match } = this.props;

        this.props.changePassword({
            variables: {
                password: this.state.password,
                passwordConfirm: this.state.passwordConfirm,
                token: match.params.token
            }
        });
    }
    render() {
        const answer = this.props.answer;

        if (answer === "") {
            this.props.history.push("/login");
        }

        return (
            <div className="forgotPassword">
                {answer && answer !== "" && (
                    <div className="ccm-system-errors alert alert-danger alert-dismissable">
                        <button
                            type="button"
                            className="close"
                            data-dismiss="alert"
                        >
                            ×
                        </button>
                        <div>{answer}</div>
                    </div>
                )}
                {answer === null && (
                    <form onSubmit={this.handleSubmit}>
                        <h4>Reset Password</h4>
                        <div className="help-block">
                            Enter your new password below.
                        </div>
                        <div className="change-password">
                            <div className="form-group">
                                <label
                                    className="control-label"
                                    htmlFor="uPassword"
                                >
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    autoFocus="autofocus"
                                    autoComplete="off"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    className="control-label"
                                    htmlFor="uPassword"
                                >
                                    Confirm New Password
                                </label>
                                <input
                                    type="password"
                                    name="passwordConfirm"
                                    id="passwordConfirm"
                                    className="form-control"
                                    autoComplete="off"
                                    value={this.state.passwordConfirm}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary">
                                    Change password and sign in
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        );
    }
}

ChangePasswordForm.propTypes = {
    changePassword: PropTypes.func,
    location: PropTypes.object,
    answer: PropTypes.string,
    match: PropTypes.object,
    history: PropTypes.object
};

export default function ChangePassword({ match, history }) {
    const [answer, setAnswer] = useState(null);
    const [changePassword, { loading, error }] = useMutation(CHANGE_PASSWORD, {
        onCompleted({ changePassword }) {
            setAnswer(changePassword);
        }
    });
    if (loading) return <Loading />;
    if (error) return <p>An error occurred</p>;

    return (
        <ChangePasswordForm
            changePassword={changePassword}
            answer={answer}
            match={match}
            history={history}
        />
    );
}
