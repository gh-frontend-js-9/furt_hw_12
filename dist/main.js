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
/*! exports provided: createImgNameDateMessUser, cloudMyMessage, createDateСhosenUser, createdateUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createImgNameDateMessUser\", function() { return createImgNameDateMessUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloudMyMessage\", function() { return cloudMyMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDateСhosenUser\", function() { return createDateСhosenUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createdateUserInfo\", function() { return createdateUserInfo; });\n/* harmony import */ var _retrieve_all_threads__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieve-all-threads */ \"./src/assets/scripts/retrieve-all-threads.js\");\n\n\nlet body = document.getElementById('body');\nbody.classList.add('body');\nlet rowSection = document.getElementById('row-section');\nrowSection.classList.add('row-section'); //rowOptions\n\nlet rowMessOptions = document.getElementById('row-mess-options');\nrowMessOptions.classList.add('options', 'row-mess-options');\nlet messOptions = document.createElement('div');\nmessOptions.classList.add('options__buttons');\n\nfunction createOptionsIcon(faIconClass, nameButton) {\n  let anchor = document.createElement('a');\n  anchor.classList.add('options__icon', 'icon--hovered');\n  anchor.href = '#';\n  anchor.innerHTML = nameButton;\n  let icon = anchor.appendChild(document.createElement('i'));\n  icon.classList.add('fa', faIconClass);\n  icon.setAttribute('aria-hidden', 'true');\n  return rowMessOptions.appendChild(messOptions).appendChild(anchor).appendChild(icon);\n}\n\ncreateOptionsIcon('fa-inbox', 'Inbox (2)');\ncreateOptionsIcon('fa-paper-plane', 'Sent');\ncreateOptionsIcon('fa-trash', 'Trash');\n\nfunction createSelect() {\n  let optSelectBlock = document.createElement('div');\n  optSelectBlock.classList.add('options__select-block');\n  let optFilterMess = document.createElement('select');\n  optFilterMess.classList.add('options__filter-mess');\n  optFilterMess.name = 'filterMessages';\n  optFilterMess.size = '1';\n  optFilterMess.options[0] = new Option(\"Date\", \"Date\");\n  optFilterMess.options[1] = new Option(\"Read\", \"Read\");\n  optFilterMess.options[2] = new Option(\"Unread\", \"Unread\");\n  return rowMessOptions.appendChild(optSelectBlock).appendChild(optFilterMess);\n}\n\ncreateSelect(); // navColumn\n\nlet navColumn = document.createElement('div');\nnavColumn.classList.add('nav-column');\n\nfunction createAnchorIconClass(faIconClass) {\n  let anchor = document.createElement('a');\n  anchor.classList.add('nav-column__icon');\n  anchor.href = '#';\n  let icon = anchor.appendChild(document.createElement('i'));\n  icon.classList.add('fa', 'fa--color', 'fa--hovered', faIconClass, 'fa-2x');\n  icon.setAttribute('aria-hidden', 'true');\n  return rowSection.appendChild(navColumn).appendChild(anchor).appendChild(icon);\n}\n\ncreateAnchorIconClass('fa-home');\ncreateAnchorIconClass('fa-bars');\ncreateAnchorIconClass('fa-line-chart');\ncreateAnchorIconClass('fa-envelope');\ncreateAnchorIconClass('fa-users'); // conversation-column\n\nlet conversationColumn = document.createElement('div');\nconversationColumn.classList.add('conversation-column');\nfunction createImgNameDateMessUser(imgSrc, name, date, messageText) {\n  let conversationUser = document.createElement('div');\n  conversationUser.classList.add('user', 'conversation-column__user');\n  let userImgNameDate = document.createElement('div');\n  userImgNameDate.classList.add('user__img-name-date');\n  let userImg = document.createElement('img');\n  userImg.src = imgSrc;\n  let anchorThread = document.createElement('a');\n  anchorThread.href = '#';\n  anchorThread.classList.add('user__anchor-thread');\n  anchorThread.id = 'userAnchorThread';\n  let userName = document.createElement('span');\n  userName.classList.add('user__name');\n  userName.id = 'userName';\n  userName.innerHTML = name;\n  let userMessDate = document.createElement('span');\n  userMessDate.classList.add('user__mess-date');\n  userMessDate.innerHTML = date;\n  let userImgNameMessDateFragment = document.createDocumentFragment();\n  userImgNameMessDateFragment.appendChild(userImgNameDate).appendChild(anchorThread);\n  anchorThread.appendChild(userImg);\n  anchorThread.appendChild(userName);\n  anchorThread.appendChild(userMessDate);\n  let userMessage = document.createElement('p');\n  userMessage.classList.add('user__message');\n  userMessage.innerHTML = messageText;\n  let userMessageInfoСontainer = document.createDocumentFragment();\n  userMessageInfoСontainer.appendChild(conversationUser);\n  conversationUser.appendChild(userImgNameMessDateFragment);\n  conversationUser.appendChild(userMessage);\n  return rowSection.appendChild(conversationColumn).appendChild(userMessageInfoСontainer);\n} // dialog-column\n\nlet dialogСolumn = document.createElement('div');\ndialogСolumn.classList.add('dialog-column');\nlet dialogColumnBlock = document.createElement('div');\ndialogColumnBlock.classList.add('dialog-column__block');\nfunction cloudMyMessage(message) {\n  let myMessage = document.createElement('div');\n  myMessage.classList.add('my-message', 'dialog-column__my-message'); // myMessage.setAttribute('data-id-thread', idThread)\n\n  let myMessageContainer = document.createElement('div');\n  myMessageContainer.classList.add('my-message__container');\n  let myMessageCloud = document.createElement('p');\n  myMessageCloud.classList.add('my-message__cloud');\n  myMessageCloud.innerHTML = message;\n  let myMessageSendTime = document.createElement('p');\n  myMessageSendTime.classList.add('my-message__time');\n  let date = new Date();\n  let optionsDate = {\n    month: 'long',\n    year: 'numeric',\n    day: 'numeric',\n    hour: 'numeric',\n    hour12: true,\n    minute: 'numeric'\n  };\n  myMessageSendTime.innerHTML = date.toLocaleString('en-US', optionsDate);\n  let myMessageImg = document.createElement('img');\n  myMessageImg.classList.add('my-message__img');\n  myMessageImg.src = \"./assets/images/i.png\";\n  let myMessageCloudTimeContainer = document.createDocumentFragment();\n  myMessageCloudTimeContainer.appendChild(myMessageContainer);\n  myMessageContainer.appendChild(myMessageCloud);\n  myMessageContainer.appendChild(myMessageSendTime);\n  let myMessageCloudImgContainer = document.createDocumentFragment();\n  myMessageCloudImgContainer.appendChild(myMessage);\n  myMessage.appendChild(myMessageContainer);\n  myMessage.appendChild(myMessageImg);\n  return rowSection.appendChild(dialogСolumn).appendChild(dialogColumnBlock).appendChild(myMessageCloudImgContainer);\n} // cloudMyMessage\n\nlet form = document.createElement('form');\nform.classList.add('form-block', 'dialog-column__form-block');\n\nfunction formWriteMessage() {\n  form.method = 'GET';\n  form.name = 'messageForm';\n  form.action = '#';\n  let writeMessage = document.createElement('textarea');\n  writeMessage.classList.add('form-block__textarea');\n  writeMessage.id = 'textarea';\n  writeMessage.placeholder = 'Write a wessage';\n  writeMessage.name = 'messageTextarea';\n  return rowSection.appendChild(dialogСolumn).appendChild(form).appendChild(writeMessage);\n}\n\nformWriteMessage();\n\nfunction sendMessageButton() {\n  let sendMessageButton = document.createElement('button');\n  sendMessageButton.classList.add('button', 'button--hovered', 'form-block__button');\n  sendMessageButton.innerHTML = 'Send';\n  sendMessageButton.type = 'submit';\n  sendMessageButton.id = 'submit';\n  sendMessageButton.name = 'submit';\n  return form.appendChild(sendMessageButton);\n}\n\nsendMessageButton(); // userDateColumn\n\nlet userDateColumn = document.createElement('div');\nuserDateColumn.classList.add('date', 'user-column-date');\nfunction createDateСhosenUser(userImgSrc, userName, userJobPosition, userAboutHim) {\n  let dateUserImg = document.createElement('img');\n  dateUserImg.classList.add('date__user-img');\n  dateUserImg.src = userImgSrc;\n  let dateUserName = document.createElement('p');\n  dateUserName.classList.add('date__user-name');\n  dateUserName.innerHTML = userName;\n  let dateUserJobPosition = document.createElement('p');\n  dateUserJobPosition.classList.add('date__user-job-position');\n  dateUserJobPosition.innerHTML = userJobPosition;\n  let dateUserAbout = document.createElement('p');\n  dateUserAbout.classList.add('date__user-about');\n  dateUserAbout.innerHTML = userAboutHim;\n  let dateContainer = document.createDocumentFragment();\n  dateContainer.appendChild(userDateColumn);\n  userDateColumn.appendChild(dateUserImg);\n  userDateColumn.appendChild(dateUserName);\n  userDateColumn.appendChild(dateUserJobPosition);\n  userDateColumn.appendChild(dateUserAbout);\n  return rowSection.appendChild(dateContainer);\n}\nfunction createdateUserInfo(titleInfo, info) {\n  let dateUserTitleInfo = document.createElement('p');\n  dateUserTitleInfo.classList.add('date__user-title-info');\n  dateUserTitleInfo.innerHTML = titleInfo;\n  let dateUserInfo = document.createElement('p');\n  dateUserInfo.classList.add('date__user-info');\n  dateUserInfo.innerHTML = info;\n  return rowSection.appendChild(userDateColumn).appendChild(dateUserTitleInfo).appendChild(dateUserInfo);\n}\n\n//# sourceURL=webpack:///./src/assets/scripts/common.js?");

