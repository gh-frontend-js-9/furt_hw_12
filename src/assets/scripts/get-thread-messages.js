import {createImgNameDateMessUser} from './common'
import {cloudMyMessage} from './common.js';
import {createDateСhosenUser} from './common.js';
import {createdateUserInfo} from './common.js';

async function getThreadMessages() {
    // e.preventDefault();
    let token = localStorage.getItem('token');
    console.log(token);
    let id = localStorage.getItem('_id');
    console.log(id)
    let url = `http://localhost:3000/api/threads/messages/${id}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.token,
            }
        });
        let userThread = await response.json();
        console.log(userThread)

        let idThread = userThread._id
        localStorage.setItem('_id', idThread)

        renderThreadMessage(userThread)
        infoUser(userThread)
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

getThreadMessages()

function renderThreadMessage(userThread) {
    let messagesThread = userThread.messages.reverse()
    messagesThread.forEach(function (elem) {
        cloudMyMessage(elem.body);
    });
    console.log(messagesThread);
}

function infoUser(userThread) {
    let date= userThread.users;
    date.forEach(function (elem, index) {
        if (elem.me) {
            let user = date;
            let name = elem.name;
            let email = elem.email;
            let position = elem.position;
            let description = elem.description;
            let phone = elem.phone;
            let address = elem.address;
            let organization = elem.organization;
            createDateСhosenUser("./assets/images/lyall-2.png", name, position, description);
            createdateUserInfo('Email', email);
            createdateUserInfo('Phone', phone);
            createdateUserInfo('Adress', address);
            createdateUserInfo('Organization', organization);
        }
    });
}

// function setOnClick(elemId, callback) {
//     let thread = document.getElementById('elemId');
//     console.log(thread)
//      thread.addEventListener('click', callback);
// }
// setOnClick('send', getThreadMessages)