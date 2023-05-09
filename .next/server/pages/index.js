(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5432:
/***/ ((module) => {

// Exports
module.exports = {
	"category-hero": "CategoryContainer_category-hero__qzmeG",
	"category-hero-heading": "CategoryContainer_category-hero-heading__0fjiO",
	"category-card-container": "CategoryContainer_category-card-container__fObJ7",
	"category-card": "CategoryContainer_category-card__N9_GQ",
	"category-image": "CategoryContainer_category-image__hDEAI",
	"category-card-h1": "CategoryContainer_category-card-h1__Tz5Ab",
	"arrow-icon-card": "CategoryContainer_arrow-icon-card___7JGN",
	"category-card-p-div": "CategoryContainer_category-card-p-div__AjGkT",
	"card-p": "CategoryContainer_card-p__dN8Dy",
	"blog-post-category-link": "CategoryContainer_blog-post-category-link__8l6Wu",
	"prev-next-carousel-div": "CategoryContainer_prev-next-carousel-div__d_XJX",
	"category-card-container-mobile": "CategoryContainer_category-card-container-mobile__CiK09"
};


/***/ }),

/***/ 62:
/***/ ((module) => {

// Exports
module.exports = {
	"hero-container": "HeroContainer_hero-container__5qAbz",
	"hero-container-mobile": "HeroContainer_hero-container-mobile__n__3D",
	"recent-posts-major": "HeroContainer_recent-posts-major__FsE11",
	"blog-post-hero-link": "HeroContainer_blog-post-hero-link__ACon1",
	"hero-container-post-cover-image": "HeroContainer_hero-container-post-cover-image__T0QDj",
	"hero-container-post-title": "HeroContainer_hero-container-post-title__AiDzL",
	"fade-bottom": "HeroContainer_fade-bottom__RXuPF",
	"hero-container-sideposts": "HeroContainer_hero-container-sideposts__zjpug",
	"recent-posts-minor": "HeroContainer_recent-posts-minor__YLggQ",
	"fade-bottom-minor": "HeroContainer_fade-bottom-minor__adB3M",
	"recent-posts-major-mobile": "HeroContainer_recent-posts-major-mobile__Twstn",
	"fade-bottom-mobile": "HeroContainer_fade-bottom-mobile__lRTaU",
	"blog-post-hero-link-mobile": "HeroContainer_blog-post-hero-link-mobile__h2u_U",
	"hero-container-post-cover-image-mobile": "HeroContainer_hero-container-post-cover-image-mobile__kdNIV",
	"hero-container-post-title-mobile": "HeroContainer_hero-container-post-title-mobile__XzWL0"
};


/***/ }),

/***/ 5599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Homepage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: ./src/styles/HeroContainer.module.css
var HeroContainer_module = __webpack_require__(62);
var HeroContainer_module_default = /*#__PURE__*/__webpack_require__.n(HeroContainer_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/HeroContainer.js





function HeroContainer({ posts  }) {
    const [activeIndex, setActiveIndex] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            setActiveIndex((activeIndex + 1) % posts.length);
        }, 4000);
        return ()=>clearInterval(interval);
    }, [
        activeIndex
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (HeroContainer_module_default())["hero-container"],
        children: [
            posts.slice(0, 1).map((post)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (HeroContainer_module_default())["recent-posts-major"],
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: (HeroContainer_module_default())["fade-bottom"]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            href: `/post/${post.slug}`,
                            className: (HeroContainer_module_default())["blog-post-hero-link"],
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: post.cover_image,
                                    className: (HeroContainer_module_default())["hero-container-post-cover-image"],
                                    alt: post.title,
                                    width: 500,
                                    height: 500
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: (HeroContainer_module_default())["hero-container-post-title"],
                                    children: post.title
                                })
                            ]
                        })
                    ]
                }, post.id)),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (HeroContainer_module_default())["hero-container-mobile"],
                children: posts.slice(activeIndex, activeIndex + 1).map((post)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (HeroContainer_module_default())["recent-posts-major-mobile"],
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (HeroContainer_module_default())["fade-bottom-mobile"]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: `/post/${post.slug}`,
                                className: (HeroContainer_module_default())["blog-post-hero-link-mobile"],
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: post.cover_image,
                                        className: (HeroContainer_module_default())["hero-container-post-cover-image-mobile"],
                                        alt: post.title,
                                        width: 500,
                                        height: 500
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: (HeroContainer_module_default())["hero-container-post-title-mobile"],
                                        children: post.title
                                    })
                                ]
                            })
                        ]
                    }, post.id))
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (HeroContainer_module_default())["hero-container-sideposts"],
                children: posts.slice(1, 3).map((post)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (HeroContainer_module_default())["recent-posts-minor"],
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (HeroContainer_module_default())["fade-bottom-minor"]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: `/post/${post.slug}`,
                                className: (HeroContainer_module_default())["blog-post-hero-link"],
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: post.cover_image,
                                        className: (HeroContainer_module_default())["hero-container-post-cover-image"],
                                        alt: post.title,
                                        width: 500,
                                        height: 500
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                        className: (HeroContainer_module_default())["hero-container-post-title"],
                                        children: post.title
                                    })
                                ]
                            })
                        ]
                    }, post.id))
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/styles/CategoryContainer.module.css
var CategoryContainer_module = __webpack_require__(5432);
var CategoryContainer_module_default = /*#__PURE__*/__webpack_require__.n(CategoryContainer_module);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: ./src/components/CategoryContainer.js






