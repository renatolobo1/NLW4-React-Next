webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountdownContext\", function() { return CountdownContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountdownProvider\", function() { return CountdownProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n\n\nvar _jsxFileName = \"/home/renato/nlw4/aulas/moveit-next/src/contexts/CountdownContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar countdownTimeout;\nfunction CountdownProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesContext\"]),\n      startNewChallenge = _useContext.startNewChallenge;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0.05 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      hasFinished = _useState3[0],\n      setHasFinished = _useState3[1];\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60;\n\n  function startCountdown() {\n    setIsActive(true);\n  }\n\n  function resetCountdown() {\n    clearTimeout(countdownTimeout);\n    setIsActive(false);\n    setHasEvents(false);\n    setTime(0.05 * 60);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isActive && time > 0) {\n      countdownTimeout = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    } else if (isActive && time === 0) {\n      setHasFinished(true);\n      setIsActive(false);\n      startNewChallenge();\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CountdownContext.Provider, {\n    value: {\n      minutes: minutes,\n      seconds: seconds,\n      hasFinished: hasFinished,\n      isActive: isActive,\n      startCountdown: startCountdown,\n      resetCountdown: resetCountdown,\n      setHasEvents: setHasEvents\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CountdownProvider, \"YUeD9s6fYqGd1MSAHd8G/TiE3x0=\");\n\n_c = CountdownProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"CountdownProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4P2ZlOWQiXSwibmFtZXMiOlsiQ291bnRkb3duQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwidXNlU3RhdGUiLCJ0aW1lIiwic2V0VGltZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJoYXNGaW5pc2hlZCIsInNldEhhc0ZpbmlzaGVkIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJzdGFydENvdW50ZG93biIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0Iiwic2V0SGFzRXZlbnRzIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFnQk8sSUFBTUEsZ0JBQWdCLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBdEM7QUFFUCxJQUFJQyxnQkFBSjtBQUVPLFNBQVNDLGlCQUFULE9BQThEO0FBQUE7O0FBQUEsTUFBbENDLFFBQWtDLFFBQWxDQSxRQUFrQzs7QUFBQSxvQkFFdkNDLHdEQUFVLENBQUNDLG9FQUFELENBRjZCO0FBQUEsTUFFNURDLGlCQUY0RCxlQUU1REEsaUJBRjREOztBQUFBLGtCQUkzQ0Msc0RBQVEsQ0FBQyxPQUFPLEVBQVIsQ0FKbUM7QUFBQSxNQUk1REMsSUFKNEQ7QUFBQSxNQUl0REMsT0FKc0Q7O0FBQUEsbUJBS2xDRixzREFBUSxDQUFDLEtBQUQsQ0FMMEI7QUFBQSxNQUszREcsUUFMMkQ7QUFBQSxNQUtqREMsV0FMaUQ7O0FBQUEsbUJBTTVCSixzREFBUSxDQUFDLEtBQUQsQ0FOb0I7QUFBQSxNQU0zREssV0FOMkQ7QUFBQSxNQU05Q0MsY0FOOEM7O0FBUW5FLE1BQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdSLElBQUksR0FBRyxFQUFsQixDQUFoQjtBQUNBLE1BQU1TLE9BQU8sR0FBR1QsSUFBSSxHQUFHLEVBQXZCOztBQUVBLFdBQVNVLGNBQVQsR0FBeUI7QUFDdkJQLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRDs7QUFFRCxXQUFTUSxjQUFULEdBQXlCO0FBQ3ZCQyxnQkFBWSxDQUFDbkIsZ0JBQUQsQ0FBWjtBQUNBVSxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FVLGdCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0FaLFdBQU8sQ0FBQyxPQUFPLEVBQVIsQ0FBUDtBQUNEOztBQUVEYSx5REFBUyxDQUFDLFlBQUk7QUFDWixRQUFJWixRQUFRLElBQUlGLElBQUksR0FBRyxDQUF2QixFQUF5QjtBQUN2QlAsc0JBQWdCLEdBQUdzQixVQUFVLENBQUMsWUFBSTtBQUNoQ2QsZUFBTyxDQUFDRCxJQUFJLEdBQUMsQ0FBTixDQUFQO0FBQ0QsT0FGNEIsRUFFMUIsSUFGMEIsQ0FBN0I7QUFHRCxLQUpELE1BSU8sSUFBSUUsUUFBUSxJQUFJRixJQUFJLEtBQUssQ0FBekIsRUFBNEI7QUFDakNLLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FGLGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FMLHVCQUFpQjtBQUNsQjtBQUNGLEdBVlEsRUFVTixDQUFDSSxRQUFELEVBQVdGLElBQVgsQ0FWTSxDQUFUO0FBWUEsc0JBQ0UscUVBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFDQSxTQUFLLEVBQUU7QUFDSE0sYUFBTyxFQUFQQSxPQURHO0FBRUhHLGFBQU8sRUFBUEEsT0FGRztBQUdITCxpQkFBVyxFQUFYQSxXQUhHO0FBSUhGLGNBQVEsRUFBUkEsUUFKRztBQUtIUSxvQkFBYyxFQUFkQSxjQUxHO0FBTUhDLG9CQUFjLEVBQWRBLGNBTkc7QUFPSEUsa0JBQVksRUFBWkE7QUFQRyxLQURQO0FBQUEsY0FXR2xCO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBakRlRCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ291bnRkb3duQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4vQ2hhbGxlbmdlc0NvbnRleHRcIjtcblxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhIHtcbiAgbWludXRlczogbnVtYmVyO1xuICBzZWNvbmRzOiBudW1iZXI7XG4gIGhhc0ZpbmlzaGVkOiBib29sZWFuO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgc3RhcnRDb3VudGRvd246KCkgPT4gdm9pZDtcbiAgcmVzZXRDb3VudGRvd246KCkgPT4gdm9pZDtcbiAgc2V0SGFzRXZlbnRzOigpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBDb3VudGRvd25Qcm92aWRlclByb3Bze1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgY29uc3QgQ291bnRkb3duQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ291bnRkb3duQ29udGV4dERhdGEpXG5cbmxldCBjb3VudGRvd25UaW1lb3V0Ok5vZGVKUy5UaW1lb3V0O1xuXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duUHJvdmlkZXIoe2NoaWxkcmVufTpDb3VudGRvd25Qcm92aWRlclByb3BzICl7XG5cbiAgY29uc3Qge3N0YXJ0TmV3Q2hhbGxlbmdlfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xuXG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDAuMDUgKiA2MCk7XG4gIGNvbnN0IFsgaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgWyBoYXNGaW5pc2hlZCwgc2V0SGFzRmluaXNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG4gIGNvbnN0IHNlY29uZHMgPSB0aW1lICUgNjA7XG5cbiAgZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKXtcbiAgICBzZXRJc0FjdGl2ZSh0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Q291bnRkb3duKCl7XG4gICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93blRpbWVvdXQpO1xuICAgIHNldElzQWN0aXZlKGZhbHNlKTtcbiAgICBzZXRIYXNFdmVudHMoZmFsc2UpO1xuICAgIHNldFRpbWUoMC4wNSAqIDYwKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGlmIChpc0FjdGl2ZSAmJiB0aW1lID4gMCl7XG4gICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICBzZXRUaW1lKHRpbWUtMSk7XG4gICAgICB9LCAxMDAwKVxuICAgIH0gZWxzZSBpZiAoaXNBY3RpdmUgJiYgdGltZSA9PT0gMCkge1xuICAgICAgc2V0SGFzRmluaXNoZWQodHJ1ZSk7XG4gICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XG4gICAgICBzdGFydE5ld0NoYWxsZW5nZSgpO1xuICAgIH1cbiAgfSwgW2lzQWN0aXZlLCB0aW1lXSlcblxuICByZXR1cm4gKFxuICAgIDxDb3VudGRvd25Db250ZXh0LlByb3ZpZGVyIFxuICAgIHZhbHVlPXt7XG4gICAgICAgIG1pbnV0ZXMsXG4gICAgICAgIHNlY29uZHMsXG4gICAgICAgIGhhc0ZpbmlzaGVkLFxuICAgICAgICBpc0FjdGl2ZSxcbiAgICAgICAgc3RhcnRDb3VudGRvd24sXG4gICAgICAgIHJlc2V0Q291bnRkb3duLFxuICAgICAgICBzZXRIYXNFdmVudHMsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvdW50ZG93bkNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/CountdownContext.tsx\n");

/***/ })

})