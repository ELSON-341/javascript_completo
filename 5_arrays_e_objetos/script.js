// 1 - arrays
const lista = [1, 2, 3, 4, 5]
console.log(lista)
console.log(typeof lista)
const itens = ['tes', true, 3, 5.5, []]
console.log(itens)

// 2 - mais sobre arrys
const alphabet = ['a', 'b', 'c', 'd', 'e']
console.log(alphabet[2])

// 3 - propriedade
const numbers = [5, 3, 4]
console.log(numbers.length)
console.log(numbers['length'])

const myName = 'Elson'
console.log(myName['length'])

// 4 - métados
const otherNumbers = [1, 2, 3]
const allNumbers = numbers.concat(otherNumbers)
allNumbers.push()
allNumbers.concat()
allNumbers.pop()
console.log(allNumbers)

const text = 'test text'
console.log(text.toUpperCase())
console.log(text.toLowerCase())

console.log(text.indexOf('x'))

// 5 - objects
const person = {
    name: 'Elson',
    age: 21,
    job: 'Programador'
}
console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(typeof person)

// 6 - criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: 'BMW',
    km: 2000
}

console.log(car)
car.doors = 4
console.log(car)
delete car.km
console.log(car)
console.log(car.doors)

// 7 - mais sobre objetos
const obj = {
    a: 'test',
    b: true
}

console.log(obj instanceof Object)
 const obj2 = {
    c: [],
 }

 Object.assign(obj, obj2)
 console.log(obj)
 console.log(obj2)

 const regiter = {
    name: 'Elson',
    age: 21
 }

 const test ={
    text: 2
 }
 Object.assign(regiter, test)
 console.log(regiter)

//  8 - conphecimen melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))