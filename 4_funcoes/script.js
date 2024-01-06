/*
// 1 - Criando uma função
function minhaFuncao() {
    console.log('testing')
}
minhaFuncao()
minhaFuncao()

const funcaoEmVariavel = function() {
    console.log('test')
}

funcaoEmVariavel()

function parametro(txt) {
    console.log(`Mostrar ${txt}`)
}

parametro('Elson')

// 2 - return
const num = 10
const num1 = 20

function soma(n1, n2) {
    return n1 + n2
}

const retorna = soma(num, num1)
console.log(retorna)

// 4 - escopo aninhado
let m = 10

function escopoAninhado() {
    let = 20
    
    if(true) {
        let m = 30
        
        if(true) {
            let m = 40

            console.log(m)
        }

        console.log(m)
    }

    console.log(m)
}

escopoAninhado()
console.log(m)

// 5 - arrow fubction
const testArrow = () => {
    console.log('Testing')
}

const evenOrOdd = (n=0) => {
    if(n % 2 == 0){
        return console.log(`O número ${n} é par.`)
    } else {
        return console.log(`O número ${n} é ímpar.`)
    }
}

evenOrOdd(6)
 
const squareRoot = (x) => x * x

console.log(squareRoot(4))

// 7 - parametro opcional

const greeting = (name1=0) => {
    if(!name1) {
        console.log('Olá')
    } else {
        console.log(`Olá ${name1}!`)
    }
}

greeting()*/

// 8 - Valor default
const customGreeting = (name7 = 0, geet = 'Olá') => {
    return `${geet}, ${name7}!`
}

console.log(customGreeting('Elson'))
console.log(customGreeting('Elson', 'Welcome'))

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++) {
        console.log(text)
    }
}

repeatText('Testing')
repeatText('Testing', 5)

// 9 - closure
function someFunction() {
    let text = 'Alguma coisa'

    function disply() {
        console.log(text)
    }
    disply()
}

someFunction()

function displyText() {
    let text2 = 'Testing'

    function repeat() {
        let c = 1
        while(c <= 3) {
            console.log(text2)
            c++
        }
    }
    repeat()
}

displyText()
