(this["webpackJsonpmy-website"] = this["webpackJsonpmy-website"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./img/Me/HandsUp.jpeg */ "./src/img/Me/HandsUp.jpeg");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "/* Global Styles */\n:root {\n  --nav-color: #007cc7;\n  --aboutme-color: #fff;\n  --experience-color: #e9e9e9;\n  --projects-color: #0f2557;\n  --project-card-color: #28559a;\n  --contactme-color: black;\n}\n\n/* GENERAL */\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  overflow-x: hidden;\n}\n\n.body {\n  height: 100%;\n  width: 100%;\n  color: var(--projects-color);\n  position: relative;\n  font-family: 'Roboto', sans-serif;\n}\n.font {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 100;\n}\n\n.container-fluid h1 {\n  font-size: 300%;\n}\n\n.container-fluid {\n  padding: 7% 15%;\n}\n\n.center {\n  text-align: center;\n}\n\n.right {\n  text-align: right;\n  width: 100%;\n  margin-left: auto;\n}\n\n.padding-top {\n  padding-top: 5%;\n}\n.helper {\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n.helper-div {\n  display: inline-block;\n  vertical-align: middle;\n  height: 50%;\n}\n\n/* TOP PAGE */\n\n.header {\n  position: relative;\n  height: 100vh;\n  width: 100%;\n  background: #161415 url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat top center;\n  background-size: cover !important;\n  -webkit-background-size: cover !important;\n  text-align: center;\n  overflow: hidden;\n  align-items: center;\n  color: white;\n}\n\n.middle-text {\n  position: absolute;\n  top: 30%;\n  left: 0;\n  right: 0;\n  text-align: center;\n  width: 90%;\n  margin: 0 auto;\n}\n\n.middle-paragraph {\n  position: absolute;\n  top: 40%;\n  left: 0;\n  right: 0;\n  text-align: center;\n  width: 90%;\n}\n\n.display {\n  color: white;\n  transition: 0.5s;\n}\n\n.display-none {\n  color: transparent;\n  transition: 0.5s;\n}\n\n.icon {\n  bottom: 20px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n  margin: 0 auto;\n  cursor: pointer;\n}\n\n.icon:hover {\n  color: #cccccc;\n}\n\n#intro-name {\n  font-size: 175%;\n}\n\n#intro-description {\n  font-size: 85%;\n}\n\n/* NAVBAR */\n\nnav {\n  display: flex;\n  flex-direction: row;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  align-items: center;\n}\n\n.spacer {\n  flex: 1 1;\n}\n\n.no-bottom-padding {\n  padding: 10px 50px 0 50px;\n  transition: 0.5s;\n}\n\n.toggle-button {\n  height: 24px;\n  width: 30px;\n}\n\n.backdrop {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.3);\n  z-index: 1;\n  left: 0;\n  top: 0;\n}\n\n.nav-link-outer ul {\n  display: flex;\n  flex-direction: row;\n  list-style: none;\n  transition: 0.5s;\n  align-items: center;\n  margin: 0;\n}\n\n.nav-item {\n  margin: 1%;\n  display: inline-block;\n  cursor: pointer;\n}\n\n.nav-link {\n  border: none;\n  background: transparent;\n  display: inline-block;\n  white-space: nowrap;\n  margin: 0 10px;\n}\n\n.nav-logo {\n  font-size: 1em;\n  background-color: transparent;\n  border: none;\n  color: white;\n}\n\n.nav-white {\n  background-color: var(--nav-color);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  transition: 0.5s;\n  padding: 10px 50px 10px 50px;\n}\n\n.nav-item {\n  color: white;\n}\n\n@media (max-width: 1028px) {\n  .disappear-small {\n    display: none;\n  }\n}\n\n@media (min-width: 1028px) {\n  .small-dropdown {\n    display: none;\n  }\n}\n\n.a-icon svg {\n  color: white;\n  vertical-align: middle;\n  margin: 5%;\n  transform: translateY(0);\n  transition: 0.25;\n}\n\n.a-icon svg:hover {\n  transform: translateY(-3px);\n  transition: 0.25;\n  color: rgb(51, 51, 51);\n}\n\n.navbar a:hover {\n  text-decoration: none;\n}\n\n.nav-button:focus {\n  outline: none;\n}\n\n.side-drawer {\n  height: 100%;\n  background-color: var(--nav-color);\n  box-shadow: 1px 0px 7px rgba(0, 0, 0.5);\n  position: fixed;\n  top: 0;\n  left: 65%;\n  width: 35%;\n  text-align: center;\n  z-index: 2;\n  float: right;\n  transition: transform 0.3s ease-out;\n  transform: translateX(100%);\n  box-sizing: border-box;\n}\n\nbutton {\n  outline: none !important;\n  box-shadow: none;\n}\n\n.side-drawer.open {\n  transform: translateX(0);\n}\n\n.toggler {\n  display: none;\n}\n\n.bars {\n  background: transparent;\n  color: white;\n}\n\n.x-button {\n  position: absolute;\n  top: 0;\n  margin-top: 10%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: transparent;\n  border: none;\n  color: white;\n}\n\n.side-drawer ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  font-size: 1.2rem;\n  margin: 0 auto;\n  padding: 0;\n}\n\n.side-drawer li {\n  margin: 0.5rem 0;\n}\n\n.side-drawer a {\n  text-decoration: none;\n  color: white;\n}\n\n.side-drawer a:hover {\n  color: black;\n  cursor: pointer;\n}\n\n@media (max-width: 640px) {\n  .toggler {\n    display: flex;\n    background: transparent;\n    border: none;\n  }\n  .nav-link-outer {\n    display: none;\n  }\n}\n\n/* ABOUT ME PAGE */\n\n#aboutme {\n  padding: 10%;\n  color: black;\n  background-color: var(--aboutme-color);\n  text-align: center;\n}\n\n.aboutme-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.inner-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n#aboutme img {\n  height: 14em;\n  border-radius: 2%;\n  vertical-align: middle;\n  margin: 20px auto;\n}\n\n.img-col {\n  text-align: center;\n  vertical-align: middle;\n}\n\n.aboutme-description {\n  margin: 40px auto;\n}\n\n.aboutme-list {\n  margin-top: 10px;\n}\n\n@media (max-width: 768px) {\n  .aboutme-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* EXPERIENCE */\n\n#experience {\n  text-align: center;\n  color: black;\n  padding: 10%;\n  background-color: var(--experience-color);\n}\n\n#experience h1 {\n  padding-bottom: 30px;\n}\n\n.experience-container {\n  position: relative;\n  margin-top: 1.5rem;\n  margin-bottom: 6rem;\n  width: 100%;\n}\n\n.experience-container::before {\n  content: '';\n  display: block;\n  width: 1px;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.1);\n  position: absolute;\n  left: 35%;\n  top: 0;\n}\n\n.experience-name {\n  float: left;\n  width: 35%;\n  padding-right: 50px;\n  text-align: right;\n  box-sizing: border-box;\n}\n\n.experience-name h1 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.experience-name p {\n  margin-top: 0;\n  font-size: 0.75rem;\n  color: rgb(51, 51, 51);\n}\n\n.experience-description {\n  margin-left: 35%;\n  padding-left: 50px;\n  text-align: left;\n}\n\n.experience-item {\n  position: relative;\n  padding-top: 1.5rem;\n}\n.experience-description h3 {\n  margin-top: 0;\n  padding-top: 0;\n  position: relative;\n  padding-bottom: 1.5rem;\n}\n\n.experience-description h3::after {\n  content: '';\n  display: block;\n  height: 3px;\n  width: 50px;\n  background: rgba(0, 0, 0, 0.2);\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n\n.experience-description p {\n  margin-top: 30px;\n}\n\n.experience-icon-outer {\n  height: 48px;\n  width: 48px;\n  line-height: 40px;\n  background: #313131;\n  border-radius: 50%;\n  text-align: center;\n  color: #ffffff;\n  position: absolute;\n  left: 35%;\n  top: 0.9rem;\n  margin-left: -24px;\n  align-items: center;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.experience-icon-outer::before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n}\n\n.experience-icon {\n  margin: auto;\n}\n\n@media (max-width: 768px) {\n  .experience-container::before {\n    left: 2.4rem;\n  }\n\n  .experience-icon-outer {\n    left: 2.4rem;\n  }\n\n  .experience-item {\n    padding-top: 0;\n  }\n\n  .experience-name,\n  .experience-description {\n    margin-left: 0;\n    float: none;\n    width: auto;\n    padding-right: 15px;\n    text-align: left;\n    padding-left: 7rem;\n  }\n\n  .experience-description {\n    margin-top: 1.5rem;\n  }\n\n  .experience-description h3::after {\n    content: '';\n    display: block;\n    height: 3px;\n    width: 50px;\n    background: rgba(0, 0, 0, 0.2);\n    position: absolute;\n    left: 0;\n    bottom: auto;\n    top: 0;\n  }\n  .experience-description h3 {\n    padding-top: 1.5rem;\n    position: relative;\n    margin-bottom: 0;\n    padding-bottom: 0;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .experience-item {\n    font-size: 1rem;\n  }\n\n  .experience-container::before {\n    left: 1.8rem;\n  }\n  .experience-icon-outer {\n    height: 3.6rem;\n    width: 3.6rem;\n    line-height: 3.6rem;\n    left: 1.8rem;\n    margin-left: -1.8rem;\n    font-size: 1.5rem;\n  }\n  .experience-name,\n  .experience-description {\n    padding-left: 5.5rem;\n  }\n}\n\n/* PROJECTS */\n\n#projects {\n  text-align: center;\n  background-color: var(--projects-color);\n  color: white;\n  padding: 10% 10%;\n}\n\n.project-item {\n  margin: 15% 0;\n  color: white;\n}\n\n.project-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin-top: 50px;\n}\n\n.project-link {\n  height: 100%;\n  width: 100%;\n  display: inline-block;\n  align-items: center;\n  line-height: 1rem;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n\n.project-pic-container {\n  white-space: nowrap;\n  height: 100%;\n}\n\n.project-pic {\n  max-height: 100%;\n  max-width: 100%;\n  transition: 0.2s;\n  border-radius: 5px;\n  transform: translateY(0);\n  vertical-align: middle;\n  display: inline-block;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),\n    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),\n    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);\n}\n\n.project-pic:hover {\n  transition: 0.2;\n  transform: translateY(-10px);\n  box-shadow: 10px rgb(51, 51, 51);\n}\n\n.project-description {\n  padding-left: 30px;\n  text-align: right;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.project-description-right {\n  padding-right: 30px;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.project-icons {\n  text-align: right;\n}\n\n.project-icons-right {\n  text-align: left;\n}\n\n.project-technologies {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.project-technologies p {\n  padding-left: 20px;\n}\n\n.project-technologies-right {\n  display: flex;\n}\n\n.project-technologies-right p {\n  padding-right: 20px;\n}\n\n.github-link {\n  color: rgb(51, 51, 51);\n}\n\n.github-link:hover {\n  color: black;\n}\n\n.other-projects {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n\n  /* \n  SAVE FOR WHEN I ADD ANOTHER PROJECT\n  grid-template-columns: repeat(3, 1fr); \n  */\n}\n\n.other-projects-item {\n  box-sizing: border-box;\n  margin: 20px;\n  background-color: var(--project-card-color);\n  border-radius: 3px;\n  display: flex;\n  padding: 5%;\n  justify-content: space-between;\n  flex-direction: column;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),\n    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),\n    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);\n}\n\n.other-name {\n  text-align: left;\n}\n\n.other-description {\n  text-align: left;\n}\n\n.other-github {\n  text-align: right;\n}\n\n.other-tech {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.other-tech p {\n  margin-left: 3%;\n  margin-right: 3%;\n}\n\n@media (max-width: 768px) {\n  .project-container {\n    grid-template-columns: 1fr;\n  }\n\n  .project-pic-container {\n    height: auto;\n  }\n\n  .project-technologies,\n  .project-technologies-right {\n    justify-content: center;\n  }\n\n  .project-technologies p,\n  .project-technologies-right p {\n    padding: 0 10px;\n  }\n\n  .project-description,\n  .project-icons,\n  .project-icons-right {\n    text-align: center;\n    padding-left: 0;\n  }\n}\n\n@media (max-width: 650px) {\n  .other-projects {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n\n/* CONTACT ME */\n\n#contactme {\n  text-align: center;\n  color: white;\n  background-color: var(--contactme-color);\n  padding: 10%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  text-align: center;\n}\n\n#contactme h1,\n#contactme h3,\n#contactme p,\n#contactme h6 {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.link-div {\n  width: 100%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.contact-btn {\n  margin-top: 5%;\n  height: 4em;\n  width: 10em;\n  border: white solid 1px;\n  color: white;\n  background-color: transparent;\n  border-radius: 20px;\n  text-decoration: none;\n  padding: 10px 10px;\n  margin-top: 10px;\n  transition: 0.4s;\n}\n\n.contact-btn:hover {\n  background-color: white;\n  color: black;\n  transition: 0.4s;\n}\n\n.vertical-middle {\n  vertical-align: middle;\n}\n.contact-list {\n  list-style-type: none;\n}\n\n.resume-link {\n  color: white;\n  text-decoration: none;\n}\n\n.resume-link:hover {\n  color: var(--projects-color);\n  text-decoration: none;\n}\n\n.footer {\n  height: 100px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Nav/Nav */ "./src/components/Nav/Nav.js");
/* harmony import */ var _components_Pages_ContactMe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Pages/ContactMe */ "./src/components/Pages/ContactMe.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var _components_Pages_AboutMe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Pages/AboutMe */ "./src/components/Pages/AboutMe.js");
/* harmony import */ var _components_Pages_Photo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Pages/Photo.js */ "./src/components/Pages/Photo.js");
/* harmony import */ var _components_Experience_Experience__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Experience/Experience */ "./src/components/Experience/Experience.js");
var _jsxFileName = "/Users/chriscooper/Documents/personalwebsite/src/App.js";

 //Components








