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

eval("function component() {\r\n  const element = document.createElement('div');\r\n\r\n  element.innerHTML = `\r\n  <header>\r\n  <div class=\"container mx-auto px-7 md:px-0\">\r\n      <nav class=\" flex justify-between items-center py-5 \">\r\n          <div class=\"header__logo w-28 md:w-full z-20\">\r\n              <img src=\"../src/img/home-logo.png\" alt=\"home-logo\">\r\n          </div>\r\n          <ul id=\"menu\"\r\n              class=\"fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-gray-900 bg-opacity-90 z-20 invisible md:bg-transparent md:h-auto md:flex-row md:justify-between md:static  md:visible\">\r\n              <li class=\"m-12 md:m-0\">\r\n                  <a href=\"#\"\r\n                      class=\"text-white md:text-black hover:text-red-500 transition duration-500 ease-in\">Home</a>\r\n              </li>\r\n              <li class=\"m-12 md:m-0\">\r\n                  <a href=\"#\"\r\n                      class=\"text-white md:text-black hover:text-red-500 transition duration-500 ease-in\">Product</a>\r\n              </li>\r\n              <li class=\"m-12 md:m-0\">\r\n                  <a href=\"#\"\r\n                      class=\"text-white md:text-black hover:text-red-500 transition duration-500 ease-in\">Faq</a>\r\n              </li>\r\n              <li class=\"m-12 md:m-0\">\r\n                  <a href=\"#\"\r\n                      class=\"text-white md:text-black hover:text-red-500 transition duration-500 ease-in\">Contact</a>\r\n              </li>\r\n          </ul>\r\n          <div id=\"menu-button\" class=\"z-20 cursor-pointer md:hidden\">\r\n              <svg width=\"20\" height=\"16\" viewBox=\"0 0 20 16\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                  <path opacity=\"0.6\"\r\n                      d=\"M0.124103 1.33333C0.124103 0.596954 0.721057 0 1.45744 0H18.6667C19.403 0 20 0.596954 20 1.33333C20 2.06971 19.403 2.66667 18.6667 2.66667H1.45744C0.721056 2.66667 0.124103 2.06971 0.124103 1.33333ZM0 8C0 7.26362 0.596954 6.66667 1.33333 6.66667H18.6667C19.403 6.66667 20 7.26362 20 8C20 8.73638 19.403 9.33333 18.6667 9.33333H1.33333C0.596955 9.33333 0 8.73638 0 8ZM0 14.6667C0 13.9303 0.596953 13.3333 1.33333 13.3333H18.6667C19.403 13.3333 20 13.9303 20 14.6667C20 15.403 19.403 16 18.6667 16H1.33333C0.596953 16 0 15.403 0 14.6667Z\"\r\n                      fill=\"#737373\" />\r\n              </svg>\r\n          </div>\r\n      </nav>\r\n  </div>\r\n</header>\r\n<section class=\"carousel\">\r\n  <div class=\"w-full bg-no-repeat bg-cover relative h-custom\"\r\n      style=\"background-image: url('../src/img/carousel.jpg')\">\r\n      <div class=\"\r\n  absolute\r\n  top-1/2\r\n  left-1/2\r\n  transform\r\n  -translate-x-1/2 -translate-y-1/2\r\n  z-10\r\n  text-white text-center\r\n\">\r\n          <p class=\"text-xl mb-5\">Food app</p>\r\n          <h1 class=\"\r\n    text-4xl\r\n    mb-5\r\n    font-bold\r\n    max-w-2xl\r\n    md:leading-relaxed md:text-5xl\r\n  \">\r\n              Why stay hungry when you can order form Bella Onojie\r\n          </h1>\r\n          <!-- desc -->\r\n          <p class=\"text-xl mb-5 font-light\">\r\n              Download the bella onoje’s food app now on\r\n          </p>\r\n          <!-- buttons -->\r\n          <div class=\"flex justify-center\">\r\n              <button class=\"\r\n      mx-4\r\n      border border-transparent\r\n      bg-red-500\r\n      px-10\r\n      py-3\r\n      rounded-full\r\n      hover:bg-transparent hover:border-white\r\n      transition-all\r\n    \">\r\n                  Playstore\r\n              </button>\r\n              <button class=\"\r\n      mx-4\r\n      border border-white\r\n      bg-transparent\r\n      px-10\r\n      py-3\r\n      rounded-full\r\n      hover:bg-red-500 hover:border-transparent\r\n      transition-all\r\n    \">\r\n                  Appstore\r\n              </button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<!-- intro -->\r\n<section class=\"intro relative\">\r\n  <div class=\"\r\nabsolute\r\ntop-1/2\r\nleft-1/2\r\ntransform\r\n-translate-x-2/3 -translate-y-1/4\r\n\">\r\n      <img src=\"../src/img/app-img.png\" alt=\"phone app screens\" class=\"max-w-none w-screen pl-20 md:w-auto\" />\r\n  </div>\r\n</section>\r\n<section class=\"pt-96 mt-28 sm:pt-40-c md:mt-0\">\r\n  <div class=\"container mx-auto px-4\">\r\n      <hr class=\"w-4/5 mx-auto h-0.5 bg-gray-200 md:w-2/5\" />\r\n      <h2 class=\"text-center text-4xl font-semibold py-10\">\r\n          How the app works\r\n      </h2>\r\n      <div class=\"flex flex-col justify-evenly items-center py-10 md:flex-row\">\r\n          <div class=\"text-center mb-10\">\r\n              <img src=\"../src/img/app-create-login.png\" alt=\"app screen\" />\r\n          </div>\r\n          <div class=\"text-center md:text-left\">\r\n              <span class=\"text-red-500 font-semibold\">Create an account</span>\r\n              <h2 class=\"\r\n            text-4xl text-blue-900\r\n            font-bold\r\n            max-w-md\r\n            leading-relaxed\r\n            py-5\r\n          \">\r\n                  Create/login to an existing account to get started\r\n              </h2>\r\n              <p class=\"text-xl text-gray-500 font-light max-w-sm mx-auto md:mx-0\">\r\n                  An account is created with your email and a desired password\r\n              </p>\r\n          </div>\r\n      </div>\r\n      <div class=\"flex flex-col justify-evenly items-center py-10 md:flex-row\">\r\n          <div class=\"text-center mb-10 order-1 md:order-2\">\r\n              <img src=\"../src/img/your-favorites-app.png\" alt=\"app screen\" />\r\n          </div>\r\n          <div class=\"text-center md:text-left order-2 md:order-1\">\r\n              <span class=\"text-red-500 font-semibold\">Create an account</span>\r\n              <h2 class=\"\r\n            text-4xl text-blue-900\r\n            font-bold\r\n            max-w-md\r\n            leading-relaxed\r\n            py-5\r\n          \">\r\n                  Create/login to an existing account to get started\r\n              </h2>\r\n              <p class=\"text-xl text-gray-500 font-light max-w-sm mx-auto md:mx-0\">\r\n                  An account is created with your email and a desired password\r\n              </p>\r\n          </div>\r\n      </div>\r\n      <div class=\"flex flex-col justify-evenly items-center py-10 md:flex-row\">\r\n          <div class=\"text-center mb-10\">\r\n              <img src=\"../src/img/check-out-app.png\" alt=\"app screen\" />\r\n          </div>\r\n          <div class=\"text-center md:text-left\">\r\n              <span class=\"text-red-500 font-semibold\">Create an account</span>\r\n              <h2 class=\"\r\n            text-4xl text-blue-900\r\n            font-bold\r\n            max-w-md\r\n            leading-relaxed\r\n            py-5\r\n          \">\r\n                  Create/login to an existing account to get started\r\n              </h2>\r\n              <p class=\"text-xl text-gray-500 font-light max-w-sm mx-auto md:mx-0\">\r\n                  An account is created with your email and a desired password\r\n              </p>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<!-- download -->\r\n<section>\r\n  <div class=\"relative w-full h-custom bg-no-repeat bg-cover\"\r\n      style=\"background-image: url('../src/img/banner.jpg')\">\r\n      <div class=\"\r\n        absolute\r\n        top-1/2\r\n        left-1/2\r\n        transform\r\n        -translate-x-1/2 -translate-y-1/2\r\n        text-center text-white\r\n        z-10\r\n      \">\r\n          <h1 class=\"\r\n          text-4xl\r\n          mb-5\r\n          font-bold\r\n          max-w-2xl\r\n          md:leading-relaxed md:text-5xl\r\n        \">\r\n              Download the app now\r\n          </h1>\r\n          <p class=\"text-xl mb-5 font-light\">\r\n              Available on your favorite store. Start your premium experience now\r\n          </p>\r\n          <div class=\"flex justify-center\">\r\n              <button class=\"\r\n            mx-4\r\n            border border-transparent\r\n            bg-red-500\r\n            px-10\r\n            py-3\r\n            rounded-full\r\n            hover:bg-transparent hover:border-white\r\n            transition-all\r\n          \">\r\n                  Playstore\r\n              </button>\r\n              <button class=\"\r\n            mx-4\r\n            border border-white\r\n            bg-transparent\r\n            px-10\r\n            py-3\r\n            rounded-full\r\n            hover:bg-red-500 hover:border-transparent\r\n            transition-all\r\n          \">\r\n                  Appstore\r\n              </button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<div class=\"footer\">\r\n  <div class=\"container mx-auto px-4\">\r\n      <div class=\"flex flex-col justify-between items-center py-5 md:flex-row\">\r\n          <div class=\"w-32 md:w-full\">\r\n              <img src=\"../src/img/home-logo.png\" alt=\"website logo\" />\r\n          </div>\r\n          <div class=\"\r\n    flex\r\n    items-center\r\n    mt-5\r\n    text-gray-500\r\n    w-full\r\n    justify-center\r\n    md:justify-end\r\n  \">\r\n              <a href=\"tel:901234567\" class=\"flex mx-4\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6 text-red-500 mr-4\"\r\n                      viewBox=\"0 0 20 20\" fill=\"currentColor\">\r\n                      <path\r\n                          d=\"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z\" />\r\n                  </svg>\r\n                  <p>90-123-4567</p>\r\n              </a>\r\n              <a href=\"mailto:info@me.com\" class=\"flex mx-4\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6 text-red-500 mr-4\"\r\n                      viewBox=\"0 0 20 20\" fill=\"currentColor\">\r\n                      <path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\" />\r\n                      <path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\" />\r\n                  </svg>\r\n                  <p>info@me.com</p>\r\n              </a>\r\n          </div>\r\n      </div>\r\n      <div class=\"text-center my-4\">\r\n          <p class=\"text-gray-500\">Copy &copy; 2021 Bella Onojie</p>\r\n      </div>\r\n  </div>\r\n</div>`;\r\n\r\n  return element;\r\n}\r\n\r\ndocument.body.appendChild(component());\r\n\r\nconst menu = document.querySelector('#menu');\r\nconst menuBtn = document.querySelector('#menu-button');\r\n\r\nmenuBtn.addEventListener('click', () => {\r\n  menu.classList.toggle('invisible');\r\n});\r\n\n\n//# sourceURL=webpack://webpack-tailwind/./src/index.js?");

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