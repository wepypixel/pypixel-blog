(() => {
var exports = {};
exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 6502:
/***/ ((module) => {

// Exports
module.exports = {
	"blog-post-detail-screen-body": "BlogPostDetail_blog-post-detail-screen-body__YzQ_7",
	"blog-post-detail-main": "BlogPostDetail_blog-post-detail-main__UwTYk",
	"blog-post-detail-category": "BlogPostDetail_blog-post-detail-category__ZqX1Z",
	"blog-post-detail-title": "BlogPostDetail_blog-post-detail-title__f_8kD",
	"blog-post-detail-upper-body": "BlogPostDetail_blog-post-detail-upper-body__fCgJC",
	"blog-post-detail-img": "BlogPostDetail_blog-post-detail-img__190DZ",
	"blog-post-content": "BlogPostDetail_blog-post-content__CsuyW",
	"blog-post-detail-published-date": "BlogPostDetail_blog-post-detail-published-date__ZfxSk",
	"clock-icon": "BlogPostDetail_clock-icon__oDZtX",
	"blog-post-detail-meta-description": "BlogPostDetail_blog-post-detail-meta-description__aRsM5",
	"related-post-div": "BlogPostDetail_related-post-div__UpXWG",
	"related-posts-img": "BlogPostDetail_related-posts-img__hrRA8",
	"related-post-date": "BlogPostDetail_related-post-date__A0BNX",
	"related-post-title": "BlogPostDetail_related-post-title__pHf3X",
	"popular-posts-heading": "BlogPostDetail_popular-posts-heading__JG6B8"
};


/***/ }),

/***/ 8196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Post),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1844);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3059);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5452);
/* harmony import */ var react_icons_rx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_rx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6502);
/* harmony import */ var _styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5230);
/* harmony import */ var _styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);











function Post({ blogPost , relatedPosts , popularPosts  }) {
    const description = blogPost ? blogPost.meta_description : "";
    const sanitizedContent = isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_4___default().sanitize(blogPost.content);
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default()["blog-post-detail-screen-body"]),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: blogPost.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: description
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default()["blog-post-detail-upper-body"]),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: (_styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default()["blog-post-detail-main"]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default()["blog-post-detail-category"]),
                                children: blogPost.category.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default()["blog-post-detail-title"]),
                                children: blogPost.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                className: (_styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default()["blog-post-detail-published-date"]),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiFillClockCircle, {
                                        className: (_styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default()["clock-icon"])
                                    }),
                                    " Published on",
                                    " ",
                                    (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(blogPost.updated_on.substring(0, 10)), "dd MMMM yyyy")
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default()["blog-post-detail-meta-description"]),
                                children: blogPost.meta_description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                src: blogPost.cover_image,
                                className: (_styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default()["blog-post-detail-img"]),
                                alt: blogPost.title,
                                width: 500,
                                height: 500
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                dangerouslySetInnerHTML: {
                                    __html: sanitizedContent
                                },
                                className: (_styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default()["blog-post-content"])
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Related Posts"
                            }),
                            relatedPosts.slice(0, 5).map((post)=>{
                                if (post.id != blogPost.id) {
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default()["related-post-div"]),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: `/post/${post.slug}`,
                                            className: (_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default()["blog-post-hero-link"]),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    src: post.cover_image,
                                                    className: (_styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default()["related-posts-img"]),
                                                    alt: post.title,
                                                    width: 500,
                                                    height: 500
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default()["grid-post-date-div"]),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_rx__WEBPACK_IMPORTED_MODULE_7__.RxDotFilled, {
                                                            className: (_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default()["dot-icon"])
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: (_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default()["post-date"]),
                                                            children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(post.updated_on.substring(0, 10)), "dd MMMM yyyy")
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                    className: (_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default()["grid-card-post-title"]),
                                                    children: [
                                                        "- ",
                                                        truncateString(post.title, 70)
                                                    ]
                                                })
                                            ]
                                        })
                                    }, post.id);
                                }
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default()["posts-list-container"]),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        className: (_styles_BlogPostDetail_module_css__WEBPACK_IMPORTED_MODULE_9___default()["popular-posts-heading"]),
                        children: [
                            "Popular Posts in ",
                            blogPost.category.name
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        class: (_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default()["posts-grid-container"]),
                        children: popularPosts.slice(0, 12).map((post)=>{
                            if (post.id != blogPost.id) {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default()["posts-grid-item"]),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: `/post/${post.slug}`,
                                        className: (_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default()["blog-post-hero-link"]),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                src: post.cover_image,
                                                className: (_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default()["post-grid-item-img"]),
                                                alt: post.title,
                                                width: 500,
                                                height: 500
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default()["grid-post-date-div"]),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_rx__WEBPACK_IMPORTED_MODULE_7__.RxDotFilled, {
                                                        className: (_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default()["dot-icon"])
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default()["post-date"]),
                                                        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(post.updated_on.substring(0, 10)), "dd MMMM yyyy")
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                                className: (_styles_BlogPostList_module_css__WEBPACK_IMPORTED_MODULE_10___default()["grid-card-post-title"]),
                                                children: [
                                                    "-",
                                                    truncateString(post.title, 70)
                                                ]
                                            })
                                        ]
                                    })
                                }, post.id);
                            }
                        })
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    const slug = context.params.slug;
    const blogPostResponse = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/post/${slug}`);
    const blogPost = blogPostResponse.data;
    const relatedPostsResponse = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/category/${blogPostResponse.data.category.name}`);
    const relatedPosts = relatedPostsResponse.data.results;
    const popularPostsResponse = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/popular/${blogPostResponse.data.category.name}`);
    const popularPosts = popularPostsResponse.data;
    return {
        props: {
            blogPost,
            relatedPosts,
            popularPosts,
            slug
        }
    };
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 4146:
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

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

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 9847:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ai");

/***/ }),

/***/ 5452:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/rx");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [844,664,965,675,230], () => (__webpack_exec__(8196)));
module.exports = __webpack_exports__;

})();