function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pages_Photo_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pages_AboutMe__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Experience_Experience__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pages_ContactMe__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Documents/Resume.pdf":
/*!**********************************!*\
  !*** ./src/Documents/Resume.pdf ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Resume.c9496154.pdf";

/***/ }),

/***/ "./src/components/Experience/EducationPage.js":
/*!****************************************************!*\
  !*** ./src/components/Experience/EducationPage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/chriscooper/Documents/personalwebsite/src/components/Experience/EducationPage.js";




function EducationPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-icon-outer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUniversity"],
    className: "experience-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "University of Southern California"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "August 2019 - Present")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "B.S. Computer Science"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "I am currently a sophomore at USC studying Computer Science. At school I am involved with CAIS++, which focuses on using AI for social good, and Scope USC which helps students learn and use a new framework that can be used for real world projects. Non computer science related, I am also a member of the club basketball team at USC."))));
}

/* harmony default export */ __webpack_exports__["default"] = (EducationPage);

/***/ }),

/***/ "./src/components/Experience/Experience.js":
/*!*************************************************!*\
  !*** ./src/components/Experience/Experience.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EducationPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EducationPage */ "./src/components/Experience/EducationPage.js");
/* harmony import */ var _ExperiencePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExperiencePage */ "./src/components/Experience/ExperiencePage.js");
var _jsxFileName = "/Users/chriscooper/Documents/personalwebsite/src/components/Experience/Experience.js";




