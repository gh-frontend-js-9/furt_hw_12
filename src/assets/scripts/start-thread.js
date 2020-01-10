async function startThread(e) {
    e.preventDefault();
    const url = 'http://localhost:3000/api/threads';
    let dataRaw = {
        "user": {
            "_id":"5e0372ebfc1f770e14853757"
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







