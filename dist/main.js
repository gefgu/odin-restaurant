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
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");


function aboutComponent() {
  const heading = document.createElement("h1");
  heading.textContent = "About";

  const image = new Image(600, 400);
  image.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;
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
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");


function homeComponent() {
  const heading = document.createElement("h1");
  heading.textContent = "Awesome Restaurant!";

  const image = new Image(600, 400);
  image.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;
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
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");


function menuComponent() {
  const heading = document.createElement("h1");
  heading.textContent = "Menu";

  const image = new Image(600, 400);
  image.src = _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;
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

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d2794dc83c9f6633434.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7O0FBRTNCO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBLGNBQWMsNENBQVU7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEIwQzs7QUFFM0I7QUFDZjtBQUNBOztBQUVBO0FBQ0EsY0FBYyw0Q0FBVTtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjBDOztBQUUzQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLDRDQUFVO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZnNDO0FBQ0E7QUFDRTs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvREFBYTtBQUN2QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsb0RBQWE7QUFDdkMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFEQUFjO0FBQ3hDLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isb0RBQWE7QUFDbkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXN0YXVyYW50IGZyb20gXCIuL3Jlc3RhdXJhbnQuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0Q29tcG9uZW50KCkge1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKDYwMCwgNDAwKTtcbiAgaW1hZ2Uuc3JjID0gUmVzdGF1cmFudDtcbiAgaW1hZ2UuYWx0ID0gXCJSZXN0YXVyYW50IEltYWdlXCI7XG5cbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBWaXZhbXVzIGVsZW1lbnR1bSBsaWJlcm8gZXUgZHVpIGFjY3Vtc2FuLCBzZWQgZGFwaWJ1cyBsb3JlbSB2ZW5lbmF0aXMuXG4gIE51bmMgc2FnaXR0aXMgc2VtIHF1aXMgZmFjaWxpc2lzIHNlbXBlci4gSW50ZWdlciB0dXJwaXMgbnVuYyxcbiAgc29sbGljaXR1ZGluIHNpdCBhbWV0IGVuaW0gZWdldCwgdml2ZXJyYSB0ZW1wdXMgbmVxdWUuIE51bGxhbSBzZWQgbWF0dGlzXG4gIHR1cnBpcywgZWdldCBibGFuZGl0IGRpYW0uIE51bGxhIGJsYW5kaXQgYWxpcXVldCBlcmF0LCBpbiBzdXNjaXBpdCBsb3JlbVxuICB0aW5jaWR1bnQgYXQuIE51bmMgYWMgcG9zdWVyZSBsaWd1bGEsIGluIHZ1bHB1dGF0ZSB0ZWxsdXMuIEV0aWFtIHF1aXNcbiAgcnV0cnVtIHRlbGx1cy5gO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kKGhlYWRpbmcsIGltYWdlLCBwYXJhZ3JhcGgpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG5cbn1cbiIsImltcG9ydCBSZXN0YXVyYW50IGZyb20gXCIuL3Jlc3RhdXJhbnQuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVDb21wb25lbnQoKSB7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkF3ZXNvbWUgUmVzdGF1cmFudCFcIjtcblxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSg2MDAsIDQwMCk7XG4gIGltYWdlLnNyYyA9IFJlc3RhdXJhbnQ7XG4gIGltYWdlLmFsdCA9IFwiUmVzdGF1cmFudCBJbWFnZVwiO1xuXG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgVml2YW11cyBlbGVtZW50dW0gbGliZXJvIGV1IGR1aSBhY2N1bXNhbiwgc2VkIGRhcGlidXMgbG9yZW0gdmVuZW5hdGlzLlxuICBOdW5jIHNhZ2l0dGlzIHNlbSBxdWlzIGZhY2lsaXNpcyBzZW1wZXIuIEludGVnZXIgdHVycGlzIG51bmMsXG4gIHNvbGxpY2l0dWRpbiBzaXQgYW1ldCBlbmltIGVnZXQsIHZpdmVycmEgdGVtcHVzIG5lcXVlLiBOdWxsYW0gc2VkIG1hdHRpc1xuICB0dXJwaXMsIGVnZXQgYmxhbmRpdCBkaWFtLiBOdWxsYSBibGFuZGl0IGFsaXF1ZXQgZXJhdCwgaW4gc3VzY2lwaXQgbG9yZW1cbiAgdGluY2lkdW50IGF0LiBOdW5jIGFjIHBvc3VlcmUgbGlndWxhLCBpbiB2dWxwdXRhdGUgdGVsbHVzLiBFdGlhbSBxdWlzXG4gIHJ1dHJ1bSB0ZWxsdXMuYDtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgY29udGFpbmVyLmFwcGVuZChoZWFkaW5nLCBpbWFnZSwgcGFyYWdyYXBoKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xuXG59XG4iLCJpbXBvcnQgUmVzdGF1cmFudCBmcm9tIFwiLi9yZXN0YXVyYW50LmpwZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51Q29tcG9uZW50KCkge1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoNjAwLCA0MDApO1xuICBpbWFnZS5zcmMgPSBSZXN0YXVyYW50O1xuICBpbWFnZS5hbHQgPSBcIlJlc3RhdXJhbnQgSW1hZ2VcIjtcblxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gYFZpdmFtdXMgZWxlbWVudHVtIGxpYmVybyBldSBkdWkgYWNjdW1zYW4sIHNlZCBkYXBpYnVzIGxvcmVtIHZlbmVuYXRpcy5cbiAgTnVuYyBzYWdpdHRpcyBzZW0gcXVpcyBmYWNpbGlzaXMgc2VtcGVyLiBJbnRlZ2VyIHR1cnBpcyBudW5jLFxuICBzb2xsaWNpdHVkaW4gc2l0IGFtZXQgZW5pbSBlZ2V0LCB2aXZlcnJhIHRlbXB1cyBuZXF1ZS4gTnVsbGFtIHNlZCBtYXR0aXNcbiAgdHVycGlzLCBlZ2V0IGJsYW5kaXQgZGlhbS4gTnVsbGEgYmxhbmRpdCBhbGlxdWV0IGVyYXQsIGluIHN1c2NpcGl0IGxvcmVtXG4gIHRpbmNpZHVudCBhdC4gTnVuYyBhYyBwb3N1ZXJlIGxpZ3VsYSwgaW4gdnVscHV0YXRlIHRlbGx1cy4gRXRpYW0gcXVpc1xuICBydXRydW0gdGVsbHVzLmA7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGluZywgaW1hZ2UsIHBhcmFncmFwaCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGhvbWVDb21wb25lbnQgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IG1lbnVDb21wb25lbnQgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGFib3V0Q29tcG9uZW50IGZyb20gXCIuL2Fib3V0LmpzXCI7XG5cbmNvbnN0IG15TW9kdWxlID0gKGZ1bmN0aW9uIChkb2MpIHtcbiAgY29uc3QgY29udGVudCA9IGRvYy5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb250YWluZXJcIikuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEJ1dG9ucyA9ICgpID0+IHtcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNsZWFyQ29udGVudCgpO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChob21lQ29tcG9uZW50KCkpO1xuICAgIH0pO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2MuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb21wb25lbnQoKSk7XG4gICAgfSk7XG4gICAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2MuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhYm91dEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcbiAgICBhYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0Q29tcG9uZW50KCkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNcIik7XG4gICAgYnV0dG9ucy5hcHBlbmQoaG9tZUJ1dHRvbiwgbWVudUJ1dHRvbiwgYWJvdXRCdXR0b24pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgfTtcblxuICBhZGRCdXRvbnMoKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lQ29tcG9uZW50KCkpO1xufSkoZG9jdW1lbnQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9