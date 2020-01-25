import {createDataAtr} from './retrieve-all-threads';
import {getAllThreads} from './retrieve-all-threads';

let body = document.getElementById('body');
body.classList.add('messenger-body');
let rowSection = document.getElementById('row-section');
rowSection.classList.add('row-section');

//////////////////rowOptions
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

    return rowMessOptions.appendChild(optSelectBlock).appendChild(optFilterMess);
}

createSelect();

//////////// navColumn
let navColumn = document.getElementById('navColumn');
navColumn.classList.add('nav-column');

function createAnchorIconClass(faIconClass) {
    let anchor = document.createElement('a');
    anchor.classList.add('nav-column__icon');
    anchor.href = '#';
    let icon = anchor.appendChild(document.createElement('i'));
    icon.classList.add('fa', 'fa--color', 'fa--hovered', faIconClass, 'fa-2x');
    icon.setAttribute('aria-hidden', 'true');

    return navColumn.appendChild(anchor).appendChild(icon);
}

createAnchorIconClass('fa-home');
createAnchorIconClass('fa-bars');
createAnchorIconClass('fa-line-chart');
createAnchorIconClass('fa-envelope');
createAnchorIconClass('fa-users');

//////////// dialog-column
let dialogСolumn = document.getElementById('dialogColumn');
dialogСolumn.classList.add('dialog-column');
let dialogColumnBlock = document.createElement('div');
dialogColumnBlock.classList.add('dialog-column__block');
dialogColumnBlock.id = 'dialogColumnBlock'

export function cloudMyMessage(message, date, classMess) {
    // dialogColumnBlock.innerHTML = ''
    let myMessage = document.createElement('div');
    myMessage.classList.add('my-message', 'dialog-column__my-message', classMess);
    let myMessageContainer = document.createElement('div');
    myMessageContainer.classList.add('my-message__container');
    let myMessageCloud = document.createElement('p');
    myMessageCloud.classList.add('my-message__cloud');
    myMessageCloud.innerHTML = message;
    let myMessageSendTime = document.createElement('p');
    myMessageSendTime.classList.add('my-message__time');
    myMessageSendTime.innerHTML = date;

    let myMessageImg = document.createElement('span');
    myMessageImg.classList.add('fa', 'fa-user-secret', 'fa-2x', 'my-message__img');

    let myMessageCloudTimeContainer = document.createDocumentFragment();
    myMessageCloudTimeContainer.appendChild(myMessageContainer);
    myMessageContainer.appendChild(myMessageCloud);
    myMessageContainer.appendChild(myMessageSendTime);

    let myMessageCloudImgContainer = document.createDocumentFragment();
    myMessageCloudImgContainer.appendChild(myMessage);
    myMessage.appendChild(myMessageContainer);
    myMessage.appendChild(myMessageImg);

    return dialogСolumn.appendChild(dialogColumnBlock).appendChild(myMessageCloudImgContainer);
}

///////////////// cloudMyMessage
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

    return dialogСolumn.appendChild(form).appendChild(writeMessage);
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

/////////////////// userInfoColumn
let userDateColumn = document.getElementById('userInfoColumn');
userDateColumn.classList.add('date', 'user-column-date');

export function createDateСhosenUser(userName, userJobPosition, userAboutHim) {
    let dateUserImg = document.createElement('span');
    dateUserImg.classList.add('fa', 'fa-user-secret', 'fa-5x', 'date__user-img')

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

    return dateContainer;
}

export function createdateUserInfo(titleInfo, info) {
    let dateUserTitleInfo = document.createElement('p');
    dateUserTitleInfo.classList.add('date__user-title-info');
    dateUserTitleInfo.innerHTML = titleInfo;
    let dateUserInfo = document.createElement('p');
    dateUserInfo.classList.add('date__user-info');
    dateUserInfo.innerHTML = info;

    return rowSection.appendChild(userDateColumn).appendChild(dateUserTitleInfo).appendChild(dateUserInfo);
}