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
exports.id = "app/api/listings/[id]/claim/route";
exports.ids = ["app/api/listings/[id]/claim/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2F%5Bid%5D%2Fclaim%2Froute&page=%2Fapi%2Flistings%2F%5Bid%5D%2Fclaim%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2F%5Bid%5D%2Fclaim%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2F%5Bid%5D%2Fclaim%2Froute&page=%2Fapi%2Flistings%2F%5Bid%5D%2Fclaim%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2F%5Bid%5D%2Fclaim%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Main_Projects_zerowaste_v3_complete_src_app_api_listings_id_claim_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/listings/[id]/claim/route.ts */ \"(rsc)/./src/app/api/listings/[id]/claim/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/listings/[id]/claim/route\",\n        pathname: \"/api/listings/[id]/claim\",\n        filename: \"route\",\n        bundlePath: \"app/api/listings/[id]/claim/route\"\n    },\n    resolvedPagePath: \"C:\\\\Main\\\\Projects\\\\zerowaste-v3-complete\\\\src\\\\app\\\\api\\\\listings\\\\[id]\\\\claim\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Main_Projects_zerowaste_v3_complete_src_app_api_listings_id_claim_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/listings/[id]/claim/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsaXN0aW5ncyUyRiU1QmlkJTVEJTJGY2xhaW0lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmxpc3RpbmdzJTJGJTVCaWQlNUQlMkZjbGFpbSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmxpc3RpbmdzJTJGJTVCaWQlNUQlMkZjbGFpbSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDTWFpbiU1Q1Byb2plY3RzJTVDemVyb3dhc3RlLXYzLWNvbXBsZXRlJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDTWFpbiU1Q1Byb2plY3RzJTVDemVyb3dhc3RlLXYzLWNvbXBsZXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUN5QztBQUN0SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3plcm93YXN0ZS1tYXJrZXRwbGFjZS8/NDk5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxNYWluXFxcXFByb2plY3RzXFxcXHplcm93YXN0ZS12My1jb21wbGV0ZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxsaXN0aW5nc1xcXFxbaWRdXFxcXGNsYWltXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9saXN0aW5ncy9baWRdL2NsYWltL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbGlzdGluZ3MvW2lkXS9jbGFpbVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbGlzdGluZ3MvW2lkXS9jbGFpbS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXE1haW5cXFxcUHJvamVjdHNcXFxcemVyb3dhc3RlLXYzLWNvbXBsZXRlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGxpc3RpbmdzXFxcXFtpZF1cXFxcY2xhaW1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2xpc3RpbmdzL1tpZF0vY2xhaW0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2F%5Bid%5D%2Fclaim%2Froute&page=%2Fapi%2Flistings%2F%5Bid%5D%2Fclaim%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2F%5Bid%5D%2Fclaim%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) return null;\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) return null;\n                const valid = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compare(credentials.password, user.password);\n                if (!valid) return null;\n                return {\n                    id: user.id,\n                    name: user.name,\n                    email: user.email,\n                    role: user.role,\n                    businessName: user.businessName\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n                token.businessName = user.businessName;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n                session.user.businessName = token.businessName;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1k7QUFDNUI7QUFDUjtBQUV0QixNQUFNSSxjQUErQjtJQUMxQ0MsV0FBVztRQUNUSiwyRUFBbUJBLENBQUM7WUFDbEJLLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVSxPQUFPO2dCQUUxRCxNQUFNRSxPQUFPLE1BQU1YLCtDQUFNQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQUVQLE9BQU9ELFlBQVlDLEtBQUs7b0JBQUM7Z0JBQ3BDO2dCQUVBLElBQUksQ0FBQ0ssTUFBTSxPQUFPO2dCQUVsQixNQUFNRyxRQUFRLE1BQU1iLHVEQUFjLENBQUNJLFlBQVlJLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtnQkFDdEUsSUFBSSxDQUFDSyxPQUFPLE9BQU87Z0JBRW5CLE9BQU87b0JBQ0xFLElBQUlMLEtBQUtLLEVBQUU7b0JBQ1haLE1BQU1PLEtBQUtQLElBQUk7b0JBQ2ZFLE9BQU9LLEtBQUtMLEtBQUs7b0JBQ2pCVyxNQUFNTixLQUFLTSxJQUFJO29CQUNmQyxjQUFjUCxLQUFLTyxZQUFZO2dCQUNqQztZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVWLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSVSxNQUFNTCxFQUFFLEdBQUdMLEtBQUtLLEVBQUU7Z0JBQ2xCSyxNQUFNSixJQUFJLEdBQUcsS0FBY0EsSUFBSTtnQkFDL0JJLE1BQU1ILFlBQVksR0FBRyxLQUFjQSxZQUFZO1lBQ2pEO1lBQ0EsT0FBT0c7UUFDVDtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFRCxLQUFLLEVBQUU7WUFDOUIsSUFBSUMsUUFBUVgsSUFBSSxFQUFFO2dCQUNmVyxRQUFRWCxJQUFJLENBQVNLLEVBQUUsR0FBR0ssTUFBTUwsRUFBRTtnQkFDakNNLFFBQVFYLElBQUksQ0FBU00sSUFBSSxHQUFHSSxNQUFNSixJQUFJO2dCQUN0Q0ssUUFBUVgsSUFBSSxDQUFTTyxZQUFZLEdBQUdHLE1BQU1ILFlBQVk7WUFDMUQ7WUFDQSxPQUFPSTtRQUNUO0lBQ0Y7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUYsU0FBUztRQUFFRyxVQUFVO0lBQU07SUFDM0JDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUNyQyxFQUFDO0FBRUQsTUFBTUMsVUFBVWhDLGdEQUFRQSxDQUFDSTtBQUNpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3plcm93YXN0ZS1tYXJrZXRwbGFjZS8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ2NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAnZW1haWwnIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHJldHVybiBudWxsXG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9LFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIG51bGxcblxuICAgICAgICBjb25zdCB2YWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxuICAgICAgICBpZiAoIXZhbGlkKSByZXR1cm4gbnVsbFxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICBidXNpbmVzc05hbWU6IHVzZXIuYnVzaW5lc3NOYW1lLFxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWRcbiAgICAgICAgdG9rZW4ucm9sZSA9ICh1c2VyIGFzIGFueSkucm9sZVxuICAgICAgICB0b2tlbi5idXNpbmVzc05hbWUgPSAodXNlciBhcyBhbnkpLmJ1c2luZXNzTmFtZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuXG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIGFueSkuaWQgPSB0b2tlbi5pZFxuICAgICAgICA7KHNlc3Npb24udXNlciBhcyBhbnkpLnJvbGUgPSB0b2tlbi5yb2xlXG4gICAgICAgIDsoc2Vzc2lvbi51c2VyIGFzIGFueSkuYnVzaW5lc3NOYW1lID0gdG9rZW4uYnVzaW5lc3NOYW1lXG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvblxuICAgIH0sXG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2F1dGgvbG9naW4nLFxuICB9LFxuICBzZXNzaW9uOiB7IHN0cmF0ZWd5OiAnand0JyB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn1cblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwicHJpc21hIiwiYmNyeXB0IiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInZhbGlkIiwiY29tcGFyZSIsImlkIiwicm9sZSIsImJ1c2luZXNzTmFtZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2Vzc2lvbiIsInBhZ2VzIiwic2lnbkluIiwic3RyYXRlZ3kiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/listings/[id]/claim/route.ts":
/*!**************************************************!*\
  !*** ./src/app/api/listings/[id]/claim/route.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n\n\n\n\nasync function POST(req, { params }) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Not authenticated\"\n    }, {\n        status: 401\n    });\n    const userId = session.user.id;\n    const role = session.user.role;\n    if (role !== \"NGO\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Only NGOs can claim listings\"\n        }, {\n            status: 403\n        });\n    }\n    try {\n        const listing = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.listing.findUnique({\n            where: {\n                id: params.id\n            }\n        });\n        if (!listing) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Listing not found\"\n        }, {\n            status: 404\n        });\n        if (listing.status !== \"ACTIVE\") return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Listing already claimed or expired\"\n        }, {\n            status: 400\n        });\n        if (new Date() > listing.pickupEnd) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Listing has expired\"\n        }, {\n            status: 400\n        });\n        if (listing.donorId === userId) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Cannot claim your own listing\"\n        }, {\n            status: 400\n        });\n        const [updatedListing, transaction] = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.$transaction([\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.listing.update({\n                where: {\n                    id: params.id\n                },\n                data: {\n                    status: \"CLAIMED\"\n                }\n            }),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.transaction.create({\n                data: {\n                    listingId: params.id,\n                    donorId: listing.donorId,\n                    collectorId: userId,\n                    platformFee: listing.quantity * 2\n                }\n            })\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            listing: updatedListing,\n            transaction\n        });\n    } catch (err) {\n        console.error(err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to claim listing\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9saXN0aW5ncy9baWRdL2NsYWltL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1RDtBQUNYO0FBQ29CO0FBQzNCO0FBRTlCLGVBQWVJLEtBQ3BCQyxHQUFnQixFQUNoQixFQUFFQyxNQUFNLEVBQThCO0lBRXRDLE1BQU1DLFVBQVUsTUFBTU4sMkRBQWdCQSxDQUFDQyxxRUFBV0E7SUFDbEQsSUFBSSxDQUFDSyxTQUFTLE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFvQixHQUFHO1FBQUVDLFFBQVE7SUFBSTtJQUVyRixNQUFNQyxTQUFTLFFBQVNDLElBQUksQ0FBU0MsRUFBRTtJQUN2QyxNQUFNQyxPQUFPLFFBQVNGLElBQUksQ0FBU0UsSUFBSTtJQUV2QyxJQUFJQSxTQUFTLE9BQU87UUFDbEIsT0FBT2QscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQStCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3BGO0lBRUEsSUFBSTtRQUNGLE1BQU1LLFVBQVUsTUFBTVosK0NBQU1BLENBQUNZLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDO1lBQzlDQyxPQUFPO2dCQUFFSixJQUFJUCxPQUFPTyxFQUFFO1lBQUM7UUFDekI7UUFFQSxJQUFJLENBQUNFLFNBQVMsT0FBT2YscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQW9CLEdBQUc7WUFBRUMsUUFBUTtRQUFJO1FBQ3JGLElBQUlLLFFBQVFMLE1BQU0sS0FBSyxVQUFVLE9BQU9WLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtRQUN6SCxJQUFJLElBQUlRLFNBQVNILFFBQVFJLFNBQVMsRUFBRSxPQUFPbkIscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXNCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO1FBQzdHLElBQUlLLFFBQVFLLE9BQU8sS0FBS1QsUUFBUSxPQUFPWCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZ0MsR0FBRztZQUFFQyxRQUFRO1FBQUk7UUFFbkgsTUFBTSxDQUFDVyxnQkFBZ0JDLFlBQVksR0FBRyxNQUFNbkIsK0NBQU1BLENBQUNvQixZQUFZLENBQUM7WUFDOURwQiwrQ0FBTUEsQ0FBQ1ksT0FBTyxDQUFDUyxNQUFNLENBQUM7Z0JBQ3BCUCxPQUFPO29CQUFFSixJQUFJUCxPQUFPTyxFQUFFO2dCQUFDO2dCQUN2QlksTUFBTTtvQkFBRWYsUUFBUTtnQkFBVTtZQUM1QjtZQUNBUCwrQ0FBTUEsQ0FBQ21CLFdBQVcsQ0FBQ0ksTUFBTSxDQUFDO2dCQUN4QkQsTUFBTTtvQkFDSkUsV0FBV3JCLE9BQU9PLEVBQUU7b0JBQ3BCTyxTQUFTTCxRQUFRSyxPQUFPO29CQUN4QlEsYUFBYWpCO29CQUNia0IsYUFBYWQsUUFBUWUsUUFBUSxHQUFHO2dCQUNsQztZQUNGO1NBQ0Q7UUFFRCxPQUFPOUIscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFTyxTQUFTTTtZQUFnQkM7UUFBWTtJQUNsRSxFQUFFLE9BQU9TLEtBQUs7UUFDWkMsUUFBUXZCLEtBQUssQ0FBQ3NCO1FBQ2QsT0FBTy9CLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUEwQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMvRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemVyb3dhc3RlLW1hcmtldHBsYWNlLy4vc3JjL2FwcC9hcGkvbGlzdGluZ3MvW2lkXS9jbGFpbS9yb3V0ZS50cz83Mjg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUnXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tICdAL2xpYi9wcmlzbWEnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKFxuICByZXE6IE5leHRSZXF1ZXN0LFxuICB7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBpZDogc3RyaW5nIH0gfVxuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxuICBpZiAoIXNlc3Npb24pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSlcblxuICBjb25zdCB1c2VySWQgPSAoc2Vzc2lvbi51c2VyIGFzIGFueSkuaWRcbiAgY29uc3Qgcm9sZSA9IChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlXG5cbiAgaWYgKHJvbGUgIT09ICdOR08nKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdPbmx5IE5HT3MgY2FuIGNsYWltIGxpc3RpbmdzJyB9LCB7IHN0YXR1czogNDAzIH0pXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGxpc3RpbmcgPSBhd2FpdCBwcmlzbWEubGlzdGluZy5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBwYXJhbXMuaWQgfSxcbiAgICB9KVxuXG4gICAgaWYgKCFsaXN0aW5nKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0xpc3Rpbmcgbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pXG4gICAgaWYgKGxpc3Rpbmcuc3RhdHVzICE9PSAnQUNUSVZFJykgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdMaXN0aW5nIGFscmVhZHkgY2xhaW1lZCBvciBleHBpcmVkJyB9LCB7IHN0YXR1czogNDAwIH0pXG4gICAgaWYgKG5ldyBEYXRlKCkgPiBsaXN0aW5nLnBpY2t1cEVuZCkgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdMaXN0aW5nIGhhcyBleHBpcmVkJyB9LCB7IHN0YXR1czogNDAwIH0pXG4gICAgaWYgKGxpc3RpbmcuZG9ub3JJZCA9PT0gdXNlcklkKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0Nhbm5vdCBjbGFpbSB5b3VyIG93biBsaXN0aW5nJyB9LCB7IHN0YXR1czogNDAwIH0pXG5cbiAgICBjb25zdCBbdXBkYXRlZExpc3RpbmcsIHRyYW5zYWN0aW9uXSA9IGF3YWl0IHByaXNtYS4kdHJhbnNhY3Rpb24oW1xuICAgICAgcHJpc21hLmxpc3RpbmcudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IHBhcmFtcy5pZCB9LFxuICAgICAgICBkYXRhOiB7IHN0YXR1czogJ0NMQUlNRUQnIH0sXG4gICAgICB9KSxcbiAgICAgIHByaXNtYS50cmFuc2FjdGlvbi5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbGlzdGluZ0lkOiBwYXJhbXMuaWQsXG4gICAgICAgICAgZG9ub3JJZDogbGlzdGluZy5kb25vcklkLFxuICAgICAgICAgIGNvbGxlY3RvcklkOiB1c2VySWQsXG4gICAgICAgICAgcGxhdGZvcm1GZWU6IGxpc3RpbmcucXVhbnRpdHkgKiAyLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSlcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGxpc3Rpbmc6IHVwZGF0ZWRMaXN0aW5nLCB0cmFuc2FjdGlvbiB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBjbGFpbSBsaXN0aW5nJyB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJwcmlzbWEiLCJQT1NUIiwicmVxIiwicGFyYW1zIiwic2Vzc2lvbiIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInVzZXJJZCIsInVzZXIiLCJpZCIsInJvbGUiLCJsaXN0aW5nIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiRGF0ZSIsInBpY2t1cEVuZCIsImRvbm9ySWQiLCJ1cGRhdGVkTGlzdGluZyIsInRyYW5zYWN0aW9uIiwiJHRyYW5zYWN0aW9uIiwidXBkYXRlIiwiZGF0YSIsImNyZWF0ZSIsImxpc3RpbmdJZCIsImNvbGxlY3RvcklkIiwicGxhdGZvcm1GZWUiLCJxdWFudGl0eSIsImVyciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/listings/[id]/claim/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2F%5Bid%5D%2Fclaim%2Froute&page=%2Fapi%2Flistings%2F%5Bid%5D%2Fclaim%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2F%5Bid%5D%2Fclaim%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();