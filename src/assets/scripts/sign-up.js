async function SendDateFormLogIn(e) {
    e.preventDefault();
    const url = 'http://localhost:3000/api/users';
    let email = document.getElementById("email").value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;

    let user = {
        "name": name,
        "password": password,
        "email": email
    }
    console.log(user);
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response);

        let result = await response.json();
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
        let token = await response.headers.get('x-auth-token');
        localStorage.setItem('token', token);
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

function setOnClickHandlerByElemId(elemId, callback) {
    let button = document.getElementById(elemId);
    button.addEventListener('click', callback);
}
setOnClickHandlerByElemId('submit', SendDateFormLogIn);