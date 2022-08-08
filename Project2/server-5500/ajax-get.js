import {addToHtml} from "./appendage-functions.js"

$('#syncByAjax').on('click', function(){
    console.log('Request is sending now')

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/stores-timeout',
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

$('#asyncByAjax').on('click', function(){
    console.log('Request is sending now')

    $.get('http://localhost:3000/stores-timeout')
    .done(function(data){
        addToHtml(data)
    })
    .fail(function(err){
        console.log(err)
        console.log(err.status)
    })
})