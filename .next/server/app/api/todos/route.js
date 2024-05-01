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
exports.id = "app/api/todos/route";
exports.ids = ["app/api/todos/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.ts&appDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.ts&appDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_yevheniiasimaka_Desktop_Specify_app_api_todos_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/todos/route.ts */ \"(rsc)/./app/api/todos/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/todos/route\",\n        pathname: \"/api/todos\",\n        filename: \"route\",\n        bundlePath: \"app/api/todos/route\"\n    },\n    resolvedPagePath: \"/Users/yevheniiasimaka/Desktop/Specify/app/api/todos/route.ts\",\n    nextConfigOutput,\n    userland: _Users_yevheniiasimaka_Desktop_Specify_app_api_todos_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/todos/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0b2RvcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdG9kb3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0b2RvcyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnlldmhlbmlpYXNpbWFrYSUyRkRlc2t0b3AlMkZTcGVjaWZ5JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnlldmhlbmlpYXNpbWFrYSUyRkRlc2t0b3AlMkZTcGVjaWZ5JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2E7QUFDMUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLXRlbXBsYXRlLz9mNzVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy95ZXZoZW5paWFzaW1ha2EvRGVza3RvcC9TcGVjaWZ5L2FwcC9hcGkvdG9kb3Mvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3RvZG9zL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdG9kb3NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3RvZG9zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3lldmhlbmlpYXNpbWFrYS9EZXNrdG9wL1NwZWNpZnkvYXBwL2FwaS90b2Rvcy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS90b2Rvcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.ts&appDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/actions/getCurrentUser.ts":
/*!***************************************!*\
  !*** ./app/actions/getCurrentUser.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCurrentUser),\n/* harmony export */   getSession: () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(rsc)/./pages/api/auth/[...nextauth].ts\");\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(rsc)/./app/libs/prismadb.ts\");\n\n\n\nasync function getSession() {\n    return await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__.authOptions);\n}\nasync function getCurrentUser() {\n    try {\n        const session = await getSession();\n        if (!session?.user?.email) {\n            return null;\n        }\n        const currentUser = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.findUnique({\n            where: {\n                email: session.user.email\n            }\n        });\n        if (!currentUser) {\n            return null;\n        }\n        return currentUser;\n    } catch (err) {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYWN0aW9ucy9nZXRDdXJyZW50VXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUVXO0FBQ2xCO0FBRWpDLGVBQWVHO0lBQ3BCLE9BQU8sTUFBTUgsZ0VBQWdCQSxDQUFDQyxrRUFBV0E7QUFDM0M7QUFFZSxlQUFlRztJQUM1QixJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNRjtRQUV0QixJQUFHLENBQUNFLFNBQVNDLE1BQU1DLE9BQU07WUFDdkIsT0FBTztRQUNUO1FBRUEsTUFBTUMsY0FBYyxNQUFNTiwwREFBTUEsQ0FBQ0ksSUFBSSxDQUFDRyxVQUFVLENBQUM7WUFDL0NDLE9BQU87Z0JBQ0xILE9BQU9GLFFBQVFDLElBQUksQ0FBQ0MsS0FBSztZQUMzQjtRQUNGO1FBRUEsSUFBRyxDQUFDQyxhQUFZO1lBQ2QsT0FBTztRQUNUO1FBRUEsT0FBT0E7SUFDVCxFQUFFLE9BQU9HLEtBQVM7UUFDaEIsT0FBTztJQUNUO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLXRlbXBsYXRlLy4vYXBwL2FjdGlvbnMvZ2V0Q3VycmVudFVzZXIudHM/MWVhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldFNlcnZlclNlc3Npb259IGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiXG5cbmltcG9ydCB7YXV0aE9wdGlvbnN9IGZyb20gXCJAL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9hcHAvbGlicy9wcmlzbWFkYlwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXNzaW9uKCl7XG4gIHJldHVybiBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG5cbiAgICBpZighc2Vzc2lvbj8udXNlcj8uZW1haWwpe1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCBhcyBzdHJpbmdcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYoIWN1cnJlbnRVc2VyKXtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyXG4gIH0gY2F0Y2ggKGVycjphbnkpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59Il0sIm5hbWVzIjpbImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsInByaXNtYSIsImdldFNlc3Npb24iLCJnZXRDdXJyZW50VXNlciIsInNlc3Npb24iLCJ1c2VyIiwiZW1haWwiLCJjdXJyZW50VXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/actions/getCurrentUser.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/todos/route.ts":
/*!********************************!*\
  !*** ./app/api/todos/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_actions_getCurrentUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/actions/getCurrentUser */ \"(rsc)/./app/actions/getCurrentUser.ts\");\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(rsc)/./app/libs/prismadb.ts\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n// server/api/todos.ts\n\n\n\nasync function POST(req) {\n    const body = await req.json();\n    const { title } = body;\n    const user = await (0,_app_actions_getCurrentUser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    console.log(title, user, body);\n    if (user?.id) {\n        try {\n            const todo = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todo.create({\n                data: {\n                    title,\n                    userId: user?.id\n                }\n            });\n            console.log(todo);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json(todo);\n        } catch (error) {\n            console.error(\"Error creating todo:\", error);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n                message: \"Error creating todo\"\n            }, {\n                status: 500\n            });\n        }\n    } else {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            message: \"not authorized\"\n        }, {\n            status: 401\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3RvZG9zL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQkFBc0I7QUFDb0M7QUFDakI7QUFDRTtBQUVwQyxlQUFlRyxLQUFLQyxHQUFZO0lBQ3RDLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtJQUMzQixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRjtJQUNsQixNQUFNRyxPQUFPLE1BQU1SLHVFQUFjQTtJQUNqQ1MsUUFBUUMsR0FBRyxDQUFDSCxPQUFPQyxNQUFNSDtJQUV6QixJQUFJRyxNQUFNRyxJQUFJO1FBQ2IsSUFBSTtZQUNILE1BQU1DLE9BQU8sTUFBTVgsMERBQU1BLENBQUNXLElBQUksQ0FBQ0MsTUFBTSxDQUFDO2dCQUNyQ0MsTUFBTTtvQkFDTFA7b0JBQ0FRLFFBQVFQLE1BQU1HO2dCQUNmO1lBQ0Q7WUFFQUYsUUFBUUMsR0FBRyxDQUFDRTtZQUNaLE9BQU9WLGtGQUFZQSxDQUFDSSxJQUFJLENBQUNNO1FBQzFCLEVBQUUsT0FBT0ksT0FBTztZQUNmUCxRQUFRTyxLQUFLLENBQUMsd0JBQXdCQTtZQUN0QyxPQUFPZCxrRkFBWUEsQ0FBQ0ksSUFBSSxDQUN2QjtnQkFBRVcsU0FBUztZQUFzQixHQUNqQztnQkFBRUMsUUFBUTtZQUFJO1FBRWhCO0lBQ0QsT0FBTztRQUNOLE9BQU9oQixrRkFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUVXLFNBQVM7UUFBaUIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDdkU7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgtdGVtcGxhdGUvLi9hcHAvYXBpL3RvZG9zL3JvdXRlLnRzPzE1ZDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc2VydmVyL2FwaS90b2Rvcy50c1xuaW1wb3J0IGdldEN1cnJlbnRVc2VyIGZyb20gXCJAL2FwcC9hY3Rpb25zL2dldEN1cnJlbnRVc2VyXCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCJAL2FwcC9saWJzL3ByaXNtYWRiXCI7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG5cdGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuXHRjb25zdCB7IHRpdGxlIH0gPSBib2R5O1xuXHRjb25zdCB1c2VyID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcblx0Y29uc29sZS5sb2codGl0bGUsIHVzZXIsIGJvZHkpO1xuXG5cdGlmICh1c2VyPy5pZCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB0b2RvID0gYXdhaXQgcHJpc21hLnRvZG8uY3JlYXRlKHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdHVzZXJJZDogdXNlcj8uaWQsXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc29sZS5sb2codG9kbyk7XG5cdFx0XHRyZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odG9kbyk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyB0b2RvOlwiLCBlcnJvcik7XG5cdFx0XHRyZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG5cdFx0XHRcdHsgbWVzc2FnZTogXCJFcnJvciBjcmVhdGluZyB0b2RvXCIgfSxcblx0XHRcdFx0eyBzdGF0dXM6IDUwMCB9XG5cdFx0XHQpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIm5vdCBhdXRob3JpemVkXCIgfSwgeyBzdGF0dXM6IDQwMSB9KTtcblx0fVxufVxuIl0sIm5hbWVzIjpbImdldEN1cnJlbnRVc2VyIiwicHJpc21hIiwiTmV4dFJlc3BvbnNlIiwiUE9TVCIsInJlcSIsImJvZHkiLCJqc29uIiwidGl0bGUiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImlkIiwidG9kbyIsImNyZWF0ZSIsImRhdGEiLCJ1c2VySWQiLCJlcnJvciIsIm1lc3NhZ2UiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/todos/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/libs/prismadb.ts":
/*!******************************!*\
  !*** ./app/libs/prismadb.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGlicy9wcmlzbWFkYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFNN0MsTUFBTUMsU0FBU0MsV0FBV0MsTUFBTSxJQUFJLElBQUlILHdEQUFZQTtBQUNwRCxJQUFHSSxJQUFxQyxFQUFFRixXQUFXQyxNQUFNLEdBQUdGO0FBRTlELGlFQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aC10ZW1wbGF0ZS8uL2FwcC9saWJzL3ByaXNtYWRiLnRzPzc4MmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcbn1cblxuY29uc3QgY2xpZW50ID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbFRoaXMucHJpc21hID0gY2xpZW50XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudCJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJjbGllbnQiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/libs/prismadb.ts\n");

/***/ }),

