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

/***/ "./src/assets/scripts/messages/common.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/messages/common.js ***!
  \***********************************************/
/*! exports provided: cloudMyMessage, createDateСhosenUser, createdateUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloudMyMessage\", function() { return cloudMyMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDateСhosenUser\", function() { return createDateСhosenUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createdateUserInfo\", function() { return createdateUserInfo; });\n/* harmony import */ var _retrieve_all_threads__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieve-all-threads */ \"./src/assets/scripts/messages/retrieve-all-threads.js\");\n\n\nlet body = document.getElementById('body');\nbody.classList.add('messenger-body');\nlet rowSection = document.getElementById('row-section');\nrowSection.classList.add('row-section'); //////////////////rowOptions\n\nlet rowMessOptions = document.getElementById('row-mess-options');\nrowMessOptions.classList.add('options', 'row-mess-options');\nlet messOptions = document.createElement('div');\nmessOptions.classList.add('options__buttons');\n\nfunction createOptionsIcon(faIconClass, nameButton) {\n  let anchor = document.createElement('a');\n  anchor.classList.add('options__icon', 'icon--hovered');\n  anchor.href = '#';\n  anchor.innerHTML = nameButton;\n  let icon = anchor.appendChild(document.createElement('i'));\n  icon.classList.add('fa', faIconClass);\n  icon.setAttribute('aria-hidden', 'true');\n  return rowMessOptions.appendChild(messOptions).appendChild(anchor).appendChild(icon);\n}\n\ncreateOptionsIcon('fa-inbox', 'Inbox (2)');\ncreateOptionsIcon('fa-paper-plane', 'Sent');\ncreateOptionsIcon('fa-trash', 'Trash');\n\nfunction createSelect() {\n  let optSelectBlock = document.createElement('div');\n  optSelectBlock.classList.add('options__select-block');\n  let optFilterMess = document.createElement('select');\n  optFilterMess.classList.add('options__filter-mess');\n  optFilterMess.name = 'filterMessages';\n  optFilterMess.size = '1';\n  optFilterMess.options[0] = new Option(\"Date\", \"Date\");\n  optFilterMess.options[1] = new Option(\"Read\", \"Read\");\n  optFilterMess.options[2] = new Option(\"Unread\", \"Unread\");\n  return rowMessOptions.appendChild(optSelectBlock).appendChild(optFilterMess);\n}\n\ncreateSelect(); //////////// navColumn\n\nlet navColumn = document.getElementById('navColumn');\nnavColumn.classList.add('nav-column');\n\nfunction createAnchorIconClass(faIconClass) {\n  let anchor = document.createElement('a');\n  anchor.classList.add('nav-column__icon');\n  anchor.href = '#';\n  let icon = anchor.appendChild(document.createElement('i'));\n  icon.classList.add('fa', 'fa--color', 'fa--hovered', faIconClass, 'fa-2x');\n  icon.setAttribute('aria-hidden', 'true');\n  return navColumn.appendChild(anchor).appendChild(icon);\n}\n\ncreateAnchorIconClass('fa-home');\ncreateAnchorIconClass('fa-bars');\ncreateAnchorIconClass('fa-line-chart');\ncreateAnchorIconClass('fa-envelope');\ncreateAnchorIconClass('fa-users'); //////////// dialog-column\n\nlet dialogСolumn = document.getElementById('dialogColumn');\ndialogСolumn.classList.add('dialog-column');\nlet dialogColumnBlock = document.createElement('div');\ndialogColumnBlock.classList.add('dialog-column__block');\ndialogColumnBlock.id = 'dialogColumnBlock';\nfunction cloudMyMessage(message, date, classMess) {\n  // dialogColumnBlock.innerHTML = ''\n  let myMessage = document.createElement('div');\n  myMessage.classList.add('my-message', 'dialog-column__my-message', classMess);\n  let myMessageContainer = document.createElement('div');\n  myMessageContainer.classList.add('my-message__container');\n  let myMessageCloud = document.createElement('p');\n  myMessageCloud.classList.add('my-message__cloud');\n  myMessageCloud.innerHTML = message;\n  let myMessageSendTime = document.createElement('p');\n  myMessageSendTime.classList.add('my-message__time');\n  myMessageSendTime.innerHTML = date;\n  let myMessageImg = document.createElement('span');\n  myMessageImg.classList.add('fa', 'fa-user-secret', 'fa-2x', 'my-message__img');\n  let myMessageCloudTimeContainer = document.createDocumentFragment();\n  myMessageCloudTimeContainer.appendChild(myMessageContainer);\n  myMessageContainer.appendChild(myMessageCloud);\n  myMessageContainer.appendChild(myMessageSendTime);\n  let myMessageCloudImgContainer = document.createDocumentFragment();\n  myMessageCloudImgContainer.appendChild(myMessage);\n  myMessage.appendChild(myMessageContainer);\n  myMessage.appendChild(myMessageImg);\n  return dialogСolumn.appendChild(dialogColumnBlock).appendChild(myMessageCloudImgContainer);\n} ///////////////// cloudMyMessage\n\nlet form = document.createElement('form');\nform.classList.add('form-block', 'dialog-column__form-block');\n\nfunction formWriteMessage() {\n  form.method = 'GET';\n  form.name = 'messageForm';\n  form.action = '#';\n  let writeMessage = document.createElement('textarea');\n  writeMessage.classList.add('form-block__textarea');\n  writeMessage.id = 'textarea';\n  writeMessage.placeholder = 'Write a wessage';\n  writeMessage.name = 'messageTextarea';\n  return dialogСolumn.appendChild(form).appendChild(writeMessage);\n}\n\nformWriteMessage();\n\nfunction sendMessageButton() {\n  let sendMessageButton = document.createElement('button');\n  sendMessageButton.classList.add('button', 'button--hovered', 'form-block__button');\n  sendMessageButton.innerHTML = 'Send';\n  sendMessageButton.type = 'submit';\n  sendMessageButton.id = 'submit';\n  sendMessageButton.name = 'submit';\n  return form.appendChild(sendMessageButton);\n}\n\nsendMessageButton(); /////////////////// userInfoColumn\n\nlet userDateColumn = document.getElementById('userInfoColumn');\nuserDateColumn.classList.add('date', 'user-column-date');\nfunction createDateСhosenUser(userName, userJobPosition, userAboutHim) {\n  let dateUserImg = document.createElement('span');\n  dateUserImg.classList.add('fa', 'fa-user-secret', 'fa-5x', 'date__user-img');\n  let dateUserName = document.createElement('p');\n  dateUserName.classList.add('date__user-name');\n  dateUserName.innerHTML = userName;\n  let dateUserJobPosition = document.createElement('p');\n  dateUserJobPosition.classList.add('date__user-job-position');\n  dateUserJobPosition.innerHTML = userJobPosition;\n  let dateUserAbout = document.createElement('p');\n  dateUserAbout.classList.add('date__user-about');\n  dateUserAbout.innerHTML = userAboutHim;\n  let dateContainer = document.createDocumentFragment();\n  dateContainer.appendChild(userDateColumn);\n  userDateColumn.appendChild(dateUserImg);\n  userDateColumn.appendChild(dateUserName);\n  userDateColumn.appendChild(dateUserJobPosition);\n  userDateColumn.appendChild(dateUserAbout);\n  return dateContainer;\n}\nfunction createdateUserInfo(titleInfo, info) {\n  let dateUserTitleInfo = document.createElement('p');\n  dateUserTitleInfo.classList.add('date__user-title-info');\n  dateUserTitleInfo.innerHTML = titleInfo;\n  let dateUserInfo = document.createElement('p');\n  dateUserInfo.classList.add('date__user-info');\n  dateUserInfo.innerHTML = info;\n  return rowSection.appendChild(userDateColumn).appendChild(dateUserTitleInfo).appendChild(dateUserInfo);\n}\n\n//# sourceURL=webpack:///./src/assets/scripts/messages/common.js?");

