// 1 - lest e const
// let age = 21

// const PI = 3.14159

// let name2 = 'Ana'
// console.log(name2);

// name2 = 'Fábio'
// console.log(name2);

// const test = 123

// test = 2
// console.log(test);

// // 2 - arrow function
// const sum = (a, b) => a + b

// console.log(sum(5, 2));

// const evenOdd = (num) => (num % 2 == 0 ?`${num} é Par` :`${num} é ímpa`)
// console.log(evenOdd(5))

// const numbers = [1, 2, 3, 4, 5]
// const doubleNumber = numbers.map(num => num * 2)
// console.log(doubleNumber)

// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const pairNumbers = numbers2.filter(num2 => num2 % 2 === 0)
// console.log(pairNumbers);

// const numbers3 = [1, 2, 3, 4, 5]
// const totalSum = numbers3.reduce((accumulation, num) => accumulation + num, 0)
// console.log(totalSum)

// // 3 - closure
// function counter() {
//     let c = 0
    
//     return function() {
//         c++
//         console.log(c)
//     }
// }

// const result = counter()
// result()
// result()

// const sumGenerator = (x) => {
//     return (y) => {
//         return x + y
//     }
// }

// const sumWith5 = sumGenerator(5)
// console.log(`A soma é ${sumWith5(3)}`)
// console.log(sumWith5(9))

// function createCache() {
//     const cache = {}
//     return (argument) => {
//         if(cache[argument]) {
//             console.log(`cache hit!`);
//             return cache[argument]
//         } else {
//             console.log('Calculando...')
//             const result = argument * 2
//             cache[argument] = result
//             return result
//         }
//     }
// }

// const calculateWithCache = createCache()
// console.log(calculateWithCache(5))
// console.log(calculateWithCache(5))

// // 4 - filter
// const words = ['JavaScript', 'Pythan', 'c', 'Ruby']
// const longWords = words.filter((word) => word['length'] > 5)
// console.log(longWords);

// // 5 - map
// const names = ["alice", "bob", "charlie", "david"]
// const formatsNames = names.map((name) => name.charAt(0).toUpperCase() + name.slice(1))

// console.log(formatsNames)

// 6 - spred operator
function sum6(a, b, c) {
    return a + b + c
}

const values = [2, 1, 2]
console.log(sum6(...values))

class Person {
    constructor(name, age) {
        this.name = name 
        this.age = age
    }

    presetation() {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age}`)
    }

    getOld(n) {
        this.age = this.age + n
    }

    setNewName(newName) {
        this.name = newName
    }
}

const person1 = new Person('Elson', 21)
person1.getOld(1)
person1.presetation()
person1.setNewName('Maria')

// 7 - getters e settters
class Post {
    constructor(title, desciption, tags) {
        this.title = title
        this.desciption = desciption
        this.tags = tags
    }

    get displayTitle() {
        return `Você está lendo: ${this.title}`
    }

    set addTags(tags) {
        const tagsArray = tags.split(', ')
        this.tags = tagsArray
    }
}

const myPost = new Post('Algum post', 'É um post sobre programação')
console.log(myPost);
console.log(myPost.displayTitle)

myPost.addTags = 'Python, Java, PHP'
console.log(myPost)