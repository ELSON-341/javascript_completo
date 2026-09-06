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

// 7 - mais sobre ojetos
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
