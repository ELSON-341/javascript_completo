// 1 - strict
'use strict'

// opa = 'teste'
const opa = 'teste'

// const undefined = 10

// delete [].length

// 2 - console.log
let a = 1
let b = 2

if ( a == 1) {
    a = b + 2
}

console.log(a)

for (let i = 0; i < b; i++) {
    a = a + 2
    console.log(a)
}

if (a > 5) {
    a = 25
}

console.log(a)

// 3 - debugger

let c = 1
let d = 2

if (c = 1) {
    c = d + 2
}

// debugger

for (let i = 0; i < d; i++) {
    c = c + 2
}

console.log('Executou o loop');

// debugger

if (c > 5) {
    c = 25
}

// 4  - tratamento de dados 
function checkNumber(n) {
    const result = Number(n)

    if (Number.isNaN(result)) {
        console.log('Volor incorreto!')
        return
    }

    console.log('Valor correto!')
    return result
}

checkNumber(5)
checkNumber('10')
checkNumber({})
checkNumber('testo') 

// 5 - exceptions
let x = 10 

if (x != 11) {
    // throw new Error("O volor de x não pode ser diferentede 11!") 
}

// 6 - try catch
try {
    const soma = x + y
} catch (err) {
    console.log(`Erro no programa: ${err}`)
}

// 7 - finally 

try {
    const value = checkNumber(1)

    if (!value) {
        throw new Error('Valores inválidos!')
    }
} catch (err) {
    console.log(`Opa, aconteceu um ploblema: ${err}`)
} finally {
    console.log('O cóndigo foi executado!')
}

// 8 - assertion 
function checkrray(arr) {  
    if (arr.length === 0) {
        throw new Error('O array precisa ter elementos')
    } else {
        console.log(`O array tem ${arr.length} elementos`)
    }
}

// checkrray([])
checkrray([1, 2, 3])
