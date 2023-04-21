import axios from 'axios';

export default axios.create({
   baseURL: 'http://192.168.120.114:8081/mcs-consulta-trabajador-hogar/auth/login'
})