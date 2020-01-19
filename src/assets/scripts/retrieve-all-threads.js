import {createImgNameDateMessUser} from './common'
// import {cloudMyMessage} from './common.js';

export async function getAllThreads() {
    if (localStorage.getItem('token')) {
        let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/threads';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-access-token':localStorage.token ,
                }
            });
            let thread = await response.json();
            // console.log(thread)
            createThreadMessageUser(thread);
            createDataAtr(thread);
            if (!response.ok) {
                throw new Error(`No connection ${url}, status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error:', error);
            // return window.location.replace('log-in.html')
        }
    }
}
getAllThreads()

function createThreadMessageUser(thread) {
    thread.forEach(function (elem, index, arr) {
            let name = arr[index].users[1].name;
            // let message = arr[index].last_message.body;
            let date = arr[index].created_at.slice(0, 10);
            createImgNameDateMessUser("./assets/images/michelle.png", name, date);
    })
}

function createDataAtr(thread) {
    let idThread
    thread.forEach(function (elem, index, arr) {
        idThread = arr[index]._id;
        console.log(idThread)
    });
    console.log(idThread)
    // g.setAttribute('data-id-thread', idThread)
}




