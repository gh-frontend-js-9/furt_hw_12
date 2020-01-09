/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/common.js":
/*!**************************************!*\
  !*** ./src/assets/scripts/common.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let body = document.getElementById('body');\nbody.classList.add('body');\nlet rowSection = document.getElementById('row-section');\nrowSection.classList.add('row-section'); //rowOptions\n\nlet rowMessOptions = document.getElementById('row-mess-options');\nrowMessOptions.classList.add('options', 'row-mess-options');\nlet messOptions = document.createElement('div');\nmessOptions.classList.add('options__buttons');\n\nfunction createOptionsIcon(faIconClass, nameButton) {\n  let anchor = document.createElement('a');\n  anchor.classList.add('options__icon', 'icon--hovered');\n  anchor.href = '#';\n  anchor.innerHTML = nameButton;\n  let icon = anchor.appendChild(document.createElement('i'));\n  icon.classList.add('fa', faIconClass);\n  icon.setAttribute('aria-hidden', 'true');\n  return rowMessOptions.appendChild(messOptions).appendChild(anchor).appendChild(icon);\n}\n\ncreateOptionsIcon('fa-inbox', 'Inbox (2)');\ncreateOptionsIcon('fa-paper-plane', 'Sent');\ncreateOptionsIcon('fa-trash', 'Trash');\n\nfunction createSelect() {\n  let optSelectBlock = document.createElement('div');\n  optSelectBlock.classList.add('options__select-block');\n  let optFilterMess = document.createElement('select');\n  optFilterMess.classList.add('options__filter-mess');\n  optFilterMess.name = 'filterMessages';\n  optFilterMess.size = '1';\n  optFilterMess.options[0] = new Option(\"Date\", \"Date\");\n  optFilterMess.options[1] = new Option(\"Read\", \"Read\");\n  optFilterMess.options[2] = new Option(\"Unread\", \"Unread\");\n  return rowMessOptions.appendChild(optSelectBlock).appendChild(optFilterMess);\n}\n\ncreateSelect(); // navColumn\n\nlet navColumn = document.createElement('div');\nnavColumn.classList.add('nav-column');\n\nfunction createAnchorIconClass(faIconClass) {\n  let anchor = document.createElement('a');\n  anchor.classList.add('nav-column__icon');\n  anchor.href = '#';\n  let icon = anchor.appendChild(document.createElement('i'));\n  icon.classList.add('fa', 'fa--color', 'fa--hovered', faIconClass, 'fa-2x');\n  icon.setAttribute('aria-hidden', 'true');\n  return rowSection.appendChild(navColumn).appendChild(anchor).appendChild(icon);\n}\n\ncreateAnchorIconClass('fa-home');\ncreateAnchorIconClass('fa-bars');\ncreateAnchorIconClass('fa-line-chart');\ncreateAnchorIconClass('fa-envelope');\ncreateAnchorIconClass('fa-users'); // conversation-column\n\nlet conversationColumn = document.createElement('div');\nconversationColumn.classList.add('conversation-column');\n\nfunction createImgNameDateMessUser(imgSrc, name, date, messageText) {\n  let conversationUser = document.createElement('div');\n  conversationUser.classList.add('user', 'conversation-column__user');\n  let userImgNameDate = document.createElement('div');\n  userImgNameDate.classList.add('user__img-name-date');\n  let userImg = document.createElement('img');\n  userImg.src = imgSrc;\n  let userName = document.createElement('span');\n  userName.classList.add('user__name');\n  userName.innerHTML = name;\n  let userMessDate = document.createElement('span');\n  userMessDate.classList.add('user__mess-date');\n  userMessDate.innerHTML = date;\n  let userImgNameMessDateFragment = document.createDocumentFragment();\n  userImgNameMessDateFragment.appendChild(userImgNameDate);\n  userImgNameDate.appendChild(userImg);\n  userImgNameDate.appendChild(userName);\n  userImgNameDate.appendChild(userMessDate);\n  let userMessage = document.createElement('p');\n  userMessage.classList.add('user__message');\n  userMessage.innerHTML = messageText;\n  let userMessageInfoСontainer = document.createDocumentFragment();\n  userMessageInfoСontainer.appendChild(conversationUser);\n  conversationUser.appendChild(userImgNameMessDateFragment);\n  conversationUser.appendChild(userMessage);\n  return rowSection.appendChild(conversationColumn).appendChild(userMessageInfoСontainer);\n}\n\ncreateImgNameDateMessUser(\"./assets/images/michelle.png\", 'Michelle Stewart', 'Today, 5:32 PM', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.');\ncreateImgNameDateMessUser(\"./assets/images/jolene.png\", 'Jolene Slater', '10 April', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.');\ncreateImgNameDateMessUser(\"./assets/images/lyall.png\", 'Lyall Roach', '8 April', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.');\ncreateImgNameDateMessUser(\"./assets/images/dominic.png\", 'Dominic Lynton', '2 April', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.'); // dialog-column\n\nlet dialogСolumn = document.createElement('div');\ndialogСolumn.classList.add('dialog-column');\n\nfunction cloudMyMessage() {\n  let myMessage = document.createElement('div');\n  myMessage.classList.add('my-message', 'dialog-column__my-message');\n  let myMessageContainer = document.createElement('div');\n  myMessageContainer.classList.add('my-message__container');\n  let myMessageCloud = document.createElement('p');\n  myMessageCloud.classList.add('my-message__cloud');\n  myMessageCloud.innerHTML = \"Hello!\";\n  let myMessageSendTime = document.createElement('p');\n  myMessageSendTime.classList.add('my-message__time');\n  let date = new Date();\n  let optionsDate = {\n    month: 'long',\n    year: 'numeric',\n    day: 'numeric',\n    hour: 'numeric',\n    hour12: true,\n    minute: 'numeric'\n  };\n  myMessageSendTime.innerHTML = date.toLocaleString('en-US', optionsDate);\n  let myMessageImg = document.createElement('img');\n  myMessageImg.classList.add('my-message__img');\n  myMessageImg.src = \"./assets/images/i.png\";\n  let myMessageCloudTimeContainer = document.createDocumentFragment();\n  myMessageCloudTimeContainer.appendChild(myMessageContainer);\n  myMessageContainer.appendChild(myMessageCloud);\n  myMessageContainer.appendChild(myMessageSendTime);\n  let myMessageCloudImgContainer = document.createDocumentFragment();\n  myMessageCloudImgContainer.appendChild(myMessage);\n  myMessage.appendChild(myMessageContainer);\n  myMessage.appendChild(myMessageImg);\n  return rowSection.appendChild(dialogСolumn).appendChild(myMessageCloudImgContainer);\n}\n\nformWriteMessage();\ncloudMyMessage();\n\nfunction formWriteMessage() {\n  let form = document.createElement('form');\n  form.classList.add('form-block', 'dialog-column__form-block');\n  form.method = 'GET';\n  form.name = 'messageForm';\n  let writeMessage = document.createElement('textarea');\n  writeMessage.classList.add('form-block__textarea');\n  writeMessage.id = 'textarea';\n  writeMessage.placeholder = 'Write a wessage';\n  writeMessage.name = 'messageTextarea';\n  let sendMessageButton = document.createElement('button');\n  sendMessageButton.classList.add('button', 'button--hovered', 'form-block__button');\n  sendMessageButton.innerHTML = 'Send';\n  rowSection.appendChild(dialogСolumn).appendChild(form).appendChild(writeMessage);\n  return form.appendChild(sendMessageButton);\n}\n\nfunction validateForm() {\n  let empty = document.forms[\"messageForm\"][\"messageTextarea\"].value;\n\n  if (empty == \"\") {\n    return false;\n  }\n} // userDateColumn\n\n\nlet userDateColumn = document.createElement('div');\nuserDateColumn.classList.add('date', 'user-column-date');\n\nfunction createDateСhosenUser(userImgSrc, userName, userJobPosition, userAboutHim) {\n  let dateUserImg = document.createElement('img');\n  dateUserImg.classList.add('date__user-img');\n  dateUserImg.src = userImgSrc;\n  let dateUserName = document.createElement('p');\n  dateUserName.classList.add('date__user-name');\n  dateUserName.innerHTML = userName;\n  let dateUserJobPosition = document.createElement('p');\n  dateUserJobPosition.classList.add('date__user-job-position');\n  dateUserJobPosition.innerHTML = userJobPosition;\n  let dateUserAbout = document.createElement('p');\n  dateUserAbout.classList.add('date__user-about');\n  dateUserAbout.innerHTML = userAboutHim;\n  let dateContainer = document.createDocumentFragment();\n  dateContainer.appendChild(userDateColumn);\n  userDateColumn.appendChild(dateUserImg);\n  userDateColumn.appendChild(dateUserName);\n  userDateColumn.appendChild(dateUserJobPosition);\n  userDateColumn.appendChild(dateUserAbout);\n  return rowSection.appendChild(dateContainer);\n}\n\ncreateDateСhosenUser(\"./assets/images/lyall-2.png\", 'Lyall Roach', 'UX/UI Designer', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');\n\nfunction createdateUserInfo(titleInfo, info) {\n  let dateUserTitleInfo = document.createElement('p');\n  dateUserTitleInfo.classList.add('date__user-title-info');\n  dateUserTitleInfo.innerHTML = titleInfo;\n  let dateUserInfo = document.createElement('p');\n  dateUserInfo.classList.add('date__user-info');\n  dateUserInfo.innerHTML = info;\n  return rowSection.appendChild(userDateColumn).appendChild(dateUserTitleInfo).appendChild(dateUserInfo);\n}\n\ncreatedateUserInfo('Email', 'Email');\ncreatedateUserInfo('Phone', '+48 500 400 300');\ncreatedateUserInfo('Adress', '65 Lorem St, Warsaw, PL');\ncreatedateUserInfo('Organization', 'Symu.co');\n\n//# sourceURL=webpack:///./src/assets/scripts/common.js?");

/***/ }),