function Experience() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "experience",
    className: "font",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExperiencePage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    position: "Software Engineering Intern",
    time: "December 2020 - Present",
    name: "Inked Sports",
    description: "Inked Sports is a student run startup  that looks to use Social Media to help college athletes with their personal branding. The app is going to use  the Instagram API to receive and analyze the data from their social media, and use that to help them get deals with companies. The app has a Firebase backend, and a  React Native frontend (which is where I am working the most).",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, "Education"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EducationPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ }),

/***/ "./src/components/Experience/ExperiencePage.js":
/*!*****************************************************!*\
  !*** ./src/components/Experience/ExperiencePage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/chriscooper/Documents/personalwebsite/src/components/Experience/ExperiencePage.js";




function ExperiencePage({
  logo,
  name,
  position,
  time,
  description
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-icon-outer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBriefcase"],
    className: "experience-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experience-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, position), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, description)));
}

/* harmony default export */ __webpack_exports__["default"] = (ExperiencePage);

/***/ }),

/***/ "./src/components/Nav/Nav.js":
/*!***********************************!*\
  !*** ./src/components/Nav/Nav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideDrawer */ "./src/components/Nav/SideDrawer.js");
var _jsxFileName = "/Users/chriscooper/Documents/personalwebsite/src/components/Nav/Nav.js";






