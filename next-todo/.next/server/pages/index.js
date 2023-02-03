"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\84102\\\\React\\\\NextProgramming\\\\next-todo\\\\components\\\\TodoList.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar TrashCanIcon = function TrashCanIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n      d: \"M20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071V6.506zM14.265 9a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75zm-4.5 0a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75zm-.75-5V3c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254a.747.747 0 0 1 0 1.494H3.762a.747.747 0 0 1 0-1.494zm4.5 0v-.5h-3V4z\",\n      fillRule: \"nonzero\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\nTrashCanIcon.defaultProps = {\n  clipRule: \"evenodd\",\n  fillRule: \"evenodd\",\n  strokeLinejoin: \"round\",\n  strokeMiterlimit: \"2\",\n  viewBox: \"0 0 24 24\",\n  xmlns: \"http://www.w3.org/2000/svg\"\n};\n\nvar CheckMarkIcon = function CheckMarkIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"path\", {\n      d: \"M21 6.285 9.84 19.018 3 13l1.319-1.49 5.341 4.686L19.525 5 21 6.285z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\nCheckMarkIcon.defaultProps = {\n  width: \"24\",\n  height: \"24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fillRule: \"evenodd\",\n  clipRule: \"evenodd\"\n};\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-1t8agvw-0\"\n})([\"width:100%;.todo-num{margin-left:12px;}.todo-list-header{padding:12px;position:relative;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;margin:0 0 8px;span{margin-left:12px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid \", \";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:\", \";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:16px;path{fill:\", \";}}.todo-check-mark{fill:\", \";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid \", \";background-color:transparent;outline:none;}}}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].yellow);\n\nconst TodoList = ({\n  todos\n}) => {\n  const getTodoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {\n    let red = 0;\n    let orange = 0;\n    let yellow = 0;\n    let green = 0;\n    let blue = 0;\n    let navy = 0;\n    todos.forEach(todo => {\n      switch (todo.color) {\n        case \"red\":\n          red++;\n          break;\n\n        case \"orange\":\n          orange++;\n          break;\n\n        case \"yellow\":\n          yellow++;\n          break;\n\n        case \"green\":\n          green++;\n          break;\n\n        case \"blue\":\n          blue++;\n          break;\n\n        case \"navy\":\n          navy++;\n          break;\n\n        default:\n          break;\n      }\n    });\n    return {\n      red,\n      orange,\n      yellow,\n      green,\n      blue,\n      navy\n    };\n  }, [todos]);\n  const todoColorNums = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(getTodoColorNums, [todos]);\n  console.log(todoColorNums);\n  const todoColorNums2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {\n    const colors = {};\n    todos.forEach(todo => {\n      const value = colors[todo.color];\n\n      if (!value) {\n        // 존재하지 않던 key라면\n        colors[`${todo.color}`] = 1;\n      } else {\n        // 존재하는 키라면\n        colors[`${todo.color}`] = value + 1;\n      }\n    });\n    return colors;\n  }, [todos]);\n  console.log(todoColorNums2);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 216,\n          columnNumber: 18\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 215,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"todo-list-header-colors\",\n        children: Object.keys(todoColorNums).map((color, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"todo-list-header-color-num\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: `todo-list-header-round-color bg-${color}`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 221,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: [todoColorNums[color], \"\\uAC1C\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 222,\n            columnNumber: 15\n          }, undefined)]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 220,\n          columnNumber: 13\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 218,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 214,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"ul\", {\n      className: \"todo-list\",\n      children: todos.map(todo => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"li\", {\n        className: \"todo-item\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"todo-left-side\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n            className: `todo-color-block bg-${todo.color}`\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 231,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            className: `todo-text ${todo.checked ? \"checked-todo-text\" : \"\"}`,\n            children: todo.text\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 232,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 230,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"todo-right-side\",\n          children: [todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(TrashCanIcon, {\n              className: \"todo-trash-can\",\n              onClick: () => {}\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 243,\n              columnNumber: 19\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CheckMarkIcon, {\n              className: \"todo-check-mark\",\n              onClick: () => {}\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 244,\n              columnNumber: 19\n            }, undefined)]\n          }, void 0, true), !todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: \"todo-button\",\n            onClick: () => {}\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 251,\n            columnNumber: 17\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 240,\n          columnNumber: 13\n        }, undefined)]\n      }, todo.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 229,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 227,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 213,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTLEVBQUMsaUJBRFo7Y0FFRSxPQUFPLEVBQUUsTUFBTSxDQUFFO1lBRm5CO2NBQUE7Y0FBQTtjQUFBO1lBQUEsYUFGRjtVQUFBLGdCQUZKLEVBVUcsQ0FBQ2IsSUFBSSxDQUFDYSxPQUFOLGlCQUNDO1lBQ0UsSUFBSSxFQUFDLFFBRFA7WUFFRSxTQUFTLEVBQUMsYUFGWjtZQUdFLE9BQU8sRUFBRSxNQUFNLENBQUU7VUFIbkI7WUFBQTtZQUFBO1lBQUE7VUFBQSxhQVhKO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxhQVhGO01BQUEsR0FBK0JiLElBQUksQ0FBQ2UsRUFBcEM7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQUREO0lBREg7TUFBQTtNQUFBO01BQUE7SUFBQSxhQWRGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURGO0FBbURELENBMUhEOztBQTRIQSxpRUFBZW5CLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeD8xYzhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vdHlwZXMvdG9kb1wiO1xyXG5pbXBvcnQgVHJhc2hDYW5JY29uIGZyb20gXCIuLi9wdWJsaWMvc3RhdGljcy9zdmcvdHJhc2hfY2FuLnN2Z1wiO1xyXG5pbXBvcnQgQ2hlY2tNYXJrSWNvbiBmcm9tIFwiLi4vcHVibGljL3N0YXRpY3Mvc3ZnL2NoZWNrX21hcmsuc3ZnXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAudG9kby1udW0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICAudG9kby1saXN0LWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcclxuXHJcbiAgICAudG9kby1saXN0LWxhc3QtdG9kbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luOiAwIDAgOHB4O1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9ycyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAudG9kby1saXN0LWhlYWRlci1jb2xvci1udW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3Ige1xyXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG9kby1saXN0IHtcclxuICAgIC50b2RvLWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcblxyXG4gICAgICAudG9kby1sZWZ0LXNpZGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLnRvZG8tY29sb3ItYmxvY2sge1xyXG4gICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jaGVja2VkLXRvZG8tdGV4dCB7XHJcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXl9O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b2RvLXRleHQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudG9kby1yaWdodC1zaWRlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuXHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9kby10cmFzaC1jYW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICBwYXRoIHtcclxuICAgICAgICAgICAgZmlsbDogJHtwYWxldHRlLmRlZXBfcmVkfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50b2RvLWNoZWNrLW1hcmsge1xyXG4gICAgICAgICAgZmlsbDogJHtwYWxldHRlLmRlZXBfZ3JlZW59O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvZG8tYnV0dG9uIHtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJnLWJsdWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmJsdWV9O1xyXG4gIH1cclxuXHJcbiAgLmJnLWdyZWVuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmVlbn07XHJcbiAgfVxyXG5cclxuICAuYmctbmF2eSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUubmF2eX07XHJcbiAgfVxyXG5cclxuICAuYmctb3JhbmdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5vcmFuZ2V9O1xyXG4gIH1cclxuXHJcbiAgLmJnLXJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUucmVkfTtcclxuICB9XHJcblxyXG4gIC5iZy15ZWxsb3cge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnllbGxvd307XHJcbiAgfVxyXG5gO1xyXG5cclxuaW50ZXJmYWNlIElQcm9wcyB7XHJcbiAgdG9kb3M6IFRvZG9UeXBlW107XHJcbn1cclxuXHJcbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHsgdG9kb3MgfSkgPT4ge1xyXG4gIGNvbnN0IGdldFRvZG9Db2xvck51bXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBsZXQgcmVkID0gMDtcclxuICAgIGxldCBvcmFuZ2UgPSAwO1xyXG4gICAgbGV0IHllbGxvdyA9IDA7XHJcbiAgICBsZXQgZ3JlZW4gPSAwO1xyXG4gICAgbGV0IGJsdWUgPSAwO1xyXG4gICAgbGV0IG5hdnkgPSAwO1xyXG5cclxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgc3dpdGNoICh0b2RvLmNvbG9yKSB7XHJcbiAgICAgICAgY2FzZSBcInJlZFwiOlxyXG4gICAgICAgICAgcmVkKys7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwib3JhbmdlXCI6XHJcbiAgICAgICAgICBvcmFuZ2UrKztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcclxuICAgICAgICAgIHllbGxvdysrO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImdyZWVuXCI6XHJcbiAgICAgICAgICBncmVlbisrO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcImJsdWVcIjpcclxuICAgICAgICAgIGJsdWUrKztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJuYXZ5XCI6XHJcbiAgICAgICAgICBuYXZ5Kys7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZCxcclxuICAgICAgb3JhbmdlLFxyXG4gICAgICB5ZWxsb3csXHJcbiAgICAgIGdyZWVuLFxyXG4gICAgICBibHVlLFxyXG4gICAgICBuYXZ5LFxyXG4gICAgfTtcclxuICB9LCBbdG9kb3NdKTtcclxuXHJcbiAgY29uc3QgdG9kb0NvbG9yTnVtcyA9IHVzZU1lbW8oZ2V0VG9kb0NvbG9yTnVtcywgW3RvZG9zXSk7XHJcbiAgY29uc29sZS5sb2codG9kb0NvbG9yTnVtcyk7XHJcblxyXG4gIHR5cGUgT2JqZWN0SW5kZXhUeXBlID0ge1xyXG4gICAgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZG9Db2xvck51bXMyID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBjb2xvcnM6IE9iamVjdEluZGV4VHlwZSA9IHt9O1xyXG5cclxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBjb2xvcnNbdG9kby5jb2xvcl07XHJcblxyXG4gICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgLy8g7KG07J6s7ZWY7KeAIOyViuuNmCBrZXnrnbzrqbRcclxuICAgICAgICBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8g7KG07J6s7ZWY64qUIO2CpOudvOuptFxyXG4gICAgICAgIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gdmFsdWUgKyAxO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY29sb3JzO1xyXG4gIH0sIFt0b2Rvc10pO1xyXG5cclxuICBjb25zb2xlLmxvZyh0b2RvQ29sb3JOdW1zMik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXJcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtbGFzdC10b2RvXCI+XHJcbiAgICAgICAgICDrgqjsnYAgVE9ETzxzcGFuPnt0b2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdC1oZWFkZXItY29sb3JzXCI+XHJcbiAgICAgICAgICB7T2JqZWN0LmtleXModG9kb0NvbG9yTnVtcykubWFwKChjb2xvciwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciBiZy0ke2NvbG9yfWB9IC8+XHJcbiAgICAgICAgICAgICAgPHA+e3RvZG9Db2xvck51bXNbY29sb3JdfeqwnDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b2RvLWxpc3RcIj5cclxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidG9kby1pdGVtXCIga2V5PXt0b2RvLmlkfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLWxlZnQtc2lkZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1jb2xvci1ibG9jayBiZy0ke3RvZG8uY29sb3J9YH0gLz5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdG9kby10ZXh0ICR7XHJcbiAgICAgICAgICAgICAgICAgIHRvZG8uY2hlY2tlZCA/IFwiY2hlY2tlZC10b2RvLXRleHRcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0b2RvLnRleHR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2RvLXJpZ2h0LXNpZGVcIj5cclxuICAgICAgICAgICAgICB7dG9kby5jaGVja2VkICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxUcmFzaENhbkljb24gY2xhc3NOYW1lPVwidG9kby10cmFzaC1jYW5cIiBvbkNsaWNrPXsoKSA9PiB7fX0gLz5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrTWFya0ljb25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b2RvLWNoZWNrLW1hcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7IXRvZG8uY2hlY2tlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b2RvLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsInN0eWxlZCIsInBhbGV0dGUiLCJUcmFzaENhbkljb24iLCJDaGVja01hcmtJY29uIiwiQ29udGFpbmVyIiwiZGl2IiwiZ3JheSIsImRlZXBfcmVkIiwiZGVlcF9ncmVlbiIsImJsdWUiLCJncmVlbiIsIm5hdnkiLCJvcmFuZ2UiLCJyZWQiLCJ5ZWxsb3ciLCJUb2RvTGlzdCIsInRvZG9zIiwiZ2V0VG9kb0NvbG9yTnVtcyIsImZvckVhY2giLCJ0b2RvIiwiY29sb3IiLCJ0b2RvQ29sb3JOdW1zIiwiY29uc29sZSIsImxvZyIsInRvZG9Db2xvck51bXMyIiwiY29sb3JzIiwidmFsdWUiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJjaGVja2VkIiwidGV4dCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ }),

/***/ "./lib/api/index.ts":
/*!**************************!*\
  !*** ./lib/api/index.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axios\": () => (/* binding */ axios)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst axios = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n  baseURL: \"\\\"http://localhost:3000\"\n});\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxLQUFLLEdBQUdELG9EQUFBLENBQWE7RUFDaENHLE9BQU8sRUFBRUMseUJBQStCRTtBQURSLENBQWIsQ0FBZCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vbGliL2FwaS9pbmRleC50cz8wYjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBheGlvcyA9IEF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJBeGlvcyIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api/index.ts\n");

