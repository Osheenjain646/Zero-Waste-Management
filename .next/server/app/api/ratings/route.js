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
exports.id = "app/api/ratings/route";
exports.ids = ["app/api/ratings/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fratings%2Froute&page=%2Fapi%2Fratings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fratings%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fratings%2Froute&page=%2Fapi%2Fratings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fratings%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Main_Projects_zerowaste_v3_complete_src_app_api_ratings_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/ratings/route.ts */ \"(rsc)/./src/app/api/ratings/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/ratings/route\",\n        pathname: \"/api/ratings\",\n        filename: \"route\",\n        bundlePath: \"app/api/ratings/route\"\n    },\n    resolvedPagePath: \"C:\\\\Main\\\\Projects\\\\zerowaste-v3-complete\\\\src\\\\app\\\\api\\\\ratings\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Main_Projects_zerowaste_v3_complete_src_app_api_ratings_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/ratings/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyYXRpbmdzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZyYXRpbmdzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcmF0aW5ncyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDTWFpbiU1Q1Byb2plY3RzJTVDemVyb3dhc3RlLXYzLWNvbXBsZXRlJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDTWFpbiU1Q1Byb2plY3RzJTVDemVyb3dhc3RlLXYzLWNvbXBsZXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUMyQjtBQUN4RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3plcm93YXN0ZS1tYXJrZXRwbGFjZS8/MzIwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxNYWluXFxcXFByb2plY3RzXFxcXHplcm93YXN0ZS12My1jb21wbGV0ZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxyYXRpbmdzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9yYXRpbmdzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcmF0aW5nc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcmF0aW5ncy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXE1haW5cXFxcUHJvamVjdHNcXFxcemVyb3dhc3RlLXYzLWNvbXBsZXRlXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHJhdGluZ3NcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3JhdGluZ3Mvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fratings%2Froute&page=%2Fapi%2Fratings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fratings%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) return null;\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) return null;\n                const valid = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compare(credentials.password, user.password);\n                if (!valid) return null;\n                return {\n                    id: user.id,\n                    name: user.name,\n                    email: user.email,\n                    role: user.role,\n                    businessName: user.businessName\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n                token.businessName = user.businessName;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n                session.user.businessName = token.businessName;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1k7QUFDNUI7QUFDUjtBQUV0QixNQUFNSSxjQUErQjtJQUMxQ0MsV0FBVztRQUNUSiwyRUFBbUJBLENBQUM7WUFDbEJLLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVSxPQUFPO2dCQUUxRCxNQUFNRSxPQUFPLE1BQU1YLCtDQUFNQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQUVQLE9BQU9ELFlBQVlDLEtBQUs7b0JBQUM7Z0JBQ3BDO2dCQUVBLElBQUksQ0FBQ0ssTUFBTSxPQUFPO2dCQUVsQixNQUFNRyxRQUFRLE1BQU1iLHVEQUFjLENBQUNJLFlBQVlJLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtnQkFDdEUsSUFBSSxDQUFDSyxPQUFPLE9BQU87Z0JBRW5CLE9BQU87b0JBQ0xFLElBQUlMLEtBQUtLLEVBQUU7b0JBQ1haLE1BQU1PLEtBQUtQLElBQUk7b0JBQ2ZFLE9BQU9LLEtBQUtMLEtBQUs7b0JBQ2pCVyxNQUFNTixLQUFLTSxJQUFJO29CQUNmQyxjQUFjUCxLQUFLTyxZQUFZO2dCQUNqQztZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVWLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSVSxNQUFNTCxFQUFFLEdBQUdMLEtBQUtLLEVBQUU7Z0JBQ2xCSyxNQUFNSixJQUFJLEdBQUcsS0FBY0EsSUFBSTtnQkFDL0JJLE1BQU1ILFlBQVksR0FBRyxLQUFjQSxZQUFZO1lBQ2pEO1lBQ0EsT0FBT0c7UUFDVDtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFRCxLQUFLLEVBQUU7WUFDOUIsSUFBSUMsUUFBUVgsSUFBSSxFQUFFO2dCQUNmVyxRQUFRWCxJQUFJLENBQVNLLEVBQUUsR0FBR0ssTUFBTUwsRUFBRTtnQkFDakNNLFFBQVFYLElBQUksQ0FBU00sSUFBSSxHQUFHSSxNQUFNSixJQUFJO2dCQUN0Q0ssUUFBUVgsSUFBSSxDQUFTTyxZQUFZLEdBQUdHLE1BQU1ILFlBQVk7WUFDMUQ7WUFDQSxPQUFPSTtRQUNUO0lBQ0Y7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUYsU0FBUztRQUFFRyxVQUFVO0lBQU07SUFDM0JDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUNyQyxFQUFDO0FBRUQsTUFBTUMsVUFBVWhDLGdEQUFRQSxDQUFDSTtBQUNpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3plcm93YXN0ZS1tYXJrZXRwbGFjZS8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJ1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnQC9saWIvcHJpc21hJ1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ2NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAnZW1haWwnIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHJldHVybiBudWxsXG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9LFxuICAgICAgICB9KVxuXG4gICAgICAgIGlmICghdXNlcikgcmV0dXJuIG51bGxcblxuICAgICAgICBjb25zdCB2YWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKVxuICAgICAgICBpZiAoIXZhbGlkKSByZXR1cm4gbnVsbFxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgICBidXNpbmVzc05hbWU6IHVzZXIuYnVzaW5lc3NOYW1lLFxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWRcbiAgICAgICAgdG9rZW4ucm9sZSA9ICh1c2VyIGFzIGFueSkucm9sZVxuICAgICAgICB0b2tlbi5idXNpbmVzc05hbWUgPSAodXNlciBhcyBhbnkpLmJ1c2luZXNzTmFtZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuXG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHNlc3Npb24udXNlcikge1xuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIGFueSkuaWQgPSB0b2tlbi5pZFxuICAgICAgICA7KHNlc3Npb24udXNlciBhcyBhbnkpLnJvbGUgPSB0b2tlbi5yb2xlXG4gICAgICAgIDsoc2Vzc2lvbi51c2VyIGFzIGFueSkuYnVzaW5lc3NOYW1lID0gdG9rZW4uYnVzaW5lc3NOYW1lXG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvblxuICAgIH0sXG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2F1dGgvbG9naW4nLFxuICB9LFxuICBzZXNzaW9uOiB7IHN0cmF0ZWd5OiAnand0JyB9LFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn1cblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwicHJpc21hIiwiYmNyeXB0IiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInZhbGlkIiwiY29tcGFyZSIsImlkIiwicm9sZSIsImJ1c2luZXNzTmFtZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2Vzc2lvbiIsInBhZ2VzIiwic2lnbkluIiwic3RyYXRlZ3kiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/ratings/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/ratings/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/types.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/ZodError.js\");\n\n\n\n\n\nconst schema = zod__WEBPACK_IMPORTED_MODULE_4__.object({\n    transactionId: zod__WEBPACK_IMPORTED_MODULE_4__.string(),\n    ratedId: zod__WEBPACK_IMPORTED_MODULE_4__.string(),\n    score: zod__WEBPACK_IMPORTED_MODULE_4__.number().int().min(1).max(5),\n    comment: zod__WEBPACK_IMPORTED_MODULE_4__.string().max(300).optional()\n});\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Not authenticated\"\n    }, {\n        status: 401\n    });\n    const raterId = session.user.id;\n    try {\n        const body = await req.json();\n        const data = schema.parse(body);\n        // Check transaction exists and user is part of it\n        const tx = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.transaction.findUnique({\n            where: {\n                id: data.transactionId\n            }\n        });\n        if (!tx) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Transaction not found\"\n        }, {\n            status: 404\n        });\n        if (tx.donorId !== raterId && tx.collectorId !== raterId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Not part of this transaction\"\n            }, {\n                status: 403\n            });\n        }\n        if (tx.status !== \"COMPLETED\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Can only rate completed transactions\"\n            }, {\n                status: 400\n            });\n        }\n        // Check no duplicate rating\n        const existing = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.rating.findFirst({\n            where: {\n                transactionId: data.transactionId,\n                raterId\n            }\n        });\n        if (existing) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Already rated this transaction\"\n        }, {\n            status: 400\n        });\n        // Create rating\n        const rating = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.rating.create({\n            data: {\n                transactionId: data.transactionId,\n                raterId,\n                ratedId: data.ratedId,\n                score: data.score,\n                comment: data.comment\n            }\n        });\n        // Update trust score for rated user (rolling average)\n        const allRatings = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.rating.findMany({\n            where: {\n                ratedId: data.ratedId\n            },\n            select: {\n                score: true\n            }\n        });\n        const avg = allRatings.reduce((sum, r)=>sum + r.score, 0) / allRatings.length;\n        const newTrust = Math.round(40 + avg * 12) // maps 1-5 stars to 52-100\n        ;\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.user.update({\n            where: {\n                id: data.ratedId\n            },\n            data: {\n                trustScore: Math.min(Math.max(newTrust, 0), 100)\n            }\n        });\n        // Award points for 5-star rating received\n        if (data.score === 5) {\n            await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.$transaction([\n                _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.user.update({\n                    where: {\n                        id: data.ratedId\n                    },\n                    data: {\n                        feedPoints: {\n                            increment: 15\n                        }\n                    }\n                }),\n                _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.pointLog.create({\n                    data: {\n                        userId: data.ratedId,\n                        points: 15,\n                        action: \"FIVE_STAR_RATING\",\n                        description: \"5-star rating received\"\n                    }\n                })\n            ]);\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            rating\n        });\n    } catch (err) {\n        if (err instanceof zod__WEBPACK_IMPORTED_MODULE_5__.ZodError) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: err.errors[0].message\n            }, {\n                status: 400\n            });\n        }\n        console.error(err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to submit rating\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aS9yYXRpbmdzL3JvdXRlLnRzP2MyN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZSdcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5cbmNvbnN0IHNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdHJhbnNhY3Rpb25JZDogei5zdHJpbmcoKSxcbiAgcmF0ZWRJZDogei5zdHJpbmcoKSxcbiAgc2NvcmU6IHoubnVtYmVyKCkuaW50KCkubWluKDEpLm1heCg1KSxcbiAgY29tbWVudDogei5zdHJpbmcoKS5tYXgoMzAwKS5vcHRpb25hbCgpLFxufSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucylcbiAgaWYgKCFzZXNzaW9uKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ05vdCBhdXRoZW50aWNhdGVkJyB9LCB7IHN0YXR1czogNDAxIH0pXG5cbiAgY29uc3QgcmF0ZXJJZCA9IChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZFxuXG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKClcbiAgICBjb25zdCBkYXRhID0gc2NoZW1hLnBhcnNlKGJvZHkpXG5cbiAgICAvLyBDaGVjayB0cmFuc2FjdGlvbiBleGlzdHMgYW5kIHVzZXIgaXMgcGFydCBvZiBpdFxuICAgIGNvbnN0IHR4ID0gYXdhaXQgcHJpc21hLnRyYW5zYWN0aW9uLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogZGF0YS50cmFuc2FjdGlvbklkIH0gfSlcbiAgICBpZiAoIXR4KSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1RyYW5zYWN0aW9uIG5vdCBmb3VuZCcgfSwgeyBzdGF0dXM6IDQwNCB9KVxuICAgIGlmICh0eC5kb25vcklkICE9PSByYXRlcklkICYmIHR4LmNvbGxlY3RvcklkICE9PSByYXRlcklkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ05vdCBwYXJ0IG9mIHRoaXMgdHJhbnNhY3Rpb24nIH0sIHsgc3RhdHVzOiA0MDMgfSlcbiAgICB9XG4gICAgaWYgKHR4LnN0YXR1cyAhPT0gJ0NPTVBMRVRFRCcpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQ2FuIG9ubHkgcmF0ZSBjb21wbGV0ZWQgdHJhbnNhY3Rpb25zJyB9LCB7IHN0YXR1czogNDAwIH0pXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgbm8gZHVwbGljYXRlIHJhdGluZ1xuICAgIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLnJhdGluZy5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHsgdHJhbnNhY3Rpb25JZDogZGF0YS50cmFuc2FjdGlvbklkLCByYXRlcklkIH0sXG4gICAgfSlcbiAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnQWxyZWFkeSByYXRlZCB0aGlzIHRyYW5zYWN0aW9uJyB9LCB7IHN0YXR1czogNDAwIH0pXG5cbiAgICAvLyBDcmVhdGUgcmF0aW5nXG4gICAgY29uc3QgcmF0aW5nID0gYXdhaXQgcHJpc21hLnJhdGluZy5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICB0cmFuc2FjdGlvbklkOiBkYXRhLnRyYW5zYWN0aW9uSWQsXG4gICAgICAgIHJhdGVySWQsXG4gICAgICAgIHJhdGVkSWQ6IGRhdGEucmF0ZWRJZCxcbiAgICAgICAgc2NvcmU6IGRhdGEuc2NvcmUsXG4gICAgICAgIGNvbW1lbnQ6IGRhdGEuY29tbWVudCxcbiAgICAgIH0sXG4gICAgfSlcblxuICAgIC8vIFVwZGF0ZSB0cnVzdCBzY29yZSBmb3IgcmF0ZWQgdXNlciAocm9sbGluZyBhdmVyYWdlKVxuICAgIGNvbnN0IGFsbFJhdGluZ3MgPSBhd2FpdCBwcmlzbWEucmF0aW5nLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7IHJhdGVkSWQ6IGRhdGEucmF0ZWRJZCB9LFxuICAgICAgc2VsZWN0OiB7IHNjb3JlOiB0cnVlIH0sXG4gICAgfSlcbiAgICBjb25zdCBhdmcgPSBhbGxSYXRpbmdzLnJlZHVjZSgoc3VtLCByKSA9PiBzdW0gKyByLnNjb3JlLCAwKSAvIGFsbFJhdGluZ3MubGVuZ3RoXG4gICAgY29uc3QgbmV3VHJ1c3QgPSBNYXRoLnJvdW5kKDQwICsgYXZnICogMTIpIC8vIG1hcHMgMS01IHN0YXJzIHRvIDUyLTEwMFxuXG4gICAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBkYXRhLnJhdGVkSWQgfSxcbiAgICAgIGRhdGE6IHsgdHJ1c3RTY29yZTogTWF0aC5taW4oTWF0aC5tYXgobmV3VHJ1c3QsIDApLCAxMDApIH0sXG4gICAgfSlcblxuICAgIC8vIEF3YXJkIHBvaW50cyBmb3IgNS1zdGFyIHJhdGluZyByZWNlaXZlZFxuICAgIGlmIChkYXRhLnNjb3JlID09PSA1KSB7XG4gICAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKFtcbiAgICAgICAgcHJpc21hLnVzZXIudXBkYXRlKHsgd2hlcmU6IHsgaWQ6IGRhdGEucmF0ZWRJZCB9LCBkYXRhOiB7IGZlZWRQb2ludHM6IHsgaW5jcmVtZW50OiAxNSB9IH0gfSksXG4gICAgICAgIHByaXNtYS5wb2ludExvZy5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHsgdXNlcklkOiBkYXRhLnJhdGVkSWQsIHBvaW50czogMTUsIGFjdGlvbjogJ0ZJVkVfU1RBUl9SQVRJTkcnLCBkZXNjcmlwdGlvbjogJzUtc3RhciByYXRpbmcgcmVjZWl2ZWQnIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSlcbiAgICB9XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyByYXRpbmcgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnIuZXJyb3JzWzBdLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBzdWJtaXQgcmF0aW5nJyB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJwcmlzbWEiLCJ6Iiwic2NoZW1hIiwib2JqZWN0IiwidHJhbnNhY3Rpb25JZCIsInN0cmluZyIsInJhdGVkSWQiLCJzY29yZSIsIm51bWJlciIsImludCIsIm1pbiIsIm1heCIsImNvbW1lbnQiLCJvcHRpb25hbCIsIlBPU1QiLCJyZXEiLCJzZXNzaW9uIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwicmF0ZXJJZCIsInVzZXIiLCJpZCIsImJvZHkiLCJkYXRhIiwicGFyc2UiLCJ0eCIsInRyYW5zYWN0aW9uIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiZG9ub3JJZCIsImNvbGxlY3RvcklkIiwiZXhpc3RpbmciLCJyYXRpbmciLCJmaW5kRmlyc3QiLCJjcmVhdGUiLCJhbGxSYXRpbmdzIiwiZmluZE1hbnkiLCJzZWxlY3QiLCJhdmciLCJyZWR1Y2UiLCJzdW0iLCJyIiwibGVuZ3RoIiwibmV3VHJ1c3QiLCJNYXRoIiwicm91bmQiLCJ1cGRhdGUiLCJ0cnVzdFNjb3JlIiwiJHRyYW5zYWN0aW9uIiwiZmVlZFBvaW50cyIsImluY3JlbWVudCIsInBvaW50TG9nIiwidXNlcklkIiwicG9pbnRzIiwiYWN0aW9uIiwiZGVzY3JpcHRpb24iLCJlcnIiLCJab2RFcnJvciIsImVycm9ycyIsIm1lc3NhZ2UiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/ratings/route.ts\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fratings%2Froute&page=%2Fapi%2Fratings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fratings%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();