(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./js/src/components/ForgotPassword.jsx":
/*!**********************************************!*\
  !*** ./js/src/components/ForgotPassword.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForgotPassword; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Loading */ "./js/src/components/Loading.jsx");
/* harmony import */ var Log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Log */ "./js/src/utils/Log.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    mutation forgotPassword($username: String!, $currentLanguage: String!) {\n        forgotPassword(username: $username, currentLanguage: $currentLanguage)\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





 // eslint-disable-next-line no-unused-vars


var FORGOT_PASSWORD = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

var ForgotPasswordForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ForgotPasswordForm, _React$Component);

  function ForgotPasswordForm(props) {
    var _this;

    _classCallCheck(this, ForgotPasswordForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ForgotPasswordForm).call(this, props));
    _this.state = {
      uName: ""
    };
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ForgotPasswordForm, [{
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.type === "checkbox" ? target.checked : target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      this.props.forgotPassword({
        variables: {
          username: this.state.uName,
          currentLanguage: "DE"
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var answer = this.props.answer;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "forgotPassword"
      }, answer && answer.length === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Anweisungen zum Zur\xFCcksetzen gesendet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ccm-message"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "help-block"
      }, "Wenn diese E-Mail-Adresse einem Konto zugeordnet ist, wurde eine E-Mail mit Anweisungen zum Zur\xFCcksetzen des Passwortes an diese Adresse gesendet.", " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/",
        className: "btn btn-block btn-primary"
      }, "Zur\xFCck", " ")), answer && answer.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ccm-system-errors alert alert-danger alert-dismissable"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "close",
        "data-dismiss": "alert"
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, answer)), answer === null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Forgot Your Password?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "help-block"
      }, "Enter your email address below. We will send you instructions to reset your password."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "control-label",
        htmlFor: "uName"
      }, "Email Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "uName",
        id: "uName",
        className: "form-control",
        autoFocus: "autofocus",
        value: this.state.uName,
        onChange: this.handleInputChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        name: "resetPassword",
        className: "btn btn-primary btn-block"
      }, "Reset and Email Password")));
    }
  }]);

  return ForgotPasswordForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ForgotPasswordForm.propTypes = {
  forgotPassword: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  answer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
function ForgotPassword() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      answer = _useState2[0],
      setAnswer = _useState2[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(FORGOT_PASSWORD, {
    onCompleted: function onCompleted(_ref) {
      var forgotPassword = _ref.forgotPassword;
      setAnswer(forgotPassword);
    }
  }),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      forgotPassword = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "An error occurred");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ForgotPasswordForm, {
    forgotPassword: forgotPassword,
    answer: answer
  });
}

/***/ })

}]);
//# sourceMappingURL=8.concrete5_graphql_websocket_security_sample.js.map