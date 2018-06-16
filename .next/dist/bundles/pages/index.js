module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

<<<<<<< HEAD
/***/ "./apollo/initApollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initApollo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);


var apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (!process.browser) {
  global.fetch = __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default.a;
}

function create(headers, initialState) {
  return new __WEBPACK_IMPORTED_MODULE_0_react_apollo__["ApolloClient"]({
    initialState: initialState,
    ssrMode: !process.browser,
    // Disables forceFetch on the server (so queries are only run once)
    networkInterface: Object(__WEBPACK_IMPORTED_MODULE_0_react_apollo__["createNetworkInterface"])({
      uri: "http://localhost:3000/graphql",
      // Server URL (must be absolute)
      opts: {
        // Additional fetch() options like `credentials` or `headers`
        credentials: "same-origin"
      }
    })
  });
}

function initApollo(headers) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(headers, initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = create(headers, initialState);
  }

  return apolloClient;
}

/***/ }),

/***/ "./apollo/withData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__initApollo__ = __webpack_require__("./apollo/initApollo.js");

var _jsxFileName = "/Users/panjamaponkarnasuta/Desktop/nextJS_restAPI/apollo/withData.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/* harmony default export */ __webpack_exports__["a"] = (function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithData, _React$Component);

    _createClass(WithData, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var headers, serverState, composedInitialProps, apollo, url, app, state;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  headers = ctx.req ? ctx.req.headers : {};
                  serverState = {}; // Evaluate the composed component's getInitialProps()

                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 6;
                  return ComposedComponent.getInitialProps(ctx);

                case 6:
                  composedInitialProps = _context.sent;

                case 7:
                  if (process.browser) {
                    _context.next = 15;
                    break;
                  }

                  apollo = Object(__WEBPACK_IMPORTED_MODULE_4__initApollo__["a" /* default */])(headers); // Provide the `url` prop data in case a graphql query uses it

                  url = {
                    query: ctx.query,
                    pathname: ctx.pathname
                  }; // Run all graphql queries

                  app = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"], {
                    client: apollo,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    }
                  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({
                    url: url
                  }, composedInitialProps, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 33
                    }
                  })));
                  _context.next = 13;
                  return Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["getDataFromTree"])(app);

                case 13:
                  // Extract query data from the Apollo's store
                  state = apollo.getInitialState();
                  serverState = {
                    apollo: {
                      // Make sure to only include Apollo's data state
                      data: state.data
                    }
                  };

                case 15:
                  return _context.abrupt("return", _objectSpread({
                    serverState: serverState,
                    headers: headers
                  }, composedInitialProps));

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    function WithData(props) {
      var _this;

      _classCallCheck(this, WithData);

      _this = _possibleConstructorReturn(this, (WithData.__proto__ || Object.getPrototypeOf(WithData)).call(this, props));
      _this.apollo = Object(__WEBPACK_IMPORTED_MODULE_4__initApollo__["a" /* default */])(_this.props.headers, _this.props.serverState);
      return _this;
    }

    _createClass(WithData, [{
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"], {
          client: this.apollo,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ComposedComponent, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        })));
      }
    }]);

    return WithData;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component), Object.defineProperty(_class, "displayName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "WithData(".concat(ComposedComponent.displayName, ")")
  }), Object.defineProperty(_class, "propTypes", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: {
      serverState: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
    }
  }), _temp;
});

/***/ }),

=======
>>>>>>> 62dfe06d56ea4298560cf0edc2cb538ff46cd71b
/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apollo_withData__ = __webpack_require__("./apollo/withData.js");
var _jsxFileName = "/Users/panjamaponkarnasuta/Desktop/nextJS_restAPI/pages/index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["{\n    products {\n      id\n      name\n    }\n}"]);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
var _jsxFileName = "/Users/panjamaponkarnasuta/Desktop/workshop/pages/index.js";
>>>>>>> 62dfe06d56ea4298560cf0edc2cb538ff46cd71b

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

<<<<<<< HEAD
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
=======
>>>>>>> 62dfe06d56ea4298560cf0edc2cb538ff46cd71b





<<<<<<< HEAD
var Query = __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_templateObject);

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "productsRender",
    value: function productsRender() {
      var data = this.props.data;

      if (data.loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }, "loading products ...");
      } else {
        return data.products.map(function (product) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          }, product.name);
        });
      }
=======

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this));
    _this.state = {
      article: []
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()("http://localhost:3000/api/article").then(function (response) {
        if (response.status === 404 || response.status === 200) {
          return _this2.state.article;
        }
      }).then(function (object) {
        if (object.type === 'error') {
          console.log(object.type, object.message);
        } else {
          _this2.setState({
            article: article
          });
        }
      });
>>>>>>> 62dfe06d56ea4298560cf0edc2cb538ff46cd71b
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 30
        }
      }, this.productsRender());
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var graphql_filter = Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(Query)(App);
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3__apollo_withData__["a" /* default */])(graphql_filter));
=======
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charset: "UTF-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "ie=edge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "Document"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
        integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
        integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
        integrity: "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
        integrity: "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",
        crossorigin: "anonymous",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), "hello");
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


>>>>>>> 62dfe06d56ea4298560cf0edc2cb538ff46cd71b

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

<<<<<<< HEAD
/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");
=======
/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");
>>>>>>> 62dfe06d56ea4298560cf0edc2cb538ff46cd71b

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

<<<<<<< HEAD
/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");
=======
/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");
>>>>>>> 62dfe06d56ea4298560cf0edc2cb538ff46cd71b

/***/ })

/******/ });
//# sourceMappingURL=index.js.map