import React, { useState } from "react";
import PropTypes from "prop-types";

import configMap from "Utils/GetGlobals";

const UserContext = React.createContext([{}, () => {}]);

const UserProvider = props => {
    const [user, setUser] = useState({ token: configMap.anonymusToken });
    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.object
};

export { UserContext, UserProvider };
