import jwtDecode from "jwt-decode";

// eslint-disable-next-line no-unused-vars
import log from "Log";

const isTokenExpired = function(token) {
    if (
        token &&
        parseInt(jwtDecode(token).exp) - 15 >
            Math.round(new Date().getTime() / 1000)
    ) {
        return false;
    }

    return true;
};

const getUser = function(token) {
    if (token) {
        const user = jwtDecode(token).data.user;
        if (parseInt(user.uID) > 0) {
            const isLoggedInEvent = new CustomEvent("isloggedin", {
                detail: user
            });
            window.dispatchEvent(isLoggedInEvent);

            return user;
        }
    }
    return false;
};

export { getUser, isTokenExpired };
