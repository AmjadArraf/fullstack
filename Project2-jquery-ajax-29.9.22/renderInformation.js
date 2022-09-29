import {cardStatus, switchStatus} from "./appendage-functions.js"
import {checkedCards} from "./localstorage.js"

function renderInfo(data){
    for(let i=8; i<10011; i+=50){
        $('#mainDiv').append(`<div class="padding-20 card" id='coin-${data[i].id}'><h2 id="h2-${data[i].id}">${data[i].symbol.toUpperCase()}</h2>
        
        <div class="form-check form-switch">
  <input class="form-check-input" symbol='${data[i].symbol.toUpperCase()}' type="checkbox" role="switch" id="toggle-${data[i].id}">
</div>
        <p>${data[i].name}</p>       
<p>
  <button id='${data[i].id}' class="btn btn-primary button bglb" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample-${data[i].id}" aria-expanded="false" aria-controls="collapseExample">
    More Info
  </button>
</p>
<div class="collapse" id="collapseExample-${data[i].id}" openOrClose="false" getOrNot="false">
  <div class="card card-body" id='card-${data[i].id}'>

  </div>
</div>
        </div>`)
    }
    cardStatus()
    switchStatus()
    checkedCards()
}


function renderMoreInfo(data, id){
    $(`#card-${id}`).empty()
    $(`#card-${id}`).append(`<div class="bg-black"><img src="${data.image.small}" alt="${id}">
    <h2 class="wt">Price</h2>
    <p class="wt">USD: ${data.market_data.current_price.usd}$</p>
    <p class="wt">EUR: ${data.market_data.current_price.eur}€</p>
    <p class="wt">ILS: ${data.market_data.current_price.ils}₪</p>
    </div>`)
}

function renderMoreInfoCaseFalse(id){
    let storedMoreInfo = JSON.parse(localStorage.getItem('storedMoreInfo'))
    for(const info of storedMoreInfo){
        if(info[0]==id){
            $(`#card-${id}`).empty()
            $(`#card-${id}`).append(`<div><img src="${info[2]}" alt="${id}">
            <h2 class="wt">Price</h2>
            <p class="wt">USD: ${info[3]}$</p>
            <p class="wt">EUR: ${info[4]}€</p>
            <p class="wt">ILS: ${info[5]}₪</p>
            </div>`)
        }
    }
}

export {renderInfo, renderMoreInfo, renderMoreInfoCaseFalse}