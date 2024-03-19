// Requisição
postfetch.interceptors.request.use(
    function(config) {
        console.log('Antes da requisição...');
        return config 
    }, 
    function(error) {
        return Promise.reject(error)
    }
)

// Resposta
postfetch.interceptors.response.use(
    function(reponse) {
        console.log('Antes da resposta.')
        return reponse
    },
    function(error) {
        return Promise.reject(error)
    }
)