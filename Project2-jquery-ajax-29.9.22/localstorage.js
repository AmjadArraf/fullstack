import {modalFunction} from "./modal.js"
import {falseToggle, removeFromArr} from "./appendage-functions.js"

function addToLocalStorage(id){
    let storedObjects = JSON.parse(localStorage.getItem('storedObjects'))
    storedObjects = storedObjects ? storedObjects : []
    if(storedObjects.length == 5){
        modalFunction(storedObjects)
        falseToggle(id)
    }else{
    let arr = [id.substring(7), $(`#${id}`).attr('symbol')]
    storedObjects.push(arr)
    localStorage.setItem('storedObjects', JSON.stringify(storedObjects))
    }
}

function removeFromLocalStorage(id){
    let realId = id.substring(7)
    let storedObjects = JSON.parse(localStorage.getItem('storedObjects'))
    let newStoredObjects = removeFromArr(storedObjects, realId)
    localStorage.setItem('storedObjects', JSON.stringify(newStoredObjects))
}

function checkedCards(){
    let storedObjects = JSON.parse(localStorage.getItem('storedObjects'))
    storedObjects = storedObjects ? storedObjects : []
    for(const index in storedObjects){
        $(`#toggle-${storedObjects[index][0]}`).prop('checked', true)
    }
}

function insertToLoacalStorage(data, id){
    let storedMoreInfo = JSON.parse(localStorage.getItem('storedMoreInfo'))
    storedMoreInfo = storedMoreInfo ? storedMoreInfo : []

    for(const index in storedMoreInfo){
        if(storedMoreInfo[index][0]==id){
            storedMoreInfo.splice(index, 1)
        }
    }

    let time = new Date().getTime()
    let arr = [id, time, data.image.small, data.market_data.current_price.usd, data.market_data.current_price.eur, data.market_data.current_price.ils]
    storedMoreInfo.push(arr)
    localStorage.setItem('storedMoreInfo', JSON.stringify(storedMoreInfo))
}


function checkLocalStorage(id){
    let storedMoreInfo = JSON.parse(localStorage.getItem('storedMoreInfo'))
    storedMoreInfo = storedMoreInfo ? storedMoreInfo : []
    for(const moreInfo of storedMoreInfo){
        let time = new Date().getTime()
        if((moreInfo[0]==id)&&(time-moreInfo[1]<120000)){
            return false;
        }
    }
    return true;
}

export {addToLocalStorage, removeFromLocalStorage, checkedCards, insertToLoacalStorage, checkLocalStorage}