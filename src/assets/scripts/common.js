import {createDataAtr} from './retrieve-all-threads';
import {getAllThreads} from './retrieve-all-threads';

let body = document.getElementById('body');
body.classList.add('body');

let rowSection = document.getElementById('row-section');
rowSection.classList.add('row-section');

//rowOptions
let rowMessOptions = document.getElementById('row-mess-options');
rowMessOptions.classList.add('options', 'row-mess-options');

let messOptions = document.createElement('div');
messOptions.classList.add('options__buttons');

function createOptionsIcon(faIconClass, nameButton) {
    let anchor = document.createElement('a');
    anchor.classList.add('options__icon', 'icon--hovered');
    anchor.href = '#';
    anchor.innerHTML = nameButton;

    let icon = anchor.appendChild(document.createElement('i'));
    icon.classList.add('fa', faIconClass);
    icon.setAttribute('aria-hidden', 'true');

    return rowMessOptions.appendChild(messOptions).appendChild(anchor).appendChild(icon);
}

createOptionsIcon('fa-inbox', 'Inbox (2)');
createOptionsIcon('fa-paper-plane', 'Sent');
createOptionsIcon('fa-trash', 'Trash');

function createSelect() {
    let optSelectBlock = document.createElement('div');
    optSelectBlock.classList.add('options__select-block');

    let optFilterMess = document.createElement('select');
    optFilterMess.classList.add('options__filter-mess');
    optFilterMess.name = 'filterMessages';
    optFilterMess.size = '1';
    optFilterMess.options[0] = new Option("Date", "Date")
    optFilterMess.options[1] = new Option("Read", "Read");
    optFilterMess.options[2] = new Option("Unread", "Unread");

    return rowMessOptions.appendChild(optSelectBlock).appendChild(optFilterMess)
}

createSelect()

// navColumn
let navColumn = document.createElement('div');
navColumn.classList.add('nav-column');

function createAnchorIconClass(faIconClass) {
    let anchor = document.createElement('a');
    anchor.classList.add('nav-column__icon');
    anchor.href = '#';
    let icon = anchor.appendChild(document.createElement('i'));
    icon.classList.add('fa', 'fa--color', 'fa--hovered', faIconClass, 'fa-2x');
    icon.setAttribute('aria-hidden', 'true');

    return rowSection.appendChild(navColumn).appendChild(anchor).appendChild(icon);
}

createAnchorIconClass('fa-home');
createAnchorIconClass('fa-bars');
createAnchorIconClass('fa-line-chart');
createAnchorIconClass('fa-envelope');
createAnchorIconClass('fa-users');

// conversation-column
let conversationColumn = document.createElement('div');
conversationColumn.classList.add('conversation-column');

export function createImgNameDateMessUser(imgSrc, name, date, messageText) {

    let conversationUser = document.createElement('div');
    conversationUser.classList.add('user', 'conversation-column__user');
    let userImgNameDate = document.createElement('div');
    userImgNameDate.classList.add('user__img-name-date');

    let userImg = document.createElement('img');
    userImg.src = imgSrc;
    let anchorThread = document.createElement('a');
    anchorThread.href = '#'
    anchorThread.classList.add('user__anchor-thread')
    anchorThread.id = ('userAnchorThread');
    let userName = document.createElement('span');
    userName.classList.add('user__name');
    userName.id = ('userName')
    userName.innerHTML = name;
    let userMessDate = document.createElement('span');
    userMessDate.classList.add('user__mess-date');
    userMessDate.innerHTML = date;

    let userImgNameMessDateFragment = document.createDocumentFragment()
    userImgNameMessDateFragment.appendChild(userImgNameDate).appendChild(anchorThread);

    anchorThread.appendChild(userImg);
    anchorThread.appendChild(userName);
    anchorThread.appendChild(userMessDate);

    let userMessage = document.createElement('p');
    userMessage.classList.add('user__message');
    userMessage.innerHTML = messageText;

    let userMessageInfoСontainer = document.createDocumentFragment()
    userMessageInfoСontainer.appendChild(conversationUser);
    conversationUser.appendChild(userImgNameMessDateFragment)
    conversationUser.appendChild(userMessage)

    return rowSection.appendChild(conversationColumn).appendChild(userMessageInfoСontainer);
}