/***/ }),

/***/ "./src/assets/scripts/retrieve-all-thread-messages.js":
/*!************************************************************!*\
  !*** ./src/assets/scripts/retrieve-all-thread-messages.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/assets/scripts/common.js\");\n\n\n\n\n\nasync function getThreadMessages() {\n  // e.preventDefault();\n  let token = localStorage.getItem('token');\n  console.log(token); // let id = localStorage.getItem('_id');\n  // console.log(id)\n  // let url = `https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/${id}`;\n\n  let url = `https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/5e1a1c818ec2f49ab3e59ab2`;\n\n  try {\n    const response = await fetch(url, {\n      method: 'GET',\n      headers: {\n        'x-access-token': localStorage.token\n      }\n    });\n    let userThread = await response.json();\n    console.log(userThread); // let idThread = userThread._id\n    // localStorage.setItem('_id', idThread)\n\n    renderThreadMessage(userThread); // renderInfoUser(userThread)\n\n    if (!response.ok) {\n      throw new Error(`No connection ${url}, status: ${response.status}`);\n    }\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n\ngetThreadMessages();\n\nfunction renderThreadMessage(userThread) {\n  userThread.forEach(function (elem, index, arr) {\n    let message = arr[index].body;\n    Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"cloudMyMessage\"])(message); // console.log(message);\n  });\n} // function renderInfoUser(userThread) {\n//     let date= userThread[0].user;\n//     console.log(date)\n// date.forEach(function (elem) {\n//\n//         let user = date;\n//         let name = elem.name;\n//         let email = elem.email;\n//         let position = elem.position;\n//         let description = elem.description;\n//         let phone = elem.phone;\n//         let address = elem.address;\n//         let organization = elem.organization;\n//         createDateСhosenUser(\"./assets/images/lyall-2.png\", name, position, description);\n//         createdateUserInfo('Email', email);\n//         createdateUserInfo('Phone', phone);\n//         createdateUserInfo('Adress', address);\n//         createdateUserInfo('Organization', organization);\n//\n// });\n// }\n// function setOnClick(elemId, callback) {\n//     let thread = document.getElementById('elemId');\n//     console.log(thread)\n//      thread.addEventListener('click', callback);\n// }\n// setOnClick('send', getThreadMessages)\n\n//# sourceURL=webpack:///./src/assets/scripts/retrieve-all-thread-messages.js?");

/***/ }),

