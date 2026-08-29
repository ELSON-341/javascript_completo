// // 1 - function
// function minhaFuncao() {
//     console.log('Teste')
// }

// minhaFuncao()

// const minhaFuncaoEmVariavel = function() {
//     console.log('Função em variável')
// }

// minhaFuncaoEmVariavel()

// function funcaoComParametro(txt) {
//     console.log(`Imprimindo: ${txt}`)
// }

// funcaoComParametro('teste 2')

// // 2 - return
// const a = 10
// const b = 20
// const c = 30
// const d = 40

// function soma(n1, n2) {
//     return n1 + n2
// }

// const resultado = soma(a, b)
// console.log(resultado);

// console.log(soma(c, d))

// let y = 10

// function testandoEscopo() {
//     let y = 20
//     console.log(`Y dentro da função é: ${y}`)
// }

// testandoEscopo()

// y = 15
// console.log(`Y fora da funçõa é: ${y}`)

// testandoEscopo()

// // 4 - Escopo anihado 
// let m = 10 

// function escopoAninhado() {
//     let m = 20

//     if(true) {
//         let m = 30
//         console.log(m)

//         if (true) {
//             let m = 40
//             console.log(m)
//         }
//         console.log(m)
//     }
//     console.log(m)
// }

// escopoAninhado()

// console.log(m)

// // 5 - Arrow function

// const testeArrowFuction = () => {
//     console.log('Esta é uma arrow function')
//     return
// }

// testeArrowFuction()

// const parOuImpar = (num) => {
//     if (num % 2 === 0) {
//         console.log('Par')
//         return
//     }
//     console.log('Impar')
// }

// parOuImpar(5)
// parOuImpar(10)

// // 6 - mais sobre Arrow function
// const raizQuadrada = (x) => x * x

// console.log(raizQuadrada(2))
 
// console.log(raizQuadrada(12))

// // 7 - Paramentro opcional

// const multiplication = function (m, n) {
//     if (n === undefined) {
//         return m * 2
//     } else {
//         return m * n
//     }
// }

// console.log(multiplication(5))

// console.log(multiplication(2, 4))

// const greeting = (name) => {

//     if(!name) {
//         console.log('Olá, tudo bem!')
//         return
//     }

//     console.log(`Olá, ${name}!`)
// }

// greeting()
// greeting('Elson')


// 8 - Valor default
const cunstomGreetin = (name, geet = 'Olá') => {
    return `${geet}, ${name}!`
}

console.log(cunstomGreetin('Elson'))

console.log(cunstomGreetin('Elson', 'Boa tarde'))

const repeatText = (text, repeat = 2) => {
    for (let c = 0;c < repeat; c++) {
        console.log(text)
    }
}

repeatText('Testando...', 4)