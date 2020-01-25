import {getThreadMessages} from './retrieve-all-thread-messages';

let conversationColumn = document.getElementById('threadsContainer');
conversationColumn.classList.add('conversation-column');

let button = document.createElement('button');
button.classList.add('button-new-converse', 'button-new-converse--hovered', 'threadsContainer__button-new-converse');
button.innerHTML = '+ New conversation';
button.id = 'newConverseButton';
button.type = 'submit'
button.name = 'submit'
conversationColumn.appendChild(button)

export async function getAllThreads() {
    let token = localStorage.getItem('token');
    let myId = localStorage.getItem('_id');
    if (localStorage.getItem('token')) {
        let url = 'https://geekhub-frontend-js-9.herokuapp.com/api/threads?sort=desc';
        let thread
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-access-token': localStorage.token,
                }
            });
            let threads = await response.json();



            function renderThread(container, thread, startConversation) {
                let renderThreadContainer = (name, date, messageText) => {
                    let threadElem = document.createElement('div');
                    threadElem.classList.add('user', 'user--hovered', 'conversation-column__user');
                    threadElem.setAttribute('data-thread-id', thread._id);
                    threadElem.addEventListener('click', startConversation)

                    let userImgNameDate = document.createElement('div');
                    userImgNameDate.classList.add('user__img-name-date');

                    let userImg = document.createElement('span');
                    userImg.classList.add ('fa', 'fa-user-secret', 'fa-3x')
                    userImg.setAttribute('aria-hidden', 'true')

                    let userName = document.createElement('span');
                    userName.classList.add('user__name');
                    userName.id = ('userName')
                    userName.innerHTML = name;
                    let userMessDate = document.createElement('span');
                    userMessDate.classList.add('user__mess-date');
                    userMessDate.innerHTML = date;

                    let userImgNameMessDateFragment = document.createDocumentFragment()
                    userImgNameMessDateFragment.appendChild(userImgNameDate)

                    userImgNameDate.appendChild(userImg);
                    userImgNameDate.appendChild(userName);
                    userImgNameDate.appendChild(userMessDate);

                    let userMessage = document.createElement('p');
                    userMessage.classList.add('user__message');
                    userMessage.innerHTML = messageText;

                    let userMessageInfoСontainer = document.createDocumentFragment()
                    userMessageInfoСontainer.appendChild(threadElem);
                    threadElem.appendChild(userImgNameMessDateFragment)
                    threadElem.appendChild(userMessage)

                    conversationColumn.appendChild(userMessageInfoСontainer);
                    conversationColumn.appendChild(button)
                }
                let renderNameDateThread = () => {
                    let date = thread.created_at.slice(0, 10);
                    let myId = localStorage.getItem('_id');
                    let lastMessage
                    if (thread.message === null) {
                        lastMessage = '';
                    } else {
                        lastMessage = thread.message.body;
                    }
                    if (thread.users.length == 2 && thread.users[0]._id === myId) {
                        let name = thread.users[1].name;
                        return renderThreadContainer(name, date, lastMessage);
                    } else if (thread.users.length == 2 && !thread.users[0]._id === myId) {
                        let name = thread.users[0].name;
                        return renderThreadContainer(name, date, lastMessage);
                    } else {
                        let name = thread.users[0].name;
                        return renderThreadContainer(name, date, lastMessage);
                    }
                }
                renderNameDateThread()
            }

            threads.forEach(function (thread, index, arr) {
                renderThread(document.getElementById('threadsContainer'), thread, (event) => {
                    var threadContainer = event.target.closest('[data-thread-id]');
                    let threadId = threadContainer.getAttribute('data-thread-id');

                    threadContainer.style.backgroundColor = '#404359';
                    cleanTextarea()
                    getThreadMessages(threadId)

                })
            });
            if (!response.ok) {
                throw new Error(`No connection ${url}, status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error:', error);
            return window.location.replace('log-in.html')
        }
    }
}

getAllThreads()

let cleanTextarea = () => {
    document.getElementById('textarea').value = "";
}