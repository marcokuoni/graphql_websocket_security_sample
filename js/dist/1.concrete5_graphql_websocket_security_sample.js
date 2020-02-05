(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./js/src/components/PrivateRoute.jsx":
/*!********************************************!*\
  !*** ./js/src/components/PrivateRoute.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var Utils_Token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Utils/Token */ "./js/src/utils/Token.jsx");
/* harmony import */ var Log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Log */ "./js/src/utils/Log.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // eslint-disable-next-line no-unused-vars



function PrivateRoute(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ["component"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoggedIn = _useState2[0],
      setIsLoggedIn = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function handleIsLoggedInChange(e) {
      setIsLoggedIn(e.detail && parseInt(e.detail.uID) > 0);
    }

    window.addEventListener("isloggedin", handleIsLoggedInChange);
    return function () {
      window.removeEventListener("isloggedin", handleIsLoggedInChange);
    };
  });
  var isLoggedInInput = isLoggedIn || Object(Utils_Token__WEBPACK_IMPORTED_MODULE_3__["getIsLoggedIn"])(); //TODO: creates a lot of rerenders

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], _extends({}, rest, {
    render: function render(props) {
      return isLoggedInInput ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: {
          pathname: "/login",
          state: {
            from: props.location
          }
        }
      });
    }
  }));
}

PrivateRoute.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);

/***/ }),

/***/ "./js/src/components/SPA.jsx":
/*!***********************************!*\
  !*** ./js/src/components/SPA.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.mjs");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var apollo_link_retry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-link-retry */ "./node_modules/apollo-link-retry/lib/bundle.esm.js");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apollo-link-error */ "./node_modules/apollo-link-error/lib/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Loading */ "./js/src/components/Loading.jsx");
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./PrivateRoute */ "./js/src/components/PrivateRoute.jsx");
/* harmony import */ var Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! Utils/GetGlobals */ "./js/src/utils/GetGlobals.jsx");
/* harmony import */ var Utils_Token__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! Utils/Token */ "./js/src/utils/Token.jsx");
/* harmony import */ var Utils_MakeError__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! Utils/MakeError */ "./js/src/utils/MakeError.jsx");
/* harmony import */ var Log__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! Log */ "./js/src/utils/Log.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



















 // eslint-disable-next-line no-unused-vars



function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/me"
  }, "Me"));
}

var refreshTokenFetch = function refreshTokenFetch() {
  return Object(unfetch__WEBPACK_IMPORTED_MODULE_2__["default"])((Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_15__["default"].secureProtocol ? "https://" : "http://") + Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_15__["default"].refreshTokenUrl, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });
};

var logoutFetch = function logoutFetch() {
  return Object(unfetch__WEBPACK_IMPORTED_MODULE_2__["default"])((Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_15__["default"].secureProtocol ? "https://" : "http://") + Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_15__["default"].logoutUrl, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer ".concat(Object(Utils_Token__WEBPACK_IMPORTED_MODULE_16__["getToken"])())
    }
  });
};

var refreshToken =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var response, answer, _response, _answer;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return refreshTokenFetch();

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            answer = _context.sent;

            if (!(!answer.authToken || !Object(Utils_Token__WEBPACK_IMPORTED_MODULE_16__["setIsLoggedIn"])(answer.authToken))) {
              _context.next = 15;
              break;
            }

            _context.next = 10;
            return logoutFetch();

          case 10:
            _response = _context.sent;
            _context.next = 13;
            return _response.json();

          case 13:
            _answer = _context.sent;

            if (!_answer.error || _answer.error !== "") {
              Object(Utils_Token__WEBPACK_IMPORTED_MODULE_16__["setIsLoggedIn"])(_answer.authToken);
            }

          case 15:
            _context.next = 23;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            // full control over handling token fetch Error
            Object(Utils_MakeError__WEBPACK_IMPORTED_MODULE_17__["default"])("Your refresh token is invalid. Try to relogin", _context.t0); // your custom action here

            Object(Utils_Token__WEBPACK_IMPORTED_MODULE_16__["setLoggedOut"])();
            document.location.reload(true);
            window.location = "/";

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function refreshToken() {
    return _ref.apply(this, arguments);
  };
}();

var LoadableLogin = react_loadable__WEBPACK_IMPORTED_MODULE_12___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../single_pages/Login */ "./js/src/single_pages/Login.jsx"));
  },
  loading: _Loading__WEBPACK_IMPORTED_MODULE_13__["default"]
});
var LoadableMe = react_loadable__WEBPACK_IMPORTED_MODULE_12___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../single_pages/Me */ "./js/src/single_pages/Me.jsx"));
  },
  loading: _Loading__WEBPACK_IMPORTED_MODULE_13__["default"]
});
var httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_6__["HttpLink"]({
  uri: (Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_15__["default"].secureProtocol ? "https://" : "http://") + Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_15__["default"].graphqlUrl
});

