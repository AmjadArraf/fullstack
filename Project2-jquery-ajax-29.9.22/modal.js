import {removeFromLocalStorage} from "./localstorage.js"

function modalFunction(storedObjects) {
    $('#mBody').empty()
    for(const val of storedObjects){
        $('#mBody').append(`<div class="padding-20 card" id='coin-${val[0]}'><h2>${val[1].toUpperCase()}</h2>
        <div class="form-check form-switch">
  <input class="form-check-input modalToggle" symbol='${val[1].toUpperCase()}' type="checkbox" role="switch" id="modaltoggle-${val[0]}" checked>
</div>
        <p>'${val[0]}'</p>
<div class="collapse" id="collapseExample-${val[0]}" openOrClose="false" getOrNot="false">
  <div class="card card-body" id='card-${val[0]}'>

  </div>
</div>
        </div>`)
    }
    $('#cardModal').modal('show');
    $('#saveCards').on('click', function(){
        modalToggles()
        $('#cardModal').modal('hide')
    })
}

function modalToggles(){
    let toggles = $('.modalToggle')
    for(const index in toggles){
        if(toggles[index].checked == false){
            let modalToggleId = $(toggles[index]).attr('id')
            let idWithToggle = modalToggleId.substring(5)
            let toggleId = modalToggleId.substring(12)
            $(`#toggle-${toggleId}`).prop('checked', false)
            removeFromLocalStorage(idWithToggle)
        }
    }
}

export {modalFunction, modalToggles}