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
exports.id = "app/api/listings/[id]/complete/route";
exports.ids = ["app/api/listings/[id]/complete/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

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

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2F%5Bid%5D%2Fcomplete%2Froute&page=%2Fapi%2Flistings%2F%5Bid%5D%2Fcomplete%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2F%5Bid%5D%2Fcomplete%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2F%5Bid%5D%2Fcomplete%2Froute&page=%2Fapi%2Flistings%2F%5Bid%5D%2Fcomplete%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2F%5Bid%5D%2Fcomplete%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Main_Projects_zerowaste_v3_complete_src_app_api_listings_id_complete_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/listings/[id]/complete/route.ts */ \"(rsc)/./src/app/api/listings/[id]/complete/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/listings/[id]/complete/route\",\n        pathname: \"/api/listings/[id]/complete\",\n        filename: \"route\",\n        bundlePath: \"app/api/listings/[id]/complete/route\"\n    },\n    resolvedPagePath: \"C:\\\\Main\\\\Projects\\\\zerowaste-v3-complete\\\\src\\\\app\\\\api\\\\listings\\\\[id]\\\\complete\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Main_Projects_zerowaste_v3_complete_src_app_api_listings_id_complete_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/listings/[id]/complete/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsaXN0aW5ncyUyRiU1QmlkJTVEJTJGY29tcGxldGUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmxpc3RpbmdzJTJGJTVCaWQlNUQlMkZjb21wbGV0ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmxpc3RpbmdzJTJGJTVCaWQlNUQlMkZjb21wbGV0ZSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDTWFpbiU1Q1Byb2plY3RzJTVDemVyb3dhc3RlLXYzLWNvbXBsZXRlJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDTWFpbiU1Q1Byb2plY3RzJTVDemVyb3dhc3RlLXYzLWNvbXBsZXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM0QztBQUN6SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3plcm93YXN0ZS1tYXJrZXRwbGFjZS8/ODQ3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxNYWluXFxcXFByb2plY3RzXFxcXHplcm93YXN0ZS12My1jb21wbGV0ZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxsaXN0aW5nc1xcXFxbaWRdXFxcXGNvbXBsZXRlXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9saXN0aW5ncy9baWRdL2NvbXBsZXRlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbGlzdGluZ3MvW2lkXS9jb21wbGV0ZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbGlzdGluZ3MvW2lkXS9jb21wbGV0ZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXE1haW5cXFxcUHJvamVjdHNcXFxcemVyb3dhc3RlLXYzLWNvbXBsZXRlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGxpc3RpbmdzXFxcXFtpZF1cXFxcY29tcGxldGVcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2xpc3RpbmdzL1tpZF0vY29tcGxldGUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2F%5Bid%5D%2Fcomplete%2Froute&page=%2Fapi%2Flistings%2F%5Bid%5D%2Fcomplete%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2F%5Bid%5D%2Fcomplete%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) return null;\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) return null;\n                const valid = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compare(credentials.password, user.password);\n                if (!valid) return null;\n                return {\n                    id: user.id,\n                    name: user.name,\n                    email: user.email,\n                    role: user.role,\n                    businessName: user.businessName\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n                token.businessName = user.businessName;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n                session.user.businessName = token.businessName;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1k7QUFDNUI7QUFDUjtBQUV0QixNQUFNSSxjQUErQjtJQUMxQ0MsV0FBVztRQUNUSiwyRUFBbUJBLENBQUM7WUFDbEJLLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVSxPQUFPO2dCQUUxRCxNQUFNRSxPQUFPLE1BQU1YLCtDQUFNQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQUVQLE9BQU9ELFlBQVlDLEtBQUs7b0JBQUM7Z0JBQ3BDO2dCQUVBLElBQUksQ0FBQ0ssTUFBTSxPQUFPO2dCQUVsQixNQUFNRyxRQUFRLE1BQU1iLHVEQUFjLENBQUNJLFlBQVlJLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtnQkFDdEUsSUFBSSxDQUFDSyxPQUFPLE9BQU87Z0JBRW5CLE9BQU87b0JBQ0xFLElBQUlMLEtBQUtLLEVBQUU7b0JBQ1haLE1BQU1PLEtBQUtQLElBQUk7b0JBQ2ZFLE9BQU9LLEtBQUtMLEtBQUs7b0JBQ2pCVyxNQUFNTixLQUFLTSxJQUFJO29CQUNmQyxjQUFjUCxLQUFLTyxZQUFZO2dCQUNqQztZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVWLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSVSxNQUFNTCxFQUFFLEdBQUdMLEtBQUtLLEVBQUU7Z0JBQ2xCSyxNQUFNSixJQUFJLEdBQUcsS0FBY0EsSUFBSTtnQkFDL0JJLE1BQU1ILFlBQVksR0FBRyxLQUFjQSxZQUFZO1lBQ2pEO1lBQ0EsT0FBT0c7UUFDVDtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFRCxLQUFLLEVBQUU7WUFDOUIsSUFBSUMsUUFBUVgsSUFBSSxFQUFFO2dCQUNmVyxRQUFRWCxJQUFJLENBQVNLLEVBQUUsR0FBR0ssTUFBTUwsRUFBRTtnQkFDakNNLFFBQVFYLElBQUksQ0FBU00sSUFBSSxHQUFHSSxNQUFNSixJQUFJO2dCQUN0Q0ssUUFBUVgsSUFBSSxDQUFTTyxZQUFZLEdBQUdHLE1BQU1ILFlBQVk7WUFDMUQ7WUFDQSxPQUFPSTtRQUNUO0lBQ0Y7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUYsU0FBUztRQUFFRyxVQUFVO0lBQU07SUFDM0JDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUNyQyxFQUFDO0FBRUQsTUFBTUMsVUFBVWhDLGdEQUFRQSxDQUFDSTtBQUNpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3plcm93YXN0ZS1tYXJrZXRwbGFjZS8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ2NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAnZW1haWwnIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHJldHVybiBudWxsXG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9LFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIG51bGxcblxuICAgICAgICBjb25zdCB2YWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxuICAgICAgICBpZiAoIXZhbGlkKSByZXR1cm4gbnVsbFxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICBidXNpbmVzc05hbWU6IHVzZXIuYnVzaW5lc3NOYW1lLFxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWRcbiAgICAgICAgdG9rZW4ucm9sZSA9ICh1c2VyIGFzIGFueSkucm9sZVxuICAgICAgICB0b2tlbi5idXNpbmVzc05hbWUgPSAodXNlciBhcyBhbnkpLmJ1c2luZXNzTmFtZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuXG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIGFueSkuaWQgPSB0b2tlbi5pZFxuICAgICAgICA7KHNlc3Npb24udXNlciBhcyBhbnkpLnJvbGUgPSB0b2tlbi5yb2xlXG4gICAgICAgIDsoc2Vzc2lvbi51c2VyIGFzIGFueSkuYnVzaW5lc3NOYW1lID0gdG9rZW4uYnVzaW5lc3NOYW1lXG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvblxuICAgIH0sXG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2F1dGgvbG9naW4nLFxuICB9LFxuICBzZXNzaW9uOiB7IHN0cmF0ZWd5OiAnand0JyB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn1cblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwicHJpc21hIiwiYmNyeXB0IiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInZhbGlkIiwiY29tcGFyZSIsImlkIiwicm9sZSIsImJ1c2luZXNzTmFtZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2Vzc2lvbiIsInBhZ2VzIiwic2lnbkluIiwic3RyYXRlZ3kiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/listings/[id]/complete/route.ts":
/*!*****************************************************!*\
  !*** ./src/app/api/listings/[id]/complete/route.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\nasync function POST(req, { params }) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Not authenticated\"\n    }, {\n        status: 401\n    });\n    const userId = session.user.id;\n    try {\n        const transaction = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.transaction.findFirst({\n            where: {\n                listingId: params.id\n            },\n            include: {\n                listing: true\n            }\n        });\n        if (!transaction) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Transaction not found\"\n        }, {\n            status: 404\n        });\n        if (transaction.collectorId !== userId && transaction.donorId !== userId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 403\n            });\n        }\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.$transaction([\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.transaction.update({\n                where: {\n                    id: transaction.id\n                },\n                data: {\n                    status: \"COMPLETED\",\n                    completedAt: new Date()\n                }\n            }),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.listing.update({\n                where: {\n                    id: params.id\n                },\n                data: {\n                    status: \"COMPLETED\"\n                }\n            }),\n            // Award points to donor\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.user.update({\n                where: {\n                    id: transaction.donorId\n                },\n                data: {\n                    feedPoints: {\n                        increment: 25\n                    },\n                    totalMeals: {\n                        increment: transaction.listing.quantity\n                    }\n                }\n            }),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.pointLog.create({\n                data: {\n                    userId: transaction.donorId,\n                    points: 25,\n                    action: \"PICKUP_COMPLETED\",\n                    description: `Pickup completed: ${transaction.listing.foodName}`\n                }\n            }),\n            // Award points to collector too\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.user.update({\n                where: {\n                    id: transaction.collectorId\n                },\n                data: {\n                    feedPoints: {\n                        increment: 25\n                    },\n                    totalMeals: {\n                        increment: transaction.listing.quantity\n                    }\n                }\n            }),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.pointLog.create({\n                data: {\n                    userId: transaction.collectorId,\n                    points: 25,\n                    action: \"PICKUP_COMPLETED\",\n                    description: `Collected: ${transaction.listing.foodName}`\n                }\n            }),\n            // Add to prize pool slice (1% of platform fee)\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.prizePool.updateMany({\n                where: {\n                    month: new Date().getMonth() + 1,\n                    year: new Date().getFullYear(),\n                    isDrawn: false\n                },\n                data: {\n                    transactionSlice: {\n                        increment: transaction.platformFee * 0.01\n                    }\n                }\n            })\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (err) {\n        console.error(err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to complete pickup\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9saXN0aW5ncy9baWRdL2NvbXBsZXRlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1RDtBQUNYO0FBQ29CO0FBQzNCO0FBRTlCLGVBQWVJLEtBQ3BCQyxHQUFnQixFQUNoQixFQUFFQyxNQUFNLEVBQThCO0lBRXRDLE1BQU1DLFVBQVUsTUFBTU4sMkRBQWdCQSxDQUFDQyxxRUFBV0E7SUFDbEQsSUFBSSxDQUFDSyxTQUFTLE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFvQixHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUVyRixNQUFNQyxTQUFTLFFBQVNDLElBQUksQ0FBU0MsRUFBRTtJQUV2QyxJQUFJO1FBQ0YsTUFBTUMsY0FBYyxNQUFNWCwrQ0FBTUEsQ0FBQ1csV0FBVyxDQUFDQyxTQUFTLENBQUM7WUFDckRDLE9BQU87Z0JBQUVDLFdBQVdYLE9BQU9PLEVBQUU7WUFBQztZQUM5QkssU0FBUztnQkFBRUMsU0FBUztZQUFLO1FBQzNCO1FBRUEsSUFBSSxDQUFDTCxhQUFhLE9BQU9kLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtRQUM3RixJQUFJSSxZQUFZTSxXQUFXLEtBQUtULFVBQVVHLFlBQVlPLE9BQU8sS0FBS1YsUUFBUTtZQUN4RSxPQUFPWCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3BFO1FBRUEsTUFBTVAsK0NBQU1BLENBQUNtQixZQUFZLENBQUM7WUFDeEJuQiwrQ0FBTUEsQ0FBQ1csV0FBVyxDQUFDUyxNQUFNLENBQUM7Z0JBQ3hCUCxPQUFPO29CQUFFSCxJQUFJQyxZQUFZRCxFQUFFO2dCQUFDO2dCQUM1QlcsTUFBTTtvQkFBRWQsUUFBUTtvQkFBYWUsYUFBYSxJQUFJQztnQkFBTztZQUN2RDtZQUNBdkIsK0NBQU1BLENBQUNnQixPQUFPLENBQUNJLE1BQU0sQ0FBQztnQkFDcEJQLE9BQU87b0JBQUVILElBQUlQLE9BQU9PLEVBQUU7Z0JBQUM7Z0JBQ3ZCVyxNQUFNO29CQUFFZCxRQUFRO2dCQUFZO1lBQzlCO1lBQ0Esd0JBQXdCO1lBQ3hCUCwrQ0FBTUEsQ0FBQ1MsSUFBSSxDQUFDVyxNQUFNLENBQUM7Z0JBQ2pCUCxPQUFPO29CQUFFSCxJQUFJQyxZQUFZTyxPQUFPO2dCQUFDO2dCQUNqQ0csTUFBTTtvQkFDSkcsWUFBWTt3QkFBRUMsV0FBVztvQkFBRztvQkFDNUJDLFlBQVk7d0JBQUVELFdBQVdkLFlBQVlLLE9BQU8sQ0FBQ1csUUFBUTtvQkFBQztnQkFDeEQ7WUFDRjtZQUNBM0IsK0NBQU1BLENBQUM0QixRQUFRLENBQUNDLE1BQU0sQ0FBQztnQkFDckJSLE1BQU07b0JBQ0piLFFBQVFHLFlBQVlPLE9BQU87b0JBQzNCWSxRQUFRO29CQUNSQyxRQUFRO29CQUNSQyxhQUFhLENBQUMsa0JBQWtCLEVBQUVyQixZQUFZSyxPQUFPLENBQUNpQixRQUFRLENBQUMsQ0FBQztnQkFDbEU7WUFDRjtZQUNBLGdDQUFnQztZQUNoQ2pDLCtDQUFNQSxDQUFDUyxJQUFJLENBQUNXLE1BQU0sQ0FBQztnQkFDakJQLE9BQU87b0JBQUVILElBQUlDLFlBQVlNLFdBQVc7Z0JBQUM7Z0JBQ3JDSSxNQUFNO29CQUNKRyxZQUFZO3dCQUFFQyxXQUFXO29CQUFHO29CQUM1QkMsWUFBWTt3QkFBRUQsV0FBV2QsWUFBWUssT0FBTyxDQUFDVyxRQUFRO29CQUFDO2dCQUN4RDtZQUNGO1lBQ0EzQiwrQ0FBTUEsQ0FBQzRCLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO2dCQUNyQlIsTUFBTTtvQkFDSmIsUUFBUUcsWUFBWU0sV0FBVztvQkFDL0JhLFFBQVE7b0JBQ1JDLFFBQVE7b0JBQ1JDLGFBQWEsQ0FBQyxXQUFXLEVBQUVyQixZQUFZSyxPQUFPLENBQUNpQixRQUFRLENBQUMsQ0FBQztnQkFDM0Q7WUFDRjtZQUNBLCtDQUErQztZQUMvQ2pDLCtDQUFNQSxDQUFDa0MsU0FBUyxDQUFDQyxVQUFVLENBQUM7Z0JBQzFCdEIsT0FBTztvQkFDTHVCLE9BQU8sSUFBSWIsT0FBT2MsUUFBUSxLQUFLO29CQUMvQkMsTUFBTSxJQUFJZixPQUFPZ0IsV0FBVztvQkFDNUJDLFNBQVM7Z0JBQ1g7Z0JBQ0FuQixNQUFNO29CQUNKb0Isa0JBQWtCO3dCQUFFaEIsV0FBV2QsWUFBWStCLFdBQVcsR0FBRztvQkFBSztnQkFDaEU7WUFDRjtTQUNEO1FBRUQsT0FBTzdDLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRXNDLFNBQVM7UUFBSztJQUMzQyxFQUFFLE9BQU9DLEtBQUs7UUFDWkMsUUFBUXZDLEtBQUssQ0FBQ3NDO1FBQ2QsT0FBTy9DLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUE0QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNqRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemVyb3dhc3RlLW1hcmtldHBsYWNlLy4vc3JjL2FwcC9hcGkvbGlzdGluZ3MvW2lkXS9jb21wbGV0ZS9yb3V0ZS50cz8zZmEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUnXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKFxuICByZXE6IE5leHRSZXF1ZXN0LFxuICB7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBpZDogc3RyaW5nIH0gfVxuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxuICBpZiAoIXNlc3Npb24pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSlcblxuICBjb25zdCB1c2VySWQgPSAoc2Vzc2lvbi51c2VyIGFzIGFueSkuaWRcblxuICB0cnkge1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgcHJpc21hLnRyYW5zYWN0aW9uLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZTogeyBsaXN0aW5nSWQ6IHBhcmFtcy5pZCB9LFxuICAgICAgaW5jbHVkZTogeyBsaXN0aW5nOiB0cnVlIH0sXG4gICAgfSlcblxuICAgIGlmICghdHJhbnNhY3Rpb24pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVHJhbnNhY3Rpb24gbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pXG4gICAgaWYgKHRyYW5zYWN0aW9uLmNvbGxlY3RvcklkICE9PSB1c2VySWQgJiYgdHJhbnNhY3Rpb24uZG9ub3JJZCAhPT0gdXNlcklkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMyB9KVxuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oW1xuICAgICAgcHJpc21hLnRyYW5zYWN0aW9uLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiB0cmFuc2FjdGlvbi5pZCB9LFxuICAgICAgICBkYXRhOiB7IHN0YXR1czogJ0NPTVBMRVRFRCcsIGNvbXBsZXRlZEF0OiBuZXcgRGF0ZSgpIH0sXG4gICAgICB9KSxcbiAgICAgIHByaXNtYS5saXN0aW5nLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiBwYXJhbXMuaWQgfSxcbiAgICAgICAgZGF0YTogeyBzdGF0dXM6ICdDT01QTEVURUQnIH0sXG4gICAgICB9KSxcbiAgICAgIC8vIEF3YXJkIHBvaW50cyB0byBkb25vclxuICAgICAgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHRyYW5zYWN0aW9uLmRvbm9ySWQgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGZlZWRQb2ludHM6IHsgaW5jcmVtZW50OiAyNSB9LFxuICAgICAgICAgIHRvdGFsTWVhbHM6IHsgaW5jcmVtZW50OiB0cmFuc2FjdGlvbi5saXN0aW5nLnF1YW50aXR5IH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHByaXNtYS5wb2ludExvZy5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXNlcklkOiB0cmFuc2FjdGlvbi5kb25vcklkLFxuICAgICAgICAgIHBvaW50czogMjUsXG4gICAgICAgICAgYWN0aW9uOiAnUElDS1VQX0NPTVBMRVRFRCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGBQaWNrdXAgY29tcGxldGVkOiAke3RyYW5zYWN0aW9uLmxpc3RpbmcuZm9vZE5hbWV9YCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgLy8gQXdhcmQgcG9pbnRzIHRvIGNvbGxlY3RvciB0b29cbiAgICAgIHByaXNtYS51c2VyLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiB0cmFuc2FjdGlvbi5jb2xsZWN0b3JJZCB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZmVlZFBvaW50czogeyBpbmNyZW1lbnQ6IDI1IH0sXG4gICAgICAgICAgdG90YWxNZWFsczogeyBpbmNyZW1lbnQ6IHRyYW5zYWN0aW9uLmxpc3RpbmcucXVhbnRpdHkgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgcHJpc21hLnBvaW50TG9nLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB1c2VySWQ6IHRyYW5zYWN0aW9uLmNvbGxlY3RvcklkLFxuICAgICAgICAgIHBvaW50czogMjUsXG4gICAgICAgICAgYWN0aW9uOiAnUElDS1VQX0NPTVBMRVRFRCcsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGBDb2xsZWN0ZWQ6ICR7dHJhbnNhY3Rpb24ubGlzdGluZy5mb29kTmFtZX1gLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICAvLyBBZGQgdG8gcHJpemUgcG9vbCBzbGljZSAoMSUgb2YgcGxhdGZvcm0gZmVlKVxuICAgICAgcHJpc21hLnByaXplUG9vbC51cGRhdGVNYW55KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBtb250aDogbmV3IERhdGUoKS5nZXRNb250aCgpICsgMSxcbiAgICAgICAgICB5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgaXNEcmF3bjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0cmFuc2FjdGlvblNsaWNlOiB7IGluY3JlbWVudDogdHJhbnNhY3Rpb24ucGxhdGZvcm1GZWUgKiAwLjAxIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICBdKVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBjb21wbGV0ZSBwaWNrdXAnIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsInByaXNtYSIsIlBPU1QiLCJyZXEiLCJwYXJhbXMiLCJzZXNzaW9uIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwidXNlcklkIiwidXNlciIsImlkIiwidHJhbnNhY3Rpb24iLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImxpc3RpbmdJZCIsImluY2x1ZGUiLCJsaXN0aW5nIiwiY29sbGVjdG9ySWQiLCJkb25vcklkIiwiJHRyYW5zYWN0aW9uIiwidXBkYXRlIiwiZGF0YSIsImNvbXBsZXRlZEF0IiwiRGF0ZSIsImZlZWRQb2ludHMiLCJpbmNyZW1lbnQiLCJ0b3RhbE1lYWxzIiwicXVhbnRpdHkiLCJwb2ludExvZyIsImNyZWF0ZSIsInBvaW50cyIsImFjdGlvbiIsImRlc2NyaXB0aW9uIiwiZm9vZE5hbWUiLCJwcml6ZVBvb2wiLCJ1cGRhdGVNYW55IiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImlzRHJhd24iLCJ0cmFuc2FjdGlvblNsaWNlIiwicGxhdGZvcm1GZWUiLCJzdWNjZXNzIiwiZXJyIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/listings/[id]/complete/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        \"error\"\n    ] : 0\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFFN0MsTUFBTUMsa0JBQWtCQztBQUVqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFBRUksS0FBS0MsS0FBeUIsR0FBZ0I7UUFBQztLQUFRLEdBQUcsQ0FBUztBQUFDLEdBQUU7QUFFM0YsSUFBSUEsSUFBeUIsRUFBY0osZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemVyb3dhc3RlLW1hcmtldHBsYWNlLy4vc3JjL2xpYi9wcmlzbWEudHM/MDFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQgfVxuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xuICBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IFsnZXJyb3InXSA6IFsnZXJyb3InXSB9KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJsb2ciLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2F%5Bid%5D%2Fcomplete%2Froute&page=%2Fapi%2Flistings%2F%5Bid%5D%2Fcomplete%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2F%5Bid%5D%2Fcomplete%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();