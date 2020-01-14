import {createImgNameDateMessUser} from './common'

async function getAllThreads() {
    // let token = localStorage.getItem('token');
    // console.log(token)
    if (localStorage.getItem('token')) {
        let url = 'http://localhost:3000/api/threads';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': localStorage.token,
                }
            });
            let thread = await response.json();
            createThreadMessageUser(thread);
            console.log(thread);
            if (!response.ok) {
                throw new Error(`No connection ${url}, status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error:', error);
            return window.location.replace('log-in.html')
        }
    }
}

getAllThreads()

function createThreadMessageUser(thread) {
    thread.forEach(function (elem, index, arr) {
        if (!elem.users.me) {
            let name = arr[index].users[1].name;
            let message = arr[index].last_message.body;
            let date = arr[index].last_message.created_at.slice(0, 10);
            createImgNameDateMessUser("./assets/images/michelle.png", name, date, message);
        }
    })
}