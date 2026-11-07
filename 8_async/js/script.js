// 1 - setTimeout
console.log('Ainda não excutou')

setTimeout(() => {
    console.log('Requisição assícrona')
}, 9000)

console.log('Ainda não executou 2')

// 2 - setInterval

console.log('Ainda não começaou')

// setInterval(function() {
//     console.log('Intervalo assícrono')
// }, 3000)

console.log('Ainda não começou 2')

// 3 - Promise
const promessa = Promise.resolve(5 + 5)

console.log('Algum código')

promessa.then((value) => {
    console.log(`A soma é ${value} `)
    return value
})
.then((value) => value - 1)
.then((value) => console.log(`Agoara e ${value}`))

console.log('Otro código')

// 4 - falha na promise 
Promise.resolve(4 * 'asd')
.then((n) => {
    if (Number.isNaN(n)) {
        throw new Error('Valores inválidos')
    }
}).catch((err) => console.log(`Um erro ocorreu ${err}`))