function Nav() {
  const [sidedDrawerOpen, setSideDrawerOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  window.addEventListener('scroll', () => {
    if (document.getElementById('top-page').getBoundingClientRect().bottom <= 0) {
      changeNavTop(false);
    } else if (navTop && document.getElementById('top-page').getBoundingClientRect().bottom > 0) {
      changeNavTop(true);
    }
  });
  const [navTop, changeNavTop] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sidedDrawerOpen);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: `font ${navTop ? 'no-bottom-padding' : 'nav-white '}`,
    id: "navbar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: `nav-item`,
    to: "top-page",
    spy: true,
    smooth: true,
    duration: 1000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, " CC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spacer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-link-outer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: `nav-link`,
    to: "aboutme",
    spy: true,
    smooth: true,
    duration: 1000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, "About Me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: `nav-link`,
    to: "experience",
    spy: true,
    smooth: true,
    duration: 1000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: `nav-link`,
    to: "projects",
    spy: true,
    smooth: true,
    duration: 1000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: `nav-link`,
    to: "contactme",
    spy: true,
    smooth: true,
    duration: 1000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, " Contact Me")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "toggler",
    onClick: drawerToggleClickHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBars"],
    className: "bars",
    size: "2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 75
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    toggle: drawerToggleClickHandler,
    open: sidedDrawerOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), " ", sidedDrawerOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "backdrop",
    onClick: drawerToggleClickHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/components/Nav/SideDrawer.js":
