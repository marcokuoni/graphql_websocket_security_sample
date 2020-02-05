import jwtDecode from "jwt-decode";

import configMap from "./GetGlobals";
// eslint-disable-next-line no-unused-vars
import log from "Log";

let authToken = null;

const initToken = function() {
  authToken = configMap.anonymusToken;
};

const isTokenExpired = function() {
  const currentToken = authToken;

  if (
    currentToken &&
    parseInt(jwtDecode(currentToken).exp) - 15 > Math.round(new Date().getTime() / 1000)
  ) {
    return false;
  }

  return true;
};

const getToken = function() {
  return authToken;
};

const setIsLoggedIn = function(authTokenInput) {
  if (authTokenInput) {
    authToken = authTokenInput;
  }
  return getIsLoggedIn();
};

const setLoggedOut = function() {
  authToken = '';
  return getIsLoggedIn();
};

const getIsLoggedIn = function() {
  const currentToken = authToken;

  if (currentToken) {
    const user = jwtDecode(currentToken).data.user;
    if (parseInt(user.uID) > 0) {
      const isLoggedInEvent = new CustomEvent("isloggedin", {
        detail: user
      });
      window.dispatchEvent(isLoggedInEvent);

      return user;
    }
  }

  const isLoggedInEvent = new CustomEvent("isloggedin", {
    detail: {
      isLoggedIn: false
    }
  });
  window.dispatchEvent(isLoggedInEvent);
  return false;
};

export {
  initToken,
  getToken,
  getIsLoggedIn,
  setIsLoggedIn,
  setLoggedOut,
  isTokenExpired
};
