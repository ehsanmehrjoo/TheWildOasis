import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UpdateCurrentUser } from '../../services/apiAuth'
import toast from 'react-hot-toast'


function useUpdateUser() {
    const queryClient = useQueryClient()
  const { mutate : UpdateUser , isLoading : isUpdating }  = useMutation({
    mutationFn : UpdateCurrentUser,
    onSuccess:({user}) => {
        toast.success('user account successfully Updated ')
        queryClient.setQueryData('user' , user)
        queryClient.invalidateQueries({queryKey : ['user']})
    },


    onError : (err) => {
        toast.error(err.message)
    }
  })
  return { UpdateUser , isUpdating }
}

export default useUpdateUser