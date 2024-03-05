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

// 9 - evnet scroll
window.addEventListener('scroll', (e) => {
    if(window.scrollY > 200){
        console.log('Passamos de 200px')
    }
})

// 10 - event focus
const input = window.document.getElementById('my-input')
input.addEventListener('focus', (e) => {
    console.log('Entrou no input!')
})

// 11 - event de carregamento
window.addEventListener('load', (e) => {
    console.log('A pagina carregou!');
})
window.addEventListener('beforeunload', (e) => {
    e.preventDefault()
    e.returnValue = ''
    console.log('A pagina carregou!');
})

// 1 - debouce
const debouce = (f, delay) => {
    let timeout

    return (...argumentos) => {
        if(timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            f.apply(argumentos)
        }, delay)
    }
}

window.addEventListener('mousemove', debouce(() => {
    console.log('Executando a cada 400ms')
}, 400))