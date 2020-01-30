import {startThread} from "./start-thread";

async function getAllUsers() {
    let token = localStorage.getItem('token');
    console.log(token);
    let url = `https://geekhub-frontend-js-9.herokuapp.com/api/users/all`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.token,
            }
        });
        let allUsers = await response.json();
        console.log(allUsers);

        let modal = document.getElementById('modal');
        modal.classList.add('modal');
        let modalContent = document.createElement('div');
        modalContent.classList.add('modal__content');
        let button = document.createElement('button');
        button.classList.add('button-close');
        button.innerHTML = 'X';
        button.id = 'close-button';

        function renderUsers(container, userElem, startConversation) {
            let renderAllUsersContainer = (userName) => {
                console.log(userElem)
                let user = document.createElement('div');
                user.classList.add('user', 'user--hovered', 'modal-container__user');
                user.setAttribute('data-user-id', userElem._id);
                user.addEventListener('click', startConversation)

                let userNameModal = document.createElement('p');
                userNameModal.classList.add('user__name', 'modal-container__name');
                userNameModal.innerHTML = userName;

                modal.appendChild(modalContent).appendChild(user).appendChild(userNameModal)
                modal.appendChild(button)
            };
            let renderNameUser = () => {
                let userName = userElem.name
                renderAllUsersContainer(userName)
            };
            renderNameUser()
        }

        allUsers.forEach(function (userElem, index, arr) {
            renderUsers(document.getElementById('modal__content'), userElem, (event) => {
                var usersContainer = event.target.closest('[data-user-id]');
                let userIdThread = usersContainer.getAttribute('data-user-id');
                console.log(userIdThread)
                startThread(userIdThread);
            })
        });
        if (!response.ok) {
            throw new Error(`No connection ${url}, status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayNone() {
    modal.style.display = 'none'
}

setInterval(window.onload = function () {
    let closeButton = document.getElementById('close-button');
    if (closeButton) {
        closeButton.addEventListener('click', displayNone)
    }
});

setInterval(window.onload = function () {
    let newConverseButton = document.getElementById('newConverseButton')
    if (newConverseButton) {
        newConverseButton.addEventListener('click', getAllUsers)
    }
})