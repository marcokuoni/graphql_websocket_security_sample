(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./js/src/components/AuthButton.jsx":
/*!******************************************!*\
  !*** ./js/src/components/AuthButton.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var Utils_Token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Utils/Token */ "./js/src/utils/Token.jsx");



var AuthButton = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(function (_ref) {
  var history = _ref.history;
  return Object(Utils_Token__WEBPACK_IMPORTED_MODULE_2__["getIsLoggedIn"])() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Welcome!", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      //Call logout on graphql
      //clear local storage
      history.push("/");
    }
  }, "Sign out")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/login"
  }, "Login");
});
/* harmony default export */ __webpack_exports__["default"] = (AuthButton);

/***/ })

}]);
//# sourceMappingURL=7.concrete5_graphql_websocket_security_sample.js.map