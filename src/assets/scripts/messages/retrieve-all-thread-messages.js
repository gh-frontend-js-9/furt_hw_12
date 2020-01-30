import {cloudMyMessage} from './common.js';
import {getUserById} from './get-user-by-id';

//////////////////////////////////////// getThreadMessages
let userThread;
let date;
let threadIdSendMess;

export async function getThreadMessages(threadId) {
    threadIdSendMess = threadId;
    let token = localStorage.getItem('token');
    console.log(token);
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
    console.log(dataRaw);
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
};

function cleanTextarea() {
    document.getElementById('textarea').value = "";
}

setOnClickByElemId('submit', validateForm);
setOnClickByElemId('submit', sendMessage);
setOnClickByElemId('submit', cleanTextarea);