import {getAllThreads} from './retrieve-all-threads';

export async function startThread(userIdThread) {
    let token = localStorage.getItem('token');
    let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/threads';
    let dataRaw = {
        "user": {
            "_id": userIdThread,
        }
    }
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(dataRaw),
            headers: {
                'x-access-token': localStorage.token,
                'Content-Type': 'application/json'
            }
        });
        console.log(dataRaw)

        let result = await response.json();
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}