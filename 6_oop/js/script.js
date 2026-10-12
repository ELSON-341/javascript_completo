// 1 - métodos 
const animal = {
    name: 'Bob',
    latir: function () {
        console.log('Au au')
    }
}

animal.latir()

// 2 - aprofundado em métodos
const pessoa = {
    name: 'Elson', 

    getName: function () {
        return this.name
    },

    setName: function (novoName) {
        this.name = novoName
    }
}

console.log(pessoa.name)

console.log(pessoa.getName())

pessoa.setName('Ana')

console.log(pessoa.getName())

// 3 - prototype
const text = 'asd'

console.log(Object.getPrototypeOf(text))

const bool = true

console.log(Object.getPrototypeOf(bool))

const arr = []
console.log(arr.length)

console.log(Object.getPrototypeOf(arr))

// 4 - mais sobre prototype
const myObject = {
    a: 'b'
}

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype)

const mySecondObjet = Object.create(myObject)

console.log(mySecondObjet)

console.log(mySecondObjet.a)

console.log(Object.getPrototypeOf(mySecondObjet) === myObject)

// 5 - classes basicas
const cahorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cahorro)

pastorAlemao.reca = 'Pastor Alemão'

console.log(pastorAlemao)

console.log(pastorAlemao.patas);

const bulldog = Object.create(cahorro) 

bulldog.raca = 'Bulldog'

console.log(bulldog)

// 6 - função como classe - função construtora
function criarCachorro(nome, raca) {
    const cachorro = Object.create({})

    cahorro.name = nome
    cahorro.raca  = raca

    return cachorro 
}

const bob = criarCachorro('Bob', 'Vira lata')

console.log(bob);

const jack = criarCachorro('Jack', 'Poodle')

console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 7 - função como classe
function Cachorro(name, raca) {
    this.nome = name
    this.raca = raca
}

const husk = new Cachorro('Ozzy', 'Husky')
console.log(husk);

// 8 - métodos na função construtora
Cachorro.prototype.uivar = function() {
    console.log('Auuuu!');
    
}

console.log(Cachorro.prototype)

husk.uivar()

// 9 - classes ES6
class CachorroClass {
    constructor(name, raca) {
        this.name = name
        this.raca = raca
    }
}

const jeff = new CachorroClass('Jeff', 'Labrador')
console.log(jeff)

console.log(Object.getPrototypeOf(jeff))

// 10 - mais sobre clsses
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
    }
    descreverCaminhao() {
        console.log(`Este cominhão tem ${this.eixos} eixos e é ${this.cor}`)
    }
}

const scania = new Caminhao(6, 'Vermelha') 
console.log(scania);

scania.descreverCaminhao()

Caminhao.moto = 4

const c2 = new Caminhao(4, 'Preto')
console.log(c2);

console.log(c2.moto);

Caminhao.prototype.motor = 4

const c3 = new Caminhao(6, 'Azul')
console.log(c3);

console.log(c3.motor);

// 11 - override 
class Homano {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const elson = new Homano('Elson', 24)
console.log(elson)

 console.log(Homano.prototype.age)

Homano.prototype.age = 'Não definida'

console.log(elson.age);

console.log(Homano.prototype.age)