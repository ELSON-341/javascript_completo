// // 1 - métodos
// const animal = {
//     nome: 'job',
//     latir: function() {
//         console.log('Au au')
//     }
// }

// console.log(animal.nome)
// animal.latir()

// // 2 - aprofundando em métodos
// const pessoas = {
//     nome: 'Elson',
//     getNome: function () {
//         return this.nome
//     },


//     setNome: function(novoNome) {
//         this.nome = novoNome
//     }
// }
// console.log(pessoas.nome);
// console.log(pessoas.getNome());
// pessoas.setNome('Matheus')
// console.log(pessoas.getNome());

// // 3 - prototype
// const str = 'test'
// console.log(Object.getPrototypeOf(str))

// const bool = true
// console.log(Object.getPrototypeOf(bool))

// const arr = []
// console.log(arr.length)
// console.log(Object.getPrototypeOf(arr))

// // 4 - mais sobre prototype
// const myObject = {
//     a: 'b'
// }

// console.log(Object.getPrototypeOf(myObject))
// console.log(Object.getPrototypeOf(myObject) === Object.prototype)

// const mySecondoObject = Object.create(myObject)
// console.log(mySecondoObject)
// console.log(mySecondoObject.a)
// console.log(Object.getPrototypeOf(mySecondoObject) === myObject)

// 5 - basic class
const cahorro = {
    raca: null,
    patas: 4
}
const pastorAlemao = Object.create(cahorro)
pastorAlemao.raca = 'Pastor Alemão'
console.log(pastorAlemao);
console.log(pastorAlemao.patas);
const bulldog = Object.create(cahorro)
bulldog.raca = 'Bulldog'
console.log(bulldog);

// 6 - função como classe - função construtora
function criarCachorro(nome, raca, patas=4) {
    const cahorro = Object.create({})
    cahorro.nome = nome
    cahorro.raca = raca
    cahorro.patas = patas

    return cahorro
}

const bob = criarCachorro('bob', 'Vira lata')
console.log(bob)

const jak = criarCachorro('Jack', 'Podle')
console.log(jak)
console.log(Object.getPrototypeOf(jak))

// 7 - funces como classe
function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro('Zeus', 'Pitbull');

// 8 - métodos na função construtora
Cachorro.prototype.uivar = function() {
    console.log('Auuuuu!')
}

console.log(Cachorro.prototype)
husky.uivar()

//  9 - classes es6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClasse('Jeff', 'Labrador')
console.log(jeff)
console.log(Object.getPrototypeOf(jeff))
// 10 - mais sobro classes 
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }
}

const scania = new Caminhao(6, 'Vermelho')
console.log(scania)
scania.descreverCaminhao()

Caminhao.motor = 4
const c2 = new Caminhao(4, 'Preta')
console.log(c2)
console.log(c2.motor)
Caminhao.prototype.motor = 4.0
const c3 = new Caminhao(6, 'Azul')
console.log(c3.motor)
// console.log(Object.getPrototypeOf(c3))