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

// arrow fubction
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