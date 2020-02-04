(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./js/src/components/AuthButton.jsx":
/*!******************************************!*\
  !*** ./js/src/components/AuthButton.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loading */ "./js/src/components/Loading.jsx");
/* harmony import */ var Utils_Token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Utils/Token */ "./js/src/utils/Token.jsx");
/* harmony import */ var Log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Log */ "./js/src/utils/Log.jsx");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    mutation logout() {\n        logout()\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






 // eslint-disable-next-line no-unused-vars


var LOGOUT = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
function AuthButton(_ref) {
  var history = _ref.history;
  // const [answer, setAnswer] = useState(null);
  // const [logout, { loading, error }] = useMutation(LOGOUT, {
  //     onCompleted({ logout: logoutAnswer }) {
  //         setAnswer(logoutAnswer);
  //     }
  // });
  // if (loading) return <Loading />;
  // if (error) return <p>An error occurred</p>;
  // if (answer === "") {
  //     history.push("/");
  // }
  // log(getIsLoggedIn())
  // return (getIsLoggedIn() ? (
  //     <p>
  //         Welcome!{" "}
  //         <button
  //             onClick={() => {
  //                 // logout();
  //             }}
  //         >
  //             Sign out
  //         </button>
  //     </p>
  // ) : (
  //     <Link to="/login">Login</Link>
  // ));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "test");
}

/***/ })

}]);
//# sourceMappingURL=9.concrete5_graphql_websocket_security_sample.js.map