/***/ }),

/***/ "./src/assets/scripts/messages/get-user-by-id.js":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/messages/get-user-by-id.js ***!
  \*******************************************************/
/*! exports provided: getUserById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserById\", function() { return getUserById; });\n/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ \"./src/assets/scripts/messages/common.js\");\n\n\nasync function getUserById(userThread) {\n  let token = localStorage.getItem('token');\n  let myId = localStorage.getItem('_id');\n  let userId;\n  let id;\n  userThread.forEach(function (elem) {\n    userId = elem.user._id;\n\n    if (userId !== myId) {\n      id = userId;\n    } else {\n      id != userId;\n    }\n  });\n  let url = `https://geekhub-frontend-js-9.herokuapp.com/api/users/${id}`;\n\n  try {\n    const response = await fetch(url, {\n      method: 'GET',\n      headers: {\n        'x-access-token': localStorage.token\n      }\n    });\n    let userInfo = await response.json();\n\n    if (response.status === 200) {\n      let userInfoColumn = document.getElementById('userInfoColumn');\n      userInfoColumn.innerHTML = '';\n      renderInfoUser(userInfo);\n    }\n\n    if (response.status === 500) {\n      messageIdUndefined();\n    } else if (!response.ok) {\n      throw new Error(`No connection ${url}, status: ${response.status}`);\n    }\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n\nfunction renderInfoUser(userInfo) {\n  let name = userInfo.name;\n  let email = userInfo.email;\n  let position = userInfo.position;\n  let description = userInfo.description;\n  let phone = userInfo.phone;\n  let address = userInfo.address;\n  let organization = userInfo.organization;\n  Object(_common_js__WEBPACK_IMPORTED_MODULE_0__[\"createDateСhosenUser\"])(name, position, description);\n  Object(_common_js__WEBPACK_IMPORTED_MODULE_0__[\"createdateUserInfo\"])('Email', email);\n  Object(_common_js__WEBPACK_IMPORTED_MODULE_0__[\"createdateUserInfo\"])('Phone', phone);\n  Object(_common_js__WEBPACK_IMPORTED_MODULE_0__[\"createdateUserInfo\"])('Adress', address);\n  Object(_common_js__WEBPACK_IMPORTED_MODULE_0__[\"createdateUserInfo\"])('Organization', organization);\n}\n\nfunction messageIdUndefined() {\n  let userInfoColumn = document.getElementById('userInfoColumn');\n  userInfoColumn.innerHTML = '';\n  let message = document.createElement('p');\n  message.classList.add('user-column__message');\n  message.innerHTML = 'You do not have access to this user information until you have a dialog with him.';\n  userInfoColumn.appendChild(message);\n}\n\n//# sourceURL=webpack:///./src/assets/scripts/messages/get-user-by-id.js?");

/***/ }),

