/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var connectkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! connectkit */ \"connectkit\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_2__, connectkit__WEBPACK_IMPORTED_MODULE_3__]);\n([wagmi__WEBPACK_IMPORTED_MODULE_2__, connectkit__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst config = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.createConfig)((0,connectkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultConfig)({\n    // Required API Keys\n    alchemyId: \"rfw2J1g8TQrsZ6vToSaoHSswWKfH1bEJ\",\n    walletConnectProjectId: \"a2bfdd4ef403e16c1f3e28010134096c\",\n    // Required\n    appName: \"Memswap\",\n    // Optional\n    appDescription: \"Memswap App\"\n}));\nfunction formatAddress(address) {\n    if (!address) return \"\";\n    const start = address.substring(0, 6); // \"0x\" + first 4 characters\n    const end = address.substring(address.length - 3);\n    return `${start}...${end}`;\n}\nfunction App({ Component , pageProps  }) {\n    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const { 0: showOrder , 1: setShowOrder  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // Added state for overlay control\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>setMounted(true), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\",\n            position: \"relative\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/memlogo.png\",\n                alt: \"Memswap\",\n                className: \"w-10 h-10 absolute top-4 left-5 h-12 w-auto\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jckso\\\\Desktop\\\\0x-nextjs-demo-app\\\\pages\\\\_app.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_2__.WagmiConfig, {\n                config: config,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(connectkit__WEBPACK_IMPORTED_MODULE_3__.ConnectKitProvider, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(connectkit__WEBPACK_IMPORTED_MODULE_3__.ConnectKitButton.Custom, {\n                            children: ({ isConnected , isConnecting , show , hide , address , ensName , chain ,  })=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: isConnected ? ()=>setShowOrder(true) : show,\n                                    type: \"button\",\n                                    className: \"bg-gray-500 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-xl absolute top-5 right-5\",\n                                    children: isConnected ? formatAddress(address) : \"Connect Wallet\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\jckso\\\\Desktop\\\\0x-nextjs-demo-app\\\\pages\\\\_app.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, this);\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jckso\\\\Desktop\\\\0x-nextjs-demo-app\\\\pages\\\\_app.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        mounted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps,\n                            showOrder: showOrder,\n                            setShowOrder: setShowOrder\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\jckso\\\\Desktop\\\\0x-nextjs-demo-app\\\\pages\\\\_app.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 23\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\jckso\\\\Desktop\\\\0x-nextjs-demo-app\\\\pages\\\\_app.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jckso\\\\Desktop\\\\0x-nextjs-demo-app\\\\pages\\\\_app.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\jckso\\\\Desktop\\\\0x-nextjs-demo-app\\\\pages\\\\_app.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUVvQjtBQUs5QjtBQUN3QjtBQVU1QyxNQUFNTyxNQUFNLEdBQUdOLG1EQUFZLENBQ3pCRyw0REFBZ0IsQ0FBQztJQUNmLG9CQUFvQjtJQUNwQkksU0FBUyxFQUFFQyxrQ0FBdUM7SUFDbERHLHNCQUFzQixFQUFFLGtDQUFrQztJQUUxRCxXQUFXO0lBQ1hDLE9BQU8sRUFBRSxTQUFTO0lBRWxCLFdBQVc7SUFDWEMsY0FBYyxFQUFFLGFBQWE7Q0FDOUIsQ0FBQyxDQUNIO0FBRUQsU0FBU0MsYUFBYSxDQUFDQyxPQUFlLEVBQVU7SUFDOUMsSUFBSSxDQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDeEIsTUFBTUMsS0FBSyxHQUFHRCxPQUFPLENBQUNFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsNEJBQTRCO0lBQ25FLE1BQU1DLEdBQUcsR0FBR0gsT0FBTyxDQUFDRSxTQUFTLENBQUNGLE9BQU8sQ0FBQ0ksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQUMsRUFBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRWMsU0FBU0UsR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDOUQsTUFBTSxLQUFDQyxPQUFPLE1BQUVDLFVBQVUsTUFBSW5CLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQzdDLE1BQU0sS0FBQ29CLFNBQVMsTUFBRUMsWUFBWSxNQUFJckIsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxrQ0FBa0M7SUFFckZELGdEQUFTLENBQUMsSUFBTW9CLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUV0QyxxQkFDRSw4REFBQ0csS0FBRztRQUFDQyxLQUFLLEVBQUU7WUFBRUMsT0FBTyxFQUFFLE1BQU07WUFBRUMsUUFBUSxFQUFFLFVBQVU7U0FBRTs7MEJBQ25ELDhEQUFDQyxLQUFHO2dCQUFDQyxHQUFHLEVBQUMsY0FBYztnQkFBQ0MsR0FBRyxFQUFDLFNBQVM7Z0JBQUNDLFNBQVMsRUFBQyw2Q0FBNkM7Ozs7O29CQUFHOzBCQUVoRyw4REFBQ25DLDhDQUFXO2dCQUFDTyxNQUFNLEVBQUVBLE1BQU07MEJBQ3pCLDRFQUFDTCwwREFBa0I7O3NDQUNqQiw4REFBQ0MsK0RBQXVCO3NDQUNyQixDQUFDLEVBQ0FrQyxXQUFXLEdBQ1hDLFlBQVksR0FDWkMsSUFBSSxHQUNKQyxJQUFJLEdBQ0p4QixPQUFPLEdBQ1B5QixPQUFPLEdBQ1BDLEtBQUssS0FDTixHQUFLO2dDQUNKLHFCQUNFLDhEQUFDQyxRQUFNO29DQUNMQyxPQUFPLEVBQUVQLFdBQVcsR0FBRyxJQUFNVixZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUdZLElBQUk7b0NBQ3RETSxJQUFJLEVBQUMsUUFBUTtvQ0FDYlYsU0FBUyxFQUFDLG9HQUFvRzs4Q0FFN0dFLFdBQVcsR0FBR3RCLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsZ0JBQWdCOzs7Ozt3Q0FDakQsQ0FDVDs0QkFDSixDQUFDOzs7OztnQ0FDdUI7d0JBQ3pCUSxPQUFPLGtCQUFJLDhEQUFDRixTQUFTOzRCQUFFLEdBQUdDLFNBQVM7NEJBQUVHLFNBQVMsRUFBRUEsU0FBUzs0QkFBRUMsWUFBWSxFQUFFQSxZQUFZOzs7OztnQ0FBSTt3QkFBQyxHQUFDOzs7Ozs7d0JBQ3pFOzs7OztvQkFDVDs7Ozs7O1lBQ1YsQ0FDTjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8weC1uZXh0anMtc3dhcC1wYWdlcy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFdhZ21pQ29uZmlnLCBjcmVhdGVDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7XG4gIENvbm5lY3RLaXRQcm92aWRlcixcbiAgQ29ubmVjdEtpdEJ1dHRvbixcbiAgZ2V0RGVmYXVsdENvbmZpZyxcbn0gZnJvbSBcImNvbm5lY3RraXRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIHVzZUFjY291bnQsXG4gIGVyYzIwQUJJLFxuICB1c2VDb250cmFjdFJlYWQsXG4gIHVzZVNlbmRUcmFuc2FjdGlvbixcbiAgdXNlUHJlcGFyZVNlbmRUcmFuc2FjdGlvbixcbiAgdHlwZSBBZGRyZXNzLFxufSBmcm9tIFwid2FnbWlcIjtcblxuY29uc3QgY29uZmlnID0gY3JlYXRlQ29uZmlnKFxuICBnZXREZWZhdWx0Q29uZmlnKHtcbiAgICAvLyBSZXF1aXJlZCBBUEkgS2V5c1xuICAgIGFsY2hlbXlJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQUxDSEVNWV9BUElfS0VZLFxuICAgIHdhbGxldENvbm5lY3RQcm9qZWN0SWQ6IFwiYTJiZmRkNGVmNDAzZTE2YzFmM2UyODAxMDEzNDA5NmNcIixcblxuICAgIC8vIFJlcXVpcmVkXG4gICAgYXBwTmFtZTogXCJNZW1zd2FwXCIsXG5cbiAgICAvLyBPcHRpb25hbFxuICAgIGFwcERlc2NyaXB0aW9uOiBcIk1lbXN3YXAgQXBwXCIsXG4gIH0pXG4pO1xuXG5mdW5jdGlvbiBmb3JtYXRBZGRyZXNzKGFkZHJlc3M6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICghYWRkcmVzcykgcmV0dXJuIFwiXCI7XG4gIGNvbnN0IHN0YXJ0ID0gYWRkcmVzcy5zdWJzdHJpbmcoMCwgNik7IC8vIFwiMHhcIiArIGZpcnN0IDQgY2hhcmFjdGVyc1xuICBjb25zdCBlbmQgPSBhZGRyZXNzLnN1YnN0cmluZyhhZGRyZXNzLmxlbmd0aCAtIDMpO1xuICByZXR1cm4gYCR7c3RhcnR9Li4uJHtlbmR9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW21vdW50ZWQsIHNldE1vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd09yZGVyLCBzZXRTaG93T3JkZXJdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBBZGRlZCBzdGF0ZSBmb3Igb3ZlcmxheSBjb250cm9sXG5cbiAgdXNlRWZmZWN0KCgpID0+IHNldE1vdW50ZWQodHJ1ZSksIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4XCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICA8aW1nIHNyYz1cIi9tZW1sb2dvLnBuZ1wiIGFsdD1cIk1lbXN3YXBcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgYWJzb2x1dGUgdG9wLTQgbGVmdC01IGgtMTIgdy1hdXRvXCIgLz5cblxuICAgICAgPFdhZ21pQ29uZmlnIGNvbmZpZz17Y29uZmlnfT5cbiAgICAgICAgPENvbm5lY3RLaXRQcm92aWRlcj5cbiAgICAgICAgICA8Q29ubmVjdEtpdEJ1dHRvbi5DdXN0b20+XG4gICAgICAgICAgICB7KHtcbiAgICAgICAgICAgICAgaXNDb25uZWN0ZWQsXG4gICAgICAgICAgICAgIGlzQ29ubmVjdGluZyxcbiAgICAgICAgICAgICAgc2hvdyxcbiAgICAgICAgICAgICAgaGlkZSxcbiAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgZW5zTmFtZSxcbiAgICAgICAgICAgICAgY2hhaW4sXG4gICAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aXNDb25uZWN0ZWQgPyAoKSA9PiBzZXRTaG93T3JkZXIodHJ1ZSkgOiBzaG93fSAvLyBNb2RpZmllZCBvbkNsaWNrIHRvIGNvbnRyb2wgdGhlIG92ZXJsYXlcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBweS0yLjUgcHgtNCByb3VuZGVkLXhsIGFic29sdXRlIHRvcC01IHJpZ2h0LTVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpc0Nvbm5lY3RlZCA/IGZvcm1hdEFkZHJlc3MoYWRkcmVzcykgOiBcIkNvbm5lY3QgV2FsbGV0XCJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvQ29ubmVjdEtpdEJ1dHRvbi5DdXN0b20+XG4gICAgICAgICAge21vdW50ZWQgJiYgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBzaG93T3JkZXI9e3Nob3dPcmRlcn0gc2V0U2hvd09yZGVyPXtzZXRTaG93T3JkZXJ9IC8+fSB7LyogUGFzc2VkIHNob3dPcmRlciBhbmQgc2V0U2hvd09yZGVyIGFzIHByb3BzIHRvIHRoZSBjb21wb25lbnQgKi99XG4gICAgICAgIDwvQ29ubmVjdEtpdFByb3ZpZGVyPlxuICAgICAgPC9XYWdtaUNvbmZpZz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJXYWdtaUNvbmZpZyIsImNyZWF0ZUNvbmZpZyIsIkNvbm5lY3RLaXRQcm92aWRlciIsIkNvbm5lY3RLaXRCdXR0b24iLCJnZXREZWZhdWx0Q29uZmlnIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb25maWciLCJhbGNoZW15SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQUxDSEVNWV9BUElfS0VZIiwid2FsbGV0Q29ubmVjdFByb2plY3RJZCIsImFwcE5hbWUiLCJhcHBEZXNjcmlwdGlvbiIsImZvcm1hdEFkZHJlc3MiLCJhZGRyZXNzIiwic3RhcnQiLCJzdWJzdHJpbmciLCJlbmQiLCJsZW5ndGgiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInNob3dPcmRlciIsInNldFNob3dPcmRlciIsImRpdiIsInN0eWxlIiwicGFkZGluZyIsInBvc2l0aW9uIiwiaW1nIiwic3JjIiwiYWx0IiwiY2xhc3NOYW1lIiwiQ3VzdG9tIiwiaXNDb25uZWN0ZWQiLCJpc0Nvbm5lY3RpbmciLCJzaG93IiwiaGlkZSIsImVuc05hbWUiLCJjaGFpbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "connectkit":
/*!*****************************!*\
  !*** external "connectkit" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = import("connectkit");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();