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
