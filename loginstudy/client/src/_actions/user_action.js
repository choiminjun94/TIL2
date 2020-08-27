import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,

} from './types';

export function loginUser(dataToSubmit) {

    const request = axios.post('/api/user/login', dataToSubmit)
        .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request 
    }
}

export function registerUser(dataToSubmit) {

    const request = axios.post('/api/user/register', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: request
    }
}

//dataTosubmit가
// let body ={
//     email: Email,
//     password: Password
// }
// dispatch(loginUser(body))  을 받아줏는 역할

//return 내용을 reduxer로 보내야함 
//방법