/***/ "(rsc)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(rsc)/./app/libs/prismadb.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_app_libs_prismadb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const user = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_3__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user?.hashedPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                const isCorrectPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.hashedPassword);\n                if (!isCorrectPassword) {\n                    throw new Error(\"Invalid credentials\");\n                }\n                return user;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/\"\n    },\n    debug: \"development\" === \"development\",\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_4___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN1RDtBQUNVO0FBRXRDO0FBQ2E7QUFDUjtBQUV6QixNQUFNSyxjQUEyQjtJQUN0Q0MsU0FBU04sd0VBQWFBLENBQUNHLDBEQUFNQTtJQUM3QkksV0FBVztRQUNUTiwyRUFBbUJBLENBQUM7WUFDbEJPLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBQ0MsT0FBTztvQkFBU0MsTUFBTTtnQkFBTTtnQkFDcENDLFVBQVU7b0JBQUNGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVU7WUFDaEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFHLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBUztvQkFDL0MsTUFBTSxJQUFJRSxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNQyxPQUFPLE1BQU1iLDBEQUFNQSxDQUFDYSxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU07d0JBQ0pSLE9BQU9ELFlBQVlDLEtBQUs7b0JBQzFCO2dCQUNGO2dCQUVBLElBQUcsQ0FBQ00sUUFBUSxDQUFDQSxNQUFNRyxnQkFBZTtvQkFDaEMsTUFBTSxJQUFJSixNQUFNO2dCQUNsQjtnQkFFQSxNQUFPSyxvQkFBb0IsTUFBTWxCLHFEQUFjLENBQUNPLFlBQVlJLFFBQVEsRUFBRUcsS0FBS0csY0FBYztnQkFFekYsSUFBRyxDQUFDQyxtQkFBa0I7b0JBQ3BCLE1BQU0sSUFBSUwsTUFBTTtnQkFDbEI7Z0JBRUEsT0FBT0M7WUFDVDtRQUNGO0tBQ0Q7SUFDRE0sT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsT0FBT0Msa0JBQXlCO0lBQ2hDQyxTQUFTO1FBQ1BDLFVBQVU7SUFDWjtJQUNBQyxRQUFRSCxRQUFRSSxHQUFHLENBQUNDLGVBQWU7QUFDckMsRUFBQztBQUVELGlFQUFlMUIsZ0RBQVFBLENBQUNDLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLXRlbXBsYXRlLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAge0F1dGhPcHRpb25zfSBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCB7UHJpc21hQWRhcHRlcn0gZnJvbSBcIkBuZXh0LWF1dGgvcHJpc21hLWFkYXB0ZXJcIlxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxuXG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9hcHAvbGlicy9wcmlzbWFkYlwiXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogQXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDoge2xhYmVsOiBcImVtYWlsXCIsIHR5cGU6IFwidGV4dFwifSxcbiAgICAgICAgcGFzc3dvcmQ6IHtsYWJlbDogXCJwYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCJ9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscyl7XG4gICAgICAgIGlmKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCl7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOntcbiAgICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbFxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZighdXNlciB8fCAhdXNlcj8uaGFzaGVkUGFzc3dvcmQpe1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY3JlZGVudGlhbHNcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICBpc0NvcnJlY3RQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLmhhc2hlZFBhc3N3b3JkKVxuXG4gICAgICAgIGlmKCFpc0NvcnJlY3RQYXNzd29yZCl7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjcmVkZW50aWFsc1wiKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVzZXJcbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvXCIsXG4gIH0sXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCJcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVRcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpIl0sIm5hbWVzIjpbIlByaXNtYUFkYXB0ZXIiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwicHJpc21hIiwiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaGFzaGVkUGFzc3dvcmQiLCJpc0NvcnJlY3RQYXNzd29yZCIsImNvbXBhcmUiLCJwYWdlcyIsInNpZ25JbiIsImRlYnVnIiwicHJvY2VzcyIsInNlc3Npb24iLCJzdHJhdGVneSIsInNlY3JldCIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.ts&appDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();