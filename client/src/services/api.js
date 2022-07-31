import Axios from 'axios';

const URL = 'http://localhost:8080';

export const addUser = async (user) =>{
    try {

       return await Axios.post(`${URL}/add`, user)

    } catch(err){
        console.log("Error while calling add user API",err)
    }
}

export const getUsers = async() => {

    try{

    return await Axios.get(`${URL}/all`);

    }catch(err){
        console.log('Error while calling the get User API', err)
    }
} 

export const getUser = async (id) => {

    try{

        return await Axios.get(`${URL}/${id}`)

    }catch(err){
        console.log("Error while getting the requested user", err);
    }
}

export const editUser = async (user, id) => {
    try{

        return await Axios.post(`${URL}/${id}`, user)

    }catch(err){
        console.log("Error while calling Edit User API", err)

    }

}

export const deleteUser = async (id) => {
    try{

        return await Axios.delete(`${URL}/${id}`);

    }catch(err){
        console.log("Error occured while calling deleteUser API", err)
    }
}