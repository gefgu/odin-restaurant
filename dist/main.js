/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutComponent)
/* harmony export */ });
function aboutComponent() {
  const heading = document.createElement("h1");
  heading.textContent = "About";

  const image = document.createElement("img");
  image.src = "https://source.unsplash.com/N_Y88TWmGwA/600x400";
  image.alt = "Restaurant Image";

  const paragraph = document.createElement("p");
  paragraph.textContent = `Vivamus elementum libero eu dui accumsan, sed dapibus lorem venenatis.
  Nunc sagittis sem quis facilisis semper. Integer turpis nunc,
  sollicitudin sit amet enim eget, viverra tempus neque. Nullam sed mattis
  turpis, eget blandit diam. Nulla blandit aliquet erat, in suscipit lorem
  tincidunt at. Nunc ac posuere ligula, in vulputate tellus. Etiam quis
  rutrum tellus.`;

  const container = document.createElement("div");
  container.classList.add("container");
  container.append(heading, image, paragraph);

  return container;

}


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeComponent)
/* harmony export */ });
function homeComponent() {
  const heading = document.createElement("h1");
  heading.textContent = "Awesome Restaurant!";

  const image = document.createElement("img");
  image.src = "https://source.unsplash.com/N_Y88TWmGwA/600x400";
  image.alt = "Restaurant Image";

  const paragraph = document.createElement("p");
  paragraph.textContent = `Vivamus elementum libero eu dui accumsan, sed dapibus lorem venenatis.
  Nunc sagittis sem quis facilisis semper. Integer turpis nunc,
  sollicitudin sit amet enim eget, viverra tempus neque. Nullam sed mattis
  turpis, eget blandit diam. Nulla blandit aliquet erat, in suscipit lorem
  tincidunt at. Nunc ac posuere ligula, in vulputate tellus. Etiam quis
  rutrum tellus.`;

  const container = document.createElement("div");
  container.classList.add("container");
  container.append(heading, image, paragraph);

  return container;

}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuComponent)
/* harmony export */ });
function menuComponent() {
  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const image = document.createElement("img");
  image.src = "https://source.unsplash.com/N_Y88TWmGwA/600x400";
  image.alt = "Restaurant Image";

  const paragraph = document.createElement("p");
  paragraph.textContent = `Vivamus elementum libero eu dui accumsan, sed dapibus lorem venenatis.
  Nunc sagittis sem quis facilisis semper. Integer turpis nunc,
  sollicitudin sit amet enim eget, viverra tempus neque. Nullam sed mattis
  turpis, eget blandit diam. Nulla blandit aliquet erat, in suscipit lorem
  tincidunt at. Nunc ac posuere ligula, in vulputate tellus. Etiam quis
  rutrum tellus.`;

  const container = document.createElement("div");
  container.classList.add("container");
  container.append(heading, image, paragraph);

  return container;

}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ "./src/about.js");




