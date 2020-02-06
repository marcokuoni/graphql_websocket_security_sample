(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./js/src/single_pages/Me.jsx":
/*!************************************!*\
  !*** ./js/src/single_pages/Me.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Me; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loading */ "./js/src/components/Loading.jsx");
/* harmony import */ var Utils_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Utils/UserContext */ "./js/src/utils/UserContext.jsx");
/* harmony import */ var Log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Log */ "./js/src/utils/Log.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    query me {\n        me {\n            uName\n            anonymus\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    mutation logout {\n        logout {\n            authToken\n            error\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






 // eslint-disable-next-line no-unused-vars


var LOGOUT = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
var ME = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());

var MeForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MeForm, _React$Component);

  function MeForm() {
    _classCallCheck(this, MeForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(MeForm).apply(this, arguments));
  }

  _createClass(MeForm, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Me", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Welcome ", this.props.data ? this.props.data.me.uName : "", " ", this.props.data ? this.props.data.me.anonymus : "", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          _this.props.logout();
        }
      }, "Sign out"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          _this.props.refetch();
        }
      }, "Refetch")));
    }
  }]);

  return MeForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MeForm.propTypes = {
  logout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  refetch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  answer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Me.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
function Me(_ref) {
  var history = _ref.history;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(ME),
      data = _useQuery.data,
      refetch = _useQuery.refetch;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Utils_UserContext__WEBPACK_IMPORTED_MODULE_5__["UserContext"]),
      _useContext2 = _slicedToArray(_useContext, 2),
      user = _useContext2[0],
      setUser = _useContext2[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(LOGOUT, {
    onCompleted: function onCompleted(_ref2) {
      var logoutAnswer = _ref2.logout;
      setUser({
        token: logoutAnswer.authToken
      });
      history.push("/login");
    }
  }),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      logout = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    refetch();
  }, [user]);
  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "An error occurred");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MeForm, {
    logout: logout,
    data: data,
    refetch: refetch
  });
}

/***/ })

}]);
//# sourceMappingURL=10.concrete5_graphql_websocket_security_sample.js.map