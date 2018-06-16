webpackHotUpdate(4,{

/***/ "./apollo/initApollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process, global) {/* harmony export (immutable) */ __webpack_exports__["a"] = initApollo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_fetch__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();



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
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(apolloClient, "apolloClient", "/Users/panjamaponkarnasuta/Desktop/nextJS_restAPI/apollo/initApollo.js");
  reactHotLoader.register(create, "create", "/Users/panjamaponkarnasuta/Desktop/nextJS_restAPI/apollo/initApollo.js");
  reactHotLoader.register(initApollo, "initApollo", "/Users/panjamaponkarnasuta/Desktop/nextJS_restAPI/apollo/initApollo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=4.94d32a81937d0ff8ea9c.hot-update.js.map