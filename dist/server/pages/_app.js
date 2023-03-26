(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(1187);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./layouts/Footer.jsx


const Footer = ()=>{
    return(/*#__PURE__*/ _jsxs("footer", {
        className: "py-5 mt-4 text-center flex flex-row flex-wrap items-center justify-center text-slate-600",
        children: [
            /*#__PURE__*/ _jsx("span", {
                className: "mr-2",
                children: "Made with"
            }),
            /*#__PURE__*/ _jsx(Image, {
                src: "/favorite.svg",
                width: "24",
                height: "24",
                alt: "favorite"
            }),
            /*#__PURE__*/ _jsxs("span", {
                className: "ml-2",
                children: [
                    "by Charan Ⓒ ",
                    new Date().getFullYear()
                ]
            })
        ]
    }));
};
/* harmony default export */ const layouts_Footer = ((/* unused pure expression or super */ null && (Footer)));

;// CONCATENATED MODULE: ./layouts/Header.jsx


const Header = ()=>{
    return(/*#__PURE__*/ _jsx("header", {
        className: "py-5 px-2 md:px-0 flex justify-center flex-row flex-wrap items-center flex-wrap shadow-sm",
        children: /*#__PURE__*/ _jsx("h1", {
            className: "text-gray-700 cursor-pointer text-xl ml-2 md:ml-0 md:text-2xl flex justify-center",
            children: "Fake Score 2.0"
        })
    }));
};
/* harmony default export */ const layouts_Header = ((/* unused pure expression or super */ null && (Header)));

;// CONCATENATED MODULE: ./layouts/index.jsx




const Layout = ({ children  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "myContainer m-auto",
        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
            className: "min-h-screen flex flex-col justify-center items-center",
            children: children
        })
    }));
};
/* harmony default export */ const layouts = (Layout);

// EXTERNAL MODULE: ./components/Instructions.jsx
var Instructions = __webpack_require__(2449);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(layouts, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Instructions/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1187:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,449], () => (__webpack_exec__(8378)));
module.exports = __webpack_exports__;

})();