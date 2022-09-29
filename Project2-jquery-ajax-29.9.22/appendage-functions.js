import {addToLocalStorage, removeFromLocalStorage} from "./localstorage.js"
import {moreInfo} from "./requests.js"

function removeFromArr(arr, id) { 
    for(const index in arr){
        if(arr[index][0]==id){
            arr.splice(index, 1)
        }
    }
    return arr;
}

function switchStatus(){
    $('.form-check-input').on('change', function() {
        if ($(this).is(':checked')) {
            addToLocalStorage(this.id)
            
        }
        else {
           removeFromLocalStorage(this.id)
        }
    });
}

function cardStatus(){
    $('.button').on('click', function(){
        if( ($(`#collapseExample-${this.id}`).attr('openOrClose')) === 'false'){
            moreInfo(this.id)
            $(`#collapseExample-${this.id}`).attr('openOrClose', 'true')
        }else{
            $(`#collapseExample-${this.id}`).attr('openOrClose', 'false')
        }
    })
}

function clearFn(){
    $('#siteSearch')[0].value = ''
    let cards = $('.card')
    for(const card of cards){
        card.style.display = "block"
}
}

function filterCards(){
    const searchText = $('#siteSearch')[0].value
    const searchTextLT = searchText.toLowerCase().trim()
    let cards = $('.card')
    for(const card of cards){
        card.style.display = "none"
    }
        searchById(cards, searchTextLT)
        searchBySymbol(cards, searchTextLT)
}


function searchById(cards, searchTextLT){
    for(const card of cards){
        const cardId = card.id
        const realCardId = cardId.toLowerCase().substring(5)
        if(realCardId.search(searchTextLT) != -1){
            card.style.display = "block"
        }
    }
}


function searchBySymbol(cards, searchTextLT){
    for(const card of cards){
        const cardId = card.id
        const realCardId = cardId.toLowerCase().substring(5)
        const symbol = $(`#h2-${realCardId}`)[0].textContent.toLowerCase()
        if(symbol.search(searchTextLT) != -1){
            card.style.display = "block"
        }
    }
}


function falseToggle(id){
    $(`#${id}`).prop('checked', false)
}

function appendProgress(id){
    $(`#card-${id}`).append(`<div class="progress">
    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>`)
    }

    function showHideFn(id){
        console.log(id)
        let arr = ['#aboutInfo', '#liveDiv', '#mainDiv']
        for(const val of arr){
            if(val == id){
                console.log('yes')
                $(`${val}`).show()
            }else{
                $(`${val}`).hide()
            }
        }
    }


export {removeFromArr, switchStatus, cardStatus, clearFn, filterCards, falseToggle, appendProgress, showHideFn}