import {cloudMyMessage} from './common.js';

async function sendMessage(e) {
    let message = document.getElementById('textarea').value;
    e.preventDefault();
    let url = 'http://localhost:3000/api/threads/messages';
    let dataRaw = {
        "thread": {
            "_id": "5e18780b0a7a824ce07bf0a1"
        },
        "message": {
            "body": message
        }
    }
    console.log(message)
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
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
        let token = await response.headers.get('x-auth-token');
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
    const messageForm =  "messageForm";
    const messageTextarea = "messageTextarea";
    let empty = document.forms[messageForm][messageTextarea].value;
    if (empty == '') {
        disabledButton.disabled = true;
     }
    else{
        disabledButton.removeAttribute('disabled')
    }
}
setOnClickByElemId('submit', validateForm);

let writeMessage = document.getElementById('textarea');
writeMessage.oninput = function(){
    validateForm()
}

function cleanTextarea(){
    document.getElementById('textarea').value = "";
}
setOnClickByElemId('submit', cleanTextarea);

