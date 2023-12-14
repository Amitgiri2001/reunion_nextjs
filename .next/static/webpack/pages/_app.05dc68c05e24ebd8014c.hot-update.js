webpackHotUpdate_N_E("pages/_app",{

/***/ "./Components/Navbar/Navbar.js":
/*!*************************************!*\
  !*** ./Components/Navbar/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.1/node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.module.css */ "./Components/Navbar/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/.pnpm/next@10.0.7_react-dom@17.0.1_react@17.0.1_typescript@5.3.3_webpack@5.89.0/node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@17.0.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\amitd\\Desktop\\REUNION\\reunion_nextjs\\Components\\Navbar\\Navbar.js",
    _this = undefined,
    _s = $RefreshSig$();





var Navbar = function Navbar() {
  _s();

  // NAVBAR RESPONSIVE
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isExpanded = _useState[0],
      setIsExpanded = _useState[1];

  var toggleNavbar = function toggleNavbar() {
    setIsExpanded(!isExpanded);
  };

  var closeNavbar = function closeNavbar() {
    window.innerWidth < 768 && setIsExpanded(!isExpanded);
  }; // Add an event listener to check the window width on resize


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var handleResize = function handleResize() {
      console.log('resize');
      setIsExpanded(window.innerWidth >= 768); // Adjust the value based on your desired tab size
    }; // Initial check


    handleResize(); // Attach the event listener

    window.addEventListener("resize", handleResize); // Remove the event listener when the component is unmounted

    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var scrollDown = function scrollDown() {
    document.getElementById("menu").scrollIntoView({
      behavior: 'smooth'
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    children: [isExpanded ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.first,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          onClick: closeNavbar,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/",
            children: "HOME"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 46
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          onClick: closeNavbar,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/about",
            children: "ABOUT US"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 46
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          onClick: closeNavbar,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/contact",
            children: "CONTACT US"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 46
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.second,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
          src: "/logo.jpg",
          alt: "logo",
          height: 30,
          width: 30
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.third,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          onClick: closeNavbar,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/gallery",
            children: "GALLERY"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 46
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          onClick: closeNavbar,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/merchandise",
            children: "MERCHANDISE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 46
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          onClick: closeNavbar,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/donation",
            children: "DONATION"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 46
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, _this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.logoOnly,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/logo.jpg",
        alt: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }, _this),  true && window.innerWidth < 768 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: toggleNavbar,
      className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.toggleButton,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: isExpanded ? "/icons8-close.svg" : "/icons8-menu.svg",
        alt: "expand bars"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, _this);
};

_s(Navbar, "Pt9BFJk6g6Zfr+NmN7bkLV1oDSM=");

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/.pnpm/next@10.0.7_react-dom@17.0.1_react@17.0.1_typescript@5.3.3_webpack@5.89.0/node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/.pnpm/next@10.0.7_react-dom@17.0.1_react@17.0.1_typescript@5.3.3_webpack@5.89.0/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVN0YXRlIiwiaXNFeHBhbmRlZCIsInNldElzRXhwYW5kZWQiLCJ0b2dnbGVOYXZiYXIiLCJjbG9zZU5hdmJhciIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxEb3duIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJzdHlsZXMiLCJjb250YWluZXIiLCJmaXJzdCIsInNlY29uZCIsImxvZ28iLCJ0aGlyZCIsImxvZ29Pbmx5IiwidG9nZ2xlQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBRWpCO0FBRmlCLGtCQUdtQkMsc0RBQVEsQ0FBQyxLQUFELENBSDNCO0FBQUEsTUFHVkMsVUFIVTtBQUFBLE1BR0VDLGFBSEY7O0FBS2pCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJELGlCQUFhLENBQUMsQ0FBQ0QsVUFBRixDQUFiO0FBQ0gsR0FGRDs7QUFHQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCQyxVQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBcEIsSUFBMkJKLGFBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQXhDO0FBQ0gsR0FGRCxDQVJpQixDQVlqQjs7O0FBQ0FNLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQVIsbUJB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aEJSLEVBcUJLLFNBQWlDbkIsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXJELGlCQUNHO0FBQVEsYUFBTyxFQUFFSCxZQUFqQjtBQUErQixlQUFTLEVBQUVlLHlEQUFNLENBQUNPLFlBQWpEO0FBQUEsNkJBQ0k7QUFBSyxXQUFHLEVBQUV4QixVQUFVLEdBQUcsbUJBQUgsR0FBeUIsa0JBQTdDO0FBQWlFLFdBQUcsRUFBQztBQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXRCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdDSCxDQW5FRDs7R0FBTUYsTTs7S0FBQUEsTTtBQXFFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wNWRjNjhjMDVlMjRlYmQ4MDE0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9OYXZiYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICAgIC8vIE5BVkJBUiBSRVNQT05TSVZFXHJcbiAgICBjb25zdCBbaXNFeHBhbmRlZCwgc2V0SXNFeHBhbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzRXhwYW5kZWQoIWlzRXhwYW5kZWQpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNsb3NlTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4ICYmIHNldElzRXhwYW5kZWQoIWlzRXhwYW5kZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBjaGVjayB0aGUgd2luZG93IHdpZHRoIG9uIHJlc2l6ZVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNpemUnKTtcclxuICAgICAgICAgICAgc2V0SXNFeHBhbmRlZCh3aW5kb3cuaW5uZXJXaWR0aCA+PSA3NjgpOyAvLyBBZGp1c3QgdGhlIHZhbHVlIGJhc2VkIG9uIHlvdXIgZGVzaXJlZCB0YWIgc2l6ZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWwgY2hlY2tcclxuICAgICAgICBoYW5kbGVSZXNpemUoKTtcclxuXHJcbiAgICAgICAgLy8gQXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZFxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBzY3JvbGxEb3duID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtpc0V4cGFuZGVkID8gKDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpcnN0fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXtjbG9zZU5hdmJhcn0+PExpbmsgaHJlZj1cIi9cIiA+SE9NRTwvTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17Y2xvc2VOYXZiYXJ9PjxMaW5rIGhyZWY9XCIvYWJvdXRcIiA+QUJPVVQgVVM8L0xpbms+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e2Nsb3NlTmF2YmFyfT48TGluayBocmVmPVwiL2NvbnRhY3RcIiA+Q09OVEFDVCBVUzwvTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2Vjb25kfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz1cIi9sb2dvLmpwZ1wiIGFsdD1cImxvZ29cIiBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGhpcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e2Nsb3NlTmF2YmFyfT48TGluayBocmVmPVwiL2dhbGxlcnlcIiA+R0FMTEVSWTwvTGluaz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgb25DbGljaz17Y2xvc2VOYXZiYXJ9PjxMaW5rIGhyZWY9XCIvbWVyY2hhbmRpc2VcIiA+TUVSQ0hBTkRJU0U8L0xpbms+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e2Nsb3NlTmF2YmFyfT48TGluayBocmVmPVwiL2RvbmF0aW9uXCIgPkRPTkFUSU9OPC9MaW5rPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz4pIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvT25seX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2xvZ28uanBnXCJ9IGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmlubmVyV2lkdGggPCA3NjggJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVOYXZiYXJ9IGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZUJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2lzRXhwYW5kZWQgPyBcIi9pY29uczgtY2xvc2Uuc3ZnXCIgOiBcIi9pY29uczgtbWVudS5zdmdcIn0gYWx0PVwiZXhwYW5kIGJhcnNcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9