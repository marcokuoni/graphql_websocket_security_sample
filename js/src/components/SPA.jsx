import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import ApolloClient from "apollo-client";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";

import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";

import Loadable from "react-loadable";
import Loading from "./Loading";

import PrivateRoute from "./PrivateRoute";

import configMap, { constants } from "Utils/GetGlobals";
import { getToken, getIsLoggedIn } from "Utils/Token";
// eslint-disable-next-line no-unused-vars
import log from "Log";

function Index() {
  return (
    <div>
      <h2>Home</h2>
            <Link to="/me">Me</Link>
    </div>
  );
}

localStorage.setItem(
  constants.authToken,
  JSON.parse(configMap.anonymusTokens).authToken
);
localStorage.setItem(
  constants.refreshToken,
  JSON.parse(configMap.anonymusTokens).refreshToken
);

const LoadableLogin = Loadable({
  loader: () => import("../single_pages/Login"),
  loading: Loading
});

const LoadableMe = Loadable({
  loader: () => import("../single_pages/Me"),
  loading: Loading
});

const httpLink = new HttpLink({
  uri:
    (configMap.secureProtocol ? "https://" : "http://") + configMap.graphqlUrl,
  headers: { authorization: "Bearer " + getToken() }
});

//https://www.apollographql.com/docs/tutorial/mutations/
// const wsLink = new WebSocketLink({
//   uri: (configMap.secureProtocol ? "wss://" : "ws:/") + configMap.websocketUrl,
//   options: {
//     reconnect: true
//   }
// });

// const link = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === "OperationDefinition" &&
//       definition.operation === "subscription"
//     );
//   },
//   wsLink,
//   httpLink
// );

const cache = new InMemoryCache(); //.restore(window.__APOLLO_STATE__);

const client = new ApolloClient({
  link: httpLink,
  cache: cache
});

cache.writeData({
  data: {
    isLoggedIn: getIsLoggedIn()
  }
});

class SPA extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router hashType="hashbang">
            <div>
              <Route path="/" exact component={Index} />
              <Route path="/login" component={LoadableLogin} />
              <PrivateRoute path="/me" component={LoadableMe} />
            </div>
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}
export default SPA;
