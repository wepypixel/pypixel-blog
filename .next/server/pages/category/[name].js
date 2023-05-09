"use strict";
(() => {
var exports = {};
exports.id = 346;
exports.ids = [346];
exports.modules = {

/***/ 2072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5452);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_rx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4901);
/* harmony import */ var _styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);









function Category({ blogPosts , name , currentPage , totalPages , description  }) {
    const [currentPageState, setCurrentPageState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(currentPage);
    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(blogPosts);
    const handlePageChange = (pageNumber)=>{
        setCurrentPageState(pageNumber);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/category/${name}?page=${currentPageState}`);
                setPosts(response.data.results);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [
        currentPageState
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`http://127.0.0.1:8000/api/category/${name}`);
                setPosts(response.data.results);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [
        name
    ]);
    function truncateString(str, num) {
        if (str.length <= num) {
            return str;
        }
        let truncated = str.slice(0, num + 1);
        let lastSpace = truncated.lastIndexOf(" ");
        if (lastSpace === -1) {
            lastSpace = num;
        }
        return truncated.slice(0, lastSpace) + "...";
    }
    const pageTitle = name.charAt(0).toUpperCase() + name.slice(1) + " Resources";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8___default()["posts-list-container"]),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: pageTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: `${description}`
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: (_styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8___default()["category-posts-heading"]),
                children: [
                    "See what's trending in",
                    name ? name.charAt(0).toUpperCase() + name.slice(1) : ""
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8___default()["posts-grid-container"]),
                children: posts.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8___default()["posts-grid-item"]),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: `/post/${post.slug}`,
                            className: (_styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8___default()["blog-post-hero-link"]),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    src: post.cover_image,
                                    className: (_styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8___default()["post-grid-item-img"]),
                                    alt: post.title,
                                    width: 500,
                                    height: 500
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8___default()["grid-post-date-div"]),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_rx__WEBPACK_IMPORTED_MODULE_6__.RxDotFilled, {
                                            className: (_styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8___default()["dot-icon"])
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8___default()["post-date"]),
                                            children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(post.updated_on.substring(0, 10)), "dd MMMM yyyy")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: (_styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8___default()["grid-card-post-title"]),
                                    children: truncateString(post.title, 70)
                                })
                            ]
                        })
                    }, post.id))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8___default()["prev-next-btn-div"]),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8___default()["previous-btn"]),
                        onClick: ()=>handlePageChange(currentPageState - 1),
                        disabled: currentPageState == 1,
                        children: "←\xa0Previous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_styles_CategoryPosts_module_css__WEBPACK_IMPORTED_MODULE_8___default()["next-btn"]),
                        onClick: ()=>handlePageChange(currentPageState + 1),
                        disabled: currentPageState == totalPages,
                        children: "Next\xa0→"
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    const name = context.params.name;
    const currentPage = 1;
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/category/${name}?page=${currentPage}`);
    const blogPosts = res.data.results;
    const description = res.data.results[0] ? res.data.results[0].category.description : "";
    const totalPages = res.data.total_pages;
    return {
        props: {
            blogPosts,
            name,
            currentPage,
            totalPages,
            description
        }
    };
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 8038:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5452:
/***/ ((module) => {

module.exports = require("react-icons/rx");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [844,664,965,675,901], () => (__webpack_exec__(2072)));
module.exports = __webpack_exports__;

})();