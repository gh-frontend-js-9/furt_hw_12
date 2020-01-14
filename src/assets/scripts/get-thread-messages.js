import {createImgNameDateMessUser} from './common'

async function getThreadMessages() {
    let token = localStorage.getItem('token');
    console.log(token)
    let id = localStorage.getItem('_id');
    console.log(id)
    let url =  `http://localhost:3000/api/threads/messages/${id}`;
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
        localStorage.setItem('_id', idThread);
        console.log(idThread)
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
console.log(getThreadMessages())