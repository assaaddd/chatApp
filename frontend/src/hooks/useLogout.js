import { useState } from "react"
import toast from 'react-hot-toast';
import { useAuthContext } from "../context/AuthContext";

function useLogout() {

    const [loading , setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const logout = async() => {
        console.log("pp");
        setLoading(true)
        try{
            const res = await fetch("/api/auth/logout" , {
                method: "POST",
                headers: {"Content-type": "application/json"},
            });
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.removeItem("chat-user");
            setAuthUser(null);
        }catch(err){
            toast.error(err.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading , logout}
}

export default useLogout
