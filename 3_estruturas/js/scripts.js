// // 1 - Variáveis 
// let name = "Elson"
// console.log(name);

// name = 'Elson Santos'

// console.log(name);

// const idade = 24
// console.log(idade);

// // idade = 25

// console.log(idade);

// console.log(typeof idade)
// console.log(typeof name)

// // 2 - mais sobre Variáveis

// // let 2teste = "Elson"
// // let @test = "esn"

// let a = 10, b = 20, c = 30

// console.log(a, b, c);
// const nomecompleto = 'Elson Santos'

// const nomeCompleto = 'Matheus'

// console.log(nomecompleto);
// console.log(nomeCompleto);

// let _teste = 'ok'
// let $teste = 'ok'

// console.log(_teste);
// console.log($teste);

// //  3 - Prompt

// // const age = window.prompt('Quan sua idade?')
// // window.alert(`Você tem ${age} anos`)

// // 5 - Math
// console.log(Math.max(4, 8, 43, 9))

// console.log(Math.floor(5.14))

// console.log(Math.ceil(5.14))

// // 6 - conssole
// console.log('Teste')

// console.error('erro!')
// console.warn('avisa!')

// 7 - if

// const m = 10
// if (m > 5) {
//     console.log('M é maior que 5!')
// }

// const user = "Elson"

// if (user === 'Elson') {
//     console.log(`Olá ${user}!`)
// }

// if (user === 'Elson') {
//     console.log(`Olá ${user}!`)
// }

// if (user === 'Maria') {
//     console.log("OláMaria")
// }

// console.log(user === user, user === "Maria")

// // 8 - else 
// const loggdIn = false

// if (loggdIn) {
//     console.log('Está autenticado!')
// } else {
//     console.log('Não está autenticado!')
// }

// const q = 10
// const w = 15

// if(q > 5 && w > 20) {
//     console.log('Números mais altos')
// } else {
//     console.log('Os números não são mais altos')
// } 

// // 9 - else if 
// if (1 > 2) {
//     console.log("teste")
// } else if (2 > 3) {
//     console.log("Teste 2")
// } else if (5 > 1) {
//     console.log("Agora sim!")
// }

// const userName = "Matheus"
// const userAge = 31 

// if (userName === "José") {
//     console.log(`Bem vindo ${userName}`)
// } else if (userName === "Matheus" && userAge === 31) {
//     console.log(`Olá ${userName}, você tem 31 anos!`)
// } else {
//     console.log('Nenhuma condição aceita!')
// }

// 10 - while

// let p = 0

// while (p < 5) {
//     console.log(`Passo ${p}`)
//     p = p + 1
// }

// // 11 - do while
// let c = 10

// do {
//     console.log(`Vaolor de c: ${c}`)
//     c--
// } while (c > 1)

// 12 - for
// for (let t = 0; t < 10; t++) {
//     console.log(`Teste ${t}`)
// }

// 13 - indentação
for (let u = 0; u < 10; u++) {
if (u * 2 > 10) {
    console.log(`Maior que 10! ${u}`)
} else {
    if (u / 2 === 0) {
        console.log('deu 0')
    }
}
}

// 14 - break 
for (let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`)

    if (g === 15) {
        console.log('O g é 15')
        break
    }
}

// 15 - continue
for (let s = 1; s < 10; s++) {
    if (s % 2 === 0) {
        console.log('Número par!')
        continue
    }
    console.log(s)
}

// 16 - switch 
const job = 'ads'

switch (job) {
    case 'Programador':
        console.log('Você advogado!')
        break
    case 'Advogado':
        console.log('Você é advogado!')
        break
    case 'Engenheiro':
        console.log('Você é um engenheiro')
        break
    default:
        console.log('Profissão não encontrada')
        break
}