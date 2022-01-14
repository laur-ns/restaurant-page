/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendContact)\n/* harmony export */ });\nconst createContact = (() => {\n  const content = document.createElement('div');\n  const contactTitle = document.createElement('h1');\n  const menuContainer = document.createElement('div');\n  const contactCard = document.createElement('div');\n  const imgWrapper = document.createElement('div');\n  const img = document.createElement('img');\n  const contactWrapper = document.createElement('div')\n  const contactUsTitle = document.createElement('h2')\n  const contactUsPara = document.createElement('p')\n  \n  content.setAttribute('id', 'content');\n  contactTitle.setAttribute('id', 'page-title')\n  contactTitle.innerHTML = \"<u id='menu-title'>Contact</u>\"\n  menuContainer.classList.add('menu-container');\n  contactCard.classList.add('contact-card', 'radius');\n  imgWrapper.classList.add('img-wrapper')\n  img.classList.add('radius');\n  img.setAttribute('src', './img/home-img.jpg');\n  contactWrapper.classList.add('contact-wrapper');\n  contactUsTitle.textContent = 'Contact Us!';\n  contactUsPara.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo impedit sunt quibusdam excepturi accusamus odit? Voluptas nostrum, iusto quam<br><br>Signissimos dolorum, exercitationem, eos nesciunt praesentium  explicabo illum accusantium maxime.';\n\n  const setContactTitle = () => {\n    const panel = document.querySelector('.panel');\n    panel.parentNode.insertBefore(contactTitle, panel.nextSibling);\n    panel.parentNode.insertBefore(content, contactTitle.nextSibling);\n  }\n  const displayCard = () => {\n    const panel = document.querySelector('.panel');\n    panel.parentNode.insertBefore(content, contactTitle.nextSibling);\n    content.append(menuContainer);\n    menuContainer.append(contactCard);\n    contactCard.append(imgWrapper);\n    imgWrapper.append(img);\n    contactCard.append(contactWrapper);\n    contactWrapper.append(contactUsTitle)\n    contactWrapper.append(contactUsPara)\n  }\n\n  return {\n    setContactTitle,\n    displayCard\n  }\n})();\n\nfunction appendContact() {\n  createContact.setContactTitle();\n  createContact.displayCard();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst appendHome = () => {\n  const content = document.createElement('div');\n  const titleWrapper = document.createElement('div')\n  const title = document.createElement('div')\n  const infoWrapper = document.createElement('div')\n  const card = document.createElement('div')\n  const img = document.createElement('img')\n\n  content.setAttribute('id', 'content');\n  titleWrapper.classList.add('title-container');\n  title.classList.add('title');\n  infoWrapper.classList.add('info-container');\n  card.classList.add('card', 'radius');\n  img.classList.add('radius');\n  img.setAttribute('src', './img/home-img.jpg');\n\n  const ingTitle = document.createElement('h2')\n  const loremIpsum = document.createElement('p')\n  const addressTitle = document.createElement('h2')\n  const address = document.createElement('p')\n  const hoursTitle = document.createElement('h2')\n  const hours = document.createElement('p')\n\n  title.innerHTML = '<h1>Seafood Masters</h1>';\n  ingTitle.textContent = 'FRESH INGREDIENTS';\n  loremIpsum.textContent = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo impedit sunt quibusdam excepturi accusamus odit? Voluptas nostrum, iusto quam dignissimos dolorum, exercitationem, eos nesciunt praesentium explicabo illum accusantium maxime.\";\n  addressTitle.textContent = 'ADDRESS';\n  address.innerHTML = '24 Pepega Rd., Blockway<br>Wellywood'\n  hoursTitle.textContent = 'HOURS';\n  hours.innerHTML = 'Mon-Fri: 8am - 6pm<br>Sat-Sun: 10am-4pm';\n\n  const panel = document.querySelector('.panel');\n  panel.parentNode.insertBefore(content, panel.nextSibling);\n  content.append(titleWrapper);\n  titleWrapper.append(title);\n  content.append(infoWrapper);\n  infoWrapper.append(card);\n  card.append(img);\n  card.append(ingTitle);\n  card.append(loremIpsum);\n  card.append(addressTitle);\n  card.append(address);\n  card.append(hoursTitle);\n  card.append(hours);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _panel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.js */ \"./src/panel.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n(0,_panel_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst init = (() => {\n  const removeContent = () => {\n    let content = document.querySelector('#content')\n    content.remove();\n    let title = document.querySelector('#page-title');\n    if (title) {\n      title.remove();\n    }\n  }\n  const setEventListeners = () => {\n    const home = document.querySelector('#one')\n    const menu = document.querySelector('#two')\n    const contact = document.querySelector('#three')\n    home.addEventListener('click', () => {\n      removeContent();\n      (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    })\n    menu.addEventListener('click', () => {\n      removeContent();\n      (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    })\n    contact.addEventListener('click', () => {\n      removeContent();\n      (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    })\n  }\n\n  return {\n    setEventListeners,\n  }\n})()\n\ninit.setEventListeners();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendMenu)\n/* harmony export */ });\nconst createMenu = (() => {\n  const content = document.createElement('div');\n  const menuContainer = document.createElement('div');\n  const menuCard = document.createElement('div')\n  const img = document.createElement('img')\n  const subTitle = document.createElement('h2');\n  const description = document.createElement('p');\n  const menuTitle = document.createElement('h1');\n\n  menuTitle.setAttribute('id', 'page-title')\n  content.setAttribute('id', 'content');\n  menuContainer.classList.add('menu-container');\n  menuCard.classList.add('menu-card', 'radius');\n  img.classList.add('radius');\n  img.setAttribute('src', './img/home-img.jpg');\n  subTitle.textContent = 'Grilled Salmon';\n  description.innerHTML = '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quo impedit sunt quibusdam excepturi accusamus odit? Voluptas nostrum, iusto quam dignissimos</p>'\n\n  const setMenuTitle = () => {\n    menuTitle.innerHTML = \"<u id='menu-title'>MENU</u>\"\n    const panel = document.querySelector('.panel');\n    panel.parentNode.insertBefore(menuTitle, panel.nextSibling);\n    panel.parentNode.insertBefore(content, menuTitle.nextSibling);\n  }\n\n  const displayCards = () => {\n    const panel = document.querySelector('.panel');\n    panel.parentNode.insertBefore(content, menuTitle.nextSibling);\n    content.append(menuContainer);\n    menuCard.append(img);\n    menuCard.append(subTitle);\n    menuCard.append(description);\n    menuContainer.textContent = '';\n    for(let i = 0; i < 6; i++) {\n      menuContainer.append(menuCard.cloneNode(true));\n    }\n  }\n\n  return {\n    setMenuTitle,\n    displayCards,\n  }\n})();\n\n\nfunction appendMenu() {\n  createMenu.setMenuTitle();\n  createMenu.displayCards();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/panel.js":
/*!**********************!*\
  !*** ./src/panel.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ appendPanels)\n/* harmony export */ });\nconst panels = (() => {\n  // header variables\n  const header = document.createElement('header');\n  const nav = document.createElement('nav');\n  const links = document.createElement('a');\n  const body = document.querySelector('body');\n  // footer variables\n  const footer = document.createElement('footer')\n  const github = document.createElement('a');\n\n  const appendHeader = () => {\n    header.classList.add('panel');\n    body.prepend(header);\n    header.append(nav);\n    nav.append(links);\n    document.querySelector('nav a').setAttribute('id', 'one')\n    links.textContent = 'Home';\n    nav.append(links.cloneNode());\n    document.querySelector('nav a:last-child').textContent = 'Menu';\n    document.querySelector('nav a:last-child').setAttribute('id', 'two');\n    nav.append(links.cloneNode());\n    document.querySelector('nav a:last-child').setAttribute('id', 'three');\n    document.querySelector('nav a:last-child').textContent = 'Contact';\n  }\n  const appendFooter = () => {\n    footer.classList.add('panel');\n    github.setAttribute('href', 'https://github.com/laur-ns/');\n    github.textContent = 'github.com/laur-ns'\n    body.append(footer);\n    footer.append(github);\n  }\n  return {\n    appendHeader,\n    appendFooter,\n  }\n})();\n\nfunction appendPanels() {\n  panels.appendHeader();\n  panels.appendFooter();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/panel.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;