/***/ "./src/assets/scripts/messages/retrieve-all-thread-messages.js":
/*!*********************************************************************!*\
  !*** ./src/assets/scripts/messages/retrieve-all-thread-messages.js ***!
  \*********************************************************************/
/*! exports provided: getThreadMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getThreadMessages\", function() { return getThreadMessages; });\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ \"./src/assets/scripts/messages/common.js\");\n/* harmony import */ var _get_user_by_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-user-by-id */ \"./src/assets/scripts/messages/get-user-by-id.js\");\n/* harmony import */ var _start_thread_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start-thread.js */ \"./src/assets/scripts/messages/start-thread.js\");\n\n\n\n ////////////////////getAllUsers\n\nlet userElem;\n\nasync function getAllUsers() {\n  let token = localStorage.getItem('token');\n  console.log(token);\n  let url = `https://geekhub-frontend-js-9.herokuapp.com/api/users/all`;\n\n  try {\n    const response = await fetch(url, {\n      method: 'GET',\n      headers: {\n        'x-access-token': localStorage.token\n      }\n    });\n    let allUsers = await response.json();\n    console.log(allUsers);\n    let modal = document.getElementById('modal');\n    modal.classList.add('modal');\n    let modalContent = document.createElement('div');\n    modalContent.classList.add('modal__content');\n    let button = document.createElement('button');\n    button.classList.add('button-close');\n    button.innerHTML = 'X';\n    button.id = 'close-button';\n\n    function renderUsers(container, userElem, startConversation) {\n      let renderAllUsersContainer = userName => {\n        console.log(userElem);\n        let user = document.createElement('div');\n        user.classList.add('user', 'user--hovered', 'modal-container__user');\n        user.setAttribute('data-user-id', userElem._id);\n        user.addEventListener('click', startConversation);\n        let userNameModal = document.createElement('p');\n        userNameModal.classList.add('user__name', 'modal-container__name');\n        userNameModal.innerHTML = userName;\n        modal.appendChild(modalContent).appendChild(user).appendChild(userNameModal);\n        modal.appendChild(button);\n      };\n\n      let renderNameUser = () => {\n        let userName = userElem.name;\n        renderAllUsersContainer(userName);\n      };\n\n      renderNameUser();\n    }\n\n    allUsers.forEach(function (userElem, index, arr) {\n      renderUsers(document.getElementById('modal__content'), userElem, event => {\n        var usersContainer = event.target.closest('[data-user-id]');\n        let userIdThread = usersContainer.getAttribute('data-user-id');\n        console.log(userIdThread);\n        Object(_start_thread_js__WEBPACK_IMPORTED_MODULE_2__[\"startThread\"])(userIdThread);\n      });\n    });\n\n    if (!response.ok) {\n      throw new Error(`No connection ${url}, status: ${response.status}`);\n    }\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n\nfunction displayNone() {\n  modal.style.display = 'none';\n}\n\nsetInterval(window.onload = function () {\n  let closeButton = document.getElementById('close-button');\n\n  if (closeButton) {\n    closeButton.addEventListener('click', displayNone);\n  }\n});\nsetInterval(window.onload = function () {\n  let newConverseButton = document.getElementById('newConverseButton');\n\n  if (newConverseButton) {\n    newConverseButton.addEventListener('click', getAllUsers);\n  }\n}); //////////////////////////////////////// getThreadMessages\n\nlet userThread;\nlet date;\nlet threadIdSendMess;\nasync function getThreadMessages(threadId) {\n  threadIdSendMess = threadId;\n  let token = localStorage.getItem('token');\n  console.log(token);\n  let url = `https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/${threadId}?sort=desc`;\n\n  try {\n    const response = await fetch(url, {\n      method: 'GET',\n      headers: {\n        'x-access-token': localStorage.token\n      }\n    });\n    userThread = await response.json();\n    console.log(userThread);\n    renderThreadMessage(userThread);\n    Object(_get_user_by_id__WEBPACK_IMPORTED_MODULE_1__[\"getUserById\"])(userThread);\n\n    if (!response.ok) {\n      throw new Error(`No connection ${url}, status: ${response.status}`);\n    }\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n\nfunction renderThreadMessage(userThread) {\n  userThread.reverse();\n  userThread.forEach(function (elem, index, arr) {\n    date = elem.created_at.slice(11, 16);\n    let message = elem.body;\n    let myId = localStorage.getItem('_id');\n    console.log(myId);\n\n    if (elem.user._id == myId) {\n      Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"cloudMyMessage\"])(message, date, 'my-mess');\n    } else {\n      Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"cloudMyMessage\"])(message, date, 'not-my-mess');\n    }\n  });\n} /////////////////////////// sendMessage\n\n\nasync function sendMessage(e) {\n  e.preventDefault();\n  let message = document.getElementById('textarea').value;\n  let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages';\n  let token = localStorage.getItem('token');\n  let dataRaw = {\n    \"thread\": {\n      \"_id\": threadIdSendMess\n    },\n    \"message\": {\n      \"body\": message\n    }\n  };\n  console.log(dataRaw);\n\n  try {\n    const response = await fetch(url, {\n      method: 'POST',\n      body: JSON.stringify(dataRaw),\n      headers: {\n        'x-access-token': localStorage.token,\n        'Content-Type': 'application/json'\n      }\n    });\n    console.log(localStorage.token);\n    let result = await response.json();\n    console.log(result);\n\n    if (!response.ok) {\n      throw new Error(`No connection ${url}, status: ${response.status}`);\n    }\n\n    let date = result.created_at.slice(11, 16);\n    Object(_common__WEBPACK_IMPORTED_MODULE_0__[\"cloudMyMessage\"])(message, date, 'my-mess');\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n\nfunction setOnClickByElemId(elemId, callback) {\n  let sendButton = document.getElementById(elemId);\n  sendButton.addEventListener('click', callback);\n}\n\nlet disabledButton = document.getElementById(\"submit\");\ndisabledButton.disabled = true;\n\nfunction validateForm() {\n  const messageForm = \"messageForm\";\n  const messageTextarea = \"messageTextarea\";\n  let empty = document.forms[messageForm][messageTextarea].value;\n\n  if (empty == '') {\n    disabledButton.disabled = true;\n  } else {\n    disabledButton.removeAttribute('disabled');\n  }\n}\n\nlet writeMessage = document.getElementById('textarea');\n\nwriteMessage.oninput = function () {\n  validateForm();\n};\n\nfunction cleanTextarea() {\n  document.getElementById('textarea').value = \"\";\n}\n\nsetOnClickByElemId('submit', validateForm);\nsetOnClickByElemId('submit', sendMessage);\nsetOnClickByElemId('submit', cleanTextarea);\n\n//# sourceURL=webpack:///./src/assets/scripts/messages/retrieve-all-thread-messages.js?");

