import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function useLogin() {
    const [loading , setLoading] = useState(false);
    const {setAuthUser} =  useAuthContext()



    const login = async (username , password) => {
        const success = handleErrors({username , password});
        if(!success) return;
        setLoading(true)
        try{
            const res = await fetch("/api/auth/login" , {
                method : "POST",
                headers: {"Content-type" : "application/json"},
                body: JSON.stringify({username , password})
            }) 
            const data = await res.json();
            if(data.error){
                throw new Error(toast(data.error))
            }

            localStorage.setItem("chat-user" , JSON.stringify(data));
            setAuthUser(data);

        }catch(err){
            toast.error(err.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading , login}
}

function handleErrors({username , password}){
    if(!username || !password){
        toast.error("Please fill all fields");
        return false;
    }
    return true;
}


export default useLogin
