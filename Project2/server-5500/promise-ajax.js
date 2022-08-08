import {createListForAjaxAndFetch} from "./appendage-functions.js"

const promiseAjax = document.querySelector("#promiseAjax")

promiseAjax.addEventListener('click', getDataPromise)


function getDataPromise(){
    console.log('Request is sending now!')
  
    let stores = []
    let departments = []
    let products = []
  
    ajaxByPromise('GET', 'http://localhost:3000/stores')
      .then(function (response) {
        stores = response
        const promises = []
  
          for(const key in response){
              const resp = ajaxByPromise('POST', 'http://localhost:3000/bulk-departments', response[key].departments)
              promises.push(resp)
          }

          return Promise.allSettled(promises)
      })
      .then(function(responseArr){
        departments = responseArr
        const promises1 = []
        for(const key in responseArr) {
            if(responseArr[key].status === 'fulfilled') {
            
            const storeDepartments = responseArr[key].value
            for(const index in storeDepartments){
                  
                  const resp = ajaxByPromise('POST', 'http://localhost:3000/bulk-products', storeDepartments[index].products)
                  promises1.push(resp)

                    }
            }else{
              console.log(responseArr[key].status)
              console.log(responseArr[key].reason)
            }
          }            
              return Promise.allSettled(promises1)
            })
          .then(function(responseArray){
            products = responseArray
            createListForAjaxAndFetch(stores, departments, products)
          })
        .catch(function (error) {
        console.log(error)
      })
  }
  
  function createListAjax(stores, departments, produce) {
    const prodsArray = produceArrayFn(produce)

    const mainList = $('#storeList')

    for(const index in departments) {
      const store = document.createElement('ul')
      store.innerText = stores[index].name

      

      const deps = departments[index].value
      console.log(deps)
      for(const key in deps) {
        const dep = document.createElement('ol')
        dep.innerText = deps[key].name

        const prods = deps[key].products
        for(const prod of prods) {
          const prod1 = document.createElement('li')
          for(const val of prodsArray) {
            if(val.id == prod){
              console.log(val.name)
              prod1.innerText = val.name
            }
          }
          dep.appendChild(prod1)
      }
      store.appendChild(dep)
    }
    mainList.append(store)
    console.log(stores)
    console.log(departments)
    console.log(produce)
  }
  }

  
  function produceArrayFn(produce) {
    let i=0
    let productsArray = []
    for(const val of produce){
      for(const prod of val.value) {
        productsArray[i] = prod
        i++
      }
    }
    return productsArray
  }
  

  
  function ajaxByPromise(type, url, data = null) {
    return new Promise(function (resolve, reject) {
      const ajaxObject = {
        type,
        url,
        success: function (data) {
          resolve(data)
        },
        error: function (error) {
          reject(error)
        },
      }
  
      if (type === 'POST') {
        ajaxObject.contentType = 'application/json; charset=utf-8'
        if (data) {
          ajaxObject.data = JSON.stringify(data)
        }
      }
  
      $.ajax(ajaxObject)
    })
  }