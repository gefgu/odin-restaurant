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

    const buttons = doc.createElement("div");
    buttons.classList.add("buttons");
    buttons.append(homeButton, menuButton, aboutButton);

    content.appendChild(buttons);
  };

  addButons();
  content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
})(document);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUN0QmU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3RCZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDQTtBQUNFOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFhO0FBQ3ZDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvREFBYTtBQUN2QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscURBQWM7QUFDeEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixvREFBYTtBQUNuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dENvbXBvbmVudCgpIHtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcblxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL05fWTg4VFdtR3dBLzYwMHg0MDBcIjtcbiAgaW1hZ2UuYWx0ID0gXCJSZXN0YXVyYW50IEltYWdlXCI7XG5cbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBWaXZhbXVzIGVsZW1lbnR1bSBsaWJlcm8gZXUgZHVpIGFjY3Vtc2FuLCBzZWQgZGFwaWJ1cyBsb3JlbSB2ZW5lbmF0aXMuXG4gIE51bmMgc2FnaXR0aXMgc2VtIHF1aXMgZmFjaWxpc2lzIHNlbXBlci4gSW50ZWdlciB0dXJwaXMgbnVuYyxcbiAgc29sbGljaXR1ZGluIHNpdCBhbWV0IGVuaW0gZWdldCwgdml2ZXJyYSB0ZW1wdXMgbmVxdWUuIE51bGxhbSBzZWQgbWF0dGlzXG4gIHR1cnBpcywgZWdldCBibGFuZGl0IGRpYW0uIE51bGxhIGJsYW5kaXQgYWxpcXVldCBlcmF0LCBpbiBzdXNjaXBpdCBsb3JlbVxuICB0aW5jaWR1bnQgYXQuIE51bmMgYWMgcG9zdWVyZSBsaWd1bGEsIGluIHZ1bHB1dGF0ZSB0ZWxsdXMuIEV0aWFtIHF1aXNcbiAgcnV0cnVtIHRlbGx1cy5gO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kKGhlYWRpbmcsIGltYWdlLCBwYXJhZ3JhcGgpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVDb21wb25lbnQoKSB7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkF3ZXNvbWUgUmVzdGF1cmFudCFcIjtcblxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL05fWTg4VFdtR3dBLzYwMHg0MDBcIjtcbiAgaW1hZ2UuYWx0ID0gXCJSZXN0YXVyYW50IEltYWdlXCI7XG5cbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBWaXZhbXVzIGVsZW1lbnR1bSBsaWJlcm8gZXUgZHVpIGFjY3Vtc2FuLCBzZWQgZGFwaWJ1cyBsb3JlbSB2ZW5lbmF0aXMuXG4gIE51bmMgc2FnaXR0aXMgc2VtIHF1aXMgZmFjaWxpc2lzIHNlbXBlci4gSW50ZWdlciB0dXJwaXMgbnVuYyxcbiAgc29sbGljaXR1ZGluIHNpdCBhbWV0IGVuaW0gZWdldCwgdml2ZXJyYSB0ZW1wdXMgbmVxdWUuIE51bGxhbSBzZWQgbWF0dGlzXG4gIHR1cnBpcywgZWdldCBibGFuZGl0IGRpYW0uIE51bGxhIGJsYW5kaXQgYWxpcXVldCBlcmF0LCBpbiBzdXNjaXBpdCBsb3JlbVxuICB0aW5jaWR1bnQgYXQuIE51bmMgYWMgcG9zdWVyZSBsaWd1bGEsIGluIHZ1bHB1dGF0ZSB0ZWxsdXMuIEV0aWFtIHF1aXNcbiAgcnV0cnVtIHRlbGx1cy5gO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kKGhlYWRpbmcsIGltYWdlLCBwYXJhZ3JhcGgpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVDb21wb25lbnQoKSB7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL05fWTg4VFdtR3dBLzYwMHg0MDBcIjtcbiAgaW1hZ2UuYWx0ID0gXCJSZXN0YXVyYW50IEltYWdlXCI7XG5cbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBWaXZhbXVzIGVsZW1lbnR1bSBsaWJlcm8gZXUgZHVpIGFjY3Vtc2FuLCBzZWQgZGFwaWJ1cyBsb3JlbSB2ZW5lbmF0aXMuXG4gIE51bmMgc2FnaXR0aXMgc2VtIHF1aXMgZmFjaWxpc2lzIHNlbXBlci4gSW50ZWdlciB0dXJwaXMgbnVuYyxcbiAgc29sbGljaXR1ZGluIHNpdCBhbWV0IGVuaW0gZWdldCwgdml2ZXJyYSB0ZW1wdXMgbmVxdWUuIE51bGxhbSBzZWQgbWF0dGlzXG4gIHR1cnBpcywgZWdldCBibGFuZGl0IGRpYW0uIE51bGxhIGJsYW5kaXQgYWxpcXVldCBlcmF0LCBpbiBzdXNjaXBpdCBsb3JlbVxuICB0aW5jaWR1bnQgYXQuIE51bmMgYWMgcG9zdWVyZSBsaWd1bGEsIGluIHZ1bHB1dGF0ZSB0ZWxsdXMuIEV0aWFtIHF1aXNcbiAgcnV0cnVtIHRlbGx1cy5gO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kKGhlYWRpbmcsIGltYWdlLCBwYXJhZ3JhcGgpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG5cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhvbWVDb21wb25lbnQgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IG1lbnVDb21wb25lbnQgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGFib3V0Q29tcG9uZW50IGZyb20gXCIuL2Fib3V0LmpzXCI7XG5cbmNvbnN0IG15TW9kdWxlID0gKGZ1bmN0aW9uIChkb2MpIHtcbiAgY29uc3QgY29udGVudCA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250YWluZXJcIikuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEJ1dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChob21lQ29tcG9uZW50KCkpO1xuICAgIH0pO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2MuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb21wb25lbnQoKSk7XG4gICAgfSk7XG4gICAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2MuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhYm91dEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgICBhYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0Q29tcG9uZW50KCkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNcIik7XG4gICAgYnV0dG9ucy5hcHBlbmQoaG9tZUJ1dHRvbiwgbWVudUJ1dHRvbiwgYWJvdXRCdXR0b24pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgfTtcblxuICBhZGRCdXRvbnMoKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lQ29tcG9uZW50KCkpO1xufSkoZG9jdW1lbnQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9