const postfetch = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com',
    headers: {
        Authorization: 'meunovotoken',
        Accept: 'application/json'
    }
})