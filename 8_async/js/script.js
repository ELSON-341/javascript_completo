'use strict'
// // 1 - setTimeout
// console.log(`Ainda não executou`);

// setTimeout(function() {
//     console.log('Requisição assícrona')
// }, 2000)

// console.log(`Ainda não executou 2`);

// // 2 - setInterval
// console.log(`Ainda não começou`)

// // setInterval(function() {
// //     console.log(`Requisição assíncrona`)
// // }, 3000)

// console.log(`Ainda não começou`)

// // 3 - Promises
// const promessa = Promise.resolve(5 + 5)

// console.log('Algum código')

// promessa.then(value => {
//     console.log(`A soma é ${value}`)
//     return value
// })
// .then((value) => value - 1)
// promessa.then((value) => console.log(`Agora é ${value}`))

// // 4 - falha na promise
// Promise.resolve(4 * 'asd')
// .then((n) => {
//     if (Number.isNaN(n)) {
//         throw new Error('Valores inválido!')
//     }
// })
// .catch((err) => console.log(`Um erro ocorreu: ${err}!`))

// // 5 - rejeição
// function checkNumber(n) {
//     return new Promise((resolve, reject) => {
//         if (n > 10) {
//             resolve('O número é maior que 10.')
//         }
//         else {
//             reject(new Error('Número muito baixo'))
//         }
//     })
// }

// const a = checkNumber(11)
// const b = checkNumber(10)

// console.log(a, b); 
// a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Ocorreu um erro! ${err}`))
// b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Ocorreu um erro! ${err}`))

// 6 - resolvendo varias promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(10)
    }, 3000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(30)
    } else {
        reject(`Erro!`)
    }
})

const result = Promise.all([p1, p2, p3]).then((value) => console.log(value))
console.log(result)

// 7 - async function
async function sumWithDelay(a, b) {
    return a + b
}

sumWithDelay(2, 4).then((value) => {
    console.log(`O valor da soma é ${value}`)
})

console.log('test async')