/*!******************************************!*\
  !*** ./src/components/Nav/SideDrawer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/Users/chriscooper/Documents/personalwebsite/src/components/Nav/SideDrawer.js";





function SideDrawer({
  open,
  toggle
}) {
  let c = 'side-drawer';

  if (open === true) {
    c = 'side-drawer open';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: c,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "x-button",
    onClick: toggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faWindowClose"],
    size: "2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "top-page",
    spy: true,
    smooth: true,
    duration: 1000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "aboutme",
    spy: true,
    smooth: true,
    duration: 1000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "About Me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "experience",
    spy: true,
    smooth: true,
    duration: 1000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "projects",
    spy: true,
    smooth: true,
    duration: 1000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "contactme",
    spy: true,
    smooth: true,
    duration: 1000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, " Contact Me"))));
}

/* harmony default export */ __webpack_exports__["default"] = (SideDrawer);

/***/ }),

/***/ "./src/components/Pages/AboutMe.js":
/*!*****************************************!*\
  !*** ./src/components/Pages/AboutMe.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_Me_profile_pic_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/Me/profile-pic.jpeg */ "./src/img/Me/profile-pic.jpeg");
/* harmony import */ var _img_Me_profile_pic_jpeg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_Me_profile_pic_jpeg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/chriscooper/Documents/personalwebsite/src/components/Pages/AboutMe.js";



