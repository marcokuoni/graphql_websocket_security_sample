import React from "react";
import {
  Link,
  withRouter
} from "react-router-dom";

import { getIsLoggedIn } from "Utils/Token";

const AuthButton = withRouter(
    ({ history }) =>
    getIsLoggedIn() ? (
        <p>
          Welcome!{" "}
          <button
            onClick={() => {
              //Call logout on graphql
              //clear local storage
              history.push("/");
            }}
          >
            Sign out
          </button>
        </p>
      ) : (
        <Link to="/login">Login</Link>
      )
  );

  export default AuthButton;