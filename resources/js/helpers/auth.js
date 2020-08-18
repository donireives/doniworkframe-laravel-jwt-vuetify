import {setAutorization} from './general';

export function login(credentials){
    return new Promise((res,rej)=>{
        axios.post('/api/auth/login',credentials)
        .then((response)=>{
            setAutorization(response.data.access_token);
            res(response.data)
        })
        .catch((err)=>{
            rej("wrong email or password")
        })
    })
}
export function getLocalUser(){
    const userStr = localStorage.getItem("user");
    if (!userStr){
        return null
    }
    return JSON.parse(userStr)
}
