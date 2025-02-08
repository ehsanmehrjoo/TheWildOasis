import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Logout as apiLogout} from "../../services/apiAuth"
import toast from "react-hot-toast"
import { replace, useNavigate } from "react-router-dom"

function useLogout() {
    const navigate = useNavigate()
    const queryClient = useQueryClient()
 const {mutate : Logout , isLoading} =  useMutation({
    mutationFn: apiLogout,
    onSuccess: () => {
        toast.success(`You're logged out. See you soon! 😊`)
        queryClient.removeQueries()
        navigate(`/login` , {replace: true})
    }
    ,
    onError : (err) =>{
        toast.error(err.message)
    }
 })
 return {Logout , isLoading}
}

export default useLogout