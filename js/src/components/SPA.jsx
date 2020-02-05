import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import fetch from "unfetch";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";

import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { ApolloLink, Observable } from "apollo-link";
import { RetryLink } from "apollo-link-retry";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";

import Loadable from "react-loadable";
import Loading from "./Loading";

import PrivateRoute from "./PrivateRoute";

import configMap from "Utils/GetGlobals";
import {
    getToken,
    getIsLoggedIn,
    setIsLoggedIn,
    setLoggedOut,
    isTokenExpired
} from "Utils/Token";
import MakeError from "Utils/MakeError";
// eslint-disable-next-line no-unused-vars
import log from "Log";

function Index() {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>Home</h2>
            <Link to="/me">Me</Link>
        </div>
    );
}

const refreshTokenFetch = () =>
    fetch(
        (configMap.secureProtocol ? "https://" : "http://") +
            configMap.refreshTokenUrl,
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

const logoutFetch = () =>
    fetch(
        (configMap.secureProtocol ? "https://" : "http://") +
            configMap.logoutUrl,
        {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${getToken()}`
            }
        }
    );

const refreshToken = async function() {
    try {
        const response = await refreshTokenFetch();
        const answer = await response.json();

        if (!answer.authToken || !setIsLoggedIn(answer.authToken)) {
            const response = await logoutFetch();
            const answer = await response.json();

            if (!answer.error || answer.error !== "") {
                setIsLoggedIn(answer.authToken);
            }
        }
    } catch (error) {
        // full control over handling token fetch Error
        MakeError("Your refresh token is invalid. Try to relogin", error);

        // your custom action here
        setLoggedOut();

        document.location.reload(true);
        window.location = "/";
    }
};

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
        (configMap.secureProtocol ? "https://" : "http://") +
        configMap.graphqlUrl
});

const request = async operation => {
    if (isTokenExpired()) {
        await refreshToken();
    }
    operation.setContext({
        headers: { Authorization: "Bearer " + getToken() }
    });
};

const cache = new InMemoryCache(); //.restore(window.__APOLLO_STATE__);

const client = new ApolloClient({
    link: ApolloLink.from([
        new RetryLink({
            delay: {
                initial: 300,
                max: Infinity,
                jitter: true
            },
            attempts: {
                max: 5,
                retryIf: error => log("retry") && !!error
            }
        }),
        onError(
            ({
                graphQLErrors,
                networkError,
                operation,
                forward,
                response
            }) => {
                let hasTokenInvalid = true;
                if (graphQLErrors) {
                    graphQLErrors.forEach(async (error, index) => {
                        hasTokenInvalid &= !error.debugMessage;
                        log(hasTokenInvalid);
                    });
                }

                if (hasTokenInvalid) {
                    return new Observable(async observer => {
                        if (graphQLErrors) {
                            graphQLErrors.forEach(
                                async (message, index) => {
                                    log(
                                        `[GraphQL error]: Message: ${message}`
                                    );
                                    await refreshToken();
                                }
                            );

                            return observer.next(response);
                        }
                        if (networkError) {
                            log(`[Network error]: ${networkError}`);
                            log(networkError);
                        }
                    });
                }
            }
        ),
        new ApolloLink(
            (operation, forward) =>
                new Observable(observer => {
                    let handle;
                    Promise.resolve(operation)
                        .then(oper => request(oper))
                        .then(() => {
                            handle = forward(operation).subscribe({
                                next: observer.next.bind(observer),
                                error: observer.error.bind(observer),
                                complete: observer.complete.bind(observer)
                            });
                        })
                        .catch(observer.error.bind(observer));

                    return () => {
                        if (handle) handle.unsubscribe();
                    };
                })
        ),
        httpLink
    ]),
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
