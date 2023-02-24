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
        content.appendChild(inter.error());
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
        button.addEventListener("click",inter.switchUnits)
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
    static error(){
        const wrapper=document.createElement("div");
        wrapper.id="error";
        const button =document.createElement("button");
        button.id="close";
        button.textContent="X";
        const message=document.createElement("p");
        message.textContent="There is no such city";
        button.addEventListener("click",inter.closeError)
        wrapper.appendChild(button);
        wrapper.appendChild(message);
        wrapper.classList.add("closed");
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
        if(city.value===""){
            return;
        }
        
            const response = await _info__WEBPACK_IMPORTED_MODULE_0__["default"].getweather(city.value);
        if(response===404){
            
            document.getElementById("error").classList.toggle("opened");
            city.value="";
            return ;
        }
            
        inter.updateTemp(city.value)
        inter.updateName(city.value);
        inter.updateFeelsLike(city.value);
        inter.updateWind(city.value);
        inter.updateCityMain(city.value);
    }
    static closeError(){
        document.getElementById("error").classList.toggle("opened");
    }
    static async switchUnits(e){
        if(document.getElementById("switch").textContent==="F"){
            document.getElementById("switch").textContent="C"; 
        }
        else{
            document.getElementById("switch").textContent="F";
        }
        const city=document.querySelector("#city-name div").textContent;
        inter.updateFeelsLike(city.split(",")[0]);
        inter.updateTemp(city.split(",")[0]);
        inter.updateWind(city.split(",")[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNUO0FBQ0E7QUFDQSxRQUFRLDREQUFtQjtBQUMzQix1RUFBdUUsSUFBSTtBQUMzRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHdEQUFlO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3pQQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ2hDO0FBQ0EsdURBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1zaXRlLy4vc3JjL2luZm8uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1zaXRlLy4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1zaXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLXNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLXNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLXNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZm97XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0d2VhdGhlcihjaXR5KXtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBmZXRjaFJlc3BvbnNlPWF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9ZjljMTIxYzBkODBmNTZmZDJjOTAwNWQ3MWUyMTZmYThgKTtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyPWF3YWl0IGZldGNoUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmKHdlYXRoZXIuY29kPT09XCI0MDRcIil7XHJcbiAgICAgICAgICAgIHJldHVybiA0MDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWF0aGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgc3RhdGljIGFzeW5jIGdldFRtcChjaXR5KXtcclxuICAgICAgICBjb25zdCByZXQ9YXdhaXQgaW5mby5nZXR3ZWF0aGVyKGNpdHkpO1xyXG4gICAgICAgIHJldHVybiByZXQubWFpbi50ZW1wO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFzeW5jIGdldEZlZWxzTGlrZShjaXR5KXtcclxuICAgICAgICBjb25zdCByZXQgPSBhd2FpdCBpbmZvLmdldHdlYXRoZXIoY2l0eSk7XHJcbiAgICAgICAgcmV0dXJuIHJldC5tYWluLmZlZWxzX2xpa2U7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0TmFtZShjaXR5KXtcclxuICAgICAgICBjb25zdCByZXQgPSBhd2FpdCBpbmZvLmdldHdlYXRoZXIoY2l0eSk7XHJcbiAgICAgICAgcmV0dXJuIHtuYW1lOiByZXQubmFtZSxjb3VudHJ5OiByZXQuc3lzLmNvdW50cnl9O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFzeW5jIGdldFdpbmQoY2l0eSl7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gYXdhaXQgaW5mby5nZXR3ZWF0aGVyKGNpdHkpO1xyXG4gICAgICAgIHJldHVybiByZXQud2luZC5zcGVlZDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBhc3luYyBnZXRNYWluV2VhdGhlcihjaXR5KXtcclxuICAgICAgICBjb25zdCByZXQgPSBhd2FpdCBpbmZvLmdldHdlYXRoZXIoY2l0eSk7XHJcbiAgICAgICAgcmV0dXJuIHJldC53ZWF0aGVyWzBdLm1haW47XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgaW5mbyBmcm9tIFwiLi9pbmZvXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGludGVye1xyXG4gICAgLy9jb21wb3NlIHRoZSBlbGVtZW50cyBvZiB0aGUgd2Vic2l0ZXNcclxuICAgIHN0YXRpYyBtYWluKCl7XHJcbiAgICAgICAgY29uc3QgY29udGVudD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChpbnRlci5oZWFkZXIoKSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChpbnRlci5pbnB1dCgpKTtcclxuICAgICAgICBjb25zdCB3cmFwcGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgd3JhcHBlci5pZD1cIm1haW5cIjtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGludGVyLmNpdHlOYW1lKCkpXHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpbnRlci5jaXR5TWFpbigpKVxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW50ZXIuY2l0eVRtcCgpKVxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW50ZXIuY2l0eUZlZWxzTGlrZSgpKVxyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW50ZXIuY2l0eVdpbmQoKSk7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChpbnRlci5lcnJvcigpKTtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgICAgIH1cclxuICAgIC8vY3JlYXRpb24gb2YgdGhlIGVsZW1lbnRzXHJcbiAgICBzdGF0aWMgaGVhZGVyKCl7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgd3JhcHBlci5pZD1cImhlYWRlclwiO1xyXG4gICAgICAgIGNvbnN0IGhlYWQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgICAgIGhlYWQuaWQ9XCJuYW1lXCI7XHJcbiAgICAgICAgaGVhZC50ZXh0Q29udGVudD1cIldlYXRoZXJcIlxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b24uaWQ9XCJzd2l0Y2hcIjtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaW50ZXIuc3dpdGNoVW5pdHMpXHJcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50PVwiQ1wiO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZClcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgaW5wdXQoKXtcclxuICAgICAgICBjb25zdCB3cmFwcGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgd3JhcHBlci5pZD1cImlucHV0XCI7XHJcbiAgICAgICAgY29uc3QgZm9ybT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgICAgICBjb25zdCBzZWFyY2g9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHNlYXJjaC50eXBlPVwidGV4dFwiO1xyXG4gICAgICAgIHNlYXJjaC5tYXhMZW5ndGg9XCIzMFwiO1xyXG4gICAgICAgIHNlYXJjaC5wbGFjZWhvbGRlcj1cIkNpdHkgbmFtZSBpLmUgUGFyaXNcIjtcclxuICAgICAgICBzZWFyY2guaWQ9XCJzZWFjaFwiO1xyXG4gICAgICAgIGJ1dHRvbi50eXBlPVwic3VibWl0XCI7XHJcbiAgICAgICAgYnV0dG9uLmlkPVwic3VibWl0XCI7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTD0nPHN2ZyBpZD1cIkxheWVyXzFcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBjb2xvcj1cIiMwMDAwMDBcIj48ZGVmcz48c3R5bGU+LmNscy02Mzc0ZjhkOWI2N2YwOTRlNDg5NmM2NjAtMXtmaWxsOm5vbmU7c3Ryb2tlOmFsaWNlYmx1ZTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48L2RlZnM+PGNpcmNsZSBjbGFzcz1cImNscy02Mzc0ZjhkOWI2N2YwOTRlNDg5NmM2NjAtMVwiIGN4PVwiOS4xNFwiIGN5PVwiOS4xNFwiIHI9XCI3LjY0XCI+PC9jaXJjbGU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3NGY4ZDliNjdmMDk0ZTQ4OTZjNjYwLTFcIiB4MT1cIjIyLjVcIiB5MT1cIjIyLjVcIiB4Mj1cIjE0LjM5XCIgeTI9XCIxNC4zOVwiPjwvbGluZT48L3N2Zz4nXHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzZWFyY2gpXHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGludGVyLnN1Ym1pdENpdHkpO1xyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNpdHlOYW1lKCl7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHdyYXBwZXIuaWQ9XCJjaXR5LW5hbWVcIjtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xyXG4gICAgICAgIGNvbnN0IG5hbWU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZU5hbWU9IGluZm8uZ2V0TmFtZShcInBhcmlzXCIpLnRoZW4oKGluZik9PntcclxuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudD1gJHtpbmYubmFtZX0sJHtpbmYuY291bnRyeX1gOyAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgfVxyXG4gICAgc3RhdGljICBjaXR5VG1wKCl7XHJcbiAgICAgICAgY29uc3QgY2FyZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmQuaWQ9XCJjaXR5LXRlbXBcIjtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB3cmFwcGVyLmlkPVwiaW5mby13cmFwcGVyXCI7XHJcbiAgICAgICAgY29uc3QgcmVmZXJUbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICByZWZlclRvLnRleHRDb250ZW50PVwidGVtcFwiO1xyXG4gICAgICAgIGNvbnN0IHRlbXBlcnR1cmU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgdGVtcGVydHVyZS5pZD1cInRlbXBcIjtcclxuICAgICAgICBpbmZvLmdldFRtcChcInBhcmlzXCIpLnRoZW4oKGluZik9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoXCIpLnRleHRDb250ZW50PT09XCJDXCIpe1xyXG4gICAgICAgICAgICAgICAgdGVtcGVydHVyZS50ZXh0Q29udGVudD1gJHtNYXRoLnJvdW5kKGluZi0yNzMuMTUpfSBDYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGVtcGVydHVyZS50ZXh0Q29udGVudD1gJHtNYXRoLnJvdW5kKChpbmYtMjczLjE1KSooOS81KSszMil9IEZgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2FyZC5pbm5lckhUTUw9JzxzdmcgaWQ9XCJMYXllcl8xXCIgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgY29sb3I9XCJhbGljZWJsdWVcIj48ZGVmcz48c3R5bGU+LmNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzAtMXtmaWxsOm5vbmU7c3Ryb2tlOmN1cnJlbnRDb2xvcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9PC9zdHlsZT48L2RlZnM+PGNpcmNsZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzAtMVwiIGN4PVwiMTYuM1wiIGN5PVwiMy44OVwiIHI9XCIwLjQ4XCI+PC9jaXJjbGU+PGNpcmNsZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzAtMVwiIGN4PVwiNi4yN1wiIGN5PVwiMTcuNzNcIiByPVwiMC45NVwiPjwvY2lyY2xlPjxwYXRoIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3MC0xXCIgZD1cIk0xMC4wOSwxNC44OVY1LjMyYTMuODIsMy44MiwwLDAsMC03LjY0LDB2OS41N2E0Ljc3LDQuNzcsMCwxLDAsOC42LDIuODRBNC43NCw0Ljc0LDAsMCwwLDEwLjA5LDE0Ljg5WlwiPjwvcGF0aD48bGluZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzAtMVwiIHgxPVwiNi4yN1wiIHkxPVwiMTAuMDlcIiB4Mj1cIjYuMjdcIiB5Mj1cIjE2Ljc3XCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3MC0xXCIgeDE9XCIxMC4wOVwiIHkxPVwiNi4yN1wiIHgyPVwiMTIuOTVcIiB5Mj1cIjYuMjdcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjcwLTFcIiB4MT1cIjEwLjA5XCIgeTE9XCIxMC4wOVwiIHgyPVwiMTIuOTVcIiB5Mj1cIjEwLjA5XCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3MC0xXCIgeDE9XCIxMC4wOVwiIHkxPVwiMTMuOTFcIiB4Mj1cIjEyLjk1XCIgeTI9XCIxMy45MVwiPjwvbGluZT48cGF0aCBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzAtMVwiIGQ9XCJNMjIuNSwxMC4wOUExLjksMS45LDAsMCwxLDIwLjU5LDEyaDBhMS45MSwxLjkxLDAsMCwxLTEuOTEtMS45MVY3LjIzYTEuOTEsMS45MSwwLDAsMSwxLjkxLTEuOTFoMEExLjksMS45LDAsMCwxLDIyLjUsNy4yM1wiPjwvcGF0aD48L3N2Zz4nXHJcbiAgICAgICAgXHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChyZWZlclRvKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRlbXBlcnR1cmUpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICAgICAgcmV0dXJuIGNhcmQ7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2l0eUZlZWxzTGlrZSgpe1xyXG4gICAgICAgIGNvbnN0IGNhcmQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkLmlkPVwiY2l0eS1mZWVsc2xpa2VcIjtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB3cmFwcGVyLmlkPVwiZi13cmFwcGVyXCI7XHJcbiAgICAgICAgY29uc3QgcmVmZXJUbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICByZWZlclRvLnRleHRDb250ZW50PVwiZmVlbHMgbGlrZVwiO1xyXG4gICAgICAgIGNvbnN0IGZlZWxzTGlrZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBmZWVsc0xpa2UuaWQ9XCJmZWVscy1saWtlXCI7XHJcbiAgICAgICAgaW5mby5nZXRGZWVsc0xpa2UoXCJwYXJpc1wiKS50aGVuKChmKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hcIikudGV4dENvbnRlbnQ9PT1cIkNcIil7XHJcbiAgICAgICAgICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQ9YCR7TWF0aC5yb3VuZChmLTI3My4xNSl9IENgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQ9YCR7TWF0aC5yb3VuZCgoZi0yNzMuMTUpKig5LzUpKzMyKX0gRmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjYXJkLmlubmVySFRNTD0nPHN2ZyBpZD1cIkxheWVyXzFcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBjb2xvcj1cImFsaWNlYmx1ZVwiPjxkZWZzPjxzdHlsZT4uY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3MC0xe2ZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS1taXRlcmxpbWl0OjEwO308L3N0eWxlPjwvZGVmcz48Y2lyY2xlIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3MC0xXCIgY3g9XCIxNi4zXCIgY3k9XCIzLjg5XCIgcj1cIjAuNDhcIj48L2NpcmNsZT48Y2lyY2xlIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3MC0xXCIgY3g9XCI2LjI3XCIgY3k9XCIxNy43M1wiIHI9XCIwLjk1XCI+PC9jaXJjbGU+PHBhdGggY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjcwLTFcIiBkPVwiTTEwLjA5LDE0Ljg5VjUuMzJhMy44MiwzLjgyLDAsMCwwLTcuNjQsMHY5LjU3YTQuNzcsNC43NywwLDEsMCw4LjYsMi44NEE0Ljc0LDQuNzQsMCwwLDAsMTAuMDksMTQuODlaXCI+PC9wYXRoPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3MC0xXCIgeDE9XCI2LjI3XCIgeTE9XCIxMC4wOVwiIHgyPVwiNi4yN1wiIHkyPVwiMTYuNzdcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjcwLTFcIiB4MT1cIjEwLjA5XCIgeTE9XCI2LjI3XCIgeDI9XCIxMi45NVwiIHkyPVwiNi4yN1wiPjwvbGluZT48bGluZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzAtMVwiIHgxPVwiMTAuMDlcIiB5MT1cIjEwLjA5XCIgeDI9XCIxMi45NVwiIHkyPVwiMTAuMDlcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjcwLTFcIiB4MT1cIjEwLjA5XCIgeTE9XCIxMy45MVwiIHgyPVwiMTIuOTVcIiB5Mj1cIjEzLjkxXCI+PC9saW5lPjxwYXRoIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3MC0xXCIgZD1cIk0yMi41LDEwLjA5QTEuOSwxLjksMCwwLDEsMjAuNTksMTJoMGExLjkxLDEuOTEsMCwwLDEtMS45MS0xLjkxVjcuMjNhMS45MSwxLjkxLDAsMCwxLDEuOTEtMS45MWgwQTEuOSwxLjksMCwwLDEsMjIuNSw3LjIzXCI+PC9wYXRoPjwvc3ZnPidcclxuICAgICAgICBcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHJlZmVyVG8pO1xyXG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xyXG4gICAgICAgIHJldHVybiBjYXJkO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNpdHlXaW5kKCl7XHJcbiAgICAgICAgY29uc3QgY2FyZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmQuaWQ9XCJjaXR5LWZlZWxzbGlrZVwiO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHdyYXBwZXIuaWQ9XCJmLXdyYXBwZXJcIjtcclxuICAgICAgICBjb25zdCByZWZlclRvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHJlZmVyVG8udGV4dENvbnRlbnQ9XCJ3aW5kXCI7XHJcbiAgICAgICAgY29uc3Qgd2luZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICB3aW5kLmlkPVwid2luZFwiO1xyXG4gICAgICAgIGluZm8uZ2V0V2luZChcInBhcmlzXCIpLnRoZW4oKGYpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaFwiKS50ZXh0Q29udGVudD09PVwiQ1wiKXtcclxuICAgICAgICAgICAgICAgIHdpbmQudGV4dENvbnRlbnQ9YCR7TWF0aC5yb3VuZChmKjEuNil9IGttL2hgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICB3aW5kLnRleHRDb250ZW50PWAke01hdGgucm91bmQoZil9IG1waGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjYXJkLmlubmVySFRNTD0nPHN2ZyBpZD1cIkxheWVyXzFcIiBkYXRhLW5hbWU9XCJMYXllciAxXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBjb2xvcj1cImFsaWNlYmx1ZVwiPjxkZWZzPjxzdHlsZT4uY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3NS0xe2ZpbGw6bm9uZTtzdHJva2U6Y3VycmVudENvbG9yO3N0cm9rZS1taXRlcmxpbWl0OjEwO308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzUtMVwiIGQ9XCJNNC4zMyw4LjE3SDE5LjY3YTIuODgsMi44OCwwLDEsMC0yLjg4LTIuODhcIj48L3BhdGg+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjc1LTFcIiB4MT1cIjAuNVwiIHkxPVwiOC4xN1wiIHgyPVwiMi40MlwiIHkyPVwiOC4xN1wiPjwvbGluZT48cGF0aCBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzUtMVwiIGQ9XCJNMTkuNjcsMTJINC4zM2EyLjg4LDIuODgsMCwxLDAsMi44OCwyLjg4XCI+PC9wYXRoPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3NS0xXCIgeDE9XCIyMy41XCIgeTE9XCIxMlwiIHgyPVwiMjEuNThcIiB5Mj1cIjEyXCI+PC9saW5lPjxwYXRoIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3NS0xXCIgZD1cIk0xMy45MiwxNS44M2g1Ljc1YTIuODgsMi44OCwwLDEsMS0yLjg4LDIuODhcIj48L3BhdGg+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjc1LTFcIiB4MT1cIjEwLjA4XCIgeTE9XCIxNS44M1wiIHgyPVwiMTJcIiB5Mj1cIjE1LjgzXCI+PC9saW5lPjxsaW5lIGNsYXNzPVwiY2xzLTYzN2I4YjMxZjk1ZTg2YjU5YzU3YTI3NS0xXCIgeDE9XCIwLjVcIiB5MT1cIjQuMzNcIiB4Mj1cIjguMTdcIiB5Mj1cIjQuMzNcIj48L2xpbmU+PGxpbmUgY2xhc3M9XCJjbHMtNjM3YjhiMzFmOTVlODZiNTljNTdhMjc1LTFcIiB4MT1cIjEwLjA4XCIgeTE9XCI0LjMzXCIgeDI9XCIxMy45MlwiIHkyPVwiNC4zM1wiPjwvbGluZT48bGluZSBjbGFzcz1cImNscy02MzdiOGIzMWY5NWU4NmI1OWM1N2EyNzUtMVwiIHgxPVwiMTMuOTJcIiB5MT1cIjE5LjY3XCIgeDI9XCI4LjE3XCIgeTI9XCIxOS42N1wiPjwvbGluZT48L3N2Zz4nXHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChyZWZlclRvKTtcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdpbmQpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGNhcmQ7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgY2l0eU1haW4oKXtcclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB3cmFwcGVyLmlkPVwiY2l0eS1tYWluXCI7XHJcbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcclxuICAgICAgICBjb25zdCBwID1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgICBwLmlkPVwib3ZlcmFsbFwiO1xyXG4gICAgICAgIGluZm8uZ2V0TWFpbldlYXRoZXIoXCJwYXJpc1wiKS50aGVuKChpbmYpPT57XHJcbiAgICAgICAgICAgIHAudGV4dENvbnRlbnQ9YE92ZXJhbGw6ICR7aW5mfWA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHApO1xyXG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGVycm9yKCl7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHdyYXBwZXIuaWQ9XCJlcnJvclwiO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidXR0b24uaWQ9XCJjbG9zZVwiO1xyXG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudD1cIlhcIjtcclxuICAgICAgICBjb25zdCBtZXNzYWdlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIG1lc3NhZ2UudGV4dENvbnRlbnQ9XCJUaGVyZSBpcyBubyBzdWNoIGNpdHlcIjtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaW50ZXIuY2xvc2VFcnJvcilcclxuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChtZXNzYWdlKTtcclxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XHJcbiAgICAgICAgcmV0dXJuIHdyYXBwZXI7XHJcbiAgICB9XHJcbiAgICAvL3VwZGF0ZSBVSVxyXG4gICAgc3RhdGljIHVwZGF0ZVRlbXAoY2l0eSl7XHJcbiAgICAgICAgaW5mby5nZXRUbXAoY2l0eSkudGhlbigoaW5mKT0+e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoXCIpLnRleHRDb250ZW50PT09XCJDXCIpe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wXCIpLnRleHRDb250ZW50PWAke01hdGgucm91bmQoaW5mLTI3My4xNSl9IENgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBcIikudGV4dENvbnRlbnQ9YCR7TWF0aC5yb3VuZCgoaW5mLTI3My4xNSkqKDkvNSkrMzIpfSBGYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdXBkYXRlRmVlbHNMaWtlKGNpdHkpe1xyXG4gICAgICAgIGluZm8uZ2V0RmVlbHNMaWtlKGNpdHkpLnRoZW4oKGYpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaFwiKS50ZXh0Q29udGVudD09PVwiQ1wiKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHMtbGlrZVwiKS50ZXh0Q29udGVudD1gJHtNYXRoLnJvdW5kKGYtMjczLjE1KX0gQ2A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHMtbGlrZVwiKS50ZXh0Q29udGVudD1gJHtNYXRoLnJvdW5kKChmLTI3My4xNSkqKDkvNSkrMzIpfSBGYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHVwZGF0ZVdpbmQoY2l0eSl7XHJcbiAgICAgICAgaW5mby5nZXRXaW5kKGNpdHkpLnRoZW4oKGYpPT57XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaFwiKS50ZXh0Q29udGVudD09PVwiQ1wiKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZFwiKS50ZXh0Q29udGVudD1gJHtNYXRoLnJvdW5kKGYqMS42KX0ga20vaGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZFwiKS50ZXh0Q29udGVudD1gJHtNYXRoLnJvdW5kKGYpfSBtcGhgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgfVxyXG4gICAgc3RhdGljIHVwZGF0ZU5hbWUoY2l0eSl7XHJcbiAgICAgICAgaW5mby5nZXROYW1lKGNpdHkpLnRoZW4oKGluZik9PntcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5LW5hbWVcIikudGV4dENvbnRlbnQ9YCR7aW5mLm5hbWV9LCR7aW5mLmNvdW50cnl9YDsgICAgXHJcbiAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgfVxyXG4gICAgc3RhdGljIHVwZGF0ZUNpdHlNYWluKGNpdHkpe1xyXG4gICAgICAgIGluZm8uZ2V0TWFpbldlYXRoZXIoY2l0eSkudGhlbigoaW5mKT0+e1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJhbGxcIikudGV4dENvbnRlbnQ9YE92ZXJhbGw6ICR7aW5mfWA7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vZXZlbnRzXHJcbiAgICBzdGF0aWMgYXN5bmMgc3VibWl0Q2l0eShlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY2l0eT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYWNoXCIpO1xyXG4gICAgICAgIGlmKGNpdHkudmFsdWU9PT1cIlwiKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBpbmZvLmdldHdlYXRoZXIoY2l0eS52YWx1ZSk7XHJcbiAgICAgICAgaWYocmVzcG9uc2U9PT00MDQpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlbmVkXCIpO1xyXG4gICAgICAgICAgICBjaXR5LnZhbHVlPVwiXCI7XHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpbnRlci51cGRhdGVUZW1wKGNpdHkudmFsdWUpXHJcbiAgICAgICAgaW50ZXIudXBkYXRlTmFtZShjaXR5LnZhbHVlKTtcclxuICAgICAgICBpbnRlci51cGRhdGVGZWVsc0xpa2UoY2l0eS52YWx1ZSk7XHJcbiAgICAgICAgaW50ZXIudXBkYXRlV2luZChjaXR5LnZhbHVlKTtcclxuICAgICAgICBpbnRlci51cGRhdGVDaXR5TWFpbihjaXR5LnZhbHVlKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBjbG9zZUVycm9yKCl7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlbmVkXCIpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGFzeW5jIHN3aXRjaFVuaXRzKGUpe1xyXG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoXCIpLnRleHRDb250ZW50PT09XCJGXCIpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaFwiKS50ZXh0Q29udGVudD1cIkNcIjsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoXCIpLnRleHRDb250ZW50PVwiRlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjaXR5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eS1uYW1lIGRpdlwiKS50ZXh0Q29udGVudDtcclxuICAgICAgICBpbnRlci51cGRhdGVGZWVsc0xpa2UoY2l0eS5zcGxpdChcIixcIilbMF0pO1xyXG4gICAgICAgIGludGVyLnVwZGF0ZVRlbXAoY2l0eS5zcGxpdChcIixcIilbMF0pO1xyXG4gICAgICAgIGludGVyLnVwZGF0ZVdpbmQoY2l0eS5zcGxpdChcIixcIilbMF0pO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW50ZXIgZnJvbSBcIi4vaW50ZXJmYWNlXCI7XHJcblxyXG5pbnRlci5tYWluKCk7XHJcblxyXG5cclxuICAgIFxyXG4gICAgXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=