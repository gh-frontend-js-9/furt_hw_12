function sendRequestForCurrent() {
    let token = localStorage.getItem('token');
    if (localStorage.getItem('token')) {
        fetch('http://localhost:3000/api/users/current', {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.token,
                'Content-Type': 'application/json'
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
        document.getElementById('container').innerHTML = 'Log in'
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
    let url = 'http://localhost:3000/api/users/login';
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
                'Authorization': localStorage.token,
                'Content-Type': 'application/json'
            }
        });
        console.log(localStorage.token);

        let result = await response.json();
        if (!response.ok) {
            return window.location.replace('sign-up.html')
        } else {
            document.getElementById('container').innerHTML = 'Successfully log in!';
            let token = await response.headers.get('x-auth-token');
            localStorage.setItem('token', token);
            console.log(localStorage);
            return window.location.replace('index.html')
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

//     123455678