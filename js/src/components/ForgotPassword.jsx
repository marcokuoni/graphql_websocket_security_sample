import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Loading from "./Loading";
// eslint-disable-next-line no-unused-vars
import log from "Log";

const FORGOT_PASSWORD = gql`
    mutation forgotPassword($username: String!, $currentLanguage: String!) {
        forgotPassword(username: $username, currentLanguage: $currentLanguage)
    }
`;

class ForgotPasswordForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uName: ""
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

        this.props.forgotPassword({
            variables: {
                username: this.state.uName,
                currentLanguage: "DE"
            }
        });
    }
    render() {
        const answer = this.props.answer;
        
        return (
            <div className="forgotPassword">
                {answer && answer.length === 0 && (
                    <div>
                        <h4>Anweisungen zum Zurücksetzen gesendet</h4>
                        <div className="ccm-message"></div>
                        <div className="help-block">
                            Wenn diese E-Mail-Adresse einem Konto zugeordnet
                            ist, wurde eine E-Mail mit Anweisungen zum
                            Zurücksetzen des Passwortes an diese Adresse
                            gesendet.{" "}
                        </div>
                        <a href="/" className="btn btn-block btn-primary">
                            Zurück{" "}
                        </a>
                    </div>
                )}
                {answer && answer.length > 0 && (
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
                        <h4>Forgot Your Password?</h4>
                        <div className="help-block">
                            Enter your email address below. We will send you
                            instructions to reset your password.
                        </div>
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
                        <button
                            name="resetPassword"
                            className="btn btn-primary btn-block"
                        >
                            Reset and Email Password
                        </button>
                    </form>
                )}
            </div>
        );
    }
}

ForgotPasswordForm.propTypes = {
    forgotPassword: PropTypes.func,
    location: PropTypes.object,
    answer: PropTypes.array
};

export default function ForgotPassword() {
    const [answer, setAnswer] = useState(null);
    const [forgotPassword, { loading, error }] = useMutation(FORGOT_PASSWORD, {
        onCompleted({ forgotPassword }) {
            setAnswer(forgotPassword);
        }
    });
    if (loading) return <Loading />;
    if (error) return <p>An error occurred</p>;

    return (
        <ForgotPasswordForm forgotPassword={forgotPassword} answer={answer} />
    );
}
