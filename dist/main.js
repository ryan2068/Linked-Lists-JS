/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Node.js":
/*!*********************!*\
  !*** ./src/Node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Node)
/* harmony export */ });
 
class Node {
    constructor (data) {
        this.data = data 
    }
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
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./src/Node.js");


class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    
    insertFirst(data) {
        this.head = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](data, this.head)
    }

    insertLast(data) {
        let current = this.head 
        while (current.next) {
            current = current.next
        }
        current.next = new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](data)
    }

    insertAt(data, index) {
        const node =  new _Node__WEBPACK_IMPORTED_MODULE_0__["default"](data)
        let current = this.head
        let previous
        let count = 0
        while (count < index) {
            previous = current
            count++
            current = current.next
        }
        node.next = current
        previous.next = node
    }

    getAt(index) {
        let current = this.head
        let count = 0
        while (current) {
            if (count === index) {
                console.log(current.data)
            }
            count += 1
            current = current.next
        }
    }

    toString() {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }

}

const ll = new LinkedList()

ll.insertFirst(200)

ll.insertFirst(300)

ll.insertLast(400)

ll.getAt(0)

ll.toString()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDZDQUFJO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkNBQUk7QUFDL0I7O0FBRUE7QUFDQSwwQkFBMEIsNkNBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2VkLWxpc3RzLWpzLy4vc3JjL05vZGUuanMiLCJ3ZWJwYWNrOi8vbGlua2VkLWxpc3RzLWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpbmtlZC1saXN0cy1qcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGlua2VkLWxpc3RzLWpzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlua2VkLWxpc3RzLWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGlua2VkLWxpc3RzLWpzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yIChkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEgXG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCJcblxuY2xhc3MgTGlua2VkTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IG51bGxcbiAgICAgICAgdGhpcy5zaXplID0gMFxuICAgIH1cbiAgICBcbiAgICBpbnNlcnRGaXJzdChkYXRhKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IG5ldyBOb2RlKGRhdGEsIHRoaXMuaGVhZClcbiAgICB9XG5cbiAgICBpbnNlcnRMYXN0KGRhdGEpIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQgXG4gICAgICAgIHdoaWxlIChjdXJyZW50Lm5leHQpIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHRcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50Lm5leHQgPSBuZXcgTm9kZShkYXRhKVxuICAgIH1cblxuICAgIGluc2VydEF0KGRhdGEsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSAgbmV3IE5vZGUoZGF0YSlcbiAgICAgICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWRcbiAgICAgICAgbGV0IHByZXZpb3VzXG4gICAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgICAgd2hpbGUgKGNvdW50IDwgaW5kZXgpIHtcbiAgICAgICAgICAgIHByZXZpb3VzID0gY3VycmVudFxuICAgICAgICAgICAgY291bnQrK1xuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dFxuICAgICAgICB9XG4gICAgICAgIG5vZGUubmV4dCA9IGN1cnJlbnRcbiAgICAgICAgcHJldmlvdXMubmV4dCA9IG5vZGVcbiAgICB9XG5cbiAgICBnZXRBdChpbmRleCkge1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZFxuICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoY291bnQgPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudC5kYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnQgKz0gMVxuICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkXG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50LmRhdGEpXG4gICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuY29uc3QgbGwgPSBuZXcgTGlua2VkTGlzdCgpXG5cbmxsLmluc2VydEZpcnN0KDIwMClcblxubGwuaW5zZXJ0Rmlyc3QoMzAwKVxuXG5sbC5pbnNlcnRMYXN0KDQwMClcblxubGwuZ2V0QXQoMClcblxubGwudG9TdHJpbmcoKVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==