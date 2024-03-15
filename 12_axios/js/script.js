'user strict'
// 1 - instalação
console.log(axios);

// 2 - first request
const getData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        
        console.log(response);
        return response.data
    } catch(error) {
        console.log(`Houve um erro: ${error}`);
    }
}

getData()

// 3 - imprimendo dados na tela
const container = document.getElementById('user-container')

const printdata = async () => {
    const data = await getData()

    console.log(data);

    data.forEach((user) => {
        const div = document.createElement('div')

        const nameElement = document.createElement('h2')
        nameElement.textContent = user.name
        
        const emailElement = document.createElement('p')
        emailElement.textContent = user.email

        div.appendChild(nameElement)
        div.appendChild(emailElement)
        container.appendChild(div)

    });
}

printdata()