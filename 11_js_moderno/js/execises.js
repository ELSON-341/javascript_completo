// // 1 - lest e const
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

// 3 - closure
function counter() {
    let c = 0
    
    return function() {
        c++
        console.log(c)
    }
}

const result = counter()
result()
result()

const sumGenerator = (x) => {
    return (y) => {
        return x + y
    }
}

const sumWith5 = sumGenerator(5)
console.log(`A soma é ${sumWith5(3)}`)
console.log(sumWith5(9))

function createCache() {
    const cache = {}
    return (argument) => {
        if(cache[argument]) {
            console.log(`cache hit!`);
            return cache[argument]
        } else {
            console.log('Calculando...')
            const result = argument * 2
            cache[argument] = result
            return result
        }
    }
}

const calculateWithCache = new createCache()
console.log(calculateWithCache(5))
console.log(calculateWithCache(5))