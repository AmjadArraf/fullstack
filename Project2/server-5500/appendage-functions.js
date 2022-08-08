function addToHtml(stores) {
    console.log(stores)
    const ul = document.querySelector('#stores');
    ul.innerHTML = "";
    for(const store of stores) {
        const li = document.createElement("li");
        li.innerHTML = `id: <b>${store.id}</b>, name: <b>${store.name}</b>, departments: <b>${store.departments}</b>`;
        ul.appendChild(li)
    }
}

// function for the test button==================================================================================

function testFunction() {
    console.log("This is a test function!!!")
}

// create list and add to HTML for XHR Callback==================================================================

function createStoreList(stores) {
    const storeList = document.querySelector("#storeList")
    storeList.innerHTML = ""
    console.log(stores)

    for(const index in stores) {
      let store = stores[index]
      const storeLi = document.createElement('ul')
      storeLi.innerText = store.name
      console.log(store.departments.length)
      for(let i=0; i<store.departments.length; i++){
        let departmentsLi = store[i]
        const departmentsList = document.createElement('ol')
        departmentsList.innerText = departmentsLi.name
        
        const productLi = departmentsLi['prods']
        for(const key in productLi) {
          const singleProduct = document.createElement('li')
          singleProduct.innerText = productLi[key].name
          departmentsList.appendChild(singleProduct)
        }
        storeLi.appendChild(departmentsList)
      }
      storeList.appendChild(storeLi)
      const sepP = document.createElement('p')
      sepP.innerText = "============================"
      storeList.appendChild(sepP)
    }
}
// create list and add to HTML for Promise-Ajax and Async Await Fetch=============================================

function createListForAjaxAndFetch(stores, departments, produce) {
    const prodsArray = produceArrayFn(produce)
    const mainList = $('#storeList')
    mainList.html('')
    for(const index in departments) {
      const store = document.createElement('ul')
      store.innerText = stores[index].name

      const deps = departments[index].value
      for(const key in deps) {
        const dep = document.createElement('li')
        dep.innerText = deps[key].name

        const prods = deps[key].products
        for(const prod of prods) {
          const prod1 = document.createElement('ol')
          for(const val of prodsArray) {
            if(val.id == prod){
              prod1.innerText = val.name
            }
          }
          dep.appendChild(prod1)
      }
      store.appendChild(dep)
    }
    mainList.append(store)
    const sepP = document.createElement('p')
    sepP.innerText = "============================"
    storeList.appendChild(sepP)
  }
  }

  // produce array with id and name of products===================================================================
  
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

export {addToHtml, testFunction, createStoreList, createListForAjaxAndFetch}