import axios from 'axios'; 

const API_URL='http://localhost:5000/products'


export const getUsers = async ()=>{    //get for reading the data
    try{
    return await axios.get(API_URL);
    }
    catch(error){
        console.log('Error calling getusers api' , error.message)
    }
}


export const getUser = async (data)=>{    //getting single user while editing particular user.
    try{
    return await axios.get(`${API_URL}/${data}`);
    }
    catch(error){
        console.log('Error calling editusers api' , error.message)
    }
}