var request =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(operation) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!Object(Utils_Token__WEBPACK_IMPORTED_MODULE_16__["isTokenExpired"])()) {
              _context2.next = 3;
              break;
            }

            _context2.next = 3;
            return refreshToken();

          case 3:
            operation.setContext({
              headers: {
                Authorization: "Bearer " + Object(Utils_Token__WEBPACK_IMPORTED_MODULE_16__["getToken"])()
              }
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function request(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_11__["InMemoryCache"](); //.restore(window.__APOLLO_STATE__);

var client = new apollo_client__WEBPACK_IMPORTED_MODULE_5__["default"]({
  link: apollo_link__WEBPACK_IMPORTED_MODULE_8__["ApolloLink"].from([new apollo_link_retry__WEBPACK_IMPORTED_MODULE_9__["RetryLink"]({
    delay: {
      initial: 300,
      max: Infinity,
      jitter: true
    },
    attempts: {
      max: 5,
      retryIf: function retryIf(error) {
        return Object(Log__WEBPACK_IMPORTED_MODULE_18__["default"])("retry") && !!error;
      }
    }
  }), Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_10__["onError"])(function (_ref3) {
    var graphQLErrors = _ref3.graphQLErrors,
        networkError = _ref3.networkError,
        operation = _ref3.operation,
        forward = _ref3.forward,
        response = _ref3.response;
    var hasTokenInvalid = true;

    if (graphQLErrors) {
      graphQLErrors.forEach(
      /*#__PURE__*/
      function () {
        var _ref4 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(error, index) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  hasTokenInvalid &= !error.debugMessage;
                  Object(Log__WEBPACK_IMPORTED_MODULE_18__["default"])(hasTokenInvalid);

                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x2, _x3) {
          return _ref4.apply(this, arguments);
        };
      }());
    }

    if (hasTokenInvalid) {
      return new apollo_link__WEBPACK_IMPORTED_MODULE_8__["Observable"](
      /*#__PURE__*/
      function () {
        var _ref5 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5(observer) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  if (!graphQLErrors) {
                    _context5.next = 3;
                    break;
                  }

                  graphQLErrors.forEach(
                  /*#__PURE__*/
                  function () {
                    var _ref6 = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee4(message, index) {
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              Object(Log__WEBPACK_IMPORTED_MODULE_18__["default"])("[GraphQL error]: Message: ".concat(message));
                              _context4.next = 3;
                              return refreshToken();

                            case 3:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4);
                    }));

                    return function (_x5, _x6) {
                      return _ref6.apply(this, arguments);
                    };
                  }());
                  return _context5.abrupt("return", observer.next(response));

                case 3:
                  if (networkError) {
                    Object(Log__WEBPACK_IMPORTED_MODULE_18__["default"])("[Network error]: ".concat(networkError));
                    Object(Log__WEBPACK_IMPORTED_MODULE_18__["default"])(networkError);
                  }

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x4) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }), new apollo_link__WEBPACK_IMPORTED_MODULE_8__["ApolloLink"](function (operation, forward) {
    return new apollo_link__WEBPACK_IMPORTED_MODULE_8__["Observable"](function (observer) {
      var handle;
      Promise.resolve(operation).then(function (oper) {
        return request(oper);
      }).then(function () {
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer)
        });
      })["catch"](observer.error.bind(observer));
      return function () {
        if (handle) handle.unsubscribe();
      };
    });
  }), httpLink]),
  cache: cache
});
cache.writeData({
  data: {
    isLoggedIn: Object(Utils_Token__WEBPACK_IMPORTED_MODULE_16__["getIsLoggedIn"])()
  }
});

var SPA =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SPA, _React$Component);

  function SPA() {
    _classCallCheck(this, SPA);

    return _possibleConstructorReturn(this, _getPrototypeOf(SPA).apply(this, arguments));
  }

  _createClass(SPA, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["ApolloProvider"], {
        client: client
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
        client: client
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
        hashType: "hashbang"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/",
        exact: true,
        component: Index
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/login",
        component: LoadableLogin
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrivateRoute__WEBPACK_IMPORTED_MODULE_14__["default"], {
        path: "/me",
        component: LoadableMe
      })))));
    }
  }]);

  return SPA;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SPA);

/***/ })

}]);
//# sourceMappingURL=1.concrete5_graphql_websocket_security_sample.js.map