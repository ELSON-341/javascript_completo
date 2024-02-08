'use strict'
// 1 - adicionado eventos
const btn = window.document.querySelector('#my-button')
btn.addEventListener('click', () => {
    console.log('Clicou aquii!')
})

// 2 - removendo Eventos 
const secondBtn = window.document.querySelector('#btn')

function imprimirMensagem() {
    console.log('Testing')
}
secondBtn.addEventListener('click', imprimirMensagem)

const thirdBtn = window.document.getElementById('other-btn')
console.log()
thirdBtn.addEventListener('click', () => {
    console.log('Evento removido.')
    secondBtn.removeEventListener('click', imprimirMensagem)
})

// 3 - argumento do evento
const myTitle = window.document.getElementById('my-title')
myTitle.addEventListener('click', (event) => {
    console.log(event)
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})

// 4 - propagação
const containerBtn = window.document.querySelector('#btn-container')
const btnInsideContainer = window.document.querySelector('#div-btn')

containerBtn.addEventListener('click', () => {
    console.log('Evento 1');
})

btnInsideContainer.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log('Evento 2')
})

// 5 - removendo evento padão
const a = window.document.getElementsByTagName('a')[0]
a.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Não alterou a pagina')
})

// 6 - eventos de tecla 
document.addEventListener('keyup', (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener('keydown', (e) => {
    console.log(`Apertou a tecla ${e.key}`)
})

// 7 - eventos de mouse
const mouseEvents = window.document.querySelector('#mouse')
mouseEvents.addEventListener('mousedown', () => {
    console.log('Pressionou o batão do mouse');
})

const mouseEvents1 = window.document.querySelector('#mouse')
mouseEvents.addEventListener('mouseup', () => {
    console.log('Soltar o batão do mouse');
})

const mouseEvents2 = window.document.querySelector('#mouse')
mouseEvents.addEventListener('dblclick', () => {
    console.log('Click duplo');
})

// // 8 - movimento do mouse 
// window.document.addEventListener('mousemove', (e) => {
//     console.log(`No eixo X ${e.x}`);
//     console.log(`No exixo Y ${e.y}`);
// })

9