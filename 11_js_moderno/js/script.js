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