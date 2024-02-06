// // 1 - movendo-se pelo DOM
// console.log(window.document.body);
// console.log(window.document.body.childNodes[1]);
// console.log(window.document.body.childNodes[1].childNodes[1].textContent)

// // 2 - selecionando por tag
const listItens = window.document.getElementsByTagName('li')
// console.log(listItens)

// 3 - selecinando por id
const title = window.document.getElementById('title')
// console.log(title);

// // 4 - selecinando por class
const products = window.document.getElementsByClassName('product')
// console.log(products)

// // 5 - selecinando os elementos por CSS
// const produtsQury = window.document.querySelectorAll('div.product')
// console.log(produtsQury);

const mainContainer = window.document.querySelector('main#main-container')
// console.log(mainContainer);

// // 6 - insertBefore
// const p = window.document.createElement('p')
// p.innerHTML = 'test'
const header = title.parentElement
// header.insertBefore(p, title)

// 7 - appendChild
const navLinks = window.document.querySelector('nav ul')
const li = window.document.createElement('li')
// console.log(navLinks);

// // 8 - replaceChild
// const h2 = window.document.createElement('h2')
// h2.innerHTML = 'My new title'
// header.replaceChild(h2, title)

// // 9 - createTextNode
// const myTitle = window.document.createTextNode('Agora vamos colocar mais um título')
// console.log(myTitle);
// const h3 = window.document.createElement('h3')
// h3.appendChild(myTitle)
// console.log(h3)

// // 10 - abalhando com atributos
// const firstLink = navLinks.querySelector('a')
// console.log(firstLink)
// firstLink.setAttribute('href', 'https://www.google.com')
// console.log(firstLink.getAttribute('href'));
// firstLink.setAttribute('target', '_blank')
// console.log(firstLink.getAttribute('target'))
// firstLink.setAttribute('hreflang', 'pt-br')
// firstLink.setAttribute('rel', 'external')

// // 11 - altura e largura
// const footer = window.document.querySelector('footer')
// console.log(footer);
// console.log(footer.offsetWidth);
// console.log(footer.offsetHeight);
// console.log(footer.clientWidth);
// console.log(footer.clientHeight);

// // 12 - posição do elemento
// const product1 = products[0]
// console.log(product1.getBoundingClientRect())

// // 13 - css com js
// mainContainer.style.color = 'red'
// mainContainer.style.background = 'lightgray'
// mainContainer.style.paddingTop = '15px'

// 14 - alterando varios elementos
for(let li of listItens) {
    li.style.color = 'red'
}