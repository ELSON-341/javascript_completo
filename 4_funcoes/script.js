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