import {createStoreList} from "./appendage-functions.js"

const callback = document.querySelector("#callback")

callback.addEventListener('click', getData)

function getData(){
    console.log('Request is sending now!')
    const storesArray = []
    const productsArray = []
    const departmentsArray = []

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/stores')
    xhr.responseType = 'json'

    xhr.onload = function() {
        if(xhr.status === 200) {
            const stores = xhr.response 
            for(const key in stores){
                storesArray.push(stores[key])
                const xhr = new XMLHttpRequest();
                xhr.open('POST', `http://localhost:3000/bulk-departments/`)
                xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
                xhr.onload = function() {
                if(xhr.status === 200) {
                const departments = JSON.parse(xhr.response)

                for(const index in departments){
                    stores[key][index]= departments[index]
                    const xhr = new XMLHttpRequest();
                    xhr.open('POST', 'http://localhost:3000/bulk-products')
                    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
                    xhr.onload = function() {
                        if(xhr.status === 200) {
                            const products = JSON.parse(xhr.response)
                            stores[key][index]['prods']=products
                            // console.log(stores)
                            // departments[index][1] = products
                            // for(const product of products){
                            // productsArray.push(product)
                            // }
                        } else {
                        console.log(xhr.status)
                        }
                        if (index == departments.length -1 && key == stores.length -1) {
                        createStoreList(stores)
                        }
                    }
                        xhr.send(JSON.stringify(departments[index].products));
                }
                        } else {
                        console.log(xhr.status)
                        }
                        }
                xhr.send(JSON.stringify(stores[key].departments));
            }
        } else {
            console.log(xhr.status)
        }
    }
    xhr.send();
}

