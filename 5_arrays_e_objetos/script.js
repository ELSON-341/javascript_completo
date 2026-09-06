// 1 - Array

const lista = [1, 2, 3, 4, 5]
console.log(lista);

console.log(typeof lista)

const itens = ["Elson", true, 2, 5.5, []]

console.log(itens)

// 2 - mais sobre array 
const arr = ['a', 'b', 'c', 'd', 'e']

console.log(arr[83])

// 3 - propriedades
const numbers = [5, 3, 4]

console.log(numbers['length'])

const myName = 'Elson'

console.log(myName.length)

// 4 - métodos 
const otherNumbers = [1, 2, 3]

const allNumbers = otherNumbers.concat(numbers)

console.log(allNumbers)

const text = 'Alguma texto'

console.log(typeof text.toUpperCase)
console.log(typeof text.indexOf) 

// 5 - Objetos
const person = {
    name: 'Elson',
    age: 24,
    jod: 'Programador'
}

console.log(person)

console.log(person.name)

console.log(person.name.length)
console.log(typeof person)

// 6 - criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: 'VW',
    km: '2000'
}

console.log(car)

car.door = 4

console.log(car)

delete car.km

console.log(car)

// 7 - mais sobre objetos
const obj = {
    a: 'teste',
    b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c:[]
}

Object.assign(obj2, obj)

console.log(obj2);

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))

// 9 - Mutação 
const a = {
    name: 'Elson'
}

const b = a

console.log(a)
console.log(b)

console.log(a === b)

a.age = 24

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)

// 10 - Loop em array
const users = ['Elson', 'João', 'Matheus']

let i = 0 
while (i < users.length) {
    console.log(`Listando o Usuário ${users[i]}`)
    i++
} 

users.forEach((user) => {
    console.log(`Listando o Usuário ${user}`)
})

// 11 - push e pop

const array = ['a', 'b', 'c']

array.push('d')
console.log(array);
console.log(array.length);

array.pop()

console.log(array);

const itemRemovido = array.pop()

console.log(itemRemovido)

console.log(array)

array.push('z', 'x', 'y')

console.log(array);


