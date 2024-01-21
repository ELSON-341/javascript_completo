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
// console.log(pessoas.nome)

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

// // 5 - basic class
// const cahorro = {
//     raca: null,
//     patas: 4
// }
// const pastorAlemao = Object.create(cahorro)
// pastorAlemao.raca = 'Pastor Alemão'
// console.log(pastorAlemao);
// console.log(pastorAlemao.patas);
// const bulldog = Object.create(cahorro)
// bulldog.raca = 'Bulldog'
// console.log(bulldog);

// // 6 - função como classe - função construtora
// function criarCachorro(nome, raca, patas=4) {
//     const cahorro = Object.create({})
//     cahorro.nome = nome
//     cahorro.raca = raca
//     cahorro.patas = patas

//     return cahorro
// }

// const bob = criarCachorro('bob', 'Vira lata')
// console.log(bob)

// const jak = criarCachorro('Jack', 'Podle')
// console.log(jak)
// console.log(Object.getPrototypeOf(jak))

// // 7 - funces como classe
// function Cachorro(nome, raca) {
//     this.nome = nome
//     this.raca = raca
// }

// const husky = new Cachorro('Zeus', 'Pitbull');
// console.log(husky)
// console.log(Object.getPrototypeOf(husky))

// // 8 - métodos na função construtora
// Cachorro.prototype.uivar = function() {
//     console.log('Auuuuu!')
// }

// console.log(Cachorro.prototype)
// husky.uivar()
// console.log(Object.getPrototypeOf(husky))

//  9 - classes es6
// class CachorroClasse {
//     constructor(nome, raca) {
//         this.nome = nome
//         this.raca = raca
//     }
// }

// const jeff = new CachorroClasse('Jeff', 'Labrador')
// console.log(jeff)
// console.log(Object.getPrototypeOf(jeff))

// 10 - mais sobro classes 
// class Caminhao {
//     constructor(eixos, cor) {
//         this.eixos = eixos
//         this.cor = cor
//     }

//     descreverCaminhao() {
//         console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
//     }
// }

// const scania = new Caminhao(6, 'Vermelho')
// console.log(scania)
// scania.descreverCaminhao()

// Caminhao.motor = 4
// const c2 = new Caminhao(4, 'Preta')
// console.log(c2)
// console.log(c2.motor)
// Caminhao.prototype.motor = 4.0
// const c3 = new Caminhao(6, 'Azul')
// console.log(c3.motor)
// console.log(Object.getPrototypeOf(c3))

// // Exemplo do 10
// class TestMath {
//     constructor(n1, n2) {
//         this.n1 = n1
//         this.n2 = n2
//     }

//     soma() {
//         console.log(`A soma em ${this.n1} entre ${this.n2} é ${this.n1 + this.n2}`)
//     }
// }

// const res = new TestMath(2, 1)
// res.soma()

// // 11 - override
// class Humano {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }
// }

// const elson = new Humano('Elson', 21)
// console.log(elson)

// Humano.prototype.idade = 'Não definida'
// console.log(Humano.prototype.idade);
// console.log(elson.idade);

// // 12 - symbol
// class Aviao {
//     constructor(marca, turbinas) {
//         this.marca = marca
//         this.turbinas = turbinas
//     }
// }

// const asas = Symbol()
// Aviao.prototype[asas] = 2
// const boeing = new Aviao('Boaing', 10)
// console.log(boeing)
// console.log(`Quantidade de asas é: ${boeing[asas]}`)

// const pilotos = Symbol()
// Aviao.prototype[pilotos] = 3
// console.log(`Quantidade de pilotos: ${boeing[pilotos]}`);

// // 13 - getter e setter
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exbirTitulo() {
        return `Você está lendo ${this.titulo}`
    }

    set adicionarTags(tags) {
        const tagsArrays = tags.split(', ')
        this.tags = tagsArrays
    }
}

// const mypost = new Post('Algum post', 'É um post sobre programação')
// console.log(mypost);
// console.log(mypost.exbirTitulo);

// mypost.adicionarTags = 'programção, javacript, js'
// console.log(mypost)

// 14 - Herançã
class Mamifero {
    constructor(patas=4) {
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas)
        this.nome = nome

    }
}

const shark = new Lobo(4, 'teste')
console.log(shark)
console.log(shark.patas)

const cacharro = new Mamifero()
console.log(cacharro)

// 15 - instanceof
console.log(shark instanceof Lobo)
console.log(Lobo instanceof Mamifero)
console.log(new Lobo(4, 'test') instanceof Mamifero)
console.log(new Post('a', 'b') instanceof Lobo)
