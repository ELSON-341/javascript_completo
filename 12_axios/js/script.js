'use strict'
// 1 - instalação
console.log(axios);

// 2 - first request
const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    } catch(error) {
        console.log(error);
    }
}

getData()