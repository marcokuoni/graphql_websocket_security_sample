import jwtDecode from "jwt-decode";

import { globalNames } from "./GetGlobals";
// eslint-disable-next-line no-unused-vars
import log from "Log";

const isTokenExpired = function() {
    const token = localStorage.getItem(globalNames.authToken);
    if (
        token &&
        parseInt(jwtDecode(token).exp) - 15 >
            Math.round(new Date().getTime() / 1000)
    ) {
        return false;
    }

    return true;
};

const getUser = function() {
    const token = localStorage.getItem(globalNames.authToken);
    if (token) {
        const user = jwtDecode(token).data.user;
        if (parseInt(user.uID) > 0) {
            return user;
        }
    }
    return false;
};

export { getUser, isTokenExpired };
