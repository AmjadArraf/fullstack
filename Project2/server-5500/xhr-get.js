import { addToHtml, testFunction } from "./appendage-functions.js";

const syncByXHR = document.querySelector('#syncByXHR');
const asyncByXHR = document.querySelector('#asyncByXHR');
const testButton1 = document.querySelector('#testButton1');

syncByXHR.addEventListener('click', getDataSync)
asyncByXHR.addEventListener('click', getDataAsync)
testButton1.addEventListener('click', testFunction)

function getDataSync() {
    const xhr = new XMLHttpRequest();
    
    xhr.open('GET', 'http://localhost:3000/stores-timeout', false)
    
    xhr.send();
    console.log(xhr.response)
    if(xhr.status === 200) {
        addToHtml(JSON.parse(xhr.response))
    } else {
        console.log(xhr.status)
    }
}


function getDataAsync(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:3000/stores-timeout')

    xhr.responseType = 'json'
    xhr.onprogress = function() {
        console.log(xhr.readyState)
    }
    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log(xhr.readyState)
            addToHtml(xhr.response)
        } else {
            console.log(xhr.status)
        }
    }

    xhr.send();
}