function CategoryContainer({ categories  }) {
    const [currentCategory, setCurrentCategory] = (0,external_react_.useState)(0);
    const [touchPosition, setTouchPosition] = (0,external_react_.useState)(null);
    const touchRef = (0,external_react_.useRef)(null);
    const handleNext = ()=>{
        setCurrentCategory((currentCategory + 1) % categories.length);
    };
    const handlePrev = ()=>{
        setCurrentCategory((currentCategory - 1 + categories.length) % categories.length);
    };
    const handleTouchStart = (e)=>{
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };
    const handleTouchMove = (e)=>{
        const touchDown = touchPosition;
        if (touchDown === null) {
            return;
        }
        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;
        if (diff > 5) {
            handleNext();
        }
        if (diff < -5) {
            handlePrev();
        }
        setTouchPosition(null);
    };
    (0,external_react_.useEffect)(()=>{
        const node = touchRef.current;
        node.addEventListener("touchstart", handleTouchStart);
        node.addEventListener("touchmove", handleTouchMove);
        return ()=>{
            node.removeEventListener("touchstart", handleTouchStart);
            node.removeEventListener("touchmove", handleTouchMove);
        };
    }, [
        handleTouchStart,
        handleTouchMove
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (CategoryContainer_module_default())["category-hero"],
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: (CategoryContainer_module_default())["category-hero-heading"],
                children: "Explore Categories"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (CategoryContainer_module_default())["category-card-container"],
                children: categories.map((category)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/category/" + category.name.toLowerCase(),
                        className: (CategoryContainer_module_default())["blog-post-category-link"],
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (CategoryContainer_module_default())["category-card"],
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: category.category_image,
                                    className: (CategoryContainer_module_default())["category-image"],
                                    alt: category.name,
                                    width: 500,
                                    height: 500
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    className: (CategoryContainer_module_default())["category-card-h1"],
                                    children: category.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (CategoryContainer_module_default())["category-card-p-div"],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: (CategoryContainer_module_default())["card-p"],
                                            children: category.description
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(bs_.BsArrowUpRight, {
                                            className: (CategoryContainer_module_default())["arrow-icon-card"]
                                        })
                                    ]
                                })
                            ]
                        })
                    }, category.id))
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (CategoryContainer_module_default())["category-card-container-mobile"],
                ref: touchRef,
                children: categories.slice(currentCategory, currentCategory + 1).map((category)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/category/" + category.name.toLowerCase(),
                        className: (CategoryContainer_module_default())["blog-post-category-link"],
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (CategoryContainer_module_default())["category-card"],
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: category.category_image,
                                    className: (CategoryContainer_module_default())["category-image"],
                                    alt: category.name,
                                    width: 500,
                                    height: 500
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                    className: (CategoryContainer_module_default())["category-card-h1"],
                                    children: category.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (CategoryContainer_module_default())["category-card-p-div"],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: (CategoryContainer_module_default())["card-p"],
                                            children: category.description
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(bs_.BsArrowUpRight, {
                                            className: (CategoryContainer_module_default())["arrow-icon-card"]
                                        })
                                    ]
                                })
                            ]
                        })
                    }, category.id))
            })
        ]
    });
}

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/styles/BlogPostList.module.css
var BlogPostList_module = __webpack_require__(5230);
var BlogPostList_module_default = /*#__PURE__*/__webpack_require__.n(BlogPostList_module);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: external "react-icons/rx"
var rx_ = __webpack_require__(5452);
;// CONCATENATED MODULE: ./src/components/BlogPostList.js








