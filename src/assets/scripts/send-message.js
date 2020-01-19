import {cloudMyMessage} from './common.js';

 async function sendMessage(e) {
    e.preventDefault();
    let message = document.getElementById('textarea').value;
    let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages';
    // let idThread = localStorage.getItem('_id');
    // console.log (idThread)
    let token = localStorage.getItem('token');
    let dataRaw = {
        "thread": {
            "_id": '5e1a1c818ec2f49ab3e59ab2'
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
        console.log(result)
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
        // let idThread = result.thread
        // localStorage.setItem('thread', idThread);
        // console.log(idThread)
        cloudMyMessage(message);

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