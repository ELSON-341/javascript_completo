'use strict'
// 1 - setTimeout
console.log(`Ainda não executou`);

setTimeout(function() {
    console.log('Requisição assícrona')
}, 2000)

console.log(`Ainda não executou 2`);

// 2 - setInterval
console.log(`Ainda não começou`)

// setInterval(function() {
//     console.log(`Requisição assíncrona`)
// }, 3000)

console.log(`Ainda não começou`)

// 3 - Promises
const promessa = Promise.resolve(5 + 5)

console.log('Algum código')

promessa.then(value => {
    console.log(`A soma é ${value}`)
    return value
})
.then((value) => value - 1)
promessa.then((value) => console.log(`Agora é ${value}`))

