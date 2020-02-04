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

  console.log('test');
  console.log(Object(Utils_Token__WEBPACK_IMPORTED_MODULE_3__["getIsLoggedIn"])());
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
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link_token_refresh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-link-token-refresh */ "./node_modules/apollo-link-token-refresh/lib/tokenRefreshLink.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loading */ "./js/src/components/Loading.jsx");
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PrivateRoute */ "./js/src/components/PrivateRoute.jsx");
/* harmony import */ var Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Utils/GetGlobals */ "./js/src/utils/GetGlobals.jsx");
/* harmony import */ var Utils_Token__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Utils/Token */ "./js/src/utils/Token.jsx");
/* harmony import */ var Utils_MakeError__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! Utils/MakeError */ "./js/src/utils/MakeError.jsx");
/* harmony import */ var Log__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! Log */ "./js/src/utils/Log.jsx");
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
  return Object(unfetch__WEBPACK_IMPORTED_MODULE_2__["default"])((Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_13__["default"].secureProtocol ? "https://" : "http://") + Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_13__["default"].refreshTokenUrl, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });
};

var refreshToken =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var response, answer;
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
            Object(Log__WEBPACK_IMPORTED_MODULE_16__["default"])(answer);
            Object(Utils_Token__WEBPACK_IMPORTED_MODULE_14__["setIsLoggedIn"])(answer.authToken);
            _context.next = 17;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            // full control over handling token fetch Error
            Object(Utils_MakeError__WEBPACK_IMPORTED_MODULE_15__["default"])("Your refresh token is invalid. Try to relogin", _context.t0); // your custom action here

            Object(Utils_Token__WEBPACK_IMPORTED_MODULE_14__["setLoggedOut"])();
            document.location.reload(true);
            window.location = "/";

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function refreshToken() {
    return _ref.apply(this, arguments);
  };
}();

var LoadableLogin = react_loadable__WEBPACK_IMPORTED_MODULE_10___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../single_pages/Login */ "./js/src/single_pages/Login.jsx"));
  },
  loading: _Loading__WEBPACK_IMPORTED_MODULE_11__["default"]
});
var LoadableMe = react_loadable__WEBPACK_IMPORTED_MODULE_10___default()({
  loader: function loader() {
    return Promise.all(/*! import() */[__webpack_require__.e(8), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ../single_pages/Me */ "./js/src/single_pages/Me.jsx"));
  },
  loading: _Loading__WEBPACK_IMPORTED_MODULE_11__["default"]
});
var httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"]({
  uri: (Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_13__["default"].secureProtocol ? "https://" : "http://") + Utils_GetGlobals__WEBPACK_IMPORTED_MODULE_13__["default"].graphqlUrl
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
            if (!Object(Utils_Token__WEBPACK_IMPORTED_MODULE_14__["isTokenExpired"])()) {
              _context2.next = 3;
              break;
            }

            _context2.next = 3;
            return refreshToken();

          case 3:
            operation.setContext({
              headers: {
                Authorization: "Bearer " + Object(Utils_Token__WEBPACK_IMPORTED_MODULE_14__["getToken"])()
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

var cache = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_8__["InMemoryCache"](); //.restore(window.__APOLLO_STATE__);

var client = new apollo_client__WEBPACK_IMPORTED_MODULE_3__["default"]({
  link: apollo_link__WEBPACK_IMPORTED_MODULE_7__["ApolloLink"].from([new apollo_link__WEBPACK_IMPORTED_MODULE_7__["ApolloLink"](function (operation, forward) {
    return new apollo_link__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (observer) {
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["ApolloProvider"], {
        client: client
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["ApolloProvider"], {
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

/***/ })

}]);
//# sourceMappingURL=2.concrete5_graphql_websocket_security_sample.js.map