const myModule = (function (doc) {
  const content = doc.querySelector("#content");

  const clearContent = () => {
    content.querySelectorAll(".container").forEach(e => e.remove());
  };

  const addButons = () => {
    const homeButton = doc.createElement("button");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", () => {
      clearContent();
      content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
    });
    const menuButton = doc.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", () => {
      clearContent();
      content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
    });
    const aboutButton = doc.createElement("button");
    aboutButton.textContent = "About";
    aboutButton.addEventListener("click", () => {
      clearContent();
      content.appendChild((0,_about_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
    });

    content.append(homeButton, menuButton, aboutButton);
  };

  addButons();
  content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
})(document);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN0QmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3RCZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDQTtBQUNFOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFhO0FBQ3ZDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvREFBYTtBQUN2QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscURBQWM7QUFDeEMsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG9EQUFhO0FBQ25DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0Q29tcG9uZW50KCkge1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2Uuc3JjID0gXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vTl9ZODhUV21Hd0EvNjAweDQwMFwiO1xuICBpbWFnZS5hbHQgPSBcIlJlc3RhdXJhbnQgSW1hZ2VcIjtcblxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gYFZpdmFtdXMgZWxlbWVudHVtIGxpYmVybyBldSBkdWkgYWNjdW1zYW4sIHNlZCBkYXBpYnVzIGxvcmVtIHZlbmVuYXRpcy5cbiAgTnVuYyBzYWdpdHRpcyBzZW0gcXVpcyBmYWNpbGlzaXMgc2VtcGVyLiBJbnRlZ2VyIHR1cnBpcyBudW5jLFxuICBzb2xsaWNpdHVkaW4gc2l0IGFtZXQgZW5pbSBlZ2V0LCB2aXZlcnJhIHRlbXB1cyBuZXF1ZS4gTnVsbGFtIHNlZCBtYXR0aXNcbiAgdHVycGlzLCBlZ2V0IGJsYW5kaXQgZGlhbS4gTnVsbGEgYmxhbmRpdCBhbGlxdWV0IGVyYXQsIGluIHN1c2NpcGl0IGxvcmVtXG4gIHRpbmNpZHVudCBhdC4gTnVuYyBhYyBwb3N1ZXJlIGxpZ3VsYSwgaW4gdnVscHV0YXRlIHRlbGx1cy4gRXRpYW0gcXVpc1xuICBydXRydW0gdGVsbHVzLmA7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGluZywgaW1hZ2UsIHBhcmFncmFwaCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUNvbXBvbmVudCgpIHtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQXdlc29tZSBSZXN0YXVyYW50IVwiO1xuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2Uuc3JjID0gXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vTl9ZODhUV21Hd0EvNjAweDQwMFwiO1xuICBpbWFnZS5hbHQgPSBcIlJlc3RhdXJhbnQgSW1hZ2VcIjtcblxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gYFZpdmFtdXMgZWxlbWVudHVtIGxpYmVybyBldSBkdWkgYWNjdW1zYW4sIHNlZCBkYXBpYnVzIGxvcmVtIHZlbmVuYXRpcy5cbiAgTnVuYyBzYWdpdHRpcyBzZW0gcXVpcyBmYWNpbGlzaXMgc2VtcGVyLiBJbnRlZ2VyIHR1cnBpcyBudW5jLFxuICBzb2xsaWNpdHVkaW4gc2l0IGFtZXQgZW5pbSBlZ2V0LCB2aXZlcnJhIHRlbXB1cyBuZXF1ZS4gTnVsbGFtIHNlZCBtYXR0aXNcbiAgdHVycGlzLCBlZ2V0IGJsYW5kaXQgZGlhbS4gTnVsbGEgYmxhbmRpdCBhbGlxdWV0IGVyYXQsIGluIHN1c2NpcGl0IGxvcmVtXG4gIHRpbmNpZHVudCBhdC4gTnVuYyBhYyBwb3N1ZXJlIGxpZ3VsYSwgaW4gdnVscHV0YXRlIHRlbGx1cy4gRXRpYW0gcXVpc1xuICBydXRydW0gdGVsbHVzLmA7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGluZywgaW1hZ2UsIHBhcmFncmFwaCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcblxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUNvbXBvbmVudCgpIHtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2Uuc3JjID0gXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vTl9ZODhUV21Hd0EvNjAweDQwMFwiO1xuICBpbWFnZS5hbHQgPSBcIlJlc3RhdXJhbnQgSW1hZ2VcIjtcblxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gYFZpdmFtdXMgZWxlbWVudHVtIGxpYmVybyBldSBkdWkgYWNjdW1zYW4sIHNlZCBkYXBpYnVzIGxvcmVtIHZlbmVuYXRpcy5cbiAgTnVuYyBzYWdpdHRpcyBzZW0gcXVpcyBmYWNpbGlzaXMgc2VtcGVyLiBJbnRlZ2VyIHR1cnBpcyBudW5jLFxuICBzb2xsaWNpdHVkaW4gc2l0IGFtZXQgZW5pbSBlZ2V0LCB2aXZlcnJhIHRlbXB1cyBuZXF1ZS4gTnVsbGFtIHNlZCBtYXR0aXNcbiAgdHVycGlzLCBlZ2V0IGJsYW5kaXQgZGlhbS4gTnVsbGEgYmxhbmRpdCBhbGlxdWV0IGVyYXQsIGluIHN1c2NpcGl0IGxvcmVtXG4gIHRpbmNpZHVudCBhdC4gTnVuYyBhYyBwb3N1ZXJlIGxpZ3VsYSwgaW4gdnVscHV0YXRlIHRlbGx1cy4gRXRpYW0gcXVpc1xuICBydXRydW0gdGVsbHVzLmA7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGluZywgaW1hZ2UsIHBhcmFncmFwaCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaG9tZUNvbXBvbmVudCBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgbWVudUNvbXBvbmVudCBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgYWJvdXRDb21wb25lbnQgZnJvbSBcIi4vYWJvdXQuanNcIjtcblxuY29uc3QgbXlNb2R1bGUgPSAoZnVuY3Rpb24gKGRvYykge1xuICBjb25zdCBjb250ZW50ID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhaW5lclwiKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XG4gIH07XG5cbiAgY29uc3QgYWRkQnV0b25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2MuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb21wb25lbnQoKSk7XG4gICAgfSk7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvYy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbXBvbmVudCgpKTtcbiAgICB9KTtcbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvYy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFib3V0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICAgIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDb21wb25lbnQoKSk7XG4gICAgfSk7XG5cbiAgICBjb250ZW50LmFwcGVuZChob21lQnV0dG9uLCBtZW51QnV0dG9uLCBhYm91dEJ1dHRvbik7XG4gIH07XG5cbiAgYWRkQnV0b25zKCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbXBvbmVudCgpKTtcbn0pKGRvY3VtZW50KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==