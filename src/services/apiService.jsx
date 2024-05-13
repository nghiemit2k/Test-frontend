import axios from 'axios';

const postLogin = (email,password) => {
    return axios.post(`http://localhost:3000/api/be/access/login`, {email,password})
}
const postRegister =(username,email,password) => {
    return axios.post(`http://localhost:3000/api/be/access/signUp`, {username,email,password})
}
export {
    postLogin,
    postRegister
}