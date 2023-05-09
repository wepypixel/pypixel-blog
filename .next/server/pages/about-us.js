(() => {
var exports = {};
exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 2724:
/***/ ((module) => {

// Exports
module.exports = {
	"about-us-body": "about-us_about-us-body__Ociz2",
	"about-us-heading-container": "about-us_about-us-heading-container__pQ5y5",
	"about-us-heading": "about-us_about-us-heading__FMIkS",
	"about-us-title": "about-us_about-us-title__aY17i",
	"about-us-content": "about-us_about-us-content__0cSRD",
	"social-icons-about-us": "about-us_social-icons-about-us__FD8s4"
};


/***/ }),

/***/ 5966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AboutUs),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: external "isomorphic-dompurify"
var external_isomorphic_dompurify_ = __webpack_require__(3059);
var external_isomorphic_dompurify_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_dompurify_);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
// EXTERNAL MODULE: ./src/styles/about-us.module.css
var about_us_module = __webpack_require__(2724);
var about_us_module_default = /*#__PURE__*/__webpack_require__.n(about_us_module);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/pages/about-us.js








function AboutUs({ aboutUs  }) {
    const sanitizedContent = external_isomorphic_dompurify_default().sanitize(aboutUs?.content);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (about_us_module_default())["about-us-body"],
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "About PyPixel"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "PyPixel is a technology and design blog featuring articles on AI, ML, web development, UI, UX, and design."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (about_us_module_default())["about-us-heading-container"],
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        className: (about_us_module_default())["about-us-heading"],
                        children: "About Us"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        className: (about_us_module_default())["about-us-title"],
                        children: aboutUs?.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            "Follow us on:",
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "https://www.instagram.com/wepypixel",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime.jsx(bs_.BsInstagram, {
                                    className: (about_us_module_default())["social-icons-about-us"]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "https://www.twitter.com/wepypixel",
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime.jsx(fi_namespaceObject.FiTwitter, {
                                    className: (about_us_module_default())["social-icons-about-us"]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                dangerouslySetInnerHTML: {
                    __html: sanitizedContent
                },
                className: (about_us_module_default())["about-us-content"]
            })
        ]
    });
}
async function getServerSideProps() {
    const response = await external_axios_default().get("/api/about-us");
    const aboutUs = response.data;
    return {
        props: {
            aboutUs
        }
    };
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3059:
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-dompurify");

/***/ }),

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [844,664], () => (__webpack_exec__(5966)));
module.exports = __webpack_exports__;

})();