import { useMutation } from "@tanstack/react-query"
import { Login as apiLogin } from "../../services/apiAuth"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

 

function useLogin() {
    const navigate = useNavigate()
   const {mutate : Login , isLoading : isLoadingLogin} = useMutation({
    mutationFn :  ({email , password}) => apiLogin({email, password}),


    onSuccess: (user) => {
        navigate(`/dashboard`)
        toast.success("Login Success")
    },
    onError: (err) => {
        console.log("ERROR : ", err);
        toast.error('Provided email or password are incorrect')
    }
    ,
  
   })
   return { Login , isLoadingLogin}
}

export default useLogin