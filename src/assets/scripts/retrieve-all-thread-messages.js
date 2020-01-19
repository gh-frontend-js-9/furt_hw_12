import {createImgNameDateMessUser} from './common'
import {cloudMyMessage} from './common.js';
import {createDateСhosenUser} from './common.js';
import {createdateUserInfo} from './common.js';

async function getThreadMessages() {
    // e.preventDefault();
    let token = localStorage.getItem('token');
    console.log(token);
    // let id = localStorage.getItem('_id');
    // console.log(id)
    // let url = `https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/${id}`;
    let url = `https://geekhub-frontend-js-9.herokuapp.com/api/threads/messages/5e1a1c818ec2f49ab3e59ab2`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.token,
            }
        });
        let userThread = await response.json();
        console.log(userThread)

        // let idThread = userThread._id
        // localStorage.setItem('_id', idThread)

        renderThreadMessage(userThread)
        // renderInfoUser(userThread)
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
getThreadMessages()

function renderThreadMessage(userThread) {
    userThread.forEach(function (elem, index, arr) {
        let message = arr[index].body
        cloudMyMessage(message);
        // console.log(message);
    });
}

// function renderInfoUser(userThread) {
//     let date= userThread[0].user;
//     console.log(date)
    // date.forEach(function (elem) {
    //
    //         let user = date;
    //         let name = elem.name;
    //         let email = elem.email;
    //         let position = elem.position;
    //         let description = elem.description;
    //         let phone = elem.phone;
    //         let address = elem.address;
    //         let organization = elem.organization;
    //         createDateСhosenUser("./assets/images/lyall-2.png", name, position, description);
    //         createdateUserInfo('Email', email);
    //         createdateUserInfo('Phone', phone);
    //         createdateUserInfo('Adress', address);
    //         createdateUserInfo('Organization', organization);
    //
    // });
// }

// function setOnClick(elemId, callback) {
//     let thread = document.getElementById('elemId');
//     console.log(thread)
//      thread.addEventListener('click', callback);
// }
// setOnClick('send', getThreadMessages)