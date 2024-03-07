
// // 1 - Criando uma função
// function minhaFuncao() {
//     console.log('testing')
// }
// minhaFuncao()
// minhaFuncao()

// const funcaoEmVariavel = function() {
//     console.log('test')
// }

// funcaoEmVariavel()

// function parametro(txt) {
//     console.log(`Mostrar ${txt}`)
// }

// parametro('Elson')

// // 2 - return
// const num = 10
// const num1 = 20

// function soma(n1, n2) {
//     return n1 + n2
// }

// const retorna = soma(num, num1)
// console.log(retorna)

// // 4 - escopo aninhado
// let m = 10
// console.log(m)
// function escopoAninhado() {
//     let m = 20
//     console.log(m)
//     if(true) {
//         let m = 30
//         console.log(m);
//         if(true) {
//             let m = 40

//             console.log(m)
//         }

//         console.log(m)
//     }

//     console.log(m)
// }

// escopoAninhado()
// console.log(m)

// // 5 - arrow fubction
// const testArrow = () => {
//     console.log('Testing')
// }

// const evenOrOdd = (n=0) => {
//     if(n % 2 == 0){
//         return console.log(`O número ${n} é par.`)
//     } else {
//         return console.log(`O número ${n} é ímpar.`)
//     }
// }

// evenOrOdd(6)
 
// const squareRoot = (x) => x * x

// console.log(squareRoot(4))

// // 7 - parametro opcional

// const greeting = (name1=0) => {
//     if(!name1) {
//         console.log('Olá')
//     } else {
//         console.log(`Olá ${name1}!`)
//     }
// }

// greeting()

// // 8 - Valor default
// const customGreeting = (name7 = 0, geet = 'Olá') => {
//     return `${geet}, ${name7}!`
// }

// console.log(customGreeting('Elson'))
// console.log(customGreeting('Elson', 'Welcome'))

// const repeatText = (text, repeat = 2) => {
//     for(let i = 0; i < repeat; i++) {
//         console.log(text)
//     }
// }

// repeatText('Testing')
// repeatText('Testing', 5)

// // 9 - closure
// function someFunction() {
//     let text = 'Alguma coisa'

//     function disply() {
//         console.log(text)
//     }
//     disply()
// }

// someFunction()

// function displyText() {
//     let text2 = 'Testing'

//     function repeat() {
//         let c = 1
//         while(c <= 3) {
//             console.log(text2)
//             c++
//         }
//     }
//     repeat()
// }

// displyText()

// // 10 - Mais sobre closure

// const multiplicationClosure = (n) => {
//     return (m) => {
//         return n * m
//     }
// }

// let f1 = multiplicationClosure(5)
// let f2 = multiplicationClosure(10)
// console.log(f1)

// console.log(f1(5))
// console.log(f1(10))
 
// // recursion
// const untlTen = (n, p) => {
//     if(n < 10) {
//         console.log('A função parou de executar!')
//     } else {
//         const x = n - p
//         console.log(x)
//         untlTen(x, p)
//     }
// }

// console.log(untlTen(100, 7))

// function facturial(x) {
//     if(x === 0) {
//         return 1
//     } else {
//         return x * facturial(x - 1)
//     }
// }

// console.log(typeof facturial(5))
// console.log(typeof function (){})