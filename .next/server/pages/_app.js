(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4552:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__pJUho",
	"footer-div1": "Footer_footer-div1__VR4Hs",
	"footer-tagline": "Footer_footer-tagline__lQsOm",
	"footer-site-links": "Footer_footer-site-links__BvTnm",
	"footer-social-links": "Footer_footer-social-links__8jw8m",
	"footer-parent": "Footer_footer-parent__t2wdu",
	"footer-div2": "Footer_footer-div2__KUzV8",
	"footer-div3": "Footer_footer-div3__phg9b",
	"footerPara": "Footer_footerPara__oOu27"
};


/***/ }),

/***/ 1747:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "navbar_nav__IeXs0",
	"nav-logo": "navbar_nav-logo__BUY4c",
	"navItems": "navbar_navItems__714Sp",
	"nav-list-ul": "navbar_nav-list-ul__WK2z_",
	"searchDivNav": "navbar_searchDivNav__cGWZp",
	"searchBarNav": "navbar_searchBarNav__FRR7z",
	"searchIconNav": "navbar_searchIconNav__cUDE2",
	"activeLink": "navbar_activeLink__ofHte",
	"toggle-icons": "navbar_toggle-icons__4LpnF",
	"mobile-form": "navbar_mobile-form__eRWDg",
	"nav-toggle-menu": "navbar_nav-toggle-menu__dQZPI",
	"li-div-mobile": "navbar_li-div-mobile__QWVqy",
	"logo": "navbar_logo__BOlHb",
	"menu": "navbar_menu__Tnmyf",
	"nav-toggle-search": "navbar_nav-toggle-search___yv_u",
	"searchDivNavMobile": "navbar_searchDivNavMobile__FYDTi",
	"searchBarNavMobile": "navbar_searchBarNavMobile__dTnsM",
	"searchIconNavMobile": "navbar_searchIconNavMobile___laZp",
	"nav-list-ul-active": "navbar_nav-list-ul-active__eIip_",
	"slideFromRight": "navbar_slideFromRight__jBx25"
};


/***/ }),

/***/ 8720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1844);
// EXTERNAL MODULE: ./src/styles/global.css
var global = __webpack_require__(2786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/styles/navbar.module.css
var navbar_module = __webpack_require__(1747);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
// EXTERNAL MODULE: external "react-icons/rx"
var rx_ = __webpack_require__(5452);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/Navbar.js








function Navbar() {
    const [query, setQuery] = (0,external_react_.useState)("");
    const [showMenu, setShowMenu] = (0,external_react_.useState)(false);
    const toggleMenu = ()=>setShowMenu(!showMenu);
    const router = (0,router_namespaceObject.useRouter)();
    const handleSearch = (e)=>{
        e.preventDefault();
        setShowMenu(!showMenu);
        window.open(`/search-results/?search=${query}`, "_self");
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
        className: (navbar_module_default()).nav,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (navbar_module_default()).navItems,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: "/pypixelLogo.png",
                            className: (navbar_module_default())["nav-logo"],
                            width: 50,
                            height: 40
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: showMenu ? (navbar_module_default())["nav-list-ul-active"] : (navbar_module_default())["nav-list-ul"],
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("form", {
                                onSubmit: handleSearch,
                                className: (navbar_module_default())["mobile-form"],
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (navbar_module_default()).searchDivNavMobile,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                                            type: "text",
                                            value: query,
                                            className: (navbar_module_default()).searchBarNavMobile,
                                            placeholder: "Search",
                                            onChange: (e)=>setQuery(e.target.value),
                                            required: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                                            type: "submit",
                                            children: /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineSearch, {
                                                className: (navbar_module_default()).searchIconNavMobile
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (navbar_module_default())["li-div-mobile"],
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/category/technology",
                                            className: router.asPath === "/category/technology" ? (navbar_module_default()).activeLink : "",
                                            onClick: showMenu ? toggleMenu : ()=>{},
                                            children: "Technology"
                                        }, "technology")
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/category/design",
                                            className: router.asPath === "/category/design" ? (navbar_module_default()).activeLink : "",
                                            onClick: showMenu ? toggleMenu : ()=>{},
                                            children: "Design"
                                        }, "design")
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/about-us",
                                            className: router.asPath === "/about-us" ? (navbar_module_default()).activeLink : "",
                                            onClick: showMenu ? toggleMenu : ()=>{},
                                            children: "About Us"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/contact-us",
                                            className: router.asPath === "/contact-us" ? (navbar_module_default()).activeLink : "",
                                            onClick: showMenu ? toggleMenu : ()=>{},
                                            children: "Contact Us"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("form", {
                onSubmit: handleSearch,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (navbar_module_default()).searchDivNav,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("input", {
                            type: "text",
                            value: query,
                            className: (navbar_module_default()).searchBarNav,
                            placeholder: "Search",
                            onChange: (e)=>setQuery(e.target.value),
                            required: true
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            type: "submit",
                            children: /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineSearch, {
                                className: (navbar_module_default()).searchIconNav
                            })
                        })
                    ]
                })
            }),
            showMenu ? /*#__PURE__*/ jsx_runtime.jsx(rx_.RxCross1, {
                className: (navbar_module_default())["nav-toggle-menu"],
                onClick: toggleMenu
            }) : /*#__PURE__*/ jsx_runtime.jsx(ai_.AiOutlineMenu, {
                className: (navbar_module_default())["nav-toggle-menu"],
                onClick: toggleMenu
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/styles/Footer.module.css
var Footer_module = __webpack_require__(4552);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/Footer.js



function Footer() {
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: (Footer_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (Footer_module_default())["footer-parent"],
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Footer_module_default())["footer-div1"],
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        children: "PyPixel"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: (Footer_module_default()).footerPara,
                                    children: "PyPixel is a technology and design blog that aims to bring the latest insights and trends in the world of ML, AI, web development, Python, UI/UX design, and more."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (Footer_module_default())["footer-tagline"],
                            children: [
                                "Sharing resources for tech and design.",
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: "\xa9 2023 PyPixel. All Rights Reserved"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Footer_module_default())["footer-div2"],
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            children: "Overview"
                        }),
                        " ",
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/category/technology",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Footer_module_default())["footer-site-links"],
                                children: "Technology"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/category/design",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Footer_module_default())["footer-site-links"],
                                children: "Design"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/about-us",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Footer_module_default())["footer-site-links"],
                                children: "About Us"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/contact-us",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Footer_module_default())["footer-site-links"],
                                children: "Contact Us"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Footer_module_default())["footer-div3"],
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            children: "Social Links"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "https://www.instagram.com/wepypixel",
                            target: "_blank",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Footer_module_default())["footer-social-links"],
                                children: "Instagram"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "https://www.twitter.com/wepypixel",
                            target: "_blank",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Footer_module_default())["footer-social-links"],
                                children: "Twitter"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "mailto:wepypixel@gmail.com",
                            target: "_blank",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Footer_module_default())["footer-social-links"],
                                children: "Email"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 2786:
/***/ (() => {



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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [844,664,965,675], () => (__webpack_exec__(8720)));
module.exports = __webpack_exports__;

})();