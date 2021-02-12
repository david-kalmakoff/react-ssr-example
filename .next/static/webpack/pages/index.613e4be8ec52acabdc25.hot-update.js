webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Card */ "./pages/Card.jsx");








var _jsxFileName = "C:\\Users\\PC\\Documents\\ssr\\pages\\index.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        children: [this.props.cards.map(function (card) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_13__["default"], {
            name: card.name,
            title: card.title
          }, card.id, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: "/static/logo.png",
          width: "200px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: "/static/juice.jpg",
          width: "200px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
          src: "/static/bg.jpg",
          width: "200px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var store;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store;
                store.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_10__["initialCards"])());

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

;

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    initialCards: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_store__WEBPACK_IMPORTED_MODULE_10__["initialCards"], dispatch),
    addItem: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_store__WEBPACK_IMPORTED_MODULE_10__["addItem"], dispatch)
  };
};

var mapStateToProp = function mapStateToProp(state) {
  return {
    cards: state.cards
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11__["default"])(_store__WEBPACK_IMPORTED_MODULE_10__["initStore"], mapStateToProp, mapDispatchToProps)(Index));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJjYXJkcyIsIm1hcCIsImNhcmQiLCJuYW1lIiwidGl0bGUiLCJpZCIsInN0b3JlIiwiZGlzcGF0Y2giLCJpbml0aWFsQ2FyZHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImFkZEl0ZW0iLCJtYXBTdGF0ZVRvUHJvcCIsInN0YXRlIiwid2l0aFJlZHV4IiwiaW5pdFN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxLOzs7Ozs7Ozs7Ozs7OzZCQUtRO0FBQUE7O0FBQ04sMEJBQ0k7QUFBQSxtQkFFUSxLQUFLQyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUNDLElBQUQ7QUFBQSw4QkFDakIscUVBQUMsOENBQUQ7QUFBc0IsZ0JBQUksRUFBR0EsSUFBSSxDQUFDQyxJQUFsQztBQUF5QyxpQkFBSyxFQUFHRCxJQUFJLENBQUNFO0FBQXRELGFBQVlGLElBQUksQ0FBQ0csRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEaUI7QUFBQSxTQUFyQixDQUZSLGVBTUk7QUFBSyxhQUFHLEVBQUMsa0JBQVQ7QUFBNEIsZUFBSyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosZUFPSTtBQUFLLGFBQUcsRUFBQyxtQkFBVDtBQUE2QixlQUFLLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixlQVFJO0FBQUssYUFBRyxFQUFDLGdCQUFUO0FBQTBCLGVBQUssRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBWUg7Ozs7Ozs7Ozs7QUFqQitCQyxxQixRQUFBQSxLO0FBQzVCQSxxQkFBSyxDQUFDQyxRQUFOLENBQWVDLDREQUFZLEVBQTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBRllDLDRDQUFLLENBQUNDLFM7O0FBbUJ6Qjs7QUFFRCxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNKLFFBQUQsRUFBYztBQUNyQyxTQUFPO0FBQ0hDLGdCQUFZLEVBQUVJLGdFQUFrQixDQUFDSixvREFBRCxFQUFlRCxRQUFmLENBRDdCO0FBRUhNLFdBQU8sRUFBRUQsZ0VBQWtCLENBQUNDLCtDQUFELEVBQVVOLFFBQVY7QUFGeEIsR0FBUDtBQUlILENBTEQ7O0FBT0EsSUFBTU8sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDOUIsU0FBTztBQUNIZixTQUFLLEVBQUVlLEtBQUssQ0FBQ2Y7QUFEVixHQUFQO0FBR0gsQ0FKRDs7QUFNZWdCLGtJQUFTLENBQUNDLGlEQUFELEVBQVlILGNBQVosRUFBNEJILGtCQUE1QixDQUFULENBQXlEYixLQUF6RCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYxM2U0YmU4ZWM1MmFjYWJkYzI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgaW5pdFN0b3JlLCBpbml0aWFsQ2FyZHMsIGFkZEl0ZW0gfSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHN0b3JlIH0pIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goaW5pdGlhbENhcmRzKCkpO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jYXJkcy5tYXAoKGNhcmQpID0+KFxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXsgY2FyZC5pZCB9IG5hbWU9eyBjYXJkLm5hbWUgfSB0aXRsZT17IGNhcmQudGl0bGUgfSAvPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvbG9nby5wbmdcIiB3aWR0aD1cIjIwMHB4XCIgLz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvanVpY2UuanBnXCIgd2lkdGg9XCIyMDBweFwiIC8+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2JnLmpwZ1wiIHdpZHRoPVwiMjAwcHhcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0aWFsQ2FyZHM6IGJpbmRBY3Rpb25DcmVhdG9ycyhpbml0aWFsQ2FyZHMsIGRpc3BhdGNoKSxcbiAgICAgICAgYWRkSXRlbTogYmluZEFjdGlvbkNyZWF0b3JzKGFkZEl0ZW0sIGRpc3BhdGNoKSxcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2FyZHM6IHN0YXRlLmNhcmRzLFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSwgbWFwU3RhdGVUb1Byb3AsIG1hcERpc3BhdGNoVG9Qcm9wcykoSW5kZXgpOyJdLCJzb3VyY2VSb290IjoiIn0=