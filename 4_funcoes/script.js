// 1 - function
function minhaFuncao() {
    console.log('Teste')
}

minhaFuncao()

const minhaFuncaoEmVariavel = function() {
    console.log('Função em variável')
}

minhaFuncaoEmVariavel()

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro('teste 2')

// 2 - return
const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma(a, b)
console.log(resultado);

console.log(soma(c, d))

let y = 10

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função é: ${y}`)
}

testandoEscopo()

y = 15
console.log(`Y fora da funçõa é: ${y}`)

testandoEscopo()

// 4 - Escopo anihado 
let m = 10 

function escopoAninhado() {
    let m = 20

    if(true) {
        let m = 30
        console.log(m)

        if (true) {
            let m = 40
            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}

escopoAninhado()

console.log(m)