(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./js/src/oldJquery/LoadBackground.jsx":
/*!*********************************************!*\
  !*** ./js/src/oldJquery/LoadBackground.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var loadBackground = function loadBackground() {
  setTimeout(function () {
    var fade_div = $("<div/>").css({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%"
    }).prependTo("body").height("200px");
    fade_div.hide().append($("<img/>").css({
      width: "100%",
      height: "100%"
    }).attr("src", "/concrete/images/login_fade.png")).fadeIn();
  }, 0);
  $(function () {
    var shown = false,
        info;
    $.getJSON("https://vivaelfutbol.lemonbrain.ch/index.php/tools/required/dashboard/get_image_data", {
      image: "20190806.jpg"
    }, function (data) {
      if (shown) {
        $("div.ccm-page-background-credit").fadeIn().children().attr("href", data.link).text(data.author.join());
      } else {
        info = data;
      }
    });
    $(window).on("backstretch.show", function () {
      shown = true;

      if (info) {
        $("div.ccm-page-background-credit").fadeIn().find("div.ccm-page-background-photo-credit").children().attr("href", info.link).text(info.author.join());
      }
    });
    $.backstretch("//backgroundimages.concrete5.org/wallpaper/20190806.jpg", {
      fade: 500
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (loadBackground);

/***/ }),

/***/ "./js/src/single_pages/Login.jsx":
/*!***************************************!*\
  !*** ./js/src/single_pages/Login.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loading */ "./js/src/components/Loading.jsx");
/* harmony import */ var _oldJquery_LoadBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../oldJquery/LoadBackground */ "./js/src/oldJquery/LoadBackground.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var LoadableForgotPassword = react_loadable__WEBPACK_IMPORTED_MODULE_3___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../components/ForgotPassword */ "./js/src/components/ForgotPassword.jsx"));
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"]
});
var LoadableChangePassword = react_loadable__WEBPACK_IMPORTED_MODULE_3___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/ChangePassword */ "./js/src/components/ChangePassword.jsx"));
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"]
});
var LoadableLogin = react_loadable__WEBPACK_IMPORTED_MODULE_3___default()({
  loader: function loader() {
    return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../components/Login */ "./js/src/components/Login.jsx"));
  },
  loading: _components_Loading__WEBPACK_IMPORTED_MODULE_4__["default"]
});

var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, _getPrototypeOf(Login).apply(this, arguments));
  }

  _createClass(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_oldJquery_LoadBackground__WEBPACK_IMPORTED_MODULE_5__["default"])();
    }
  }, {
    key: "render",
    value: function render() {
      var match = this.props.match;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "login-page row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 offset-sm-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Sign In.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-sm-6 offset-sm-3 login-form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row login-row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "controls col-sm-12 col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "".concat(match.path, "/concrete/forgot_password"),
        component: LoadableForgotPassword
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        path: "".concat(match.path, "/concrete/change-password/:token"),
        component: LoadableChangePassword
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
        exact: true,
        path: match.path,
        component: LoadableLogin
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ccm-page-background-credit"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ccm-page-background-privacy-notice float-left"
      }, "Image served from concrete5.org.", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "//www.concrete5.org/legal/privacy-policy",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "View Privacy Policy"), ".", " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ccm-page-background-photo-credit float-right"
      }, "Photo Credit:", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "http://www.flickr.com/photos/jurvetson/5276291364/"
      }, "Steve Jurvetson"))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Login.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

}]);
//# sourceMappingURL=2.concrete5_graphql_websocket_security_sample.js.map