function AboutMe() {
  const Text = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aboutme-words",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aboutme-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Hi! I'm Christopher, and I'm currently a sophomore studying Computer Science at The University of Southern California"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, " I am passionate about Software Engineering, and I am constantly trying to learn more and grow. "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "When I'm not coding I'm usually playing basketball or just spending time with friends and family. I am currently looking for a Software Engineering Internship for Summer 2021."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Here are some technologies that I enjoy using:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner-grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aboutme-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "C++"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aboutme-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Java"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aboutme-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Swift"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aboutme-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "HTML/CSS/JS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aboutme-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Reactjs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aboutme-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Nodejs"))));

  const Im = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "helper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _img_Me_profile_pic_jpeg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "",
    className: "profile-pic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font",
    id: "aboutme",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "About me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aboutme-grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Im, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (AboutMe);

/***/ }),

/***/ "./src/components/Pages/ContactMe.js":
/*!*******************************************!*\
  !*** ./src/components/Pages/ContactMe.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Documents_Resume_pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Documents/Resume.pdf */ "./src/Documents/Resume.pdf");
/* harmony import */ var _Documents_Resume_pdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Documents_Resume_pdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var _jsxFileName = "/Users/chriscooper/Documents/personalwebsite/src/components/Pages/ContactMe.js";





function ContactMe() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "contactme",
    className: "font",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, "Contact Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, "I'm always willing to meet new people, so please reach out to me if you can!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Emaill: coopercb@usc.edu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Phone Number: (949) 838 - 6614"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: _Documents_Resume_pdf__WEBPACK_IMPORTED_MODULE_1___default.a,
    className: "resume-link",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Resume")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "link-div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:coopercb@usc.edu",
    className: "contact-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "Get in touch!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "helper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/profile.php?id=100010222663731&ref=bookmarks",
    className: "a-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFacebookF"],
    size: "2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "a-icon",
    href: "https://www.instagram.com/chriscooper13/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faInstagram"],
    size: "2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "a-icon",
    href: "https://github.com/chrisbcooper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"],
    size: "2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "a-icon",
    href: "https://www.linkedin.com/in/christopher-cooper-256969195/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLinkedin"],
    size: "2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ContactMe);

/***/ }),

/***/ "./src/components/Pages/Photo.js":
/*!***************************************!*\
  !*** ./src/components/Pages/Photo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/chriscooper/Documents/personalwebsite/src/components/Pages/Photo.js";





function Photo() {
  const [showHeader, setShowHeader] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [showParagraph, setShowParagraph] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  window.addEventListener('scroll', () => {
    if (showHeader === true && document.getElementById('navbar').getBoundingClientRect().bottom + 40 > document.getElementById('intro-name').getBoundingClientRect().top) {
      setShowHeader(false);
    } else if (showHeader === false && document.getElementById('navbar').getBoundingClientRect().bottom + 40 <= document.getElementById('intro-name').getBoundingClientRect().top) {
      setShowHeader(true);
    }

    if (showParagraph === true && document.getElementById('navbar').getBoundingClientRect().bottom + 40 > document.getElementById('intro-description').getBoundingClientRect().top) {
      setShowParagraph(false);
    } else if (showParagraph === false && document.getElementById('navbar').getBoundingClientRect().bottom + 40 <= document.getElementById('intro-description').getBoundingClientRect().top) {
      setShowParagraph(true);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header font",
    id: "top-page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "middle-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    id: "intro-name",
    className: `${showHeader ? 'display' : 'display-none'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Hi! I'm Christopher Cooper"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    id: "intro-description",
    className: `${showParagraph ? 'display' : 'display-none'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "Aspiring Software Engineer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "aboutme",
    spy: true,
    smooth: true,
    duration: 1000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "icon",
    size: "3x",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronCircleDown"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Photo);

/***/ }),

