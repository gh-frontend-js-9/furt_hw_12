import {createImgNameDateMessUser} from './common';
import {cloudMyMessage} from './common.js';
import {getUserById} from './get-user-by-id';
import {startThread} from './start-thread.js';

////////////////////getAllUsers
let userElem

async function getAllUsers() {
    let token = localStorage.getItem('token');
    console.log(token);
    let url = `https://geekhub-frontend-js-9.herokuapp.com/api/users/all`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.token,
            }
        });
        let allUsers = await response.json();
        console.log(allUsers)

        let modal = document.getElementById('modal');
        modal.classList.add('modal');
        let modalContent = document.createElement('div');
        modalContent.classList.add('modal__content');
        let button = document.createElement('button');
        button.classList.add('button-close');
        button.innerHTML = 'X';
        button.id = 'close-button'

        function renderUsers(container, userElem, startConversation) {
            let renderAllUsersContainer = (userName) => {
                console.log(userElem)
                let user = document.createElement('div');
                user.classList.add('user', 'user--hovered', 'modal-container__user');
                user.setAttribute('data-user-id', userElem._id);
                user.addEventListener('click', startConversation)

                let userNameModal = document.createElement('p');
                userNameModal.classList.add('user__name', 'modal-container__name');
                userNameModal.innerHTML = userName;

                modal.appendChild(modalContent).appendChild(user).appendChild(userNameModal)
                modal.appendChild(button)
            }
            let renderNameUser = () => {
                let userName = userElem.name
                renderAllUsersContainer(userName)
            }
            renderNameUser()
        }

        allUsers.forEach(function (userElem, index, arr) {
            renderUsers(document.getElementById('modal__content'), userElem, (event) => {
                var usersContainer = event.target.closest('[data-user-id]');
                let userIdThread = usersContainer.getAttribute('data-user-id');
                console.log(userIdThread)
                startThread(userIdThread);
            })
        });
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayNone() {
    modal.style.display = 'none'
}

setInterval(window.onload = function () {
    let closeButton = document.getElementById('close-button');
    if (closeButton) {
        closeButton.addEventListener('click', displayNone)
    }
})

setInterval(window.onload = function () {
    let newConverseButton = document.getElementById('newConverseButton')
    if (newConverseButton) {
        newConverseButton.addEventListener('click', getAllUsers)
    }
})

//////////////////////////////////////// getThreadMessages
let userThread
let date;
let threadIdSendMess;

export async function getThreadMessages(threadId) {
    threadIdSendMess = threadId;
    let token = localStorage.getItem('token');
    console.log(token)
    let url = `https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/${threadId}?sort=desc`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.token,
            }
        });
        userThread = await response.json();
        console.log(userThread)

        renderThreadMessage(userThread);
        getUserById(userThread);
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function renderThreadMessage(userThread) {
    userThread.reverse()
    userThread.forEach(function (elem, index, arr) {
        date = elem.created_at.slice(11, 16);
        let message = elem.body;
        let myId = localStorage.getItem('_id');
        console.log(myId)
        if (elem.user._id == myId) {
            cloudMyMessage(message, date, 'my-mess');
        } else {
            cloudMyMessage(message, date, 'not-my-mess');
        }
    });
}

/////////////////////////// sendMessage
async function sendMessage(e) {
    e.preventDefault();
    let message = document.getElementById('textarea').value;
    let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages';

    let token = localStorage.getItem('token');
    let dataRaw = {
        "thread": {
            "_id": threadIdSendMess
        },
        "message": {
            "body": message
        }
    }
    console.log(dataRaw)
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(dataRaw),
            headers: {
                'x-access-token': localStorage.token,
                'Content-Type': 'application/json'

            }
        });
        console.log(localStorage.token);

        let result = await response.json();
        console.log(result);
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
        let date = result.created_at.slice(11, 16);
        cloudMyMessage(message, date, 'my-mess');
    } catch (error) {
        console.error('Error:', error);
    }
}

function setOnClickByElemId(elemId, callback) {
    let sendButton = document.getElementById(elemId);
    sendButton.addEventListener('click', callback);
}

let disabledButton = document.getElementById("submit")
disabledButton.disabled = true;

function validateForm() {
    const messageForm = "messageForm";
    const messageTextarea = "messageTextarea";
    let empty = document.forms[messageForm][messageTextarea].value;
    if (empty == '') {
        disabledButton.disabled = true;
    } else {
        disabledButton.removeAttribute('disabled');
    }
}

let writeMessage = document.getElementById('textarea');
writeMessage.oninput = function () {
    validateForm()
}

function cleanTextarea() {
    document.getElementById('textarea').value = "";
}

setOnClickByElemId('submit', validateForm);
setOnClickByElemId('submit', sendMessage);
setOnClickByElemId('submit', cleanTextarea);

