import React, { useState, useContext } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import fetch from "unfetch";

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
import { getUser, isTokenExpired } from "Utils/Token";
import MakeError from "Utils/MakeError";
import { UserContext, UserProvider } from "Utils/UserContext";
import { globalNames } from "Utils/GetGlobals";
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

const LoadableLogin = Loadable({
    loader: () => import("../single_pages/Login"),
    loading: Loading
});

const LoadableMe = Loadable({
    loader: () => import("../single_pages/Me"),
    loading: Loading
});

function SPAInner() {
    const [user, setUser] = useContext(UserContext);

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
                    authorization: `Bearer ${localStorage.getItem(
                        globalNames.authToken
                    )}`
                }
            }
        );

    const refreshToken = async function() {
        try {
            const response = await refreshTokenFetch();
            const answer = await response.json();

            if (!answer.authToken && getUser() !== false) {
                const response = await logoutFetch();
                const answer = await response.json();

                if (!answer.error || answer.error !== "") {
                    localStorage.setItem(
                        globalNames.authToken,
                        answer.authToken
                    );
                    if(!user || user.uID !== getUser().uID) {
                        setUser(getUser());
                    }
                }
            } else {
                localStorage.setItem(globalNames.authToken, answer.authToken);
                if(!user || user.uID !== getUser().uID) {
                    setUser(getUser());
                }
            }
        } catch (error) {
            // full control over handling token fetch Error
            MakeError("Your refresh token is invalid. Try to relogin", error);

            // your custom action here
            setUser({});
            localStorage.setItem(globalNames.authToken, {});

            document.location.reload(true);
            window.location = "/";
        }
    };

    const request = async operation => {
        if (isTokenExpired()) {
            await refreshToken();
        }
        operation.setContext({
            headers: {
                Authorization:
                    "Bearer " + localStorage.getItem(globalNames.authToken)
            }
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
            onError(({ graphQLErrors, networkError, response }) => {
                let hasTokenInvalid = true;
                if (graphQLErrors) {
                    graphQLErrors.forEach(async error => {
                        hasTokenInvalid &= !error.debugMessage;
                        log(hasTokenInvalid);
                    });
                }

                if (hasTokenInvalid) {
                    return new Observable(async observer => {
                        if (graphQLErrors) {
                            graphQLErrors.forEach(async message => {
                                log(`[GraphQL error]: Message: ${message}`);
                                await refreshToken();
                            });

                            return observer.next(response);
                        }
                        if (networkError) {
                            log(`[Network error]: ${networkError}`);
                            log(networkError);
                        }
                    });
                }
            }),
            new ApolloLink(
                (operation, forward) =>
                    new Observable(observer => {
                        let handle;
                        Promise.resolve(operation)
                            .then(operation => request(operation))
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
            new HttpLink({
                uri:
                    (configMap.secureProtocol ? "https://" : "http://") +
                    configMap.graphqlUrl,
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem(globalNames.authToken)
                },
                fetch
            })
        ]),
        cache: cache
    });

    cache.writeData({
        data: {
            isLoggedIn: getUser() !== false
        }
    });

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

function SPA() {
    return (
        <UserProvider>
            <SPAInner />
        </UserProvider>
    );
}

export default SPA;
