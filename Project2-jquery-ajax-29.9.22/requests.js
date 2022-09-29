import {renderInfo, renderMoreInfo, renderMoreInfoCaseFalse} from "./renderInformation.js"
import {checkLocalStorage, insertToLoacalStorage} from "./localstorage.js"
import {appendProgress} from "./appendage-functions.js"

function getInfo(){
    $.get('https://api.coingecko.com/api/v3/coins/list')
    .done((data) => {
        renderInfo(data)
    })
    .fail((error) => {
        console.log(error)
        }
)}


function moreInfo(id){
    appendProgress(id)
    const check = checkLocalStorage(id)
    if(check){
    $.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .done((data) => {
        renderMoreInfo(data, id)
        insertToLoacalStorage(data, id)
    })
        .fail((error) => {
        console.log(error)
    })
}else{
        renderMoreInfoCaseFalse(id)
}
}

export {getInfo, moreInfo}