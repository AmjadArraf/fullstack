import {testFunction, addToHtml} from "./appendage-functions.js"
import { stores } from "./stores.js";

const testButton2 = document.querySelector('#testButton2');
const postSyncByXHR = document.querySelector('#postSyncByXHR');
const postAsyncByXHR = document.querySelector('#postAsyncByXHR');

testButton2.addEventListener('click', testFunction)
postSyncByXHR.addEventListener('click', postDataSync)
postAsyncByXHR.addEventListener('click', postDataaSync)


function postDataSync() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/stores-timeout', false)

    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    
    xhr.send(JSON.stringify(stores));

    if(xhr.status === 200) {
        addToHtml(JSON.parse(xhr.response))
    } else {
        console.log(xhr.status)
    }
}

function postDataaSync() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/stores-timeout')

    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    xhr.onload = function() {
        if(xhr.status === 200) {
            addToHtml(JSON.parse(xhr.response))
        } else {
            console.log(xhr.status)
        }
    }

    xhr.send(JSON.stringify(stores));
}