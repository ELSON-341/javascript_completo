// var, lest e const
var x = 10
var y = 15

if(y > 10) {
    x = 5
}
console.log(`Agora x é ${x}`);

let a = 10
let b = 15

if(b > 10) {
    let a = 5
    console.log(a);
}

console.log(a);

function logName() {
    const name = 'Elson'
    console.log(name);
}
logName()

const name = 'Mathas'
console.log(name);