/***/ "./src/components/Projects/EvenProject.js":
/*!************************************************!*\
  !*** ./src/components/Projects/EvenProject.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var _jsxFileName = "/Users/chriscooper/Documents/personalwebsite/src/components/Projects/EvenProject.js";




function EvenProject({
  name,
  projectPic,
  tech1,
  tech2,
  tech3,
  githubLink,
  link,
  description
}) {
  const [width, setWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerWidth);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener('resize', changeWidth);

  const Description = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-technologies-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, tech1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, tech2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, tech3)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-icons-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: githubLink,
    className: "github-link",
    rel: "noopener noreferrer",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"],
    size: "2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }))));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-description-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, name), width > 768 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Description, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-pic-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: link,
    rel: "noopener noreferrer",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "helper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: projectPic,
    alt: "",
    className: "project-pic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 44
    }
  }))), width <= 768 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Description, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 26
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (EvenProject);

/***/ }),

/***/ "./src/components/Projects/OddProject.js":
/*!***********************************************!*\
  !*** ./src/components/Projects/OddProject.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var _jsxFileName = "/Users/chriscooper/Documents/personalwebsite/src/components/Projects/OddProject.js";




function OddProject({
  name,
  githubLink,
  projectPic,
  description,
  link,
  tech1,
  tech2,
  tech3
}) {
  const [width, setWidth] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(window.innerWidth);

  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener('resize', changeWidth);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, width <= 768 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      textAlign: 'left'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 26
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-pic-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: link,
    className: "project-link",
    rel: "noopener noreferrer",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "helper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: projectPic,
    alt: "",
    className: "project-pic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 43
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, width > 768 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 27
    }
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-technologies",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, tech1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, tech2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, tech3)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "project-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: githubLink,
    className: "github-link",
    rel: "noopener noreferrer",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"],
    size: "2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (OddProject);

/***/ }),

/***/ "./src/components/Projects/OtherProjectsCard.js":
/*!******************************************************!*\
  !*** ./src/components/Projects/OtherProjectsCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var _jsxFileName = "/Users/chriscooper/Documents/personalwebsite/src/components/Projects/OtherProjectsCard.js";




function OtherProjectsCard({
  name,
  description,
  githublink,
  tech1,
  tech2,
  tech3
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "other-projects-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "other-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "other-github",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: githublink,
    className: "github-link",
    rel: "noopener noreferrer",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"],
    size: "2x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "other-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "other-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "other-tech",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, tech1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, tech2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, tech3)));
}

/* harmony default export */ __webpack_exports__["default"] = (OtherProjectsCard);

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EvenProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EvenProject */ "./src/components/Projects/EvenProject.js");
/* harmony import */ var _OddProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OddProject */ "./src/components/Projects/OddProject.js");
/* harmony import */ var _OtherProjectsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OtherProjectsCard */ "./src/components/Projects/OtherProjectsCard.js");
/* harmony import */ var _img_Projects_SpotifyInsider_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/Projects/SpotifyInsider.png */ "./src/img/Projects/SpotifyInsider.png");
/* harmony import */ var _img_Projects_SpotifyInsider_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_SpotifyInsider_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_Projects_QuickWork_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/Projects/QuickWork.jpeg */ "./src/img/Projects/QuickWork.jpeg");
/* harmony import */ var _img_Projects_QuickWork_jpeg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_QuickWork_jpeg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_Projects_ArcadeHoops_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/Projects/ArcadeHoops.png */ "./src/img/Projects/ArcadeHoops.png");
/* harmony import */ var _img_Projects_ArcadeHoops_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_Projects_ArcadeHoops_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/chriscooper/Documents/personalwebsite/src/components/Projects/Projects.js";