/***/ }),

/***/ "./src/assets/scripts/messages/retrieve-all-threads.js":
/*!*************************************************************!*\
  !*** ./src/assets/scripts/messages/retrieve-all-threads.js ***!
  \*************************************************************/
/*! exports provided: getAllThreads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllThreads\", function() { return getAllThreads; });\n/* harmony import */ var _retrieve_all_thread_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieve-all-thread-messages */ \"./src/assets/scripts/messages/retrieve-all-thread-messages.js\");\n\nlet conversationColumn = document.getElementById('threadsContainer');\nconversationColumn.classList.add('conversation-column');\nlet button = document.createElement('button');\nbutton.classList.add('button-new-converse', 'button-new-converse--hovered', 'threadsContainer__button-new-converse');\nbutton.innerHTML = '+ New conversation';\nbutton.id = 'newConverseButton';\nbutton.type = 'submit';\nbutton.name = 'submit';\nconversationColumn.appendChild(button);\nasync function getAllThreads() {\n  let token = localStorage.getItem('token');\n  let myId = localStorage.getItem('_id');\n\n  if (localStorage.getItem('token')) {\n    let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/threads?sort=desc';\n    let thread;\n\n    try {\n      const response = await fetch(url, {\n        method: 'GET',\n        headers: {\n          'x-access-token': localStorage.token\n        }\n      });\n      let threads = await response.json();\n\n      function renderThread(container, thread, startConversation) {\n        let renderThreadContainer = (name, date, messageText) => {\n          let threadElem = document.createElement('div');\n          threadElem.classList.add('user', 'user--hovered', 'conversation-column__user');\n          threadElem.setAttribute('data-thread-id', thread._id);\n          threadElem.addEventListener('click', startConversation);\n          let userImgNameDate = document.createElement('div');\n          userImgNameDate.classList.add('user__img-name-date');\n          let userImg = document.createElement('span');\n          userImg.classList.add('fa', 'fa-user-secret', 'fa-3x');\n          userImg.setAttribute('aria-hidden', 'true');\n          let userName = document.createElement('span');\n          userName.classList.add('user__name');\n          userName.id = 'userName';\n          userName.innerHTML = name;\n          let userMessDate = document.createElement('span');\n          userMessDate.classList.add('user__mess-date');\n          userMessDate.innerHTML = date;\n          let userImgNameMessDateFragment = document.createDocumentFragment();\n          userImgNameMessDateFragment.appendChild(userImgNameDate);\n          userImgNameDate.appendChild(userImg);\n          userImgNameDate.appendChild(userName);\n          userImgNameDate.appendChild(userMessDate);\n          let userMessage = document.createElement('p');\n          userMessage.classList.add('user__message');\n          userMessage.innerHTML = messageText;\n          let userMessageInfoСontainer = document.createDocumentFragment();\n          userMessageInfoСontainer.appendChild(threadElem);\n          threadElem.appendChild(userImgNameMessDateFragment);\n          threadElem.appendChild(userMessage);\n          conversationColumn.appendChild(userMessageInfoСontainer);\n          conversationColumn.appendChild(button);\n        };\n\n        let renderNameDateThread = () => {\n          let date = thread.created_at.slice(0, 10);\n          let myId = localStorage.getItem('_id');\n          let lastMessage;\n\n          if (thread.message === null) {\n            lastMessage = '';\n          } else {\n            lastMessage = thread.message.body;\n          }\n\n          if (thread.users.length == 2 && thread.users[0]._id === myId) {\n            let name = thread.users[1].name;\n            return renderThreadContainer(name, date, lastMessage);\n          } else if (thread.users.length == 2 && !thread.users[0]._id === myId) {\n            let name = thread.users[0].name;\n            return renderThreadContainer(name, date, lastMessage);\n          } else {\n            let name = thread.users[0].name;\n            return renderThreadContainer(name, date, lastMessage);\n          }\n        };\n\n        renderNameDateThread();\n      }\n\n      threads.forEach(function (thread, index, arr) {\n        renderThread(document.getElementById('threadsContainer'), thread, event => {\n          var threadContainer = event.target.closest('[data-thread-id]');\n          let threadId = threadContainer.getAttribute('data-thread-id');\n          threadContainer.style.backgroundColor = '#404359';\n          cleanTextarea();\n          Object(_retrieve_all_thread_messages__WEBPACK_IMPORTED_MODULE_0__[\"getThreadMessages\"])(threadId);\n        });\n      });\n\n      if (!response.ok) {\n        throw new Error(`No connection ${url}, status: ${response.status}`);\n      }\n    } catch (error) {\n      console.error('Error:', error);\n      return window.location.replace('log-in.html');\n    }\n  }\n}\ngetAllThreads();\n\nlet cleanTextarea = () => {\n  document.getElementById('textarea').value = \"\";\n};\n\n//# sourceURL=webpack:///./src/assets/scripts/messages/retrieve-all-threads.js?");

