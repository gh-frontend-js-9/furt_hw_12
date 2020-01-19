function sendRequestForCurrent() {
    let token = localStorage.getItem('token');
    if (token) {
        fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/', {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.token,
            }
        }).then((res) => {
            console.log(res)
            return res.json();
        }).then((user) => {
            document.getElementById('container').innerHTML = 'Hi, ' + user.name;
        }).catch((error) =>{
            return window.location.replace('sign-up.html')
        })
        console.log(localStorage.token)
    } else {
        document.getElementById('container').innerHTML = 'Login, please'
    }
}
sendRequestForCurrent();

function setOnClickHandlerByElemId(elemId, callback) {
    let button = document.getElementById(elemId);
    button.addEventListener('click', SendDateFormLogIn)
}

setOnClickHandlerByElemId('submit', SendDateFormLogIn)

async function SendDateFormLogIn(e) {
    e.preventDefault();
    let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/users/login';
    let email = document.getElementById("email").value;
    let password = document.getElementById('password').value;

    let user = {
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
        let result = await response.json();
        console.log(localStorage.token);
        if (!response.ok) {
            wrongPasswordMess(result)
            return window.location.replace('sign-up.html')
        } else {
            successfullyLogIn()
            let token =  response.headers.get('X-Auth-Token');
            localStorage.setItem('token', token);
            console.log(localStorage);
            // return window.location.replace('index.html')
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function successfullyLogIn() {
    document.getElementById('container').innerHTML = 'Successfully log in!';
}
function wrongPasswordMess(result) {
    if (result.message == 'Wrong password'){
        document.getElementById('container').innerHTML = 'Wrong password';
    }
}