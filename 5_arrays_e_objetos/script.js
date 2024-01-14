// // 1 - arrays
// const lista = [1, 2, 3, 4, 5]
// console.log(lista)
// console.log(typeof lista)
// const itens = ['tes', true, 3, 5.5, []]
// console.log(itens)

// // 2 - mais sobre arrys
// const alphabet = ['a', 'b', 'c', 'd', 'e']
// console.log(alphabet[2])

// // 3 - propriedade
// const numbers = [5, 3, 4]
// console.log(numbers.length)
// console.log(numbers['length'])

// const myName = 'Elson'
// console.log(myName['length'])

// // 4 - métados
// const otherNumbers = [1, 2, 3]
// const allNumbers = numbers.concat(otherNumbers)
// allNumbers.push()
// allNumbers.concat()
// allNumbers.pop()
// console.log(allNumbers)

// const text = 'test text'
// console.log(text.toUpperCase())
// console.log(text.toLowerCase())

// console.log(text.indexOf('x'))

// // 5 - objects
// const person = {
//     name: 'Elson',
//     age: 21,
//     job: 'Programador'
// }
// console.log(person)
// console.log(person.name)
// console.log(person.name.length)
// console.log(typeof person)

// // 6 - criando e deletando propriedades
// const car = {
//     engine: 2.0,
//     brand: 'BMW',
//     km: 2000
// }

// console.log(car)
// car.doors = 4
// console.log(car)
// delete car.km
// console.log(car)
// console.log(car.doors)

// // 7 - mais sobre objetos
// const obj = {
//     a: 'test',
//     b: true
// }

// console.log(obj instanceof Object)
//  const obj2 = {
//     c: [],
//  }

//  Object.assign(obj, obj2)
//  console.log(obj)
//  console.log(obj2)

//  const regiter = {
//     name: 'Elson',
//     age: 21
//  }

//  const test ={
//     text: 2
//  }
//  Object.assign(regiter, test)
//  console.log(regiter)
//  console.log(test)

// //  8 - conphecimen melhor os objetos
// console.log(Object.keys(obj))
// console.log(Object.keys(obj2))
// console.log(Object.keys(car))

// console.log(Object.entries(car))

// // 9 - Mutação
// const a = {
//     name:'Elson'
// }

// const b = a
// console.log(a === b)

// a.age = 21

// delete b.age
// console.log(a)
// console.log(b)

// // 10 - loop in arrays
// const user = ['Matheus', 'João', 'Ana']
// for(let i = 0; i < user.length; i = i + 1) {
//     console.log(`Listando o usuário: ${user[i]}`)
// }
// for(let u in user){
//     console.log(`Listando o usuário: ${user[u]}`)
// }
// user.forEach(x => console.log(x))
// console.log(user[0])

// // 11 - push and pop
// const array = ['a', 'b', 'c']
// array.push('d')

// array.pop()
// const itemRemovido = array.pop()
// console.log(itemRemovido)

// // 12 - shift and unshift
// const letters = ['a', 'b', 'c']
// const letter = letters.shift()
// letters.unshift(letter, 1, 2, 3)
// console.log(letter)
// console.log(letters)

// // 13 - indexOf and lastIndexOf
// const myElements = ['Morango', 'Maçã', 'Abacate', 'pêra', 'Abacate']

// console.log(myElements.indexOf('Maçã'))
// console.log(myElements.indexOf('Abacate'))

// console.log(myElements[2])
// console.log(myElements[myElements.indexOf('Abacate')])

// console.log(myElements.lastIndexOf('Abacate'))

// // 14 - slice

// const testSlice = ['a', 'b', 'c', 'd', 'e', 'f',]

// const subArray = testSlice.slice(2, 4 + 1)
// console.log(subArray)

// const subArray3 = testSlice.slice(10, 20)
// console.log(subArray3)

// const subArray4 = testSlice.slice(2)
// console.log(subArray4)

// // 15 - forEach
// const alphabet = ['a', 'b', 'c', 'd', 'e']
// alphabet.forEach((abc) => {
//     console.log(`Letra ${abc}.`)
// })

// const posts = [
//     { title: 'Primero post', category: 'PHP'},
//     { title: 'Segundo post', category: 'JavaScript'},
//     { title: 'Terceiro post', category: 'Python'}
// ]

// posts.forEach((post) => {
//     console.log(`Exebido post: ${post.title}, categoria ${post.category}`)
// })

// // 16 - inclusdes
// const shoppingList = ['coffe', 'tea', 'sugar']
// console.log(shoppingList.includes('salt'))

// if(shoppingList.includes('tea')) {
//     console.log('Há chá na lista!')
// }

// // 17 - reverse
// const numbers = [1, 2, 3, 4]
// numbers.reverse()
// console.log(numbers)

// // 18 - trim
// const nome = 'Elson \n'
// console.log(nome)
// console.log(nome.length)

// console.log(nome.trim().length)

// // 19 - padStart
// const testPadStart = '1'
// const newNumber = testPadStart.padStart(4, '0')
// console.log(newNumber)

// const testPadEnd = newNumber.padEnd(10, '0')
// console.log(testPadEnd)
// newNumber.match()

// // 20 - split
// const userName = 'Elson Santos Nascimento'
// console.log(userName.split(' '));

// // 21 - join
// const phrase = 'O rato roeu a roupa do rei de roma'
// const phraseAgin = phrase.split(' ')
// console.log(phraseAgin);
// const fraseDeNovo = phraseAgin.join(' ')
// console.log(fraseDeNovo);

// const itemForShopping = ['Mouse', 'Teclado', 'Monitor']
// const phraseShopping = `Precisamos comprar: ${itemForShopping.join(', ')}`
// console.log(phraseShopping);

// // 22 - repeat
// const testRepeat = 'testing '
// console.log(testRepeat.repeat(3));

// // 23 - rest operator
// const sumInfinite = (...args) => {
//     let total = 0
//     for (let i = 0; i < args.length; i++) {
//         total += args[i]
//     }
//     return total
// }

// console.log(sumInfinite(2, 5, 1, 2));

// 24 - for of
const sumInfinite2 = (...args) => {
    let total = 0
    for (num of args) {
        total += num
    }
    return total
}

console.log(sumInfinite2(2, 5, 1, 2));

// 25 - destruring em object
const userDetails = {
    firstName: 'Elson',
    lastName: 'Santos',
    job: 'Programador'
}

const {firstName, lastName, job} = userDetails
console.log(firstName, lastName, job)

// renomear variaveis
const {firstName: primeiraNome, tes} = userDetails
console.log(primeiraNome)
console.log(tes)

// 26 - destruction com arays
const myList = ['Avião', 'Submarino', 'corro', 'Trastor']
const [veicoloA, veicoloB, veicoloC, veicoloD, t] = myList
console.log(veicoloA, veicoloB, veicoloC, veicoloD, t)
console.log(t)