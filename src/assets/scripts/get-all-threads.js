import {createImgNameDateMessUser} from './common'

async function getAllThreads() {
    let token = localStorage.getItem('token');
    console.log(token)
    const url = 'http://localhost:3000/api/threads';
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': localStorage.token,
            }
        });
        let thread = await response.json();
        console.log(thread)
        for (let i = 0; i < thread.length; i++) {
            if (!thread[0].users[i].me){
            let name = thread[i].users[1].name;
            let message = thread[i].last_message.body;
            let date = thread[i].last_message.created_at.slice(0, 10);
            createImgNameDateMessUser("./assets/images/michelle.png", name, date, message)
            }
        }
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
getAllThreads()






