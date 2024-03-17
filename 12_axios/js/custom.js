const postFetch = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
    headers: {
        Accept: 'application/jon',
        Authorization: 'meunovotoken',
    }
})