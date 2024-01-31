// 1 - movendo-se pelo DOM
console.log(window.document.body);
console.log(window.document.body.childNodes[1]);
console.log(window.document.body.childNodes[1].childNodes[1].textContent)

// 2 - selecionando por tag
const listItens = window.document.getElementsByTagName('li')
console.log(listItens)

// 3 - selecinando por id
const title = window.document.getElementById('title')
console.log(title);

// 4 - selecinando por class
const products = window.document.getElementsByClassName('product')
console.log(products)

// 5 - selecinando os elementos por CSS
const produtsQury = window.document.querySelectorAll('.product')
console.log(produtsQury);

const mainContainer = window.document.querySelector('#main-container')
console.log(mainContainer);