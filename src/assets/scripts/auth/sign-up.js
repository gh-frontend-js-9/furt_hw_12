async function SendDateFormLogIn(e) {
    e.preventDefault();
    let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/users/';
    let email = document.getElementById("email").value;
    let password = document.getElementById('password').value;
    let name = document.getElementById('name').value;

    let user = {
        "name": name,
        "password": password,
        "email": email
    }
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
        console.log(result);
        if (!response.ok) {
            registeredUserMess(result);
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
        let token =  response.headers.get('X-Auth-Token');
        localStorage.setItem('token', token);
        // console.log(localStorage.token)
        return window.location.replace('log-in.html')
    } catch (error) {
        console.error('Error:', error);
    }
}

function setOnClickHandlerByElemId(elemId, callback) {
    let button = document.getElementById(elemId);
    button.addEventListener('click', callback);
}
setOnClickHandlerByElemId('submit', SendDateFormLogIn);

function registeredUserMess(result) {
    if (result.errors.message == 'There was a duplicate key error'){
        document.getElementById('container').innerHTML = 'You are already registered';
    }
}