/***/ }),

/***/ "./src/assets/scripts/messages/start-thread.js":
/*!*****************************************************!*\
  !*** ./src/assets/scripts/messages/start-thread.js ***!
  \*****************************************************/
/*! exports provided: startThread */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startThread\", function() { return startThread; });\n/* harmony import */ var _retrieve_all_threads__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retrieve-all-threads */ \"./src/assets/scripts/messages/retrieve-all-threads.js\");\n\nasync function startThread(userIdThread) {\n  let token = localStorage.getItem('token');\n  let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/threads';\n  let dataRaw = {\n    \"user\": {\n      \"_id\": userIdThread\n    }\n  };\n\n  try {\n    const response = await fetch(url, {\n      method: 'POST',\n      body: JSON.stringify(dataRaw),\n      headers: {\n        'x-access-token': localStorage.token,\n        'Content-Type': 'application/json'\n      }\n    });\n    console.log(dataRaw);\n    let result = await response.json();\n\n    if (!response.ok) {\n      throw new Error(`No connection ${url}, status: ${response.status}`);\n    }\n  } catch (error) {\n    console.error('Error:', error);\n  }\n}\n\n//# sourceURL=webpack:///./src/assets/scripts/messages/start-thread.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scripts_messages_retrieve_all_threads__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scripts/messages/retrieve-all-threads */ \"./src/assets/scripts/messages/retrieve-all-threads.js\");\n/* harmony import */ var _assets_scripts_messages_start_thread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scripts/messages/start-thread */ \"./src/assets/scripts/messages/start-thread.js\");\n/* harmony import */ var _assets_scripts_messages_retrieve_all_thread_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/scripts/messages/retrieve-all-thread-messages */ \"./src/assets/scripts/messages/retrieve-all-thread-messages.js\");\n/* harmony import */ var _assets_scripts_messages_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/scripts/messages/common */ \"./src/assets/scripts/messages/common.js\");\n/* harmony import */ var _assets_scripts_messages_get_user_by_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/scripts/messages/get-user-by-id */ \"./src/assets/scripts/messages/get-user-by-id.js\");\n/* harmony import */ var _assets_styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/styles/scss/main.scss */ \"./src/assets/styles/scss/main.scss\");\n/* harmony import */ var _assets_styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });