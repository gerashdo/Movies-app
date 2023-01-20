import axios from "axios"


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '8aa4e182026dd7c5493276826bc62f84',
        language: 'es-ES',
    }
})

export default movieDB
