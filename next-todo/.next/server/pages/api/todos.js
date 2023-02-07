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
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./lib/data/index.ts":
/*!***************************!*\
  !*** ./lib/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"(api)/./lib/data/todo.ts\");\n\nconst Data = {\n  todo: _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUEsTUFBTUMsSUFBSSxHQUFHO0VBQUVELElBQUlBLCtDQUFBQTtBQUFOLENBQWI7QUFFQSxpRUFBZUMsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL2xpYi9kYXRhL2luZGV4LnRzP2EyNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuY29uc3QgRGF0YSA9IHsgdG9kbyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YTtcclxuIl0sIm5hbWVzIjpbInRvZG8iLCJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/data/index.ts\n");

/***/ }),

/***/ "(api)/./lib/data/todo.ts":
/*!**************************!*\
  !*** ./lib/data/todo.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//* 투두 리스트 데이터 불러오기\nconst getList = () => {\n  const todosBuffer = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(\"data/todos.json\");\n  const todosString = todosBuffer.toString();\n\n  if (!todosString) {\n    return [];\n  }\n\n  const todos = JSON.parse(todosString);\n  return todos;\n}; //* id의 투두가 있는지 확인하기\n\n\nconst exist = ({\n  id\n}) => {\n  const todos = getList();\n  const todo = todos.some(todo => todo.id === id);\n  return todo;\n}; //* 투두 리스트 저장하기\n\n\nconst write = async todos => {\n  (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(\"data/todos.json\", JSON.stringify(todos));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getList,\n  exist,\n  write\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGF0YS90b2RvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUdBO0FBQ0EsTUFBTUUsT0FBTyxHQUFHLE1BQU07RUFDcEIsTUFBTUMsV0FBVyxHQUFHSCxnREFBWSxDQUFDLGlCQUFELENBQWhDO0VBQ0EsTUFBTUksV0FBVyxHQUFHRCxXQUFXLENBQUNFLFFBQVosRUFBcEI7O0VBRUEsSUFBSSxDQUFDRCxXQUFMLEVBQWtCO0lBQ2hCLE9BQU8sRUFBUDtFQUNEOztFQUVELE1BQU1FLEtBQWlCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixXQUFYLENBQTFCO0VBQ0EsT0FBT0UsS0FBUDtBQUNELENBVkQsRUFZQTs7O0FBQ0EsTUFBTUcsS0FBSyxHQUFHLENBQUM7RUFBRUM7QUFBRixDQUFELEtBQTRCO0VBQ3hDLE1BQU1KLEtBQUssR0FBR0osT0FBTyxFQUFyQjtFQUNBLE1BQU1TLElBQUksR0FBR0wsS0FBSyxDQUFDTSxJQUFOLENBQVlELElBQUQsSUFBVUEsSUFBSSxDQUFDRCxFQUFMLEtBQVlBLEVBQWpDLENBQWI7RUFDQSxPQUFPQyxJQUFQO0FBQ0QsQ0FKRCxFQU1BOzs7QUFDQSxNQUFNRSxLQUFLLEdBQUcsTUFBT1AsS0FBUCxJQUE2QjtFQUN6Q0wsaURBQWEsQ0FBQyxpQkFBRCxFQUFvQk0sSUFBSSxDQUFDTyxTQUFMLENBQWVSLEtBQWYsQ0FBcEIsQ0FBYjtBQUNELENBRkQ7O0FBSUEsaUVBQWU7RUFBRUosT0FBRjtFQUFXTyxLQUFYO0VBQWtCSTtBQUFsQixDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vbGliL2RhdGEvdG9kby50cz9jZDcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luYyB9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgeyBUb2RvVHlwZSB9IGZyb20gXCIuLi8uLi90eXBlcy90b2RvXCI7XHJcblxyXG4vLyog7Yis65GQIOumrOyKpO2KuCDrjbDsnbTthLAg67aI65+s7Jik6riwXHJcbmNvbnN0IGdldExpc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgdG9kb3NCdWZmZXIgPSByZWFkRmlsZVN5bmMoXCJkYXRhL3RvZG9zLmpzb25cIik7XHJcbiAgY29uc3QgdG9kb3NTdHJpbmcgPSB0b2Rvc0J1ZmZlci50b1N0cmluZygpO1xyXG5cclxuICBpZiAoIXRvZG9zU3RyaW5nKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBjb25zdCB0b2RvczogVG9kb1R5cGVbXSA9IEpTT04ucGFyc2UodG9kb3NTdHJpbmcpO1xyXG4gIHJldHVybiB0b2RvcztcclxufTtcclxuXHJcbi8vKiBpZOydmCDtiKzrkZDqsIAg7J6I64qU7KeAIO2ZleyduO2VmOq4sFxyXG5jb25zdCBleGlzdCA9ICh7IGlkIH06IHsgaWQ6IG51bWJlciB9KSA9PiB7XHJcbiAgY29uc3QgdG9kb3MgPSBnZXRMaXN0KCk7XHJcbiAgY29uc3QgdG9kbyA9IHRvZG9zLnNvbWUoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkKTtcclxuICByZXR1cm4gdG9kbztcclxufTtcclxuXHJcbi8vKiDtiKzrkZAg66as7Iqk7Yq4IOyggOyepe2VmOq4sFxyXG5jb25zdCB3cml0ZSA9IGFzeW5jICh0b2RvczogVG9kb1R5cGVbXSkgPT4ge1xyXG4gIHdyaXRlRmlsZVN5bmMoXCJkYXRhL3RvZG9zLmpzb25cIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgZ2V0TGlzdCwgZXhpc3QsIHdyaXRlIH07XHJcbiJdLCJuYW1lcyI6WyJyZWFkRmlsZVN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwiZ2V0TGlzdCIsInRvZG9zQnVmZmVyIiwidG9kb3NTdHJpbmciLCJ0b1N0cmluZyIsInRvZG9zIiwiSlNPTiIsInBhcnNlIiwiZXhpc3QiLCJpZCIsInRvZG8iLCJzb21lIiwid3JpdGUiLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/data/todo.ts\n");

/***/ }),

