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