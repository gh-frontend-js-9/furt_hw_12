import {cloudMyMessage} from './common.js';

async function sendMessage(e) {
    let message = document.getElementById('textarea').value;
    e.preventDefault();
    let url = 'http://localhost:3000/api/threads/messages';
    let idThread = localStorage.getItem('_id');
    let dataRaw = {
        "thread": {
            "_id": localStorage._id,
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
                'Authorization': localStorage.token,
                'Content-Type': 'application/json'
            }
        });
        console.log(localStorage.token);

        let result = await response.json();
        console.log(result)
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
        cloudMyMessage(message);
        let idThread = result.thread
        localStorage.setItem('_id', idThread);
        console.log(idThread)

    } catch (error) {
        console.error('Error:', error);
    }
}

function setOnClickByElemId(elemId, callback) {
    let sendButton = document.getElementById(elemId);
    sendButton.addEventListener('click', callback);
}

setOnClickByElemId('submit', sendMessage)

let disabledButton = document.getElementById("submit")
disabledButton.disabled = true;

function validateForm() {
    const messageForm = "messageForm";
    const messageTextarea = "messageTextarea";
    let empty = document.forms[messageForm][messageTextarea].value;
    if (empty == '') {
        disabledButton.disabled = true;
    } else {
        disabledButton.removeAttribute('disabled')
    }
}

setOnClickByElemId('submit', validateForm);

let writeMessage = document.getElementById('textarea');
writeMessage.oninput = function () {
    validateForm()
}

function cleanTextarea() {
    document.getElementById('textarea').value = "";
}

setOnClickByElemId('submit', cleanTextarea);