/***/ "./src/assets/scripts/retrieve-all-threads.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/retrieve-all-threads.js ***!
  \****************************************************/
/*! exports provided: getAllThreads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllThreads\", function() { return getAllThreads; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/assets/scripts/common.js\");\n // import {cloudMyMessage} from './common.js';\n\nasync function getAllThreads() {\n  if (localStorage.getItem('token')) {\n    let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/threads';\n\n    try {\n      const response = await fetch(url, {\n        method: 'GET',\n        headers: {\n          'x-access-token': localStorage.token\n        }\n      });\n      let thread = await response.json(); // console.log(thread)\n\n      createThreadMessageUser(thread);\n      createDataAtr(thread);\n\n      if (!response.ok) {\n        throw new Error(`No connection ${url}, status: ${response.status}`);\n      }\n    } catch (error) {\n      console.error('Error:', error); // return window.location.replace('log-in.html')\n    }\n  }\n}\ngetAllThreads();\n\nfunction createThreadMessageUser(thread) {\n  thread.forEach(function (elem, index, arr) {\n    let name = arr[index].users[1].name; // let message = arr[index].last_message.body;\n\n    let date = arr[index].created_at.slice(0, 10);\n    Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"createImgNameDateMessUser\"])(\"./assets/images/michelle.png\", name, date);\n  });\n}\n\nfunction createDataAtr(thread) {\n  let idThread;\n  thread.forEach(function (elem, index, arr) {\n    idThread = arr[index]._id;\n    console.log(idThread);\n  });\n  console.log(idThread); // g.setAttribute('data-id-thread', idThread)\n}\n\n//# sourceURL=webpack:///./src/assets/scripts/retrieve-all-threads.js?");

/***/ }),

