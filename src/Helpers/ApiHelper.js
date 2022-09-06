import axios from 'axios'

const apiRequest = axios.create({baseURL: 'http://sollute.ddns.net:8080/empresas', headers:{
    'Content-Type': 'application/json'
}})

export default apiRequest