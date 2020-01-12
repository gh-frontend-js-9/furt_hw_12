 async function startThread() {
    // e.preventDefault();
    const url = 'http://localhost:3000/api/threads';
    let dataRaw = {
        "user": {
            "_id":"5e18780b0a7a824ce07bf0a1"
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
    } catch (error) {
        console.error('Error:', error);
    }
}



// function setOnClickHandlerByElemId(elemId, callback) {
//     let threadClick = document.getElementById(elemId);
//     threadClick.addEventListener('click', callback)
// }
// setOnClickHandlerByElemId('userThread', startThread)






