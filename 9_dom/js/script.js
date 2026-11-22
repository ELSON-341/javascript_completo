// 1 - movendo-se pelo DOM
console.log(document.body)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2 - selecionado por tag
const listItns = document.getElementsByTagName('li')
console.log(listItns);

// 3 - selecionado elementos por id
const title = document.getElementById('title')
console.log(title)

// 4 - selecionando elementos por classe

const products = document.getElementsByClassName('product')
console.log(products)

// 5 - selecionandodo elementos por CSS
const productQuery = document.querySelectorAll('.product')

console.log(productQuery)

const mainContainer = document.querySelector('#main-container')
console.log(mainContainer)