/***/ }),

/***/ "./lib/api/todo.ts":
/*!*************************!*\
  !*** ./lib/api/todo.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTodosAPI\": () => (/* binding */ getTodosAPI)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./lib/api/index.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([___WEBPACK_IMPORTED_MODULE_0__]);\n___WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getTodosAPI = () => ___WEBPACK_IMPORTED_MODULE_0__.axios.get(\"api/todos\");\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpL3RvZG8udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUdPLE1BQU1DLFdBQVcsR0FBRyxNQUFNRCx3Q0FBQSxDQUFzQixXQUF0QixDQUExQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vbGliL2FwaS90b2RvLnRzPzI5M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXhpb3MgfSBmcm9tIFwiLlwiO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlcy90b2RvXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9kb3NBUEkgPSAoKSA9PiBheGlvcy5nZXQ8VG9kb1R5cGVbXT4oXCJhcGkvdG9kb3NcIik7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImdldFRvZG9zQVBJIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/api/todo.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TodoList */ \"./components/TodoList.tsx\");\n/* harmony import */ var _lib_api_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/api/todo */ \"./lib/api/todo.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_api_todo__WEBPACK_IMPORTED_MODULE_2__]);\n_lib_api_todo__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nvar _jsxFileName = \"C:\\\\Users\\\\84102\\\\React\\\\NextProgramming\\\\next-todo\\\\pages\\\\index.tsx\";\n\n\n\n\n\nconst app = ({\n  todos\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    todos: todos\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 10\n  }, undefined);\n};\n\nconst getServerSideProps = async () => {\n  try {\n    const {\n      data\n    } = await (0,_lib_api_todo__WEBPACK_IMPORTED_MODULE_2__.getTodosAPI)();\n    return {\n      props: {\n        todos: data\n      }\n    };\n  } catch (e) {\n    console.log(e);\n    return {\n      props: {\n        todos: []\n      }\n    };\n  }\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7OztBQU1BLE1BQU1HLEdBQXFCLEdBQUcsQ0FBQztFQUFFQztBQUFGLENBQUQsS0FBZTtFQUMzQyxvQkFBTyw4REFBQyw0REFBRDtJQUFVLEtBQUssRUFBRUE7RUFBakI7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQUFQO0FBQ0QsQ0FGRDs7QUFJTyxNQUFNQyxrQkFBc0MsR0FBRyxZQUFZO0VBQ2hFLElBQUk7SUFDRixNQUFNO01BQUVDO0lBQUYsSUFBVyxNQUFNSiwwREFBVyxFQUFsQztJQUVBLE9BQU87TUFBRUssS0FBSyxFQUFFO1FBQUVILEtBQUssRUFBRUU7TUFBVDtJQUFULENBQVA7RUFDRCxDQUpELENBSUUsT0FBT0UsQ0FBUCxFQUFVO0lBQ1ZDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0lBQ0EsT0FBTztNQUFFRCxLQUFLLEVBQUU7UUFBRUgsS0FBSyxFQUFFO01BQVQ7SUFBVCxDQUFQO0VBQ0Q7QUFDRixDQVRNLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSwgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9kb0xpc3RcIjtcclxuaW1wb3J0IHsgVG9kb1R5cGUgfSBmcm9tIFwiLi4vdHlwZXMvdG9kb1wiO1xyXG5pbXBvcnQgeyBnZXRUb2Rvc0FQSSB9IGZyb20gXCIuLi9saWIvYXBpL3RvZG9cIjtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIHRvZG9zOiBUb2RvVHlwZVtdO1xyXG59XHJcblxyXG5jb25zdCBhcHA6IE5leHRQYWdlPElQcm9wcz4gPSAoeyB0b2RvcyB9KSA9PiB7XHJcbiAgcmV0dXJuIDxUb2RvTGlzdCB0b2Rvcz17dG9kb3N9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGdldFRvZG9zQVBJKCk7XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9kb3M6IGRhdGEgfSB9O1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgdG9kb3M6IFtdIH0gfTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRvZG9MaXN0IiwiZ2V0VG9kb3NBUEkiLCJhcHAiLCJ0b2RvcyIsImdldFNlcnZlclNpZGVQcm9wcyIsImRhdGEiLCJwcm9wcyIsImUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/palette.ts":
/*!***************************!*\
  !*** ./styles/palette.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  red: \"#FFAFB0\",\n  orange: \"#FFC282\",\n  yellow: \"#FCFFB0\",\n  green: \"#E2FFAF\",\n  blue: \"#AEE4FF\",\n  navy: \"#B5C7ED\",\n  gray: \"#E5E5E5\",\n  deep_red: \"#F35456\",\n  deep_green: \"#47E774\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvcGFsZXR0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWU7RUFDYkEsR0FBRyxFQUFFLFNBRFE7RUFFYkMsTUFBTSxFQUFFLFNBRks7RUFHYkMsTUFBTSxFQUFFLFNBSEs7RUFJYkMsS0FBSyxFQUFFLFNBSk07RUFLYkMsSUFBSSxFQUFFLFNBTE87RUFNYkMsSUFBSSxFQUFFLFNBTk87RUFPYkMsSUFBSSxFQUFFLFNBUE87RUFRYkMsUUFBUSxFQUFFLFNBUkc7RUFTYkMsVUFBVSxFQUFFO0FBVEMsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL3N0eWxlcy9wYWxldHRlLnRzP2Q4ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHJlZDogXCIjRkZBRkIwXCIsXHJcbiAgb3JhbmdlOiBcIiNGRkMyODJcIixcclxuICB5ZWxsb3c6IFwiI0ZDRkZCMFwiLFxyXG4gIGdyZWVuOiBcIiNFMkZGQUZcIixcclxuICBibHVlOiBcIiNBRUU0RkZcIixcclxuICBuYXZ5OiBcIiNCNUM3RURcIixcclxuICBncmF5OiBcIiNFNUU1RTVcIixcclxuICBkZWVwX3JlZDogXCIjRjM1NDU2XCIsXHJcbiAgZGVlcF9ncmVlbjogXCIjNDdFNzc0XCIsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJyZWQiLCJvcmFuZ2UiLCJ5ZWxsb3ciLCJncmVlbiIsImJsdWUiLCJuYXZ5IiwiZ3JheSIsImRlZXBfcmVkIiwiZGVlcF9ncmVlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/palette.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();