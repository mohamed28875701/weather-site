/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ info)
/* harmony export */ });

class info{
    static async getweather(city){
        
        const fetchResponse=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f9c121c0d80f56fd2c9005d71e216fa8`);
        const weather=await fetchResponse.json();
        if(weather.cod==="404"){
            return 404;
        }
        return weather;
        
        
        
    }
    static async getTmp(city){
        const ret=await info.getweather(city);
        return ret.main.temp;
    }
    static async getFeelsLike(city){
        const ret = await info.getweather(city);
        return ret.main.feels_like;
    }
    static async getName(city){
        const ret = await info.getweather(city);
        return {name: ret.name,country: ret.sys.country};
    }
    static async getWind(city){
        const ret = await info.getweather(city);
        return ret.wind.speed;
    }
    static async getMainWeather(city){
        const ret = await info.getweather(city);
        return ret.weather[0].main;
    }
}

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inter)
/* harmony export */ });
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info */ "./src/info.js");

class inter{
    //compose the elements of the websites
    static main(){
        const content=document.getElementById("content");
        content.appendChild(inter.header());
        content.appendChild(inter.input());
        const wrapper=document.createElement("div");
        wrapper.id="main";
        wrapper.appendChild(inter.cityName())
        wrapper.appendChild(inter.cityMain())
        wrapper.appendChild(inter.cityTmp())
        wrapper.appendChild(inter.cityFeelsLike())
        wrapper.appendChild(inter.cityWind());
        content.appendChild(wrapper);
        }
    //creation of the elements
    static header(){
        const wrapper = document.createElement("div");
        wrapper.id="header";
        const head=document.createElement("h1");
        head.id="name";
        head.textContent="Weather"
        const button =document.createElement("button");
        button.id="switch";
        button.textContent="C";
        wrapper.appendChild(head)
        wrapper.appendChild(button);
        return wrapper;
    }
    static input(){
        const wrapper=document.createElement("div");
        wrapper.id="input";
        const form=document.createElement("form");
        const search=document.createElement("input");
        const button=document.createElement("button");
        search.type="text";
        search.maxLength="30";
        search.placeholder="City name i.e Paris";
        search.id="seach";
        button.type="submit";
        button.id="submit";
        button.innerHTML='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="#000000"><defs><style>.cls-6374f8d9b67f094e4896c660-1{fill:none;stroke:aliceblue;stroke-miterlimit:10;}</style></defs><circle class="cls-6374f8d9b67f094e4896c660-1" cx="9.14" cy="9.14" r="7.64"></circle><line class="cls-6374f8d9b67f094e4896c660-1" x1="22.5" y1="22.5" x2="14.39" y2="14.39"></line></svg>'
        form.appendChild(search)
        form.appendChild(button);
        wrapper.appendChild(form);
        button.addEventListener("click",inter.submitCity);
        return wrapper;
    }
    static cityName(){
        const wrapper=document.createElement("div");
        wrapper.id="city-name";
        wrapper.classList.add("name");
        const name=document.createElement("div");
        const responseName= _info__WEBPACK_IMPORTED_MODULE_0__["default"].getName("paris").then((inf)=>{
            name.textContent=`${inf.name},${inf.country}`;    
        });
        
        wrapper.appendChild(name);
        return wrapper;
    }
    static  cityTmp(){
        const card=document.createElement("div");
        card.id="city-temp";
        card.classList.add("card");
        const wrapper=document.createElement("div");
        wrapper.id="info-wrapper";
        const referTo=document.createElement("p");
        referTo.textContent="temp";
        const temperture=document.createElement("p");
        temperture.id="temp";
        _info__WEBPACK_IMPORTED_MODULE_0__["default"].getTmp("paris").then((inf)=>{
            
            if(document.getElementById("switch").textContent==="C"){
                temperture.textContent=`${Math.round(inf-273.15)} C`;
            }
            else{
                temperture.textContent=`${Math.round((inf-273.15)*(9/5)+32)} F`;
            }
        });
        card.innerHTML='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="aliceblue"><defs><style>.cls-637b8b31f95e86b59c57a270-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}</style></defs><circle class="cls-637b8b31f95e86b59c57a270-1" cx="16.3" cy="3.89" r="0.48"></circle><circle class="cls-637b8b31f95e86b59c57a270-1" cx="6.27" cy="17.73" r="0.95"></circle><path class="cls-637b8b31f95e86b59c57a270-1" d="M10.09,14.89V5.32a3.82,3.82,0,0,0-7.64,0v9.57a4.77,4.77,0,1,0,8.6,2.84A4.74,4.74,0,0,0,10.09,14.89Z"></path><line class="cls-637b8b31f95e86b59c57a270-1" x1="6.27" y1="10.09" x2="6.27" y2="16.77"></line><line class="cls-637b8b31f95e86b59c57a270-1" x1="10.09" y1="6.27" x2="12.95" y2="6.27"></line><line class="cls-637b8b31f95e86b59c57a270-1" x1="10.09" y1="10.09" x2="12.95" y2="10.09"></line><line class="cls-637b8b31f95e86b59c57a270-1" x1="10.09" y1="13.91" x2="12.95" y2="13.91"></line><path class="cls-637b8b31f95e86b59c57a270-1" d="M22.5,10.09A1.9,1.9,0,0,1,20.59,12h0a1.91,1.91,0,0,1-1.91-1.91V7.23a1.91,1.91,0,0,1,1.91-1.91h0A1.9,1.9,0,0,1,22.5,7.23"></path></svg>'
        
        wrapper.appendChild(referTo);
        wrapper.appendChild(temperture);
        card.appendChild(wrapper);
        return card;
    }
    static cityFeelsLike(){
        const card=document.createElement("div");
        card.id="city-feelslike";
        card.classList.add("card");
        const wrapper=document.createElement("div");
        wrapper.id="f-wrapper";
        const referTo=document.createElement("p");
        referTo.textContent="feels like";
        const feelsLike=document.createElement("p");
        feelsLike.id="feels-like";
        _info__WEBPACK_IMPORTED_MODULE_0__["default"].getFeelsLike("paris").then((f)=>{
            
            if(document.getElementById("switch").textContent==="C"){
                feelsLike.textContent=`${Math.round(f-273.15)} C`;
            }
            else{
                feelsLike.textContent=`${Math.round((f-273.15)*(9/5)+32)} F`;
            }
        });
        card.innerHTML='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="aliceblue"><defs><style>.cls-637b8b31f95e86b59c57a270-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}</style></defs><circle class="cls-637b8b31f95e86b59c57a270-1" cx="16.3" cy="3.89" r="0.48"></circle><circle class="cls-637b8b31f95e86b59c57a270-1" cx="6.27" cy="17.73" r="0.95"></circle><path class="cls-637b8b31f95e86b59c57a270-1" d="M10.09,14.89V5.32a3.82,3.82,0,0,0-7.64,0v9.57a4.77,4.77,0,1,0,8.6,2.84A4.74,4.74,0,0,0,10.09,14.89Z"></path><line class="cls-637b8b31f95e86b59c57a270-1" x1="6.27" y1="10.09" x2="6.27" y2="16.77"></line><line class="cls-637b8b31f95e86b59c57a270-1" x1="10.09" y1="6.27" x2="12.95" y2="6.27"></line><line class="cls-637b8b31f95e86b59c57a270-1" x1="10.09" y1="10.09" x2="12.95" y2="10.09"></line><line class="cls-637b8b31f95e86b59c57a270-1" x1="10.09" y1="13.91" x2="12.95" y2="13.91"></line><path class="cls-637b8b31f95e86b59c57a270-1" d="M22.5,10.09A1.9,1.9,0,0,1,20.59,12h0a1.91,1.91,0,0,1-1.91-1.91V7.23a1.91,1.91,0,0,1,1.91-1.91h0A1.9,1.9,0,0,1,22.5,7.23"></path></svg>'
        
        wrapper.appendChild(referTo);
        wrapper.appendChild(feelsLike);
        card.appendChild(wrapper);
        return card;
    }
    static cityWind(){
        const card=document.createElement("div");
        card.id="city-feelslike";
        card.classList.add("card");
        const wrapper=document.createElement("div");
        wrapper.id="f-wrapper";
        const referTo=document.createElement("p");
        referTo.textContent="wind";
        const wind=document.createElement("p");
        wind.id="wind";
        _info__WEBPACK_IMPORTED_MODULE_0__["default"].getWind("paris").then((f)=>{
            
            if(document.getElementById("switch").textContent==="C"){
                wind.textContent=`${Math.round(f*1.6)} km/h`;
            }
            else{
                wind.textContent=`${Math.round(f)} mph`;
            }
        });
        card.innerHTML='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" width="24" height="24" color="aliceblue"><defs><style>.cls-637b8b31f95e86b59c57a275-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}</style></defs><path class="cls-637b8b31f95e86b59c57a275-1" d="M4.33,8.17H19.67a2.88,2.88,0,1,0-2.88-2.88"></path><line class="cls-637b8b31f95e86b59c57a275-1" x1="0.5" y1="8.17" x2="2.42" y2="8.17"></line><path class="cls-637b8b31f95e86b59c57a275-1" d="M19.67,12H4.33a2.88,2.88,0,1,0,2.88,2.88"></path><line class="cls-637b8b31f95e86b59c57a275-1" x1="23.5" y1="12" x2="21.58" y2="12"></line><path class="cls-637b8b31f95e86b59c57a275-1" d="M13.92,15.83h5.75a2.88,2.88,0,1,1-2.88,2.88"></path><line class="cls-637b8b31f95e86b59c57a275-1" x1="10.08" y1="15.83" x2="12" y2="15.83"></line><line class="cls-637b8b31f95e86b59c57a275-1" x1="0.5" y1="4.33" x2="8.17" y2="4.33"></line><line class="cls-637b8b31f95e86b59c57a275-1" x1="10.08" y1="4.33" x2="13.92" y2="4.33"></line><line class="cls-637b8b31f95e86b59c57a275-1" x1="13.92" y1="19.67" x2="8.17" y2="19.67"></line></svg>'
        wrapper.appendChild(referTo);
        wrapper.appendChild(wind);
        card.appendChild(wrapper);
        return card;
    }
    static cityMain(){
        const wrapper = document.createElement("div");
        wrapper.id="city-main";
        wrapper.classList.add("name");
        const p =document.createElement("p");
        p.id="overall";
        _info__WEBPACK_IMPORTED_MODULE_0__["default"].getMainWeather("paris").then((inf)=>{
            p.textContent=`Overall: ${inf}`;
        })
        wrapper.appendChild(p);
        return wrapper;
    }
    //update UI
    static updateTemp(city){
        _info__WEBPACK_IMPORTED_MODULE_0__["default"].getTmp(city).then((inf)=>{
            
            
            if(document.getElementById("switch").textContent==="C"){
                document.getElementById("temp").textContent=`${Math.round(inf-273.15)} C`;
            }
            else{
                document.getElementById("temp").textContent=`${Math.round((inf-273.15)*(9/5)+32)} F`;
            }
        });        
    }
    static updateFeelsLike(city){
        _info__WEBPACK_IMPORTED_MODULE_0__["default"].getFeelsLike(city).then((f)=>{
            
            if(document.getElementById("switch").textContent==="C"){
                document.getElementById("feels-like").textContent=`${Math.round(f-273.15)} C`;
            }
            else{
                document.getElementById("feels-like").textContent=`${Math.round((f-273.15)*(9/5)+32)} F`;
            }
        });
    }
    static updateWind(city){
        _info__WEBPACK_IMPORTED_MODULE_0__["default"].getWind(city).then((f)=>{
            
            if(document.getElementById("switch").textContent==="C"){
                document.getElementById("wind").textContent=`${Math.round(f*1.6)} km/h`;
            }
            else{
                document.getElementById("wind").textContent=`${Math.round(f)} mph`;
            }
        });       
    }
    static updateName(city){
        _info__WEBPACK_IMPORTED_MODULE_0__["default"].getName(city).then((inf)=>{
            document.getElementById("city-name").textContent=`${inf.name},${inf.country}`;    
        });       
    }
    static updateCityMain(city){
        _info__WEBPACK_IMPORTED_MODULE_0__["default"].getMainWeather(city).then((inf)=>{
            document.getElementById("overall").textContent=`Overall: ${inf}`;
        })
    }
    //events
    static async submitCity(e){
        e.preventDefault();
        const city=document.getElementById("seach");
        const response = await _info__WEBPACK_IMPORTED_MODULE_0__["default"].getweather(city.value);
        
        if(response===404){
            console.log("fuck");
            return;
        }
            
        inter.updateTemp(city.value)
        inter.updateName(city.value);
        inter.updateFeelsLike(city.value);
        inter.updateWind(city.value);
        inter.updateCityMain(city.value);
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
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ "./src/interface.js");


_interface__WEBPACK_IMPORTED_MODULE_0__["default"].main();


    
    


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0JBQStCLHdEQUFlO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNwTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05nQztBQUNoQztBQUNBLHVEQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItc2l0ZS8uL3NyYy9pbmZvLmpzIiwid2VicGFjazovL3dlYXRoZXItc2l0ZS8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1zaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItc2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1zaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1zaXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1zaXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbmZve1xyXG4gICAgc3RhdGljIGFzeW5jIGdldHdlYXRoZXIoY2l0eSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZmV0Y2hSZXNwb25zZT1hd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JkFQUElEPWY5YzEyMWMwZDgwZjU2ZmQyYzkwMDVkNzFlMjE2ZmE4YCk7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlcj1hd2FpdCBmZXRjaFJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZih3ZWF0aGVyLmNvZD09PVwiNDA0XCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gNDA0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2VhdGhlcjtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBnZXRUbXAoY2l0eSl7XHJcbiAgICAgICAgY29uc3QgcmV0PWF3YWl0IGluZm8uZ2V0d2VhdGhlcihjaXR5KTtcclxuICAgICAgICByZXR1cm4gcmV0Lm1haW4udGVtcDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBnZXRGZWVsc0xpa2UoY2l0eSl7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgaW5mby5nZXR3ZWF0aGVyKGNpdHkpO1xyXG4gICAgICAgIHJldHVybiByZXQubWFpbi5mZWVsc19saWtlO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFzeW5jIGdldE5hbWUoY2l0eSl7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgaW5mby5nZXR3ZWF0aGVyKGNpdHkpO1xyXG4gICAgICAgIHJldHVybiB7bmFtZTogcmV0Lm5hbWUsY291bnRyeTogcmV0LnN5cy5jb3VudHJ5fTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBnZXRXaW5kKGNpdHkpe1xyXG4gICAgICAgIGNvbnN0IHJldCA9IGF3YWl0IGluZm8uZ2V0d2VhdGhlcihjaXR5KTtcclxuICAgICAgICByZXR1cm4gcmV0LndpbmQuc3BlZWQ7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0TWFpbldlYXRoZXIoY2l0eSl7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgaW5mby5nZXR3ZWF0aGVyKGNpdHkpO1xyXG4gICAgICAgIHJldHVybiByZXQud2VhdGhlclswXS5tYWluO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGluZm8gZnJvbSBcIi4vaW5mb1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbnRlcntcclxuICAgIC8vY29tcG9zZSB0aGUgZWxlbWVudHMgb2YgdGhlIHdlYnNpdGVzXHJcbiAgICBzdGF0aWMgbWFpbigpe1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW50ZXIuaGVhZGVyKCkpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW50ZXIuaW5wdXQoKSk7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHdyYXBwZXIuaWQ9XCJtYWluXCI7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpbnRlci5jaXR5TmFtZSgpKVxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW50ZXIuY2l0eU1haW4oKSlcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGludGVyLmNpdHlUbXAoKSlcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGludGVyLmNpdHlGZWVsc0xpa2UoKSlcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGludGVyLmNpdHlXaW5kKCkpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICAgICAgfVxyXG4gICAgLy9jcmVhdGlvbiBvZiB0aGUgZWxlbWVudHNcclxuICAgIHN0YXRpYyBoZWFkZXIoKXtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB3cmFwcGVyLmlkPVwiaGVhZGVyXCI7XHJcbiAgICAgICAgY29uc3QgaGVhZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICAgICAgaGVhZC5pZD1cIm5hbWVcIjtcclxuICAgICAgICBoZWFkLnRleHRDb250ZW50PVwiV2VhdGhlclwiXHJcbiAgICAgICAgY29uc3QgYnV0dG9uID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5pZD1cInN3aXRjaFwiO1xyXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudD1cIkNcIjtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWQpXHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGlucHV0KCl7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHdyYXBwZXIuaWQ9XCJpbnB1dFwiO1xyXG4gICAgICAgIGNvbnN0IGZvcm09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBjb25zdCBidXR0b249ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBzZWFyY2gudHlwZT1cInRleHRcIjtcclxuICAgICAgICBzZWFyY2gubWF4TGVuZ3RoPVwiMzBcIjtcclxuICAgICAgICBzZWFyY2gucGxhY2Vob2xkZXI9XCJDaXR5IG5hbWUgaS5lIFBhcmlzXCI7XHJcbiAgICAgICAgc2VhcmNoLmlkPVwic2VhY2hcIjtcclxuICAgICAgICBidXR0b24udHlwZT1cInN1Ym1pdFwiO1xyXG4gICAgICAgIGJ1dHRvbi5pZD1cInN1Ym1pdFwiO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUw9JzxzdmcgaWQ9XCJMYXllcl8xXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgY29sb3I9XCIjMDAwMDAwXCI+PGRlZnM+PHN0eWxlPi5jbHMtNjM3NGY4ZDliNjdmMDk0ZTQ4OTZjNjYwLTF7ZmlsbDpub25lO3N0cm9rZTphbGljZWJsdWU7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PC9kZWZzPjxjaXJjbGUgY2xhc3M9XCJjbHMtNjM3NGY4ZDliNjdmMDk0ZTQ4OTZjNjYwLTFcIiBjeD1cIjkuMTRcIiBjeT1cIjkuMTRcIiByPVwiNy42NFwiPjwvY2lyY2xlPjxsaW5lIGNsYXNzPVwiY2xzLTYzNzRmOGQ5YjY3ZjA5NGU0ODk2YzY2MC0xXCIgeDE9XCIyMi41XCIgeTE9XCIyMi41XCIgeDI9XCIxNC4zOVwiIHkyPVwiMTQuMzlcIj48L2xpbmU+PC9zdmc+J1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoKVxyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixpbnRlci5zdWJtaXRDaXR5KTtcclxuICAgICAgICByZXR1cm4gd3JhcHBlcjtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjaXR5TmFtZSgpe1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB3cmFwcGVyLmlkPVwiY2l0eS1uYW1lXCI7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgICAgICBjb25zdCBuYW1lPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VOYW1lPSBpbmZvLmdldE5hbWUoXCJwYXJpc1wiKS50aGVuKChpbmYpPT57XHJcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQ9YCR7aW5mLm5hbWV9LCR7aW5mLmNvdW50cnl9YDsgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChuYW1lKTtcclxuICAgICAgICByZXR1cm4gd3JhcHBlcjtcclxuICAgIH1cclxuICAgIHN0YXRpYyAgY2l0eVRtcCgpe1xyXG4gICAgICAgIGNvbnN0IGNhcmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkLmlkPVwiY2l0eS10ZW1wXCI7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuICAgICAgICBjb25zdCB3cmFwcGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgd3JhcHBlci5pZD1cImluZm8td3JhcHBlclwiO1xyXG4gICAgICAgIGNvbnN0IHJlZmVyVG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcmVmZXJUby50ZXh0Q29udGVudD1cInRlbXBcIjtcclxuICAgICAgICBjb25zdCB0ZW1wZXJ0dXJlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHRlbXBlcnR1cmUuaWQ9XCJ0ZW1wXCI7XHJcbiAgICAgICAgaW5mby5nZXRUbXAoXCJwYXJpc1wiKS50aGVuKChpbmYpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaFwiKS50ZXh0Q29udGVudD09PVwiQ1wiKXtcclxuICAgICAgICAgICAgICAgIHRlbXBlcnR1cmUudGV4dENvbnRlbnQ9YCR7TWF0aC5yb3VuZChpbmYtMjczLjE1KX0gQ2A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRlbXBlcnR1cmUudGV4dENvbnRlbnQ9YCR7TWF0aC5yb3VuZCgoaW5mLTI3My4xNSkqKDkvNSkrMzIpfSBGYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNhcmQuaW5uZXJIVE1MPSc8c3ZnIGlkPVwiTGF5ZXJfMVwiIGRhdGEtbmFtZT1cIkxheWVyIDFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIGNvbG9yPVwiYWxpY2VibHVlXCI+PGRlZnM+PHN0eWxlPi5jbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjcwLTF7ZmlsbDpub25lO3N0cm9rZTpjdXJyZW50Q29sb3I7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fTwvc3R5bGU+PC9kZWZzPjxjaXJjbGUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjcwLTFcIiBjeD1cIjE2LjNcIiBjeT1cIjMuODlcIiByPVwiMC40OFwiPjwvY2lyY2xlPjxjaXJjbGUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjcwLTFcIiBjeD1cIjYuMjdcIiBjeT1cIjE3LjczXCIgcj1cIjAuOTVcIj48L2NpcmNsZT48cGF0aCBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzAtMVwiIGQ9XCJNMTAuMDksMTQuODlWNS4zMmEzLjgyLDMuODIsMCwwLDAtNy42NCwwdjkuNTdhNC43Nyw0Ljc3LDAsMSwwLDguNiwyLjg0QTQuNzQsNC43NCwwLDAsMCwxMC4wOSwxNC44OVpcIj48L3BhdGg+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjcwLTFcIiB4MT1cIjYuMjdcIiB5MT1cIjEwLjA5XCIgeDI9XCI2LjI3XCIgeTI9XCIxNi43N1wiPjwvbGluZT48bGluZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzAtMVwiIHgxPVwiMTAuMDlcIiB5MT1cIjYuMjdcIiB4Mj1cIjEyLjk1XCIgeTI9XCI2LjI3XCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3MC0xXCIgeDE9XCIxMC4wOVwiIHkxPVwiMTAuMDlcIiB4Mj1cIjEyLjk1XCIgeTI9XCIxMC4wOVwiPjwvbGluZT48bGluZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzAtMVwiIHgxPVwiMTAuMDlcIiB5MT1cIjEzLjkxXCIgeDI9XCIxMi45NVwiIHkyPVwiMTMuOTFcIj48L2xpbmU+PHBhdGggY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjcwLTFcIiBkPVwiTTIyLjUsMTAuMDlBMS45LDEuOSwwLDAsMSwyMC41OSwxMmgwYTEuOTEsMS45MSwwLDAsMS0xLjkxLTEuOTFWNy4yM2ExLjkxLDEuOTEsMCwwLDEsMS45MS0xLjkxaDBBMS45LDEuOSwwLDAsMSwyMi41LDcuMjNcIj48L3BhdGg+PC9zdmc+J1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocmVmZXJUbyk7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0ZW1wZXJ0dXJlKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgICAgIHJldHVybiBjYXJkO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNpdHlGZWVsc0xpa2UoKXtcclxuICAgICAgICBjb25zdCBjYXJkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2FyZC5pZD1cImNpdHktZmVlbHNsaWtlXCI7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuICAgICAgICBjb25zdCB3cmFwcGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgd3JhcHBlci5pZD1cImYtd3JhcHBlclwiO1xyXG4gICAgICAgIGNvbnN0IHJlZmVyVG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcmVmZXJUby50ZXh0Q29udGVudD1cImZlZWxzIGxpa2VcIjtcclxuICAgICAgICBjb25zdCBmZWVsc0xpa2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgZmVlbHNMaWtlLmlkPVwiZmVlbHMtbGlrZVwiO1xyXG4gICAgICAgIGluZm8uZ2V0RmVlbHNMaWtlKFwicGFyaXNcIikudGhlbigoZik9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoXCIpLnRleHRDb250ZW50PT09XCJDXCIpe1xyXG4gICAgICAgICAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50PWAke01hdGgucm91bmQoZi0yNzMuMTUpfSBDYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50PWAke01hdGgucm91bmQoKGYtMjczLjE1KSooOS81KSszMil9IEZgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2FyZC5pbm5lckhUTUw9JzxzdmcgaWQ9XCJMYXllcl8xXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgY29sb3I9XCJhbGljZWJsdWVcIj48ZGVmcz48c3R5bGU+LmNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzAtMXtmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48L2RlZnM+PGNpcmNsZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzAtMVwiIGN4PVwiMTYuM1wiIGN5PVwiMy44OVwiIHI9XCIwLjQ4XCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzAtMVwiIGN4PVwiNi4yN1wiIGN5PVwiMTcuNzNcIiByPVwiMC45NVwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3MC0xXCIgZD1cIk0xMC4wOSwxNC44OVY1LjMyYTMuODIsMy44MiwwLDAsMC03LjY0LDB2OS41N2E0Ljc3LDQuNzcsMCwxLDAsOC42LDIuODRBNC43NCw0Ljc0LDAsMCwwLDEwLjA5LDE0Ljg5WlwiPjwvcGF0aD48bGluZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzAtMVwiIHgxPVwiNi4yN1wiIHkxPVwiMTAuMDlcIiB4Mj1cIjYuMjdcIiB5Mj1cIjE2Ljc3XCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3MC0xXCIgeDE9XCIxMC4wOVwiIHkxPVwiNi4yN1wiIHgyPVwiMTIuOTVcIiB5Mj1cIjYuMjdcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjcwLTFcIiB4MT1cIjEwLjA5XCIgeTE9XCIxMC4wOVwiIHgyPVwiMTIuOTVcIiB5Mj1cIjEwLjA5XCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3MC0xXCIgeDE9XCIxMC4wOVwiIHkxPVwiMTMuOTFcIiB4Mj1cIjEyLjk1XCIgeTI9XCIxMy45MVwiPjwvbGluZT48cGF0aCBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzAtMVwiIGQ9XCJNMjIuNSwxMC4wOUExLjksMS45LDAsMCwxLDIwLjU5LDEyaDBhMS45MSwxLjkxLDAsMCwxLTEuOTEtMS45MVY3LjIzYTEuOTEsMS45MSwwLDAsMSwxLjkxLTEuOTFoMEExLjksMS45LDAsMCwxLDIyLjUsNy4yM1wiPjwvcGF0aD48L3N2Zz4nXHJcbiAgICAgICAgXHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChyZWZlclRvKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGZlZWxzTGlrZSk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcclxuICAgICAgICByZXR1cm4gY2FyZDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjaXR5V2luZCgpe1xyXG4gICAgICAgIGNvbnN0IGNhcmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkLmlkPVwiY2l0eS1mZWVsc2xpa2VcIjtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB3cmFwcGVyLmlkPVwiZi13cmFwcGVyXCI7XHJcbiAgICAgICAgY29uc3QgcmVmZXJUbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICByZWZlclRvLnRleHRDb250ZW50PVwid2luZFwiO1xyXG4gICAgICAgIGNvbnN0IHdpbmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgd2luZC5pZD1cIndpbmRcIjtcclxuICAgICAgICBpbmZvLmdldFdpbmQoXCJwYXJpc1wiKS50aGVuKChmKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hcIikudGV4dENvbnRlbnQ9PT1cIkNcIil7XHJcbiAgICAgICAgICAgICAgICB3aW5kLnRleHRDb250ZW50PWAke01hdGgucm91bmQoZioxLjYpfSBrbS9oYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgd2luZC50ZXh0Q29udGVudD1gJHtNYXRoLnJvdW5kKGYpfSBtcGhgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2FyZC5pbm5lckhUTUw9JzxzdmcgaWQ9XCJMYXllcl8xXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgY29sb3I9XCJhbGljZWJsdWVcIj48ZGVmcz48c3R5bGU+LmNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzUtMXtmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjc1LTFcIiBkPVwiTTQuMzMsOC4xN0gxOS42N2EyLjg4LDIuODgsMCwxLDAtMi44OC0yLjg4XCI+PC9wYXRoPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3NS0xXCIgeDE9XCIwLjVcIiB5MT1cIjguMTdcIiB4Mj1cIjIuNDJcIiB5Mj1cIjguMTdcIj48L2xpbmU+PHBhdGggY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjc1LTFcIiBkPVwiTTE5LjY3LDEySDQuMzNhMi44OCwyLjg4LDAsMSwwLDIuODgsMi44OFwiPjwvcGF0aD48bGluZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzUtMVwiIHgxPVwiMjMuNVwiIHkxPVwiMTJcIiB4Mj1cIjIxLjU4XCIgeTI9XCIxMlwiPjwvbGluZT48cGF0aCBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzUtMVwiIGQ9XCJNMTMuOTIsMTUuODNoNS43NWEyLjg4LDIuODgsMCwxLDEtMi44OCwyLjg4XCI+PC9wYXRoPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3NS0xXCIgeDE9XCIxMC4wOFwiIHkxPVwiMTUuODNcIiB4Mj1cIjEyXCIgeTI9XCIxNS44M1wiPjwvbGluZT48bGluZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzUtMVwiIHgxPVwiMC41XCIgeTE9XCI0LjMzXCIgeDI9XCI4LjE3XCIgeTI9XCI0LjMzXCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3NS0xXCIgeDE9XCIxMC4wOFwiIHkxPVwiNC4zM1wiIHgyPVwiMTMuOTJcIiB5Mj1cIjQuMzNcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjc1LTFcIiB4MT1cIjEzLjkyXCIgeTE9XCIxOS42N1wiIHgyPVwiOC4xN1wiIHkyPVwiMTkuNjdcIj48L2xpbmU+PC9zdmc+J1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQocmVmZXJUbyk7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh3aW5kKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgICAgIHJldHVybiBjYXJkO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNpdHlNYWluKCl7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgd3JhcHBlci5pZD1cImNpdHktbWFpblwiO1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XHJcbiAgICAgICAgY29uc3QgcCA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcC5pZD1cIm92ZXJhbGxcIjtcclxuICAgICAgICBpbmZvLmdldE1haW5XZWF0aGVyKFwicGFyaXNcIikudGhlbigoaW5mKT0+e1xyXG4gICAgICAgICAgICBwLnRleHRDb250ZW50PWBPdmVyYWxsOiAke2luZn1gO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgICByZXR1cm4gd3JhcHBlcjtcclxuICAgIH1cclxuICAgIC8vdXBkYXRlIFVJXHJcbiAgICBzdGF0aWMgdXBkYXRlVGVtcChjaXR5KXtcclxuICAgICAgICBpbmZvLmdldFRtcChjaXR5KS50aGVuKChpbmYpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hcIikudGV4dENvbnRlbnQ9PT1cIkNcIil7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBcIikudGV4dENvbnRlbnQ9YCR7TWF0aC5yb3VuZChpbmYtMjczLjE1KX0gQ2A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKS50ZXh0Q29udGVudD1gJHtNYXRoLnJvdW5kKChpbmYtMjczLjE1KSooOS81KSszMil9IEZgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgIH1cclxuICAgIHN0YXRpYyB1cGRhdGVGZWVsc0xpa2UoY2l0eSl7XHJcbiAgICAgICAgaW5mby5nZXRGZWVsc0xpa2UoY2l0eSkudGhlbigoZik9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoXCIpLnRleHRDb250ZW50PT09XCJDXCIpe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVscy1saWtlXCIpLnRleHRDb250ZW50PWAke01hdGgucm91bmQoZi0yNzMuMTUpfSBDYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVscy1saWtlXCIpLnRleHRDb250ZW50PWAke01hdGgucm91bmQoKGYtMjczLjE1KSooOS81KSszMil9IEZgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdXBkYXRlV2luZChjaXR5KXtcclxuICAgICAgICBpbmZvLmdldFdpbmQoY2l0eSkudGhlbigoZik9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoXCIpLnRleHRDb250ZW50PT09XCJDXCIpe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kXCIpLnRleHRDb250ZW50PWAke01hdGgucm91bmQoZioxLjYpfSBrbS9oYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kXCIpLnRleHRDb250ZW50PWAke01hdGgucm91bmQoZil9IG1waGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgICAgICAgXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdXBkYXRlTmFtZShjaXR5KXtcclxuICAgICAgICBpbmZvLmdldE5hbWUoY2l0eSkudGhlbigoaW5mKT0+e1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHktbmFtZVwiKS50ZXh0Q29udGVudD1gJHtpbmYubmFtZX0sJHtpbmYuY291bnRyeX1gOyAgICBcclxuICAgICAgICB9KTsgICAgICAgXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdXBkYXRlQ2l0eU1haW4oY2l0eSl7XHJcbiAgICAgICAgaW5mby5nZXRNYWluV2VhdGhlcihjaXR5KS50aGVuKChpbmYpPT57XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmFsbFwiKS50ZXh0Q29udGVudD1gT3ZlcmFsbDogJHtpbmZ9YDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy9ldmVudHNcclxuICAgIHN0YXRpYyBhc3luYyBzdWJtaXRDaXR5KGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBjaXR5PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhY2hcIik7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBpbmZvLmdldHdlYXRoZXIoY2l0eS52YWx1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocmVzcG9uc2U9PT00MDQpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZ1Y2tcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGludGVyLnVwZGF0ZVRlbXAoY2l0eS52YWx1ZSlcclxuICAgICAgICBpbnRlci51cGRhdGVOYW1lKGNpdHkudmFsdWUpO1xyXG4gICAgICAgIGludGVyLnVwZGF0ZUZlZWxzTGlrZShjaXR5LnZhbHVlKTtcclxuICAgICAgICBpbnRlci51cGRhdGVXaW5kKGNpdHkudmFsdWUpO1xyXG4gICAgICAgIGludGVyLnVwZGF0ZUNpdHlNYWluKGNpdHkudmFsdWUpO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW50ZXIgZnJvbSBcIi4vaW50ZXJmYWNlXCI7XHJcblxyXG5pbnRlci5tYWluKCk7XHJcblxyXG5cclxuICAgIFxyXG4gICAgXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=