webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_renato_nlw4_aulas_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LevelUpModal */ \"./src/components/LevelUpModal.tsx\");\n\n\n\nvar _jsxFileName = \"/home/renato/nlw4/aulas/moveit-next/src/contexts/ChallengesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var _rest$level, _rest$currentExperien, _rest$challengesCompl;\n\n  var children = _ref.children,\n      rest = Object(_home_renato_nlw4_aulas_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"children\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0),\n      currentExperience = _useState2[0],\n      setCurrentExperience = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0),\n      challengesCompleted = _useState3[0],\n      setChallengesCompleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setActiveChallenge = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isLevelUpModalOpen = _useState5[0],\n      setIsLevelUpModalOpen = _useState5[1];\n\n  var experienceTonNextLevel = Math.pow((level + 1) * 4, 2);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    Notification.requestPermission();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', String(level));\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', String(currentExperience));\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challengesCompleted', String(challengesCompleted));\n  }, [level, currentExperience, challengesCompleted]);\n\n  function levelUp() {\n    setLevel(level + 1);\n    setIsLevelUpModalOpen(true);\n  }\n\n  function closeLevelUpModal() {\n    setIsLevelUpModalOpen(false);\n  }\n\n  function startNewChallenge() {\n    var randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randomChallengeIndex];\n    setActiveChallenge(challenge);\n    new Audio('/notification.mp3').play();\n\n    if (Notification.permission === 'granted') {\n      new Notification('Novo Desafio', {\n        body: \"Valendo \".concat(challenge.amount, \"xp!\")\n      });\n    }\n  }\n\n  function resetChallenge() {\n    setActiveChallenge(null);\n  }\n\n  function completeChallenge() {\n    if (!activeChallenge) {\n      return;\n    }\n\n    var amount = activeChallenge.amount;\n    var finalExperience = currentExperience + amount;\n\n    if (finalExperience >= experienceTonNextLevel) {\n      finalExperience = finalExperience - experienceTonNextLevel;\n      levelUp();\n    }\n\n    setCurrentExperience(finalExperience);\n    setActiveChallenge(null);\n    setChallengesCompleted(challengesCompleted + 1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentExperience: currentExperience,\n      experienceTonNextLevel: experienceTonNextLevel,\n      challengesCompleted: challengesCompleted,\n      activeChallenge: activeChallenge,\n      levelUp: levelUp,\n      startNewChallenge: startNewChallenge,\n      resetChallenge: resetChallenge,\n      completeChallenge: completeChallenge\n    },\n    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__[\"LevelUpModal\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 30\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ChallengesProvider, \"UqHVByiPLb7kVaLDO0z8bDhE3KM=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeD9lYjI4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImlzTGV2ZWxVcE1vZGFsT3BlbiIsInNldElzTGV2ZWxVcE1vZGFsT3BlbiIsImV4cGVyaWVuY2VUb25OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJDb29raWVzIiwic2V0IiwiU3RyaW5nIiwibGV2ZWxVcCIsImNsb3NlTGV2ZWxVcE1vZGFsIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImZpbmFsRXhwZXJpZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBNEJPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsU0FBU0Msa0JBQVQsT0FHbUI7QUFBQTs7QUFBQTs7QUFBQSxNQUZ4QkMsUUFFd0IsUUFGeEJBLFFBRXdCO0FBQUEsTUFEckJDLElBQ3FCOztBQUFBLGtCQUNF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Q0FBdkIsQ0FBdEI7QUFFRDs7QUFFRCxzQkFDRSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNFLFNBQUssRUFBRTtBQUNMSixXQUFLLEVBQUxBLEtBREs7QUFFTEUsdUJBQWlCLEVBQWpCQSxpQkFGSztBQUdMUSw0QkFBc0IsRUFBdEJBLHNCQUhLO0FBSUxOLHlCQUFtQixFQUFuQkEsbUJBSks7QUFLTEUscUJBQWUsRUFBZkEsZUFMSztBQU1MYSxhQUFPLEVBQVBBLE9BTks7QUFPTEUsdUJBQWlCLEVBQWpCQSxpQkFQSztBQVFMWSxvQkFBYyxFQUFkQSxjQVJLO0FBU0xDLHVCQUFpQixFQUFqQkE7QUFUSyxLQURUO0FBQUEsZUFjR3JDLFFBZEgsRUFlR1csa0JBQWtCLGlCQUFJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0dBM0ZlWixrQjs7S0FBQUEsa0IiLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tICcuLi8uLi9jaGFsbGVuZ2VzLmpzb24nO1xuaW1wb3J0IHsgTGV2ZWxVcE1vZGFsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MZXZlbFVwTW9kYWwnO1xuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcbiAgdHlwZTogJ2JvZHknIHwgJ2V5ZSc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlQ29udGV4dERhdGEge1xuICBsZXZlbDogbnVtYmVyOyBcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcbiAgZXhwZXJpZW5jZVRvbk5leHRMZXZlbDogbnVtYmVyO1xuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XG4gIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xuICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xuICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgcmVzZXRDaGFsbGVuZ2U6KCkgPT4gdm9pZDtcbiAgY29tcGxldGVDaGFsbGVuZ2U6KCkgPT4gdm9pZDtcbiAgXG59XG5cbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wc3tcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgbGV2ZWw6bnVtYmVyOyBcbiAgY3VycmVudEV4cGVyaWVuY2U6bnVtYmVyOyBcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDpudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlQ29udGV4dERhdGEpO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHtcbiAgY2hpbGRyZW4sIFxuICAuLi5yZXN0XG59OkNoYWxsZW5nZXNQcm92aWRlclByb3BzKXtcbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZShyZXN0LmxldmVsID8/IDEpO1xuICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKHJlc3QuY3VycmVudEV4cGVyaWVuY2UgPz8gMCk7XG4gIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKHJlc3QuY2hhbGxlbmdlc0NvbXBsZXRlZCA/PyAwKTtcblxuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xldmVsVXBNb2RhbE9wZW4sIHNldElzTGV2ZWxVcE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZXhwZXJpZW5jZVRvbk5leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCsxICkqIDQgLCAyKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKClcbiAgfSwgW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+e1xuICAgIENvb2tpZXMuc2V0KCdsZXZlbCcsIFN0cmluZyhsZXZlbCkpO1xuICAgIENvb2tpZXMuc2V0KCdjdXJyZW50RXhwZXJpZW5jZScsIFN0cmluZyhjdXJyZW50RXhwZXJpZW5jZSkpO1xuICAgIENvb2tpZXMuc2V0KCdjaGFsbGVuZ2VzQ29tcGxldGVkJywgU3RyaW5nKGNoYWxsZW5nZXNDb21wbGV0ZWQpKTtcbiAgfSwgW2xldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlc0NvbXBsZXRlZF0pXG5cbiAgZnVuY3Rpb24gbGV2ZWxVcCgpe1xuICAgIHNldExldmVsKGxldmVsICsgMSk7XG4gICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VMZXZlbFVwTW9kYWwoKXtcbiAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKXtcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ2VJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKVxuICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdlSW5kZXhdO1xuXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XG5cbiAgICBuZXcgQXVkaW8oJy9ub3RpZmljYXRpb24ubXAzJykucGxheSgpO1xuXG4gICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcpIHtcbiAgICAgIG5ldyBOb3RpZmljYXRpb24oJ05vdm8gRGVzYWZpbycsIHtcbiAgICAgICAgYm9keTogYFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fXhwIWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKXtcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpe1xuICAgIGlmICghYWN0aXZlQ2hhbGxlbmdlKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xuXG4gICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xuXG4gICAgaWYgKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9uTmV4dExldmVsKXtcbiAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb25OZXh0TGV2ZWw7XG4gICAgICBsZXZlbFVwKCk7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XG4gICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZChjaGFsbGVuZ2VzQ29tcGxldGVkICsgMSk7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyIFxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgbGV2ZWwsIFxuICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSwgXG4gICAgICAgIGV4cGVyaWVuY2VUb25OZXh0TGV2ZWwsXG4gICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsIFxuICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXG4gICAgICAgIGxldmVsVXAsXG4gICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxuICAgICAgICByZXNldENoYWxsZW5nZSxcbiAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXG4gICAgICAgIFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7aXNMZXZlbFVwTW9kYWxPcGVuICYmIDxMZXZlbFVwTW9kYWwgLz59XG4gICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbiAgXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n");

/***/ })

})