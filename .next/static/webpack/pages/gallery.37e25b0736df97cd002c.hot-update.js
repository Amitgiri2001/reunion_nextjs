webpackHotUpdate_N_E("pages/gallery",{

/***/ "./Components/Template/GalleryTemplate/GalleryTemplate.js":
/*!****************************************************************!*\
  !*** ./Components/Template/GalleryTemplate/GalleryTemplate.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.1/node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@17.0.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GalleryTemplate.module.css */ "./Components/Template/GalleryTemplate/GalleryTemplate.module.css");
/* harmony import */ var _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Gallery_Model_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Gallery/Model/Model */ "./Components/Gallery/Model/Model.js");


var _jsxFileName = "C:\\Users\\amitd\\Desktop\\REUNION\\reunion_nextjs\\Components\\Template\\GalleryTemplate\\GalleryTemplate.js",
    _this = undefined,
    _s = $RefreshSig$();





var GalleryTemplate = function GalleryTemplate(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      hoveredImage = _useState[0],
      setHoveredImage = _useState[1];

  var handleImageHover = function handleImageHover(image) {
    setHoveredImage(image);
  };

  var handleImageLeave = function handleImageLeave() {
    setHoveredImage(null);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.left,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img,
          src: props.img1,
          alt: "some",
          onMouseEnter: function onMouseEnter() {
            return handleImageHover("image1");
          },
          onMouseLeave: handleImageLeave
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, _this), hoveredImage === "image1" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
          onMouseEnter: function onMouseEnter() {
            return handleImageHover("image1");
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Gallery_Model_Model__WEBPACK_IMPORTED_MODULE_3__["default"], {
            image: props.img1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.right,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.up,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img,
            src: props.img2,
            alt: "some",
            onMouseEnter: function onMouseEnter() {
              return handleImageHover("image2");
            },
            onMouseLeave: handleImageLeave
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this), hoveredImage === "image2" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
            onMouseEnter: function onMouseEnter() {
              return handleImageHover("image2");
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Gallery_Model_Model__WEBPACK_IMPORTED_MODULE_3__["default"], {
              image: props.img2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.down,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img,
            src: props.img3,
            alt: "some",
            onMouseEnter: function onMouseEnter() {
              return handleImageHover("image3");
            },
            onMouseLeave: handleImageLeave
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, _this), hoveredImage === "image3" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
            onMouseEnter: function onMouseEnter() {
              return handleImageHover("image3");
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Gallery_Model_Model__WEBPACK_IMPORTED_MODULE_3__["default"], {
              image: props.img3
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bottom,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img,
        src: props.img4,
        alt: "some",
        onMouseEnter: function onMouseEnter() {
          return handleImageHover("image4");
        },
        onMouseLeave: handleImageLeave
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this), hoveredImage === "image4" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _GalleryTemplate_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
        onMouseEnter: function onMouseEnter() {
          return handleImageHover("image4");
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Gallery_Model_Model__WEBPACK_IMPORTED_MODULE_3__["default"], {
          image: props.img4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, _this);
};

_s(GalleryTemplate, "xp9rc5vun36f+nX2j6cpV38LqOI=");

_c = GalleryTemplate;
/* harmony default export */ __webpack_exports__["default"] = (GalleryTemplate);

var _c;

$RefreshReg$(_c, "GalleryTemplate");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/.pnpm/next@10.0.7_react-dom@17.0.1_react@17.0.1_typescript@5.3.3_webpack@5.89.0/node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/.pnpm/next@10.0.7_react-dom@17.0.1_react@17.0.1_typescript@5.3.3_webpack@5.89.0/node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9UZW1wbGF0ZS9HYWxsZXJ5VGVtcGxhdGUvR2FsbGVyeVRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbIkdhbGxlcnlUZW1wbGF0ZSIsInByb3BzIiwidXNlU3RhdGUiLCJob3ZlcmVkSW1hZ2UiLCJzZXRIb3ZlcmVkSW1hZ2UiLCJoYW5kbGVJbWFnZUhvdmVyIiwiaW1hZ2UiLCJoYW5kbGVJbWFnZUxlYXZlIiwic3R5bGVzIiwibWFpbiIsImNvbnRhaW5lciIsImxlZnQiLCJpbWciLCJpbWcxIiwiYnRuIiwicmlnaHQiLCJ1cCIsImltZzIiLCJkb3duIiwiaW1nMyIsImJvdHRvbSIsImltZzQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxDQUFDLElBQUQsQ0FEakI7QUFBQSxNQUN4QkMsWUFEd0I7QUFBQSxNQUNWQyxlQURVOztBQUcvQixNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUNoQ0YsbUJBQWUsQ0FBQ0UsS0FBRCxDQUFmO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDM0JILG1CQUFlLENBQUMsSUFBRCxDQUFmO0FBQ0gsR0FGRDs7QUFHQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUksa0VBQU0sQ0FBQ0MsSUFBdkI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUQsa0VBQU0sQ0FBQ0UsU0FBdkI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVGLGtFQUFNLENBQUNHLElBQXZCO0FBQUEsZ0NBQ0k7QUFDSSxtQkFBUyxFQUFFSCxrRUFBTSxDQUFDSSxHQUR0QjtBQUVJLGFBQUcsRUFBRVgsS0FBSyxDQUFDWSxJQUZmO0FBR0ks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LGlCQUNHO0FBQ0ksaUJBQVMsRUFBRUssa0VBQU0sQ0FBQ00sR0FEdEI7QUFFSSxvQkFBWSxFQUFFO0FBQUEsaUJBQU1ULGdCQUFnQixDQUFDLFFBQUQsQ0FBdEI7QUFBQSxTQUZsQjtBQUFBLCtCQUlJLHFFQUFDLDREQUFEO0FBQVcsZUFBSyxFQUFFSixLQUFLLENBQUNvQjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTRFSCxDQXRGRDs7R0FBTXJCLGU7O0tBQUFBLGU7QUF3RlNBLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dhbGxlcnkuMzdlMjViMDczNmRmOTdjZDAwMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9HYWxsZXJ5VGVtcGxhdGUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTW9kYWxDb21wIGZyb20gJy4uLy4uL0dhbGxlcnkvTW9kZWwvTW9kZWwnO1xyXG5cclxuY29uc3QgR2FsbGVyeVRlbXBsYXRlID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaG92ZXJlZEltYWdlLCBzZXRIb3ZlcmVkSW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSW1hZ2VIb3ZlciA9IChpbWFnZSkgPT4ge1xyXG4gICAgICAgIHNldEhvdmVyZWRJbWFnZShpbWFnZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUltYWdlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SG92ZXJlZEltYWdlKG51bGwpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5pbWcxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJzb21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVJbWFnZUhvdmVyKFwiaW1hZ2UxXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZUltYWdlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7aG92ZXJlZEltYWdlID09PSBcImltYWdlMVwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVJbWFnZUhvdmVyKFwiaW1hZ2UxXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9kYWxDb21wIGltYWdlPXtwcm9wcy5pbWcxfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5pbWcyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwic29tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUltYWdlSG92ZXIoXCJpbWFnZTJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZUltYWdlTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtob3ZlcmVkSW1hZ2UgPT09IFwiaW1hZ2UyXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUltYWdlSG92ZXIoXCJpbWFnZTJcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsQ29tcCBpbWFnZT17cHJvcHMuaW1nMn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvcHMuaW1nM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInNvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVJbWFnZUhvdmVyKFwiaW1hZ2UzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVJbWFnZUxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aG92ZXJlZEltYWdlID09PSBcImltYWdlM1wiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVJbWFnZUhvdmVyKFwiaW1hZ2UzXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbENvbXAgaW1hZ2U9e3Byb3BzLmltZzN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b219PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ31cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmltZzR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwic29tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVJbWFnZUhvdmVyKFwiaW1hZ2U0XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlSW1hZ2VMZWF2ZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7aG92ZXJlZEltYWdlID09PSBcImltYWdlNFwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVJbWFnZUhvdmVyKFwiaW1hZ2U0XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsQ29tcCBpbWFnZT17cHJvcHMuaW1nNH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5VGVtcGxhdGUiXSwic291cmNlUm9vdCI6IiJ9