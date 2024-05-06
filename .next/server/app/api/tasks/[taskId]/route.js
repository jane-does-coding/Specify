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
exports.id = "app/api/tasks/[taskId]/route";
exports.ids = ["app/api/tasks/[taskId]/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&page=%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute.ts&appDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&page=%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute.ts&appDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_yevheniiasimaka_Desktop_Specify_app_api_tasks_taskId_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/tasks/[taskId]/route.ts */ \"(rsc)/./app/api/tasks/[taskId]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/tasks/[taskId]/route\",\n        pathname: \"/api/tasks/[taskId]\",\n        filename: \"route\",\n        bundlePath: \"app/api/tasks/[taskId]/route\"\n    },\n    resolvedPagePath: \"/Users/yevheniiasimaka/Desktop/Specify/app/api/tasks/[taskId]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_yevheniiasimaka_Desktop_Specify_app_api_tasks_taskId_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/tasks/[taskId]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0YXNrcyUyRiU1QnRhc2tJZCU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdGFza3MlMkYlNUJ0YXNrSWQlNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0YXNrcyUyRiU1QnRhc2tJZCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnlldmhlbmlpYXNpbWFrYSUyRkRlc2t0b3AlMkZTcGVjaWZ5JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnlldmhlbmlpYXNpbWFrYSUyRkRlc2t0b3AlMkZTcGVjaWZ5JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3NCO0FBQ25HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aC10ZW1wbGF0ZS8/OGQ2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMveWV2aGVuaWlhc2ltYWthL0Rlc2t0b3AvU3BlY2lmeS9hcHAvYXBpL3Rhc2tzL1t0YXNrSWRdL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS90YXNrcy9bdGFza0lkXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Rhc2tzL1t0YXNrSWRdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90YXNrcy9bdGFza0lkXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy95ZXZoZW5paWFzaW1ha2EvRGVza3RvcC9TcGVjaWZ5L2FwcC9hcGkvdGFza3MvW3Rhc2tJZF0vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdGFza3MvW3Rhc2tJZF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&page=%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute.ts&appDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/actions/getCurrentUser.ts":
/*!***************************************!*\
  !*** ./app/actions/getCurrentUser.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCurrentUser),\n/* harmony export */   getSession: () => (/* binding */ getSession)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(rsc)/./pages/api/auth/[...nextauth].ts\");\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(rsc)/./app/libs/prismadb.ts\");\n\n\n\nasync function getSession() {\n    return await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_1__.authOptions);\n}\nasync function getCurrentUser() {\n    try {\n        const session = await getSession();\n        if (!session?.user?.email) {\n            return null;\n        }\n        const currentUser = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.findUnique({\n            where: {\n                email: session.user.email\n            }\n        });\n        if (!currentUser) {\n            return null;\n        }\n        return currentUser;\n    } catch (err) {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYWN0aW9ucy9nZXRDdXJyZW50VXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUVXO0FBQ2xCO0FBRWpDLGVBQWVHO0lBQ3BCLE9BQU8sTUFBTUgsZ0VBQWdCQSxDQUFDQyxrRUFBV0E7QUFDM0M7QUFFZSxlQUFlRztJQUM1QixJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNRjtRQUV0QixJQUFHLENBQUNFLFNBQVNDLE1BQU1DLE9BQU07WUFDdkIsT0FBTztRQUNUO1FBRUEsTUFBTUMsY0FBYyxNQUFNTiwwREFBTUEsQ0FBQ0ksSUFBSSxDQUFDRyxVQUFVLENBQUM7WUFDL0NDLE9BQU87Z0JBQ0xILE9BQU9GLFFBQVFDLElBQUksQ0FBQ0MsS0FBSztZQUMzQjtRQUNGO1FBRUEsSUFBRyxDQUFDQyxhQUFZO1lBQ2QsT0FBTztRQUNUO1FBRUEsT0FBT0E7SUFDVCxFQUFFLE9BQU9HLEtBQVM7UUFDaEIsT0FBTztJQUNUO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLXRlbXBsYXRlLy4vYXBwL2FjdGlvbnMvZ2V0Q3VycmVudFVzZXIudHM/MWVhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldFNlcnZlclNlc3Npb259IGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiXG5cbmltcG9ydCB7YXV0aE9wdGlvbnN9IGZyb20gXCJAL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIlxuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC9hcHAvbGlicy9wcmlzbWFkYlwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXNzaW9uKCl7XG4gIHJldHVybiBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG5cbiAgICBpZighc2Vzc2lvbj8udXNlcj8uZW1haWwpe1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgZW1haWw6IHNlc3Npb24udXNlci5lbWFpbCBhcyBzdHJpbmdcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYoIWN1cnJlbnRVc2VyKXtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRVc2VyXG4gIH0gY2F0Y2ggKGVycjphbnkpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59Il0sIm5hbWVzIjpbImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsInByaXNtYSIsImdldFNlc3Npb24iLCJnZXRDdXJyZW50VXNlciIsInNlc3Npb24iLCJ1c2VyIiwiZW1haWwiLCJjdXJyZW50VXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/actions/getCurrentUser.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/tasks/[taskId]/route.ts":
/*!*****************************************!*\
  !*** ./app/api/tasks/[taskId]/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _app_actions_getCurrentUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/actions/getCurrentUser */ \"(rsc)/./app/actions/getCurrentUser.ts\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/libs/prismadb */ \"(rsc)/./app/libs/prismadb.ts\");\n\n\n\nasync function DELETE(request, { params }) {\n    const currentUser = await (0,_app_actions_getCurrentUser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (!currentUser) return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error();\n    const { taskId } = params;\n    if (!taskId || typeof taskId !== \"string\") throw new Error(\"Invalid Id\");\n    const task = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].task.deleteMany({\n        where: {\n            id: taskId,\n            userId: currentUser.id\n        }\n    });\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json(task);\n}\nasync function PUT(req, { params }) {\n    const currentUser = await (0,_app_actions_getCurrentUser__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const body = await req.json();\n    if (!currentUser) return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error();\n    const { taskId } = params;\n    if (!taskId || typeof taskId !== \"string\") throw new Error(\"Invalid Id\");\n    const existingTask = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].task.findFirst({\n        where: {\n            id: taskId,\n            userId: currentUser.id\n        }\n    });\n    if (!existingTask) throw new Error(\"Task not found\");\n    const { title, description, status, tag, deadline, priority } = body;\n    const updatedTaskData = {\n        title: title || existingTask.title,\n        description: description || existingTask.description,\n        status: status || existingTask.status,\n        tag: tag || existingTask.tag,\n        deadline: deadline || existingTask.deadline,\n        priority: priority || existingTask.priority\n    };\n    const updatedTask = await _app_libs_prismadb__WEBPACK_IMPORTED_MODULE_2__[\"default\"].task.update({\n        where: {\n            id: taskId\n        },\n        data: updatedTaskData\n    });\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json(updatedTask);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Rhc2tzL1t0YXNrSWRdL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBEO0FBQ2Y7QUFDRjtBQU1sQyxlQUFlRyxPQUNyQkMsT0FBZ0IsRUFDaEIsRUFBRUMsTUFBTSxFQUF1QjtJQUUvQixNQUFNQyxjQUFjLE1BQU1OLHVFQUFjQTtJQUV4QyxJQUFJLENBQUNNLGFBQWEsT0FBT0wsa0ZBQVlBLENBQUNNLEtBQUs7SUFFM0MsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0g7SUFFbkIsSUFBSSxDQUFDRyxVQUFVLE9BQU9BLFdBQVcsVUFBVSxNQUFNLElBQUlDLE1BQU07SUFFM0QsTUFBTUMsT0FBTyxNQUFNUiwwREFBTUEsQ0FBQ1EsSUFBSSxDQUFDQyxVQUFVLENBQUM7UUFDekNDLE9BQU87WUFDTkMsSUFBSUw7WUFDSk0sUUFBUVIsWUFBWU8sRUFBRTtRQUN2QjtJQUNEO0lBRUEsT0FBT1osa0ZBQVlBLENBQUNjLElBQUksQ0FBQ0w7QUFDMUI7QUFFTyxlQUFlTSxJQUFJQyxHQUFZLEVBQUUsRUFBRVosTUFBTSxFQUF1QjtJQUN0RSxNQUFNQyxjQUFjLE1BQU1OLHVFQUFjQTtJQUN4QyxNQUFNa0IsT0FBTyxNQUFNRCxJQUFJRixJQUFJO0lBRTNCLElBQUksQ0FBQ1QsYUFBYSxPQUFPTCxrRkFBWUEsQ0FBQ00sS0FBSztJQUUzQyxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHSDtJQUVuQixJQUFJLENBQUNHLFVBQVUsT0FBT0EsV0FBVyxVQUFVLE1BQU0sSUFBSUMsTUFBTTtJQUUzRCxNQUFNVSxlQUFlLE1BQU1qQiwwREFBTUEsQ0FBQ1EsSUFBSSxDQUFDVSxTQUFTLENBQUM7UUFDaERSLE9BQU87WUFDTkMsSUFBSUw7WUFDSk0sUUFBUVIsWUFBWU8sRUFBRTtRQUN2QjtJQUNEO0lBRUEsSUFBSSxDQUFDTSxjQUFjLE1BQU0sSUFBSVYsTUFBTTtJQUVuQyxNQUFNLEVBQUVZLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLEdBQUcsRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUUsR0FBR1I7SUFFaEUsTUFBTVMsa0JBQWtCO1FBQ3ZCTixPQUFPQSxTQUFTRixhQUFhRSxLQUFLO1FBQ2xDQyxhQUFhQSxlQUFlSCxhQUFhRyxXQUFXO1FBQ3BEQyxRQUFRQSxVQUFVSixhQUFhSSxNQUFNO1FBQ3JDQyxLQUFLQSxPQUFPTCxhQUFhSyxHQUFHO1FBQzVCQyxVQUFVQSxZQUFZTixhQUFhTSxRQUFRO1FBQzNDQyxVQUFVQSxZQUFZUCxhQUFhTyxRQUFRO0lBQzVDO0lBRUEsTUFBTUUsY0FBYyxNQUFNMUIsMERBQU1BLENBQUNRLElBQUksQ0FBQ21CLE1BQU0sQ0FBQztRQUM1Q2pCLE9BQU87WUFDTkMsSUFBSUw7UUFDTDtRQUNBc0IsTUFBTUg7SUFDUDtJQUVBLE9BQU8xQixrRkFBWUEsQ0FBQ2MsSUFBSSxDQUFDYTtBQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgtdGVtcGxhdGUvLi9hcHAvYXBpL3Rhc2tzL1t0YXNrSWRdL3JvdXRlLnRzPzRkOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldEN1cnJlbnRVc2VyIGZyb20gXCJAL2FwcC9hY3Rpb25zL2dldEN1cnJlbnRVc2VyXCI7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvYXBwL2xpYnMvcHJpc21hZGJcIjtcblxuaW50ZXJmYWNlIElQYXJhbXMge1xuXHR0YXNrSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShcblx0cmVxdWVzdDogUmVxdWVzdCxcblx0eyBwYXJhbXMgfTogeyBwYXJhbXM6IElQYXJhbXMgfVxuKSB7XG5cdGNvbnN0IGN1cnJlbnRVc2VyID0gYXdhaXQgZ2V0Q3VycmVudFVzZXIoKTtcblxuXHRpZiAoIWN1cnJlbnRVc2VyKSByZXR1cm4gTmV4dFJlc3BvbnNlLmVycm9yKCk7XG5cblx0Y29uc3QgeyB0YXNrSWQgfSA9IHBhcmFtcztcblxuXHRpZiAoIXRhc2tJZCB8fCB0eXBlb2YgdGFza0lkICE9PSBcInN0cmluZ1wiKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIElkXCIpO1xuXG5cdGNvbnN0IHRhc2sgPSBhd2FpdCBwcmlzbWEudGFzay5kZWxldGVNYW55KHtcblx0XHR3aGVyZToge1xuXHRcdFx0aWQ6IHRhc2tJZCxcblx0XHRcdHVzZXJJZDogY3VycmVudFVzZXIuaWQsXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHRhc2spO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcTogUmVxdWVzdCwgeyBwYXJhbXMgfTogeyBwYXJhbXM6IElQYXJhbXMgfSkge1xuXHRjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XG5cdGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuXG5cdGlmICghY3VycmVudFVzZXIpIHJldHVybiBOZXh0UmVzcG9uc2UuZXJyb3IoKTtcblxuXHRjb25zdCB7IHRhc2tJZCB9ID0gcGFyYW1zO1xuXG5cdGlmICghdGFza0lkIHx8IHR5cGVvZiB0YXNrSWQgIT09IFwic3RyaW5nXCIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSWRcIik7XG5cblx0Y29uc3QgZXhpc3RpbmdUYXNrID0gYXdhaXQgcHJpc21hLnRhc2suZmluZEZpcnN0KHtcblx0XHR3aGVyZToge1xuXHRcdFx0aWQ6IHRhc2tJZCxcblx0XHRcdHVzZXJJZDogY3VycmVudFVzZXIuaWQsXG5cdFx0fSxcblx0fSk7XG5cblx0aWYgKCFleGlzdGluZ1Rhc2spIHRocm93IG5ldyBFcnJvcihcIlRhc2sgbm90IGZvdW5kXCIpO1xuXG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBzdGF0dXMsIHRhZywgZGVhZGxpbmUsIHByaW9yaXR5IH0gPSBib2R5O1xuXG5cdGNvbnN0IHVwZGF0ZWRUYXNrRGF0YSA9IHtcblx0XHR0aXRsZTogdGl0bGUgfHwgZXhpc3RpbmdUYXNrLnRpdGxlLFxuXHRcdGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB8fCBleGlzdGluZ1Rhc2suZGVzY3JpcHRpb24sXG5cdFx0c3RhdHVzOiBzdGF0dXMgfHwgZXhpc3RpbmdUYXNrLnN0YXR1cyxcblx0XHR0YWc6IHRhZyB8fCBleGlzdGluZ1Rhc2sudGFnLFxuXHRcdGRlYWRsaW5lOiBkZWFkbGluZSB8fCBleGlzdGluZ1Rhc2suZGVhZGxpbmUsXG5cdFx0cHJpb3JpdHk6IHByaW9yaXR5IHx8IGV4aXN0aW5nVGFzay5wcmlvcml0eSxcblx0fTtcblxuXHRjb25zdCB1cGRhdGVkVGFzayA9IGF3YWl0IHByaXNtYS50YXNrLnVwZGF0ZSh7XG5cdFx0d2hlcmU6IHtcblx0XHRcdGlkOiB0YXNrSWQsXG5cdFx0fSxcblx0XHRkYXRhOiB1cGRhdGVkVGFza0RhdGEsXG5cdH0pO1xuXG5cdHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih1cGRhdGVkVGFzayk7XG59XG4iXSwibmFtZXMiOlsiZ2V0Q3VycmVudFVzZXIiLCJOZXh0UmVzcG9uc2UiLCJwcmlzbWEiLCJERUxFVEUiLCJyZXF1ZXN0IiwicGFyYW1zIiwiY3VycmVudFVzZXIiLCJlcnJvciIsInRhc2tJZCIsIkVycm9yIiwidGFzayIsImRlbGV0ZU1hbnkiLCJ3aGVyZSIsImlkIiwidXNlcklkIiwianNvbiIsIlBVVCIsInJlcSIsImJvZHkiLCJleGlzdGluZ1Rhc2siLCJmaW5kRmlyc3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwidGFnIiwiZGVhZGxpbmUiLCJwcmlvcml0eSIsInVwZGF0ZWRUYXNrRGF0YSIsInVwZGF0ZWRUYXNrIiwidXBkYXRlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/tasks/[taskId]/route.ts\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/@next-auth","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&page=%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute.ts&appDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fyevheniiasimaka%2FDesktop%2FSpecify&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();