function BlogPostList({ initialPosts , currentPage , totalPages  }) {
    const [currentPageState, setCurrentPageState] = (0,external_react_.useState)(currentPage);
    const [posts, setPosts] = (0,external_react_.useState)(initialPosts);
    const handlePageChange = (pageNumber)=>{
        setCurrentPageState(pageNumber);
    };
    (0,external_react_.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const response = await external_axios_default().get(`/api/posts?page=${currentPageState}`);
                setPosts(response.data.results);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [
        currentPageState
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (BlogPostList_module_default())["posts-list-container"],
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (BlogPostList_module_default())["posts-grid-container"],
                children: posts.slice(3).map((post)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (BlogPostList_module_default())["posts-grid-item"],
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            href: `/post/${post.slug}`,
                            className: (BlogPostList_module_default())["blog-post-hero-link"],
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: post.cover_image,
                                    className: (BlogPostList_module_default())["post-grid-item-img"],
                                    alt: post.title,
                                    width: 500,
                                    height: 500
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (BlogPostList_module_default())["grid-post-date-div"],
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(rx_.RxDotFilled, {
                                            className: (BlogPostList_module_default())["dot-icon"]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: (BlogPostList_module_default())["post-date"],
                                            children: (0,external_date_fns_.format)(new Date(post.updated_on.substring(0, 10)), "dd MMMM yyyy")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                    className: (BlogPostList_module_default())["grid-card-post-title"],
                                    children: truncateString(post.title, 70)
                                })
                            ]
                        })
                    }, post.id))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (BlogPostList_module_default())["prev-next-btn-div"],
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: (BlogPostList_module_default())["previous-btn"],
                        onClick: ()=>handlePageChange(currentPageState - 1),
                        disabled: currentPageState == 1,
                        children: "←\xa0Previous"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: (BlogPostList_module_default())["next-btn"],
                        onClick: ()=>handlePageChange(currentPageState + 1),
                        disabled: currentPageState == totalPages,
                        children: "Next\xa0→"
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/pages/index.js






function Homepage({ recentPosts , categories , posts , currentPage , totalPages  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "PyPixel"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "PyPixel is a technology and design blog featuring articles on AI, ML, web development, UI, UX, and design."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(HeroContainer, {
                        posts: recentPosts
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(CategoryContainer, {
                        categories: categories
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(BlogPostList, {
                        initialPosts: posts,
                        currentPage: currentPage,
                        totalPages: totalPages
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps() {
    const page = 1;
    const response = await external_axios_default().get(`/api/posts?page=${page}`);
    const posts = response.data.results;
    const totalPages = response.data.total_pages;
    const res = await external_axios_default().get("/api/recentposts");
    const recentPosts = res.data;
    const categoryRes = await external_axios_default().get("/api/categories");
    const categories = categoryRes.data;
    return {
        props: {
            recentPosts,
            categories,
            posts,
            currentPage: parseInt(page),
            totalPages: parseInt(totalPages)
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

/***/ 567:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ 5452:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/rx");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [844,664,965,675,230], () => (__webpack_exec__(5599)));
module.exports = __webpack_exports__;

})();