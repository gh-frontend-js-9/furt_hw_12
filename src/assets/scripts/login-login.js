function sendRequestForCurrent() {
    let token = localStorage.getItem('token');
    if (localStorage.getItem('token')) {
        fetch('http://localhost:3000/api/users/current', {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.token
            }
        }).then((res) => {
            return res.json();
        }).then((user)=> {
            document.getElementById('container').innerHTML = 'Hi, ' + user.name;
        });
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
    const url = 'http://localhost:3000/api/users/login';
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
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        let result = await response.json();
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        } else {
            alert('Successfully log in');
            let token = await response.headers.get('x-auth-token');
            localStorage.setItem('token', token);
            console.log(localStorage);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
// console.log(SendDateFormLogIn(e))
//     123455678