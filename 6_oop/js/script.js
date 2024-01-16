// 1 - métodos
const animal = {
    nome: 'job',
    latir: function() {
        console.log('Au au')
    }
}

console.log(animal.nome)
animal.latir()

// 2 - aprofundando em métodos
const pessoas = {
    nome: 'Elson',
    getNome: function () {
        return this.nome
    },


    setNome: function(novoNome) {
        this.nome = novoNome
    }
}
console.log(pessoas.nome);
console.log(pessoas.getNome());
pessoas.setNome('Matheus')
console.log(pessoas.getNome());

// 3 - prototype
const str = 'test'
console.log(Object.getPrototypeOf(str))

const bool = true
console.log(Object.getPrototypeOf(bool))

const arr = []
console.log(arr.length)
console.log(Object.getPrototypeOf(arr))

// 4 - mais sobre prototype
const myObject = {
    a: 'b'
}

console.log(Object.getPrototypeOf(myObject))
console.log(Object.getPrototypeOf(myObject) === Object.prototype)

const mySecondoObject = Object.create(myObject)
console.log(mySecondoObject)
console.log(mySecondoObject.a)
console.log(Object.getPrototypeOf(mySecondoObject) === myObject)