webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/CountdownContext.tsx":
/*!*******************************************!*\
  !*** ./src/contexts/CountdownContext.tsx ***!
  \*******************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountdownContext\", function() { return CountdownContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountdownProvider\", function() { return CountdownProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n\n\nvar _jsxFileName = \"/home/renato/nlw4/aulas/moveit-next/src/contexts/CountdownContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\nvar CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nvar countdownTimeout;\nfunction CountdownProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesContext\"]),\n      startNewChallenge = _useContext.startNewChallenge;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0.05 * 60),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      hasFinished = _useState3[0],\n      setHasFinished = _useState3[1];\n\n  var minutes = Math.floor(time / 60);\n  var seconds = time % 60;\n\n  function startCountdown() {\n    setIsActive(true);\n  }\n\n  function resetCountdown() {\n    clearTimeout(countdownTimeout);\n    setIsActive(false);\n    setHasFinished(false);\n    setTime(0.05 * 60);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isActive && time > 0) {\n      countdownTimeout = setTimeout(function () {\n        setTime(time - 1);\n      }, 1000);\n    } else if (isActive && time === 0) {\n      setHasFinished(true);\n      setIsActive(false);\n      startNewChallenge();\n    }\n  }, [isActive, time]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CountdownContext.Provider, {\n    value: {\n      minutes: minutes,\n      seconds: seconds,\n      hasFinished: hasFinished,\n      isActive: isActive,\n      startCountdown: startCountdown,\n      resetCountdown: resetCountdown\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CountdownProvider, \"YUeD9s6fYqGd1MSAHd8G/TiE3x0=\");\n\n_c = CountdownProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"CountdownProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHQudHN4P2ZlOWQiXSwibmFtZXMiOlsiQ291bnRkb3duQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjb3VudGRvd25UaW1lb3V0IiwiQ291bnRkb3duUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwidXNlU3RhdGUiLCJ0aW1lIiwic2V0VGltZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJoYXNGaW5pc2hlZCIsInNldEhhc0ZpbmlzaGVkIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJzdGFydENvdW50ZG93biIsInJlc2V0Q291bnRkb3duIiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFlTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUF0QztBQUVQLElBQUlDLGdCQUFKO0FBRU8sU0FBU0MsaUJBQVQsT0FBOEQ7QUFBQTs7QUFBQSxNQUFsQ0MsUUFBa0MsUUFBbENBLFFBQWtDOztBQUFBLG9CQUV2Q0Msd0RBQVUsQ0FBQ0Msb0VBQUQsQ0FGNkI7QUFBQSxNQUU1REMsaUJBRjRELGVBRTVEQSxpQkFGNEQ7O0FBQUEsa0JBSTNDQyxzREFBUSxDQUFDLE9BQU8sRUFBUixDQUptQztBQUFBLE1BSTVEQyxJQUo0RDtBQUFBLE1BSXREQyxPQUpzRDs7QUFBQSxtQkFLbENGLHNEQUFRLENBQUMsS0FBRCxDQUwwQjtBQUFBLE1BSzNERyxRQUwyRDtBQUFBLE1BS2pEQyxXQUxpRDs7QUFBQSxtQkFNNUJKLHNEQUFRLENBQUMsS0FBRCxDQU5vQjtBQUFBLE1BTTNESyxXQU4yRDtBQUFBLE1BTTlDQyxjQU44Qzs7QUFRbkUsTUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsSUFBSSxHQUFHLEVBQWxCLENBQWhCO0FBQ0EsTUFBTVMsT0FBTyxHQUFHVCxJQUFJLEdBQUcsRUFBdkI7O0FBRUEsV0FBU1UsY0FBVCxHQUF5QjtBQUN2QlAsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNEOztBQUVELFdBQVNRLGNBQVQsR0FBeUI7QUFDdkJDLGdCQUFZLENBQUNuQixnQkFBRCxDQUFaO0FBQ0FVLGVBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUUsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQUosV0FBTyxDQUFDLE9BQU8sRUFBUixDQUFQO0FBQ0Q7O0FBRURZLHlEQUFTLENBQUMsWUFBSTtBQUNaLFFBQUlYLFFBQVEsSUFBSUYsSUFBSSxHQUFHLENBQXZCLEVBQXlCO0FBQ3ZCUCxzQkFBZ0IsR0FBR3FCLFVBQVUsQ0FBQyxZQUFJO0FBQ2hDYixlQUFPLENBQUNELElBQUksR0FBQyxDQUFOLENBQVA7QUFDRCxPQUY0QixFQUUxQixJQUYwQixDQUE3QjtBQUdELEtBSkQsTUFJTyxJQUFJRSxRQUFRLElBQUlGLElBQUksS0FBSyxDQUF6QixFQUE0QjtBQUNqQ0ssb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUYsaUJBQVcsQ0FBQyxLQUFELENBQVg7QUFDQUwsdUJBQWlCO0FBQ2xCO0FBQ0YsR0FWUSxFQVVOLENBQUNJLFFBQUQsRUFBV0YsSUFBWCxDQVZNLENBQVQ7QUFZQSxzQkFDRSxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUNBLFNBQUssRUFBRTtBQUNITSxhQUFPLEVBQVBBLE9BREc7QUFFSEcsYUFBTyxFQUFQQSxPQUZHO0FBR0hMLGlCQUFXLEVBQVhBLFdBSEc7QUFJSEYsY0FBUSxFQUFSQSxRQUpHO0FBS0hRLG9CQUFjLEVBQWRBLGNBTEc7QUFNSEMsb0JBQWMsRUFBZEE7QUFORyxLQURQO0FBQUEsY0FVR2hCO0FBVkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0dBaERlRCxpQjs7S0FBQUEsaUIiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ291bnRkb3duQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4vQ2hhbGxlbmdlc0NvbnRleHRcIjtcblxuaW50ZXJmYWNlIENvdW50ZG93bkNvbnRleHREYXRhIHtcbiAgbWludXRlczogbnVtYmVyO1xuICBzZWNvbmRzOiBudW1iZXI7XG4gIGhhc0ZpbmlzaGVkOiBib29sZWFuO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgc3RhcnRDb3VudGRvd246KCkgPT4gdm9pZDtcbiAgcmVzZXRDb3VudGRvd246KCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIENvdW50ZG93blByb3ZpZGVyUHJvcHN7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBDb3VudGRvd25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb3VudGRvd25Db250ZXh0RGF0YSlcblxubGV0IGNvdW50ZG93blRpbWVvdXQ6Tm9kZUpTLlRpbWVvdXQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBDb3VudGRvd25Qcm92aWRlcih7Y2hpbGRyZW59OkNvdW50ZG93blByb3ZpZGVyUHJvcHMgKXtcblxuICBjb25zdCB7c3RhcnROZXdDaGFsbGVuZ2V9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XG5cbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMC4wNSAqIDYwKTtcbiAgY29uc3QgWyBpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbIGhhc0ZpbmlzaGVkLCBzZXRIYXNGaW5pc2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgY29uc3Qgc2Vjb25kcyA9IHRpbWUgJSA2MDtcblxuICBmdW5jdGlvbiBzdGFydENvdW50ZG93bigpe1xuICAgIHNldElzQWN0aXZlKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDb3VudGRvd24oKXtcbiAgICBjbGVhclRpbWVvdXQoY291bnRkb3duVGltZW91dCk7XG4gICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xuICAgIHNldEhhc0ZpbmlzaGVkKGZhbHNlKTtcbiAgICBzZXRUaW1lKDAuMDUgKiA2MCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZiAoaXNBY3RpdmUgJiYgdGltZSA+IDApe1xuICAgICAgY291bnRkb3duVGltZW91dCA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgc2V0VGltZSh0aW1lLTEpO1xuICAgICAgfSwgMTAwMClcbiAgICB9IGVsc2UgaWYgKGlzQWN0aXZlICYmIHRpbWUgPT09IDApIHtcbiAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpO1xuICAgICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xuICAgICAgc3RhcnROZXdDaGFsbGVuZ2UoKTtcbiAgICB9XG4gIH0sIFtpc0FjdGl2ZSwgdGltZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8Q291bnRkb3duQ29udGV4dC5Qcm92aWRlciBcbiAgICB2YWx1ZT17e1xuICAgICAgICBtaW51dGVzLFxuICAgICAgICBzZWNvbmRzLFxuICAgICAgICBoYXNGaW5pc2hlZCxcbiAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgIHN0YXJ0Q291bnRkb3duLFxuICAgICAgICByZXNldENvdW50ZG93bixcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ291bnRkb3duQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/CountdownContext.tsx\n");

/***/ })

})