/***/ "./src/assets/scripts/messages.js":
/*!****************************************!*\
  !*** ./src/assets/scripts/messages.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("async function SendDate() {\n  const url = 'http://localhost:3000/api/threads'; // let message = document.getElementById(\"textarea\").value;\n\n  let dataRaw = {\n    \"user\": {\n      \"_id\": \"5e0372ebfc1f770e14853757\"\n    }\n  };\n\n  try {\n    const response = await fetch(url, {\n      method: 'POST',\n      body: JSON.stringify(dataRaw),\n      headers: {\n        'Authorization': localStorage.token,\n        'Content-Type': 'application/json'\n      }\n    });\n    console.log(localStorage.token);\n    let result = await response.json();\n\n    if (!response.ok) {\n      throw new Error(`No connection ${url}, status: ${response.status}`);\n    }\n\n    let token = await response.headers.get('x-auth-token');\n    localStorage.setItem('token', token);\n    console.log(localStorage);\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n\nconsole.log(SendDate());\n\n//# sourceURL=webpack:///./src/assets/scripts/messages.js?");

/***/ }),

/***/ "./src/assets/styles/scss/main.scss":
/*!******************************************!*\
  !*** ./src/assets/styles/scss/main.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/assets/styles/scss/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scripts_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scripts/common */ \"./src/assets/scripts/common.js\");\n/* harmony import */ var _assets_scripts_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_common__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_scripts_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scripts/messages */ \"./src/assets/scripts/messages.js\");\n/* harmony import */ var _assets_scripts_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_messages__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/scss/main.scss */ \"./src/assets/styles/scss/main.scss\");\n/* harmony import */ var _assets_styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });