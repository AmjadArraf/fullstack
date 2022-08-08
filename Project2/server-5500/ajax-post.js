import {addToHtml} from "./appendage-functions.js"
import { stores } from "./stores.js";

$('#postSyncByAjax').on('click', function(){
    console.log('Request is sending now')

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/stores-timeout',
        data: JSON.stringify(stores),
        contentType: "application/json; charset=UTF-8",
        dataType: 'json',
        async: false,
        success: function(data){
            addToHtml(data)
        },
        error: function(err){
            console.log(err)
            console.log(err.status)
        }
    })
})

$('#postAsyncByAjax').on('click', function(){
    $.ajaxSetup({
        contentType: "application/json; charset=UTF-8",
    })

    $.post('http://localhost:3000/stores-timeout', JSON.stringify(stores))
    .done(function(data){
        addToHtml(data)
    })
    .fail(function(err){
        console.log(err)
        console.log(err.status)
    })
})