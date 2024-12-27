import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateSetting as updateSettingAPI} from '../../services/apiSettings'
import toast from 'react-hot-toast'

function useUpdateSetting() {
    const queryClient = useQueryClient();
    const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
        
        mutationFn : updateSettingAPI,
        onSuccess : () => {
            toast.success('settings successfully Updated')
            queryClient.invalidateQueries({
                queryKey: ['settings'],
            })
        }, 
        onError : (err) => toast.error(err.message),
    })
    return { updateSetting, isUpdating }
}

export default useUpdateSetting