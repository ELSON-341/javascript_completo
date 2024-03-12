// var, lest e const
var x = 10
var y = 15

if(y > 10) {
    var x = 5
}
console.log(`Agora x é ${x}`);

let a = 10
let b = 15

if(b > 10) {
    let a = 5
    console.log(`a dentro ${a}`);
}

console.log(`a fora ${a}`);

function logName() {
    const name = 'Elson'
    console.log(name);
}

const name = 'Mathas'
console.log(name);

logName()

// 2 - arrow function
const sum = function(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(sum(1,2))
console.log(arrowSum(1, 2))

const greeting = (name) => {
    if(name) {
        return `Hello ${name}!`
    } else {
        return 'Hello!'
    }
}

console.log(greeting('Elson'));
console.log(greeting());

const user = {
    name: 'Theo',
    sayUserName() {
        setTimeout(function() {

            console.log(this);
            console.log(`Username: ${this.name}`);
        },1000)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this);
            console.log(`Username: ${this.name}`);
        }, 2000)
    }
}
// user.sayUserName()
// user.sayUserNameArrow()

// 3 - filter

const arr = [1, 2, 3, 4, 5, 6]
const heightNumber = arr.filter((n) => n >= 3)
console.log(heightNumber)

const users = [
    {name: 'Mathes', available: true},
    {name: 'João', available: false},
    {name: 'Maria', available: true},
    {name: 'Josias', available: false},
    {name: 'Kaleber', available: true},
]

const availableUsers = users.filter((user) => user.available)
console.log(availableUsers);

// 4 - map
const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleura elétrica', price: 10.99, category: 'Eletro'},
    {name: 'Fogão', price: 10.99, category: 'Eletro'},
    {name: 'Calça', price: 10.99, category: 'Roupas'},
]

products.map((product) => {
    if(product.category === 'Roupas'){
        product.onSale = true
    }
})

console.log(products)

// 5 - templete literals
const userName = 'Elson'
const age = 22

console.log(`O meu nome é ${userName} e tenho ${age} anos.`)

// 6 - destructuing
const fruits = ['Maçã', 'Mamão', 'Laranja']
const sortedFruits = fruits.sort((a, b) => a.localeCompare(b))
const [f1, f2, f3,] = sortedFruits

console.log(f1, f2, f3)

const productsDetails = {
    name: 'Mause',
    price: '39.99',
    category: 'Periférico', 
    color: 'Cinza'
}

const {name: productName, price, category, color} = productsDetails

console.log(`O nome do produto é ${productName}, ele custa R$${price}  e é da cor ${color}`)

// spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]
console.log(a3);

const a4 = [0, ...a3, 7]
console.log(a4)

const carName = {name: 'Gol'}
const carbrand = {brand: 'VW'}
const otherInfo = {km: 100, price: 49999}

const car = {...carName, ...carbrand,... otherInfo}
console.log(car)