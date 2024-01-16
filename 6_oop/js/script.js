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