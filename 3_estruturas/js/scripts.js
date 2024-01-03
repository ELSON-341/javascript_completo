// 1 - Variáveis
/*let nome = 'Elson'
nome = 'Elson Santos'
console.log(nome)

const idade = 21
// idade = 22
console.log(idade)

console.log(typeof nome)
console.log(typeof idade)

// 2 - Mais sobre variáveis
let a = 10, b = 20, c = 30
console.log(a, b, c)

const nomeCompleto = "Elson Santos"
console.log(nomeCompleto)

let _test = 'ok'
let $test = 'ok'
console.log(_test, $test)

// 3 - prompt
// let age = window.prompt('Digite sua idade? ')
// console.log(age)

// 4 - alert
// const num = 10
// window.alert('testing ' + num)

// 5 - Manth
console.log(Math.max(3, 6, 1, 5))
console.log(Math.min(3, 6, 1, 5))
console.log(Math.ceil(5.5))
console.log(Math.floor(5.5))
console.log(Math.sqrt(9))

// 6 - console
console.log(console.error('mistake'))
console.log(console.warn(`Aviso`))

// 7 - if
const m = 10
if(m > 5) {
    console.log(`${m} maior que 5!`)
}

const user = 'João'
if(user === 'João') {
    console.log(`Hello, ${user}!`)
}

if(user === 'Maria') {
    console.log('Hello, Maria!')
}
console.log(user === 'João', user === 'Maria')

// 8 - else
const loggedIn = false
if(loggedIn) {
    console.log(`Está autenticado!`)
} else {
    console.log(`Os número não são mais altos`)
}

// 9 - else if
if(1 > 2) {
    console.log('test')
}
else if(2 > 3) {
    console.log('test 2')
}
else if (5 > 1) {
    console.log('Agoar sim!')
}

const userName = 'Elson'
const userAge = 21
if(userName === 'José') {
    console.log('Bem-vindo José!')
} else if(userName === 'Elson' && userAge === 21) {
    console.log(`Olá ${userName}, você tem ${userAge} anos!`)
} else {
    console.log('Nenhau condição aceita!')
}

// 10 - while
let c = 0
while(c <= 10){
    console.log(`Passo ${c}`)
    c+=1
}

// 11 - do while
let p = 10
do {
    console.log(`Passo ${p}`)
    p--
} while(p >= 1)

// 12 - for
for(let i = 10; i >= 1; i--){
    console.log(`Posso ${i}`)
}

// 13 - identação
let n = 2
if(n % 2 === 0) {
    console.log(`A número é par ${n}`)
}
console.log(`end!`)

// 14 - breack loop
for(let g = 20; g > 1; g--) {
    console.log(`O valor de gé é: ${g}`)
    if(g === 15) {
        break
    }
}

let num = 1
while(true) {
    console.log(`Passo ${num}`)
    num++
    if(num == 11) {
        break
    }
}*/

// 15 - continue 
let vt = [1, 2, 3, 4, 5, 6]
for(let s in vt) {
    if(s % 2 === 0) {
        console.log(`O número ${s} é par!`)
    } else{
        continue
        console.log(`O número ${s} é impar!`)
    }
}
let data = new Date().getDay()
switch(data) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
}