/***/ "./src/assets/scripts/send-message.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/send-message.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/assets/scripts/common.js\");\n\n\nasync function sendMessage(e) {\n  e.preventDefault();\n  let message = document.getElementById('textarea').value;\n  let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages'; // let idThread = localStorage.getItem('_id');\n  // console.log (idThread)\n\n  let token = localStorage.getItem('token');\n  let dataRaw = {\n    \"thread\": {\n      \"_id\": '5e1a1c818ec2f49ab3e59ab2'\n    },\n    \"message\": {\n      \"body\": message\n    }\n  };\n  console.log(dataRaw);\n\n  try {\n    const response = await fetch(url, {\n      method: 'POST',\n      body: JSON.stringify(dataRaw),\n      headers: {\n        'x-access-token': localStorage.token,\n        'Content-Type': 'application/json'\n      }\n    });\n    console.log(localStorage.token);\n    let result = await response.json();\n    console.log(result);\n\n    if (!response.ok) {\n      throw new Error(`No connection ${url}, status: ${response.status}`);\n    } // let idThread = result.thread\n    // localStorage.setItem('thread', idThread);\n    // console.log(idThread)\n\n\n    Object(_common_js__WEBPACK_IMPORTED_MODULE_0__[\"cloudMyMessage\"])(message);\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n\nfunction setOnClickByElemId(elemId, callback) {\n  let sendButton = document.getElementById(elemId);\n  sendButton.addEventListener('click', callback);\n}\n\nsetOnClickByElemId('submit', sendMessage);\nlet disabledButton = document.getElementById(\"submit\");\ndisabledButton.disabled = true;\n\nfunction validateForm() {\n  const messageForm = \"messageForm\";\n  const messageTextarea = \"messageTextarea\";\n  let empty = document.forms[messageForm][messageTextarea].value;\n\n  if (empty == '') {\n    disabledButton.disabled = true;\n  } else {\n    disabledButton.removeAttribute('disabled');\n  }\n}\n\nsetOnClickByElemId('submit', validateForm);\nlet writeMessage = document.getElementById('textarea');\n\nwriteMessage.oninput = function () {\n  validateForm();\n};\n\nfunction cleanTextarea() {\n  document.getElementById('textarea').value = \"\";\n}\n\nsetOnClickByElemId('submit', cleanTextarea);\n\n//# sourceURL=webpack:///./src/assets/scripts/send-message.js?");

/***/ }),

/***/ "./src/assets/scripts/start-thread.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/start-thread.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("async function startThread() {\n  // e.preventDefault();\n  let url = 'http://localhost:3000/api/threads';\n  let idUser = localStorage.getItem('_id');\n  let dataRaw = {\n    \"user\": {\n      \"_id\": localStorage._id\n    }\n  };\n\n  try {\n    const response = await fetch(url, {\n      method: 'POST',\n      body: JSON.stringify(dataRaw),\n      headers: {\n        'Authorization': localStorage.token,\n        'Content-Type': 'application/json'\n      }\n    });\n    console.log(localStorage.token);\n    console.log(dataRaw);\n    let result = await response.json();\n\n    if (!response.ok) {\n      throw new Error(`No connection ${url}, status: ${response.status}`);\n    }\n\n    let token = await response.headers.get('x-auth-token');\n    localStorage.setItem('token', token);\n    console.log(localStorage);\n    let idUser = result.user;\n    localStorage.setItem('_id', idUser);\n    console.log(idUser);\n  } catch (error) {\n    console.error('Error:', error);\n  }\n} // function setOnClickHandlerByElemId(elemId, callback) {\n//     let threadClick = document.getElementById(elemId);\n//     threadClick.addEventListener('click', callback)\n// }\n// setOnClickHandlerByElemId('userThread', startThread)\n\n//# sourceURL=webpack:///./src/assets/scripts/start-thread.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scripts_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scripts/common */ \"./src/assets/scripts/common.js\");\n/* harmony import */ var _assets_scripts_send_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scripts/send-message */ \"./src/assets/scripts/send-message.js\");\n/* harmony import */ var _assets_scripts_retrieve_all_threads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/scripts/retrieve-all-threads */ \"./src/assets/scripts/retrieve-all-threads.js\");\n/* harmony import */ var _assets_scripts_start_thread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/scripts/start-thread */ \"./src/assets/scripts/start-thread.js\");\n/* harmony import */ var _assets_scripts_start_thread__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_scripts_start_thread__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_scripts_retrieve_all_thread_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/scripts/retrieve-all-thread-messages */ \"./src/assets/scripts/retrieve-all-thread-messages.js\");\n/* harmony import */ var _assets_styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/styles/scss/main.scss */ \"./src/assets/styles/scss/main.scss\");\n/* harmony import */ var _assets_styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });