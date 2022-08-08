import {createListForAjaxAndFetch} from "./appendage-functions.js"

const asyncAwaitFetch = document.querySelector("#asyncAwaitFetch")

asyncAwaitFetch.addEventListener('click', getDataasyncAwaitFetch)

async function getDataasyncAwaitFetch(){
    console.log('Request is sending now!')

    const stores = []
    const departments = []
    
    try {
        const storesRes = await fetchGenerator(
          'GET',
          'http://localhost:3000/stores'
        )
        const storesJsonRes = await storesRes.json()
        const promises = []
        for (const store of storesJsonRes) {
          stores.push(store)
          promises.push(
            fetchGenerator('POST', 'http://localhost:3000/bulk-departments', store.departments)
          )
        }
        const bulkDepartmentsRes = await Promise.allSettled(promises)
        const bulkDepartmentsJsonRes = await jsonAll(bulkDepartmentsRes)

            promises.splice(0, promises.length)
    for (const key in bulkDepartmentsJsonRes) {
      if (bulkDepartmentsJsonRes[key].status === 'fulfilled') {
        const storeDepartments = bulkDepartmentsJsonRes[key].value
        departments.push(bulkDepartmentsJsonRes[key])
        for (const department of storeDepartments) {

          promises.push(
            fetchGenerator('POST', 'http://localhost:3000/bulk-products', department.products)
          )
        }
      } else {
        console.log(bulkDepartmentsJsonRes[key].status)
        console.log(bulkDepartmentsJsonRes[key].reason)
      }
    }
    const productsRes = await Promise.allSettled(promises)
    const productsJsonRes = await jsonAll(productsRes)

    createListForAjaxAndFetch(stores, departments, productsJsonRes)
}catch (error) {
        console.log(error)
      }}



async function jsonAll(responses) {
  const promises = []
  for (const response of responses) {
    if (response.status === 'fulfilled') {
      promises.push(response.value.json())
    } else {
      console.error(response.status)
      console.error(response.reason)
    }
  }

  return await Promise.allSettled(promises)
}

function fetchGenerator(method, url, data = null) {
  const fetchObject = {
    method,
  }

  if (method === 'POST') {
    fetchObject.headers = { 'Content-Type': 'application/json; charset=utf-8' }
    if (data) {
      fetchObject.body = JSON.stringify(data)
    }
  }

  return fetch(url, fetchObject)
}