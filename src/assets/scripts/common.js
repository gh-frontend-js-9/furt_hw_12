let rowSection = document.getElementById('row-section');
rowSection.classList.add('row-section');

let navColumn = document.createElement('div');
navColumn.classList.add('nav-column');

function createAnchorIconClassList (faIconClass){
    let anchor = document.createElement('a');
    anchor.classList.add('nav-column__icon');
    anchor.href = '#';
    let icon = anchor.appendChild(document.createElement('i'));
    icon.classList.add('fa', 'fa--hovered', faIconClass, 'fa-2x');
    icon.setAttribute('aria-hidden', 'true');

    return rowSection.appendChild(navColumn).appendChild(anchor).appendChild(icon);
}
createAnchorIconClassList ('fa-home');
createAnchorIconClassList ('fa-bars');
createAnchorIconClassList ('fa-line-chart');
createAnchorIconClassList ('fa-envelope');
createAnchorIconClassList ('fa-users');

// conversation-column
let conversationColumn = document.createElement('div');
conversationColumn.classList.add('conversation-column');

function createImgNameDateMessUser (imgSrc, name, date, messageText) {

    let conversationUser = document.createElement('div');
    conversationUser.classList.add('user', 'conversation-column__user');

    let userImgNameDate = document.createElement('div');
    userImgNameDate.classList.add('user__img-name-date');

    let userImg = document.createElement('img');
    userImg.src = imgSrc;

    let userName = document.createElement('span');
    userName.classList.add('user__name');
    userName.innerHTML = name;
    let userMessDate = document.createElement('span');
    userMessDate.classList.add('user__mess-date');
    userMessDate.innerHTML = date;

    let userImgNameMessDateFragment = document.createDocumentFragment()
    userImgNameMessDateFragment.appendChild(userImgNameDate);

    userImgNameDate.appendChild(userImg);
    userImgNameDate.appendChild(userName);
    userImgNameDate.appendChild(userMessDate);

    let userMessage = document.createElement('p');
    userMessage.classList.add('user__message');
    userMessage.innerHTML = messageText;

    let userMessageInfoСontainer= document.createDocumentFragment()
    userMessageInfoСontainer.appendChild(conversationUser);
    conversationUser.appendChild(userImgNameMessDateFragment)
    conversationUser.appendChild(userMessage)

    return rowSection.appendChild(conversationColumn).appendChild(conversationUser).appendChild(userMessageInfoСontainer);
}

createImgNameDateMessUser("./assets/images/michelle.png", 'Michelle Stewart', 'Today, 5:32 PM','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.');
createImgNameDateMessUser("./assets/images/jolene.png", 'Jolene Slater', '10 April','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.');
createImgNameDateMessUser("./assets/images/lyall.png", 'Lyall Roach', '8 April','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.');
createImgNameDateMessUser("./assets/images/dominic.png", 'Dominic Lynton', '2 April','Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.');

// dialog-column
let dialogСolumn = document.createElement('div');
dialogСolumn.classList.add('dialog-column');

function formWriteMessage () {
    let form = document.createElement('form');
    form.classList.add('form-block', 'dialog-column__form-block');
    form.method = 'GET';
    form.name = 'messageForm';

    let writeMessage = document.createElement('textarea');
    writeMessage.classList.add('form-block__textarea');
    writeMessage.placeholder = 'Write a wessage';
    writeMessage.name = 'messageTextarea';
    writeMessage.cols = 70;

    return rowSection.appendChild(dialogСolumn).appendChild(form).appendChild(writeMessage);
}
formWriteMessage()

function cloudMyMessage (){
    let myMessage = document.createElement('div');
    myMessage.classList.add('my-message','dialog-column__my-message');

    let myMessageContainer = document.createElement('div');
    myMessageContainer.classList.add('my-message__container');
    let myMessageCloud = document.createElement('p');
    myMessageCloud.classList.add('my-message__cloud');
    myMessageCloud.innerHTML = "Hello!";

    let myMessageSendTime = document.createElement('p');
    myMessageSendTime.classList.add('my-message__time');
    let date = new Date();
    let optionsDate = {
        month: 'long',
        year: 'numeric',
        day: 'numeric' ,
        hour:  'numeric',
        hour12 : true,
        minute : 'numeric'
    };
    myMessageSendTime.innerHTML = date.toLocaleString('en-US', optionsDate);

    let myMessageImg = document.createElement('img');
    myMessageImg.classList.add('my-message__img');
    myMessageImg.src = "./assets/images/i.png";

    let myMessageCloudTimeContainer = document.createDocumentFragment();
    myMessageCloudTimeContainer.appendChild(myMessageContainer);
    myMessageContainer.appendChild(myMessageCloud);
    myMessageContainer.appendChild(myMessageSendTime);

    let myMessageCloudImgContainer = document.createDocumentFragment();
    myMessageCloudImgContainer.appendChild(myMessage);
    myMessage.appendChild(myMessageContainer)
    myMessage.appendChild(myMessageImg);

    return rowSection.appendChild(dialogСolumn).appendChild(myMessage).appendChild(myMessageCloudImgContainer);
}
cloudMyMessage ()

function validateForm() {
    let empty = document.forms["messageForm"]["messageTextarea"].value;
    if (empty == "") {
        return false;
    }
}