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
  paragraph.textContent = `In et lacus vitae mauris placerat pharetra at at arcu. Etiam lacinia magna in dolor porta feugiat. Maecenas ut metus nibh. Morbi bibendum velit nibh, eu venenatis nibh molestie iaculis. Proin vitae risus risus. Duis accumsan sed nisi tempus ullamcorper. Pellentesque non ante eu lorem vehicula fringilla. Sed ut elit sed velit iaculis mollis. Curabitur feugiat risus vel libero dapibus, eu ornare dui finibus. Nullam finibus neque lobortis justo ultrices malesuada vel et nisi. Donec rutrum eget dolor id sagittis. Nulla elit lorem, faucibus vitae viverra non, tristique vitae purus. Aliquam sed metus hendrerit, sagittis nunc non, tincidunt tellus. Ut nisi lorem, sollicitudin nec nisi quis, fermentum porttitor nulla. Etiam blandit pharetra nisl, eu porta orci aliquet elementum. `;

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
  paragraph.textContent = `Morbi pellentesque tortor sed elit ullamcorper lacinia. Aenean placerat at nisl sit amet sodales. Nulla blandit congue est porttitor vulputate. In porta accumsan arcu, a porta sem tincidunt in. Mauris condimentum orci et congue dignissim. Nullam sit amet urna quis nisl finibus commodo. Nunc vitae faucibus ipsum. Ut cursus purus at eros mollis, in consectetur lectus ultrices. In ac diam at nisi sodales dignissim non semper sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam porta leo sit amet nisi pretium, sed eleifend est sagittis. Aenean eget ultricies diam, in ultrices ante. Ut nec bibendum mauris. Etiam velit nisl, gravida a diam et, ultricies commodo erat. Quisque in risus luctus, rutrum velit non, auctor metus. Cras in ultricies tortor. .`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7O0FBRTNCO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBLGNBQWMsNENBQVU7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCMEM7O0FBRTNCO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBLGNBQWMsNENBQVU7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEIwQzs7QUFFM0I7QUFDZjtBQUNBOztBQUVBO0FBQ0EsY0FBYyw0Q0FBVTtBQUN4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmc0M7QUFDQTtBQUNFOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG9EQUFhO0FBQ3ZDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixvREFBYTtBQUN2QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscURBQWM7QUFDeEMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixvREFBYTtBQUNuQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3RhdXJhbnQgZnJvbSBcIi4vcmVzdGF1cmFudC5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRDb21wb25lbnQoKSB7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoNjAwLCA0MDApO1xuICBpbWFnZS5zcmMgPSBSZXN0YXVyYW50O1xuICBpbWFnZS5hbHQgPSBcIlJlc3RhdXJhbnQgSW1hZ2VcIjtcblxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gYEluIGV0IGxhY3VzIHZpdGFlIG1hdXJpcyBwbGFjZXJhdCBwaGFyZXRyYSBhdCBhdCBhcmN1LiBFdGlhbSBsYWNpbmlhIG1hZ25hIGluIGRvbG9yIHBvcnRhIGZldWdpYXQuIE1hZWNlbmFzIHV0IG1ldHVzIG5pYmguIE1vcmJpIGJpYmVuZHVtIHZlbGl0IG5pYmgsIGV1IHZlbmVuYXRpcyBuaWJoIG1vbGVzdGllIGlhY3VsaXMuIFByb2luIHZpdGFlIHJpc3VzIHJpc3VzLiBEdWlzIGFjY3Vtc2FuIHNlZCBuaXNpIHRlbXB1cyB1bGxhbWNvcnBlci4gUGVsbGVudGVzcXVlIG5vbiBhbnRlIGV1IGxvcmVtIHZlaGljdWxhIGZyaW5naWxsYS4gU2VkIHV0IGVsaXQgc2VkIHZlbGl0IGlhY3VsaXMgbW9sbGlzLiBDdXJhYml0dXIgZmV1Z2lhdCByaXN1cyB2ZWwgbGliZXJvIGRhcGlidXMsIGV1IG9ybmFyZSBkdWkgZmluaWJ1cy4gTnVsbGFtIGZpbmlidXMgbmVxdWUgbG9ib3J0aXMganVzdG8gdWx0cmljZXMgbWFsZXN1YWRhIHZlbCBldCBuaXNpLiBEb25lYyBydXRydW0gZWdldCBkb2xvciBpZCBzYWdpdHRpcy4gTnVsbGEgZWxpdCBsb3JlbSwgZmF1Y2lidXMgdml0YWUgdml2ZXJyYSBub24sIHRyaXN0aXF1ZSB2aXRhZSBwdXJ1cy4gQWxpcXVhbSBzZWQgbWV0dXMgaGVuZHJlcml0LCBzYWdpdHRpcyBudW5jIG5vbiwgdGluY2lkdW50IHRlbGx1cy4gVXQgbmlzaSBsb3JlbSwgc29sbGljaXR1ZGluIG5lYyBuaXNpIHF1aXMsIGZlcm1lbnR1bSBwb3J0dGl0b3IgbnVsbGEuIEV0aWFtIGJsYW5kaXQgcGhhcmV0cmEgbmlzbCwgZXUgcG9ydGEgb3JjaSBhbGlxdWV0IGVsZW1lbnR1bS4gYDtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgY29udGFpbmVyLmFwcGVuZChoZWFkaW5nLCBpbWFnZSwgcGFyYWdyYXBoKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiaW1wb3J0IFJlc3RhdXJhbnQgZnJvbSBcIi4vcmVzdGF1cmFudC5qcGdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZUNvbXBvbmVudCgpIHtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQXdlc29tZSBSZXN0YXVyYW50IVwiO1xuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKDYwMCwgNDAwKTtcbiAgaW1hZ2Uuc3JjID0gUmVzdGF1cmFudDtcbiAgaW1hZ2UuYWx0ID0gXCJSZXN0YXVyYW50IEltYWdlXCI7XG5cbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IGBWaXZhbXVzIGVsZW1lbnR1bSBsaWJlcm8gZXUgZHVpIGFjY3Vtc2FuLCBzZWQgZGFwaWJ1cyBsb3JlbSB2ZW5lbmF0aXMuXG4gIE51bmMgc2FnaXR0aXMgc2VtIHF1aXMgZmFjaWxpc2lzIHNlbXBlci4gSW50ZWdlciB0dXJwaXMgbnVuYyxcbiAgc29sbGljaXR1ZGluIHNpdCBhbWV0IGVuaW0gZWdldCwgdml2ZXJyYSB0ZW1wdXMgbmVxdWUuIE51bGxhbSBzZWQgbWF0dGlzXG4gIHR1cnBpcywgZWdldCBibGFuZGl0IGRpYW0uIE51bGxhIGJsYW5kaXQgYWxpcXVldCBlcmF0LCBpbiBzdXNjaXBpdCBsb3JlbVxuICB0aW5jaWR1bnQgYXQuIE51bmMgYWMgcG9zdWVyZSBsaWd1bGEsIGluIHZ1bHB1dGF0ZSB0ZWxsdXMuIEV0aWFtIHF1aXNcbiAgcnV0cnVtIHRlbGx1cy5gO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kKGhlYWRpbmcsIGltYWdlLCBwYXJhZ3JhcGgpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG5cbn1cbiIsImltcG9ydCBSZXN0YXVyYW50IGZyb20gXCIuL3Jlc3RhdXJhbnQuanBnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVDb21wb25lbnQoKSB7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSg2MDAsIDQwMCk7XG4gIGltYWdlLnNyYyA9IFJlc3RhdXJhbnQ7XG4gIGltYWdlLmFsdCA9IFwiUmVzdGF1cmFudCBJbWFnZVwiO1xuXG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBgTW9yYmkgcGVsbGVudGVzcXVlIHRvcnRvciBzZWQgZWxpdCB1bGxhbWNvcnBlciBsYWNpbmlhLiBBZW5lYW4gcGxhY2VyYXQgYXQgbmlzbCBzaXQgYW1ldCBzb2RhbGVzLiBOdWxsYSBibGFuZGl0IGNvbmd1ZSBlc3QgcG9ydHRpdG9yIHZ1bHB1dGF0ZS4gSW4gcG9ydGEgYWNjdW1zYW4gYXJjdSwgYSBwb3J0YSBzZW0gdGluY2lkdW50IGluLiBNYXVyaXMgY29uZGltZW50dW0gb3JjaSBldCBjb25ndWUgZGlnbmlzc2ltLiBOdWxsYW0gc2l0IGFtZXQgdXJuYSBxdWlzIG5pc2wgZmluaWJ1cyBjb21tb2RvLiBOdW5jIHZpdGFlIGZhdWNpYnVzIGlwc3VtLiBVdCBjdXJzdXMgcHVydXMgYXQgZXJvcyBtb2xsaXMsIGluIGNvbnNlY3RldHVyIGxlY3R1cyB1bHRyaWNlcy4gSW4gYWMgZGlhbSBhdCBuaXNpIHNvZGFsZXMgZGlnbmlzc2ltIG5vbiBzZW1wZXIgc2FwaWVuLiBJbnRlcmR1bSBldCBtYWxlc3VhZGEgZmFtZXMgYWMgYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMuIEFsaXF1YW0gcG9ydGEgbGVvIHNpdCBhbWV0IG5pc2kgcHJldGl1bSwgc2VkIGVsZWlmZW5kIGVzdCBzYWdpdHRpcy4gQWVuZWFuIGVnZXQgdWx0cmljaWVzIGRpYW0sIGluIHVsdHJpY2VzIGFudGUuIFV0IG5lYyBiaWJlbmR1bSBtYXVyaXMuIEV0aWFtIHZlbGl0IG5pc2wsIGdyYXZpZGEgYSBkaWFtIGV0LCB1bHRyaWNpZXMgY29tbW9kbyBlcmF0LiBRdWlzcXVlIGluIHJpc3VzIGx1Y3R1cywgcnV0cnVtIHZlbGl0IG5vbiwgYXVjdG9yIG1ldHVzLiBDcmFzIGluIHVsdHJpY2llcyB0b3J0b3IuIC5gO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICBjb250YWluZXIuYXBwZW5kKGhlYWRpbmcsIGltYWdlLCBwYXJhZ3JhcGgpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaG9tZUNvbXBvbmVudCBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgbWVudUNvbXBvbmVudCBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgYWJvdXRDb21wb25lbnQgZnJvbSBcIi4vYWJvdXQuanNcIjtcblxuY29uc3QgbXlNb2R1bGUgPSAoZnVuY3Rpb24gKGRvYykge1xuICBjb25zdCBjb250ZW50ID0gZG9jLnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhaW5lclwiKS5mb3JFYWNoKGUgPT4gZS5yZW1vdmUoKSk7XG4gIH07XG5cbiAgY29uc3QgYWRkQnV0b25zID0gKCkgPT4ge1xuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2MuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2xlYXJDb250ZW50KCk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb21wb25lbnQoKSk7XG4gICAgfSk7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvYy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbXBvbmVudCgpKTtcbiAgICB9KTtcbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvYy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFib3V0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuICAgIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbGVhckNvbnRlbnQoKTtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRDb21wb25lbnQoKSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidXR0b25zID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uc1wiKTtcbiAgICBidXR0b25zLmFwcGVuZChob21lQnV0dG9uLCBtZW51QnV0dG9uLCBhYm91dEJ1dHRvbik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICB9O1xuXG4gIGFkZEJ1dG9ucygpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb21wb25lbnQoKSk7XG59KShkb2N1bWVudCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=