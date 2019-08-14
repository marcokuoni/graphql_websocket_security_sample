(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function PrivateRoute(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ["component"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], _extends({}, rest, {
    render: function render(props) {
      return Object(Utils_Token__WEBPACK_IMPORTED_MODULE_3__["getIsLoggedIn"])() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
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
  component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
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
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-link-ws */ "./node_modules/apollo-link-ws/lib/bundle.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loading */ "./js/src/components/Loading.jsx");
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PrivateRoute */ "./js/src/components/PrivateRoute.jsx");
/* harmony import */ var Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Utils/GetGlobals */ "./js/src/utils/GetGlobals.jsx");
/* harmony import */ var Utils_Token__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Utils/Token */ "./js/src/utils/Token.jsx");
/* harmony import */ var Log__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! Log */ "./js/src/utils/Log.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }















 // eslint-disable-next-line no-unused-vars



function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/me"
  }, "Me"));
}

localStorage.setItem(Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_13__["constants"].authToken, JSON.parse(Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_13__["default"].anonymusTokens).authToken);
localStorage.setItem(Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_13__["constants"].refreshToken, JSON.parse(Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_13__["default"].anonymusTokens).refreshToken);
var LoadableLogin = react_loadable__WEBPACK_IMPORTED_MODULE_10___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../single_pages/Login */ "./js/src/single_pages/Login.jsx"));
  },
  loading: _Loading__WEBPACK_IMPORTED_MODULE_11__["default"]
});
var LoadableMe = react_loadable__WEBPACK_IMPORTED_MODULE_10___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../single_pages/Me */ "./js/src/single_pages/Me.jsx"));
  },
  loading: _Loading__WEBPACK_IMPORTED_MODULE_11__["default"]
});
var httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"]({
  uri: (Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_13__["default"].secureProtocol ? "https://" : "http://") + Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_13__["default"].graphqlUrl,
  headers: {
    authorization: "Bearer " + Object(Utils_Token__WEBPACK_IMPORTED_MODULE_14__["getToken"])()
  }
}); //https://www.apollographql.com/docs/tutorial/mutations/
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

var cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9__["InMemoryCache"](); //.restore(window.__APOLLO_STATE__);

var client = new apollo_client__WEBPACK_IMPORTED_MODULE_2__["default"]({
  link: httpLink,
  cache: cache
});
cache.writeData({
  data: {
    isLoggedIn: Object(Utils_Token__WEBPACK_IMPORTED_MODULE_14__["getIsLoggedIn"])()
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_6__["ApolloProvider"], {
        client: client
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["ApolloProvider"], {
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
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PrivateRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
        path: "/me",
        component: LoadableMe
      })))));
    }
  }]);

  return SPA;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SPA);

/***/ }),

/***/ "./js/src/utils/Token.jsx":
/*!********************************!*\
  !*** ./js/src/utils/Token.jsx ***!
  \********************************/
/*! exports provided: getToken, getIsLoggedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoggedIn", function() { return getIsLoggedIn; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utils/GetGlobals */ "./js/src/utils/GetGlobals.jsx");
/* harmony import */ var Log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Log */ "./js/src/utils/Log.jsx");




var getToken = function getToken() {
  var currentToken = localStorage.getItem(Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_1__["constants"].authToken);

  if (currentToken && jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(currentToken).exp < Date.now() / 1000) {
    Object(Log__WEBPACK_IMPORTED_MODULE_2__["default"])("refresh");
    var currentRefreshToken = localStorage.getItem(Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_1__["constants"].refreshToken);
    localStorage.clear(); //refreshToken(currentRefreshToken)
  }

  return currentToken;
};

var getIsLoggedIn = function getIsLoggedIn() {
  var currentToken = localStorage.getItem(Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_1__["constants"].authToken);

  if (currentToken && jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(currentToken).exp >= Date.now() / 1000) {
    Object(Log__WEBPACK_IMPORTED_MODULE_2__["default"])(jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(localStorage.getItem(Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_1__["constants"].authToken)));

    if (parseInt(jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(localStorage.getItem(Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_1__["constants"].authToken)).data.user.uID) > 0 && jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(localStorage.getItem(Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_1__["constants"].authToken)).data.user.anonymus !== true) {
      return true;
    }
  }

  return false;
};



/***/ })

}]);
//# sourceMappingURL=2.concrete5_graphql_websocket_security_sample.js.map