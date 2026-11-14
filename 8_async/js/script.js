// // 1 - setTimeout
// console.log('Ainda não excutou')

// setTimeout(() => {
//     console.log('Requisição assícrona')
// }, 9000)

// console.log('Ainda não executou 2')

// // 2 - setInterval

// console.log('Ainda não começaou')

// // setInterval(function() {
// //     console.log('Intervalo assícrono')
// // }, 3000)

// console.log('Ainda não começou 2')

// // 3 - Promise
// const promessa = Promise.resolve(5 + 5)

// console.log('Algum código')

// promessa.then((value) => {
//     console.log(`A soma é ${value} `)
//     return value
// })
// .then((value) => value - 1)
// .then((value) => console.log(`Agoara e ${value}`))

// console.log('Otro código')

// // 4 - falha na promise 
// Promise.resolve(4 * 'asd')
// .then((n) => {
//     if (Number.isNaN(n)) {
//         throw new Error('Valores inválidos')
//     }
// }).catch((err) => console.log(`Um erro ocorreu ${err}`))

// 5 - rejeição
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(`O número ${n} é maior que 10`)
        } else {
            reject(new Error('Número muito baioxo'))
        }
    })
}

const a = checkNumber(20)

const b = checkNumber(10)

console.log(a, b)

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Uu erro ocorreu: ${err}`))

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Uu erro ocorreu: ${err}`)) 

// 6 - resovendo varias promises 
const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(30)
    }, 5000)
})


const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
    if (30 > 10) {
        resolve(50)
    } else {
        reject('Erro!')
    }
})

Promise.all([p1, p2, p3]).then((values) => console.log(values))

// 7 - async function
async function somaComDelay(a, b) {
    return a + b
}

somaComDelay(2, 4).then((value) => {
    console.log(`O valor da soma ${value}`)
})

console.log('test async')

// 8 - async await
function resolveComDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolveu a Pomise')
        })
    }, 5000)
}

async function chamandaAsync() {
    console.log('Chamando a Promise, e esperando o resultado')
    const resultado = await resolveComDelay()
    console.log(`O resultado chegou: ${resultado}`)
}

chamandaAsync()

// 9 - generators
function* generator() {
    yield 1
    yield 2
    yield 3
}

const gen = generator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)