// dialog-column
let dialogСolumn = document.createElement('div');
dialogСolumn.classList.add('dialog-column');
let dialogColumnBlock = document.createElement('div');
dialogColumnBlock.classList.add('dialog-column__block');

export function cloudMyMessage(message) {
    let myMessage = document.createElement('div');
    myMessage.classList.add('my-message', 'dialog-column__my-message');
    // myMessage.setAttribute('data-id-thread', idThread)
    let myMessageContainer = document.createElement('div');
    myMessageContainer.classList.add('my-message__container');
    let myMessageCloud = document.createElement('p');
    myMessageCloud.classList.add('my-message__cloud');
    myMessageCloud.innerHTML = message;
    let myMessageSendTime = document.createElement('p');
    myMessageSendTime.classList.add('my-message__time');
    let date = new Date();
    let optionsDate = {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        hour12: true,
        minute: 'numeric'
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

    return rowSection.appendChild(dialogСolumn).appendChild(dialogColumnBlock).appendChild(myMessageCloudImgContainer);
}

// cloudMyMessage
let form = document.createElement('form');
form.classList.add('form-block', 'dialog-column__form-block');

function formWriteMessage() {
    form.method = 'GET';
    form.name = 'messageForm';
    form.action = '#';

    let writeMessage = document.createElement('textarea');
    writeMessage.classList.add('form-block__textarea');
    writeMessage.id = 'textarea';
    writeMessage.placeholder = 'Write a wessage';
    writeMessage.name = 'messageTextarea';

    return rowSection.appendChild(dialogСolumn).appendChild(form).appendChild(writeMessage);
}

formWriteMessage();

function sendMessageButton() {
    let sendMessageButton = document.createElement('button');
    sendMessageButton.classList.add('button', 'button--hovered', 'form-block__button');
    sendMessageButton.innerHTML = 'Send';
    sendMessageButton.type = 'submit';
    sendMessageButton.id = 'submit';
    sendMessageButton.name = 'submit';
    return form.appendChild(sendMessageButton);
}

sendMessageButton();

// userDateColumn
let userDateColumn = document.createElement('div');
userDateColumn.classList.add('date', 'user-column-date');

export function createDateСhosenUser(userImgSrc, userName, userJobPosition, userAboutHim) {
    let dateUserImg = document.createElement('img');
    dateUserImg.classList.add('date__user-img');
    dateUserImg.src = userImgSrc;
    let dateUserName = document.createElement('p');
    dateUserName.classList.add('date__user-name');
    dateUserName.innerHTML = userName;
    let dateUserJobPosition = document.createElement('p');
    dateUserJobPosition.classList.add('date__user-job-position');
    dateUserJobPosition.innerHTML = userJobPosition;
    let dateUserAbout = document.createElement('p');
    dateUserAbout.classList.add('date__user-about');
    dateUserAbout.innerHTML = userAboutHim;

    let dateContainer = document.createDocumentFragment();
    dateContainer.appendChild(userDateColumn);
    userDateColumn.appendChild(dateUserImg);
    userDateColumn.appendChild(dateUserName);
    userDateColumn.appendChild(dateUserJobPosition);
    userDateColumn.appendChild(dateUserAbout);

    return rowSection.appendChild(dateContainer)
}

export function createdateUserInfo(titleInfo, info) {
    let dateUserTitleInfo = document.createElement('p');
    dateUserTitleInfo.classList.add('date__user-title-info');
    dateUserTitleInfo.innerHTML = titleInfo;
    let dateUserInfo = document.createElement('p');
    dateUserInfo.classList.add('date__user-info');
    dateUserInfo.innerHTML = info;

    return rowSection.appendChild(userDateColumn).appendChild(dateUserTitleInfo).appendChild(dateUserInfo)
}