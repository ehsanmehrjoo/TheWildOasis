import { useMutation } from "@tanstack/react-query"
import { Logout as apiLogout} from "../../services/apiAuth"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

function useLogout() {
    const navigate = useNavigate()
 const {mutate : Logout , isLoading} =  useMutation({
    mutationFn: apiLogout,
    onSuccess: () => {
        toast.success(`You're logged out. See you soon! 😊`)
        navigate(`/login`)
    }
    ,
    onError : (err) =>{
        toast.error(err.message)
    }
 })
 return {Logout , isLoading}
}

export default useLogout