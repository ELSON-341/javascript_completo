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
    const cahorro = Object.create({})

    cahorro.name = nome
    cahorro.raca  = raca

    return cahorro
}

const bob = criarCachorro('Bob', 'Vira lata')

console.log(bob);


const jack = criarCachorro('Jack', 'Poodle')

console.log(jack);

console.log(Object.getPrototypeOf(jack));
