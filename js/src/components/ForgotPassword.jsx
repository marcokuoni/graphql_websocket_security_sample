import React from "react";

class ForgotPassword extends React.Component {
  render() {
    return (
      <div className="forgotPassword">
        <form method="post" action="">
          <h4>Forgot Your Password?</h4>
          <div className="help-block">
            Enter your email address below. We will send you instructions to
            reset your password.
          </div>
          <div className="form-group">
            <label className="control-label" htmlFor="uEmail">
              Email Address
            </label>
            <input
              name="uEmail"
              type="email"
              id="uEmail"
              className="form-control"
            />
          </div>
          <button name="resetPassword" className="btn btn-primary btn-block">
            Reset and Email Password
          </button>
        </form>
      </div>
    );
  }
}
export default ForgotPassword;