function Projects() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "projects",
    className: "font",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OddProject__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Spotify Insider",
    githublink: "https://github.com/chrisbcooper/Spotify-Insider",
    link: "https://spotify-insider.herokuapp.com/",
    tech1: "Reactjs",
    tech2: "Node.js",
    tech3: "Spotify Web API",
    projectPic: _img_Projects_SpotifyInsider_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    description: "This is a personal project that allows the user to view more information  about their spotify account. The user can look at personalized data based on the  songs, artists, and genres that they listen to. They can also created  recommended playlists based on what they listed to. The app was created with a Reactjs  front end and a Node.js back end, which communicates with the Spotify Web API.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EvenProject__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "QuickWork",
    githublink: "https://github.com/joshualchan/QuickWork",
    link: "https://docs.google.com/presentation/d/1zp3fNso_jEsT2tvyq15--9_hW8GmKbTj_cH_Jw0Xatw/edit?usp=sharing",
    tech1: "Swift",
    tech2: "Parse",
    tech3: "Heroku",
    projectPic: _img_Projects_QuickWork_jpeg__WEBPACK_IMPORTED_MODULE_5___default.a,
    description: "This was a group project created in a course that I took outside the USC curriculum. This group project was created to help those during the pandemic to find jobs around the neighborhood. The front end was created in Swift, and the back end was hosted on Heroku. I helped work on the functionality of the app, and how the data was sent to the Heroku server.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OddProject__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Arcade Hoops",
    githublink: "https://github.com/chrisbcooper/Arcade-Hoops",
    link: "https://docs.google.com/presentation/d/11uaS2u9FDBkiYkzb8BwoXg1DsfJdz1zKMhEgdZG42xM/edit?usp=sharing",
    tech1: "Swift",
    tech2: "Java",
    tech3: "SQL",
    projectPic: _img_Projects_ArcadeHoops_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    description: "This was a group project completed in a class at USC. The front end  was created with Swift, and the back end was a Java HTTP Servlet. I helped work on the back end of teh project where we communicate with MySQL to store the users data. I helped create the Servlet and helped facilitate the connection between the front end and the back end.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "Other Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "other-projects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OtherProjectsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Yoga Bear",
    description: "Application that allows the user to perform a certain yoga pose and compare them to professional poses. Front end was in Java and back end was in Python. I worked on the Python algorithm that compared the poses and created  an overall percentage of how their pose was.",
    githublink: "https://github.com/chrisbcooper/YogaBear",
    tech1: "Java",
    tech2: "Python",
    tech3: "Always AI",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OtherProjectsCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "This Website",
    description: "This website was created with the Reactjs technology. I used HTML/CSS for the styling and Javascript to make the website responsive.  The website is hosted on Github pages, and it displays more about me.",
    githublink: "https://github.com/chrisbcooper/personalwebsite",
    tech1: "Reactjs",
    tech2: "JavaScript",
    tech3: "HTML/CSS",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/img/Me/HandsUp.jpeg":
/*!*********************************!*\
  !*** ./src/img/Me/HandsUp.jpeg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/HandsUp.946d4eb2.jpeg";

/***/ }),

/***/ "./src/img/Me/profile-pic.jpeg":
/*!*************************************!*\
  !*** ./src/img/Me/profile-pic.jpeg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/profile-pic.e365989c.jpeg";

/***/ }),

/***/ "./src/img/Projects/ArcadeHoops.png":
/*!******************************************!*\
  !*** ./src/img/Projects/ArcadeHoops.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ArcadeHoops.d8b5090d.png";

/***/ }),

/***/ "./src/img/Projects/QuickWork.jpeg":
/*!*****************************************!*\
  !*** ./src/img/Projects/QuickWork.jpeg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/QuickWork.657c5a60.jpeg";

/***/ }),

/***/ "./src/img/Projects/SpotifyInsider.png":
/*!*********************************************!*\
  !*** ./src/img/Projects/SpotifyInsider.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/SpotifyInsider.c7e35bb5.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/chriscooper/Documents/personalwebsite/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
})), document.getElementById('root'));

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/chriscooper/Documents/personalwebsite/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/chriscooper/Documents/personalwebsite/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/chriscooper/Documents/personalwebsite/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map