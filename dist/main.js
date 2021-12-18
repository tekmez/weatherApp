/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const city = document.querySelector('.city');\r\nconst current = document.querySelector('.current')\r\nconst min = document.querySelector('.min')\r\nconst max = document.querySelector('.max')\r\nconst btn = document.querySelector('button');\r\n\r\nasync function Weather(cities){\r\n  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+cities+'&appid=bc6427122cd7de83a732d84e75578ae2', {mode: \"cors\"});\r\n  const weatherData = await response.json();\r\n  city.innerHTML = weatherData.name;\r\n  let celCur = weatherData.main.temp - 273.15;\r\n  let celMin = weatherData.main.temp_min - 273.15;\r\n  let celMax = weatherData.main.temp_max - 273.15;\r\n\r\n  current.innerHTML = celCur.toFixed(2) + '°C';\r\n  min.innerHTML = celMin.toFixed(2) + '°C';\r\n  max.innerHTML = celMax.toFixed(2) + '°C'; \r\n}\r\nbtn.addEventListener('click',getWeather);\r\nfunction getWeather (e){\r\n  e.preventDefault();\r\n  const text = document.querySelector('.text');\r\n  Weather(text.value);\r\n}\r\nwindow.onload = function(){\r\n    Weather('Melbourne');\r\n}\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;