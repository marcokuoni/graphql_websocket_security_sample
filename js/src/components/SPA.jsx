import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import ApolloClient from "apollo-client";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { ApolloProvider } from "react-apollo";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";

import Loadable from "react-loadable";
import Loading from "./Loading";

import configMap from "Utils/GetGlobals";
// eslint-disable-next-line no-unused-vars
import log from "Log";

function Index() {
  return <h2>Home</h2>;
}

const LoadableLogin = Loadable({
  loader: () => import("../single_pages/Login"),
  loading: Loading
});

const httpLink = new HttpLink({
  uri:
    (configMap.secureProtocol ? "https://" : "http://") + configMap.graphqlUrl
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

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

class SPA extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router hashType="hashbang">
          <div>
            <Route path="/" exact component={Index} />
            <Route path="/login" component={LoadableLogin} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}
export default SPA;
