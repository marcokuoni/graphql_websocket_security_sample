import jwtDecode from "jwt-decode";

import { constants } from "Utils/GetGlobals";
import log from "Log";

const getToken = function() {
  const currentToken = localStorage.getItem(constants.authToken);

  if (currentToken && jwtDecode(currentToken).exp < Date.now() / 1000) {
    log("refresh");
    const currentRefreshToken = localStorage.getItem(constants.refreshToken);
    localStorage.clear();
    //refreshToken(currentRefreshToken)
  }

  return currentToken;
};

const getIsLoggedIn = function() {
  const currentToken = localStorage.getItem(constants.authToken);

  if (currentToken && jwtDecode(currentToken).exp >= Date.now() / 1000) {
      log(jwtDecode(localStorage.getItem(constants.authToken)));
    if (
      parseInt(
        jwtDecode(localStorage.getItem(constants.authToken)).data.user.uID
      ) > 0 && jwtDecode(localStorage.getItem(constants.authToken)).data.user.anonymus !== true
    ) {
      return true;
    }
  }

  return false;
};

export { getToken, getIsLoggedIn };
