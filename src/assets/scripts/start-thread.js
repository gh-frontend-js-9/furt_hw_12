async function startThread() {
    // e.preventDefault();
    let url = 'http://localhost:3000/api/threads';
    let idUser = localStorage.getItem('_id');
    let dataRaw = {
        "user": {
            "_id": localStorage._id,
        }
    }
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
        console.log(dataRaw)

        let result = await response.json();
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
        let token = await response.headers.get('x-auth-token');
        localStorage.setItem('token', token);
        console.log(localStorage);

        let idUser = result.user;
        localStorage.setItem('_id', idUser);
        console.log(idUser)
    } catch (error) {
        console.error('Error:', error);
    }
}

// function setOnClickHandlerByElemId(elemId, callback) {
//     let threadClick = document.getElementById(elemId);
//     threadClick.addEventListener('click', callback)
// }
// setOnClickHandlerByElemId('userThread', startThread)






