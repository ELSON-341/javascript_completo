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