import axios from "axios";

export const getUser=async ()=> {

    let res= await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;

}

export const getUrserById = async (id)=>{
    let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.data;
}

