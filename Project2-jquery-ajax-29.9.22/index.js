import {getInfo} from "./requests.js"
import {filterCards, clearFn, showHideFn} from "./appendage-functions.js"

$('#homeBtn').on('click', function(){
    showHideFn('#mainDiv')
})
$('#liveButton').on('click', function(){
    showHideFn('#liveDiv')
    graph()
})
$('#aboutButton').on('click', function(){
    showHideFn('#aboutInfo')
})

$('#searchBtn').on('click', filterCards)
$('#clearBtn').on('click', clearFn)

const parallax = document.getElementById('bodyDiv')

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset
    parallax.style.backgroundPositionY = offset * 0.5 + 'px'
})

getInfo()

// if(($(`#collapseExample-${id}`).attr('getOrNot')) == 'false'){
    //     $(`#collapseExample-${id}`).attr('getOrNot', 'true')
    

// function moreInfo(id){
//     if(($(`#collapseExample-${id}`).attr('getOrNot')) == 'false'){
//         $(`#collapseExample-${id}`).attr('getOrNot', 'true')
//     $.get(`https://api.coingecko.com/api/v3/coins/${id}`)
//     .done((data) => {
//         renderMoreInfo(data, id)
//     })
//     .fail((error) => {
//         console.log(error)
//         })
//         setInterval(function(){$(`#collapseExample-${id}`).attr('getOrNot', 'false')}, 120000)
//     }
// }

// https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC&tsyms=USD