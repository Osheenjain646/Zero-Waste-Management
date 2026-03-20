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
exports.id = "app/api/listings/route";
exports.ids = ["app/api/listings/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2Froute&page=%2Fapi%2Flistings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2Froute&page=%2Fapi%2Flistings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Main_Projects_zerowaste_v3_complete_src_app_api_listings_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/listings/route.ts */ \"(rsc)/./src/app/api/listings/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/listings/route\",\n        pathname: \"/api/listings\",\n        filename: \"route\",\n        bundlePath: \"app/api/listings/route\"\n    },\n    resolvedPagePath: \"C:\\\\Main\\\\Projects\\\\zerowaste-v3-complete\\\\src\\\\app\\\\api\\\\listings\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Main_Projects_zerowaste_v3_complete_src_app_api_listings_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/listings/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsaXN0aW5ncyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbGlzdGluZ3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsaXN0aW5ncyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDTWFpbiU1Q1Byb2plY3RzJTVDemVyb3dhc3RlLXYzLWNvbXBsZXRlJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDTWFpbiU1Q1Byb2plY3RzJTVDemVyb3dhc3RlLXYzLWNvbXBsZXRlJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM0QjtBQUN6RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3plcm93YXN0ZS1tYXJrZXRwbGFjZS8/ZTQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxNYWluXFxcXFByb2plY3RzXFxcXHplcm93YXN0ZS12My1jb21wbGV0ZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxsaXN0aW5nc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbGlzdGluZ3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9saXN0aW5nc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbGlzdGluZ3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxNYWluXFxcXFByb2plY3RzXFxcXHplcm93YXN0ZS12My1jb21wbGV0ZVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxsaXN0aW5nc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbGlzdGluZ3Mvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2Froute&page=%2Fapi%2Flistings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/listings/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/listings/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/types.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/ZodError.js\");\n\n\n\n\n\nconst createSchema = zod__WEBPACK_IMPORTED_MODULE_4__.object({\n    foodName: zod__WEBPACK_IMPORTED_MODULE_4__.string().min(2),\n    description: zod__WEBPACK_IMPORTED_MODULE_4__.string().optional(),\n    quantity: zod__WEBPACK_IMPORTED_MODULE_4__.number().int().positive(),\n    unit: zod__WEBPACK_IMPORTED_MODULE_4__.string().default(\"portions\"),\n    category: zod__WEBPACK_IMPORTED_MODULE_4__.string().default(\"Cooked Meal\"),\n    isVegan: zod__WEBPACK_IMPORTED_MODULE_4__.boolean().default(false),\n    isHalal: zod__WEBPACK_IMPORTED_MODULE_4__.boolean().default(false),\n    hasNuts: zod__WEBPACK_IMPORTED_MODULE_4__.boolean().default(false),\n    pickupStart: zod__WEBPACK_IMPORTED_MODULE_4__.string(),\n    pickupEnd: zod__WEBPACK_IMPORTED_MODULE_4__.string(),\n    address: zod__WEBPACK_IMPORTED_MODULE_4__.string().min(5),\n    city: zod__WEBPACK_IMPORTED_MODULE_4__.string().default(\"Mumbai\"),\n    latitude: zod__WEBPACK_IMPORTED_MODULE_4__.number().optional(),\n    longitude: zod__WEBPACK_IMPORTED_MODULE_4__.number().optional()\n});\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const status = searchParams.get(\"status\") || \"ACTIVE\";\n    const category = searchParams.get(\"category\");\n    const vegan = searchParams.get(\"vegan\") === \"true\";\n    const mine = searchParams.get(\"mine\") === \"true\";\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    try {\n        const listings = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.listing.findMany({\n            where: {\n                status: status,\n                ...category && category !== \"All\" ? {\n                    category\n                } : {},\n                ...vegan ? {\n                    isVegan: true\n                } : {},\n                ...mine && session ? {\n                    donorId: session.user.id\n                } : {},\n                ...status === \"ACTIVE\" ? {\n                    pickupEnd: {\n                        gte: new Date()\n                    }\n                } : {}\n            },\n            include: {\n                donor: {\n                    select: {\n                        id: true,\n                        name: true,\n                        businessName: true,\n                        trustScore: true,\n                        isVerified: true\n                    }\n                },\n                transaction: {\n                    select: {\n                        status: true,\n                        collectorId: true\n                    }\n                }\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            },\n            take: 100\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            listings\n        });\n    } catch (err) {\n        console.error(err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch listings\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    if (!session) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Not authenticated\"\n    }, {\n        status: 401\n    });\n    const userId = session.user.id;\n    const role = session.user.role;\n    if (role !== \"DONOR\" && role !== \"ADMIN\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Only donors can create listings\"\n        }, {\n            status: 403\n        });\n    }\n    try {\n        const body = await req.json();\n        const data = createSchema.parse(body);\n        const listing = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.listing.create({\n            data: {\n                donorId: userId,\n                foodName: data.foodName,\n                description: data.description,\n                quantity: data.quantity,\n                unit: data.unit,\n                category: data.category,\n                isVegan: data.isVegan,\n                isHalal: data.isHalal,\n                hasNuts: data.hasNuts,\n                pickupStart: new Date(data.pickupStart),\n                pickupEnd: new Date(data.pickupEnd),\n                address: data.address,\n                city: data.city,\n                latitude: data.latitude ?? 19.076,\n                longitude: data.longitude ?? 72.8777\n            },\n            include: {\n                donor: {\n                    select: {\n                        name: true,\n                        businessName: true,\n                        trustScore: true\n                    }\n                }\n            }\n        });\n        // Award Feed Points\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.$transaction([\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.user.update({\n                where: {\n                    id: userId\n                },\n                data: {\n                    feedPoints: {\n                        increment: 10\n                    }\n                }\n            }),\n            _lib_prisma__WEBPACK_IMPORTED_MODULE_3__.prisma.pointLog.create({\n                data: {\n                    userId,\n                    points: 10,\n                    action: \"LISTING_CREATED\",\n                    description: `Listed: ${data.foodName}`\n                }\n            })\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            listing\n        }, {\n            status: 201\n        });\n    } catch (err) {\n        if (err instanceof zod__WEBPACK_IMPORTED_MODULE_5__.ZodError) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: err.errors[0].message\n            }, {\n                status: 400\n            });\n        }\n        console.error(err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to create listing\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxvQkFBb0I7UUFDcEIsTUFBTWxELCtDQUFNQSxDQUFDb0UsWUFBWSxDQUFDO1lBQ3hCcEUsK0NBQU1BLENBQUN5QyxJQUFJLENBQUM0QixNQUFNLENBQUM7Z0JBQ2pCOUIsT0FBTztvQkFBRUcsSUFBSW9CO2dCQUFPO2dCQUNwQkcsTUFBTTtvQkFBRUssWUFBWTt3QkFBRUMsV0FBVztvQkFBRztnQkFBRTtZQUN4QztZQUNBdkUsK0NBQU1BLENBQUN3RSxRQUFRLENBQUNMLE1BQU0sQ0FBQztnQkFDckJGLE1BQU07b0JBQ0pIO29CQUNBVyxRQUFRO29CQUNSQyxRQUFRO29CQUNSbkUsYUFBYSxDQUFDLFFBQVEsRUFBRTBELEtBQUs3RCxRQUFRLENBQUMsQ0FBQztnQkFDekM7WUFDRjtTQUNEO1FBRUQsT0FBT1AscURBQVlBLENBQUM0RCxJQUFJLENBQUM7WUFBRXBCO1FBQVEsR0FBRztZQUFFTixRQUFRO1FBQUk7SUFDdEQsRUFBRSxPQUFPMkIsS0FBSztRQUNaLElBQUlBLGVBQWV6RCx5Q0FBVSxFQUFFO1lBQzdCLE9BQU9KLHFEQUFZQSxDQUFDNEQsSUFBSSxDQUFDO2dCQUFFRyxPQUFPRixJQUFJa0IsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsT0FBTztZQUFDLEdBQUc7Z0JBQUU5QyxRQUFRO1lBQUk7UUFDM0U7UUFDQTRCLFFBQVFDLEtBQUssQ0FBQ0Y7UUFDZCxPQUFPN0QscURBQVlBLENBQUM0RCxJQUFJLENBQUM7WUFBRUcsT0FBTztRQUEyQixHQUFHO1lBQUU3QixRQUFRO1FBQUk7SUFDaEY7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3plcm93YXN0ZS1tYXJrZXRwbGFjZS8uL3NyYy9hcHAvYXBpL2xpc3RpbmdzL3JvdXRlLnRzP2M3MzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9saWIvYXV0aCdcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCB7IHogfSBmcm9tICd6b2QnXG5cbmNvbnN0IGNyZWF0ZVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZm9vZE5hbWU6IHouc3RyaW5nKCkubWluKDIpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxuICBxdWFudGl0eTogei5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSgpLFxuICB1bml0OiB6LnN0cmluZygpLmRlZmF1bHQoJ3BvcnRpb25zJyksXG4gIGNhdGVnb3J5OiB6LnN0cmluZygpLmRlZmF1bHQoJ0Nvb2tlZCBNZWFsJyksXG4gIGlzVmVnYW46IHouYm9vbGVhbigpLmRlZmF1bHQoZmFsc2UpLFxuICBpc0hhbGFsOiB6LmJvb2xlYW4oKS5kZWZhdWx0KGZhbHNlKSxcbiAgaGFzTnV0czogei5ib29sZWFuKCkuZGVmYXVsdChmYWxzZSksXG4gIHBpY2t1cFN0YXJ0OiB6LnN0cmluZygpLFxuICBwaWNrdXBFbmQ6IHouc3RyaW5nKCksXG4gIGFkZHJlc3M6IHouc3RyaW5nKCkubWluKDUpLFxuICBjaXR5OiB6LnN0cmluZygpLmRlZmF1bHQoJ011bWJhaScpLFxuICBsYXRpdHVkZTogei5udW1iZXIoKS5vcHRpb25hbCgpLFxuICBsb25naXR1ZGU6IHoubnVtYmVyKCkub3B0aW9uYWwoKSxcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXEudXJsKVxuICBjb25zdCBzdGF0dXMgPSBzZWFyY2hQYXJhbXMuZ2V0KCdzdGF0dXMnKSB8fCAnQUNUSVZFJ1xuICBjb25zdCBjYXRlZ29yeSA9IHNlYXJjaFBhcmFtcy5nZXQoJ2NhdGVnb3J5JylcbiAgY29uc3QgdmVnYW4gPSBzZWFyY2hQYXJhbXMuZ2V0KCd2ZWdhbicpID09PSAndHJ1ZSdcbiAgY29uc3QgbWluZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ21pbmUnKSA9PT0gJ3RydWUnXG5cbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpXG5cbiAgdHJ5IHtcbiAgICBjb25zdCBsaXN0aW5ncyA9IGF3YWl0IHByaXNtYS5saXN0aW5nLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHN0YXR1czogc3RhdHVzIGFzIGFueSxcbiAgICAgICAgLi4uKGNhdGVnb3J5ICYmIGNhdGVnb3J5ICE9PSAnQWxsJyA/IHsgY2F0ZWdvcnkgfSA6IHt9KSxcbiAgICAgICAgLi4uKHZlZ2FuID8geyBpc1ZlZ2FuOiB0cnVlIH0gOiB7fSksXG4gICAgICAgIC4uLihtaW5lICYmIHNlc3Npb24gPyB7IGRvbm9ySWQ6IChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCB9IDoge30pLFxuICAgICAgICAuLi4oc3RhdHVzID09PSAnQUNUSVZFJyA/IHsgcGlja3VwRW5kOiB7IGd0ZTogbmV3IERhdGUoKSB9IH0gOiB7fSksXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBkb25vcjoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiB0cnVlLFxuICAgICAgICAgICAgYnVzaW5lc3NOYW1lOiB0cnVlLFxuICAgICAgICAgICAgdHJ1c3RTY29yZTogdHJ1ZSxcbiAgICAgICAgICAgIGlzVmVyaWZpZWQ6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNhY3Rpb246IHsgc2VsZWN0OiB7IHN0YXR1czogdHJ1ZSwgY29sbGVjdG9ySWQ6IHRydWUgfSB9LFxuICAgICAgfSxcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcbiAgICAgIHRha2U6IDEwMCxcbiAgICB9KVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbGlzdGluZ3MgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggbGlzdGluZ3MnIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKVxuICBpZiAoIXNlc3Npb24pIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTm90IGF1dGhlbnRpY2F0ZWQnIH0sIHsgc3RhdHVzOiA0MDEgfSlcblxuICBjb25zdCB1c2VySWQgPSAoc2Vzc2lvbi51c2VyIGFzIGFueSkuaWRcbiAgY29uc3Qgcm9sZSA9IChzZXNzaW9uLnVzZXIgYXMgYW55KS5yb2xlXG5cbiAgaWYgKHJvbGUgIT09ICdET05PUicgJiYgcm9sZSAhPT0gJ0FETUlOJykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnT25seSBkb25vcnMgY2FuIGNyZWF0ZSBsaXN0aW5ncycgfSwgeyBzdGF0dXM6IDQwMyB9KVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKVxuICAgIGNvbnN0IGRhdGEgPSBjcmVhdGVTY2hlbWEucGFyc2UoYm9keSlcblxuICAgIGNvbnN0IGxpc3RpbmcgPSBhd2FpdCBwcmlzbWEubGlzdGluZy5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBkb25vcklkOiB1c2VySWQsXG4gICAgICAgIGZvb2ROYW1lOiBkYXRhLmZvb2ROYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgICAgcXVhbnRpdHk6IGRhdGEucXVhbnRpdHksXG4gICAgICAgIHVuaXQ6IGRhdGEudW5pdCxcbiAgICAgICAgY2F0ZWdvcnk6IGRhdGEuY2F0ZWdvcnksXG4gICAgICAgIGlzVmVnYW46IGRhdGEuaXNWZWdhbixcbiAgICAgICAgaXNIYWxhbDogZGF0YS5pc0hhbGFsLFxuICAgICAgICBoYXNOdXRzOiBkYXRhLmhhc051dHMsXG4gICAgICAgIHBpY2t1cFN0YXJ0OiBuZXcgRGF0ZShkYXRhLnBpY2t1cFN0YXJ0KSxcbiAgICAgICAgcGlja3VwRW5kOiBuZXcgRGF0ZShkYXRhLnBpY2t1cEVuZCksXG4gICAgICAgIGFkZHJlc3M6IGRhdGEuYWRkcmVzcyxcbiAgICAgICAgY2l0eTogZGF0YS5jaXR5LFxuICAgICAgICBsYXRpdHVkZTogZGF0YS5sYXRpdHVkZSA/PyAxOS4wNzYsXG4gICAgICAgIGxvbmdpdHVkZTogZGF0YS5sb25naXR1ZGUgPz8gNzIuODc3NyxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7IGRvbm9yOiB7IHNlbGVjdDogeyBuYW1lOiB0cnVlLCBidXNpbmVzc05hbWU6IHRydWUsIHRydXN0U2NvcmU6IHRydWUgfSB9IH0sXG4gICAgfSlcblxuICAgIC8vIEF3YXJkIEZlZWQgUG9pbnRzXG4gICAgYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihbXG4gICAgICBwcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgICB3aGVyZTogeyBpZDogdXNlcklkIH0sXG4gICAgICAgIGRhdGE6IHsgZmVlZFBvaW50czogeyBpbmNyZW1lbnQ6IDEwIH0gfSxcbiAgICAgIH0pLFxuICAgICAgcHJpc21hLnBvaW50TG9nLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgcG9pbnRzOiAxMCxcbiAgICAgICAgICBhY3Rpb246ICdMSVNUSU5HX0NSRUFURUQnLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBgTGlzdGVkOiAke2RhdGEuZm9vZE5hbWV9YCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIF0pXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBsaXN0aW5nIH0sIHsgc3RhdHVzOiAyMDEgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyciBpbnN0YW5jZW9mIHouWm9kRXJyb3IpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlcnIuZXJyb3JzWzBdLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDQwMCB9KVxuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgbGlzdGluZycgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwicHJpc21hIiwieiIsImNyZWF0ZVNjaGVtYSIsIm9iamVjdCIsImZvb2ROYW1lIiwic3RyaW5nIiwibWluIiwiZGVzY3JpcHRpb24iLCJvcHRpb25hbCIsInF1YW50aXR5IiwibnVtYmVyIiwiaW50IiwicG9zaXRpdmUiLCJ1bml0IiwiZGVmYXVsdCIsImNhdGVnb3J5IiwiaXNWZWdhbiIsImJvb2xlYW4iLCJpc0hhbGFsIiwiaGFzTnV0cyIsInBpY2t1cFN0YXJ0IiwicGlja3VwRW5kIiwiYWRkcmVzcyIsImNpdHkiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIkdFVCIsInJlcSIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsInN0YXR1cyIsImdldCIsInZlZ2FuIiwibWluZSIsInNlc3Npb24iLCJsaXN0aW5ncyIsImxpc3RpbmciLCJmaW5kTWFueSIsIndoZXJlIiwiZG9ub3JJZCIsInVzZXIiLCJpZCIsImd0ZSIsIkRhdGUiLCJpbmNsdWRlIiwiZG9ub3IiLCJzZWxlY3QiLCJuYW1lIiwiYnVzaW5lc3NOYW1lIiwidHJ1c3RTY29yZSIsImlzVmVyaWZpZWQiLCJ0cmFuc2FjdGlvbiIsImNvbGxlY3RvcklkIiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsInRha2UiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiUE9TVCIsInVzZXJJZCIsInJvbGUiLCJib2R5IiwiZGF0YSIsInBhcnNlIiwiY3JlYXRlIiwiJHRyYW5zYWN0aW9uIiwidXBkYXRlIiwiZmVlZFBvaW50cyIsImluY3JlbWVudCIsInBvaW50TG9nIiwicG9pbnRzIiwiYWN0aW9uIiwiWm9kRXJyb3IiLCJlcnJvcnMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/listings/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) return null;\n                const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user) return null;\n                const valid = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.password);\n                if (!valid) return null;\n                return {\n                    id: user.id,\n                    name: user.name,\n                    email: user.email,\n                    role: user.role,\n                    businessName: user.businessName || undefined\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n                token.businessName = user.businessName;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n                session.user.businessName = token.businessName;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/login\"\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDaUU7QUFDNUI7QUFDUjtBQUV0QixNQUFNRyxjQUErQjtJQUMxQ0MsV0FBVztRQUNUSiwyRUFBbUJBLENBQUM7WUFDbEJLLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVSxPQUFPO2dCQUUxRCxNQUFNRSxPQUFPLE1BQU1YLCtDQUFNQSxDQUFDVyxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDeENDLE9BQU87d0JBQUVQLE9BQU9ELFlBQVlDLEtBQUs7b0JBQUM7Z0JBQ3BDO2dCQUVBLElBQUksQ0FBQ0ssTUFBTSxPQUFPO2dCQUVsQixNQUFNRyxRQUFRLE1BQU1iLHVEQUFjLENBQUNJLFlBQVlJLFFBQVEsRUFBRUUsS0FBS0YsUUFBUTtnQkFDdEUsSUFBSSxDQUFDSyxPQUFPLE9BQU87Z0JBRW5CLE9BQU87b0JBQ0xFLElBQUlMLEtBQUtLLEVBQUU7b0JBQ1haLE1BQU1PLEtBQUtQLElBQUk7b0JBQ2ZFLE9BQU9LLEtBQUtMLEtBQUs7b0JBQ2pCVyxNQUFNTixLQUFLTSxJQUFJO29CQUNmQyxjQUFjUCxLQUFLTyxZQUFZLElBQUlDO2dCQUNyQztZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVYLElBQUksRUFBRTtZQUN2QixJQUFJQSxNQUFNO2dCQUNSVyxNQUFNTixFQUFFLEdBQUdMLEtBQUtLLEVBQUU7Z0JBQ2xCTSxNQUFNTCxJQUFJLEdBQUcsS0FBY0EsSUFBSTtnQkFDL0JLLE1BQU1KLFlBQVksR0FBRyxLQUFjQSxZQUFZO1lBQ2pEO1lBQ0EsT0FBT0k7UUFDVDtRQUNBLE1BQU1DLFNBQVEsRUFBRUEsT0FBTyxFQUFFRCxLQUFLLEVBQUU7WUFDOUIsSUFBSUMsUUFBUVosSUFBSSxFQUFFO2dCQUNmWSxRQUFRWixJQUFJLENBQVNLLEVBQUUsR0FBR00sTUFBTU4sRUFBRTtnQkFDakNPLFFBQVFaLElBQUksQ0FBU00sSUFBSSxHQUFHSyxNQUFNTCxJQUFJO2dCQUN0Q00sUUFBUVosSUFBSSxDQUFTTyxZQUFZLEdBQUdJLE1BQU1KLFlBQVk7WUFDMUQ7WUFDQSxPQUFPSztRQUNUO0lBQ0Y7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUYsU0FBUztRQUFFRyxVQUFVO0lBQU07SUFDM0JDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtBQUNyQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemVyb3dhc3RlLW1hcmtldHBsYWNlLy4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscydcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSdcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6ICdjcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogJ0VtYWlsJywgdHlwZTogJ2VtYWlsJyB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSByZXR1cm4gbnVsbFxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZTogeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSxcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoIXVzZXIpIHJldHVybiBudWxsXG5cbiAgICAgICAgY29uc3QgdmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZClcbiAgICAgICAgaWYgKCF2YWxpZCkgcmV0dXJuIG51bGxcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgICAgICAgYnVzaW5lc3NOYW1lOiB1c2VyLmJ1c2luZXNzTmFtZSB8fCB1bmRlZmluZWQsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZFxuICAgICAgICB0b2tlbi5yb2xlID0gKHVzZXIgYXMgYW55KS5yb2xlXG4gICAgICAgIHRva2VuLmJ1c2luZXNzTmFtZSA9ICh1c2VyIGFzIGFueSkuYnVzaW5lc3NOYW1lXG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW5cbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCA9IHRva2VuLmlkXG4gICAgICAgIDsoc2Vzc2lvbi51c2VyIGFzIGFueSkucm9sZSA9IHRva2VuLnJvbGVcbiAgICAgICAgOyhzZXNzaW9uLnVzZXIgYXMgYW55KS5idXNpbmVzc05hbWUgPSB0b2tlbi5idXNpbmVzc05hbWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvYXV0aC9sb2dpbicsXG4gIH0sXG4gIHNlc3Npb246IHsgc3RyYXRlZ3k6ICdqd3QnIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxufVxuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJwcmlzbWEiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwidmFsaWQiLCJjb21wYXJlIiwiaWQiLCJyb2xlIiwiYnVzaW5lc3NOYW1lIiwidW5kZWZpbmVkIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJzZXNzaW9uIiwicGFnZXMiLCJzaWduSW4iLCJzdHJhdGVneSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/bcryptjs","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flistings%2Froute&page=%2Fapi%2Flistings%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flistings%2Froute.ts&appDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CMain%5CProjects%5Czerowaste-v3-complete&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();