import {createDateСhosenUser} from './common.js';
import {createdateUserInfo} from './common.js';

export async function getUserById(userThread) {
    let token = localStorage.getItem('token');
    let myId = localStorage.getItem('_id');
    let userId
    let id
    userThread.forEach(function (elem) {
        userId = elem.user._id;
        if (userId !== myId) {
            id = userId;
        } else {
            id != userId;
        }
    })
    let url = `https://geekhub-frontend-js-9.herokuapp.com/api/users/${id}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.token,
            }
        });
        let userInfo = await response.json();
        if (response.status === 200 ){
            let userInfoColumn = document.getElementById('userInfoColumn')
            userInfoColumn.innerHTML = ''
            renderInfoUser(userInfo)
        }
        if (response.status === 500 ){
            messageIdUndefined()
        }
        else if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function renderInfoUser(userInfo) {
    let name = userInfo.name;
    let email = userInfo.email;
    let position = userInfo.position;
    let description = userInfo.description;
    let phone = userInfo.phone;
    let address = userInfo.address;
    let organization = userInfo.organization;
    createDateСhosenUser(name, position, description);
    createdateUserInfo('Email', email);
    createdateUserInfo('Phone', phone);
    createdateUserInfo('Adress', address);
    createdateUserInfo('Organization', organization);
}
function messageIdUndefined() {
    let userInfoColumn = document.getElementById('userInfoColumn')
    userInfoColumn.innerHTML = ''
    let message = document.createElement('p')
    message.classList.add('user-column__message')
    message.innerHTML = 'You do not have access to this user information until you have a dialog with him.'
    userInfoColumn.appendChild(message)
}