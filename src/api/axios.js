import axios from 'axios';
export default axios.create({
    baseURL: 'http://project1-auth.herokuapp.com/api',
    // baseURL: 'http://localhost:8000/api',
})