/***/ "(api)/./pages/api/todos/index.ts":
/*!**********************************!*\
  !*** ./pages/api/todos/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"(api)/./lib/data/index.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === \"GET\") {\n    try {\n      const todos = await _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      res.statusCode = 200;\n      return res.send(todos);\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n\n  if (req.method === \"POST\") {\n    const {\n      text,\n      color\n    } = req.body;\n\n    if (!text || !color) {\n      res.statusCode = 400;\n      return res.send(\"text 혹은 color가 없습니다.\");\n    }\n\n    const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n    let todoId;\n\n    if (todos.length > 0) {\n      todoId = todos[todos.length - 1].id + 1;\n    } else {\n      todoId = 1;\n    }\n\n    const newTodo = {\n      id: todoId,\n      text,\n      color,\n      checked: false\n    };\n    _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.write([...todos, newTodo]);\n    res.statusCode = 200;\n    res.end();\n  }\n\n  res.statusCode = 405;\n  console.log(res.statusCode);\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQUVBLGlFQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQXFEO0VBQ2xFLElBQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0lBQ3hCLElBQUk7TUFDRixNQUFNQyxLQUFLLEdBQUcsTUFBTUosOERBQUEsRUFBcEI7TUFDQUUsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO01BQ0EsT0FBT0wsR0FBRyxDQUFDTSxJQUFKLENBQVNKLEtBQVQsQ0FBUDtJQUNELENBSkQsQ0FJRSxPQUFPSyxDQUFQLEVBQVU7TUFDVkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7TUFDQVAsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO01BQ0FMLEdBQUcsQ0FBQ00sSUFBSixDQUFTQyxDQUFUO0lBQ0Q7RUFDRjs7RUFFRCxJQUFJUixHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtJQUN6QixNQUFNO01BQUVTLElBQUY7TUFBUUM7SUFBUixJQUFrQlosR0FBRyxDQUFDYSxJQUE1Qjs7SUFFQSxJQUFJLENBQUNGLElBQUQsSUFBUyxDQUFDQyxLQUFkLEVBQXFCO01BQ25CWCxHQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBakI7TUFDQSxPQUFPTCxHQUFHLENBQUNNLElBQUosQ0FBUyxzQkFBVCxDQUFQO0lBQ0Q7O0lBRUQsTUFBTUosS0FBSyxHQUFHSiw4REFBQSxFQUFkO0lBQ0EsSUFBSWUsTUFBSjs7SUFFQSxJQUFJWCxLQUFLLENBQUNZLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtNQUNwQkQsTUFBTSxHQUFHWCxLQUFLLENBQUNBLEtBQUssQ0FBQ1ksTUFBTixHQUFlLENBQWhCLENBQUwsQ0FBd0JDLEVBQXhCLEdBQTZCLENBQXRDO0lBQ0QsQ0FGRCxNQUVPO01BQ0xGLE1BQU0sR0FBRyxDQUFUO0lBQ0Q7O0lBRUQsTUFBTUcsT0FBTyxHQUFHO01BQ2RELEVBQUUsRUFBRUYsTUFEVTtNQUVkSCxJQUZjO01BR2RDLEtBSGM7TUFJZE0sT0FBTyxFQUFFO0lBSkssQ0FBaEI7SUFPQW5CLDREQUFBLENBQWdCLENBQUMsR0FBR0ksS0FBSixFQUFXYyxPQUFYLENBQWhCO0lBQ0FoQixHQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBakI7SUFDQUwsR0FBRyxDQUFDbUIsR0FBSjtFQUNEOztFQUVEbkIsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO0VBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxHQUFHLENBQUNLLFVBQWhCO0VBQ0EsT0FBT0wsR0FBRyxDQUFDbUIsR0FBSixFQUFQO0FBQ0QsQ0E3Q0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHM/MDJkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IERhdGEgZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdG9kb3MgPSBhd2FpdCBEYXRhLnRvZG8uZ2V0TGlzdCgpO1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgICAgcmV0dXJuIHJlcy5zZW5kKHRvZG9zKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICByZXMuc2VuZChlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgeyB0ZXh0LCBjb2xvciB9ID0gcmVxLmJvZHk7XHJcblxyXG4gICAgaWYgKCF0ZXh0IHx8ICFjb2xvcikge1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMDtcclxuICAgICAgcmV0dXJuIHJlcy5zZW5kKFwidGV4dCDtmLnsnYAgY29sb3LqsIAg7JeG7Iq164uI64ukLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2RvcyA9IERhdGEudG9kby5nZXRMaXN0KCk7XHJcbiAgICBsZXQgdG9kb0lkOiBudW1iZXI7XHJcblxyXG4gICAgaWYgKHRvZG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgdG9kb0lkID0gdG9kb3NbdG9kb3MubGVuZ3RoIC0gMV0uaWQgKyAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9kb0lkID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdUb2RvID0ge1xyXG4gICAgICBpZDogdG9kb0lkLFxyXG4gICAgICB0ZXh0LFxyXG4gICAgICBjb2xvcixcclxuICAgICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIERhdGEudG9kby53cml0ZShbLi4udG9kb3MsIG5ld1RvZG9dKTtcclxuICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgcmVzLmVuZCgpO1xyXG4gIH1cclxuXHJcbiAgcmVzLnN0YXR1c0NvZGUgPSA0MDU7XHJcbiAgY29uc29sZS5sb2cocmVzLnN0YXR1c0NvZGUpO1xyXG4gIHJldHVybiByZXMuZW5kKCk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJEYXRhIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9kb3MiLCJ0b2RvIiwiZ2V0TGlzdCIsInN0YXR1c0NvZGUiLCJzZW5kIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiY29sb3IiLCJib2R5IiwidG9kb0lkIiwibGVuZ3RoIiwiaWQiLCJuZXdUb2RvIiwiY2hlY2tlZCIsIndyaXRlIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos/index.ts"));
module.exports = __webpack_exports__;

})();