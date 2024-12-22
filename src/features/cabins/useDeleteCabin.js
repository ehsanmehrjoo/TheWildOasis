import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins as  deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

 

export function useDeleteCabin   ({name})   {
    const queryClient = useQueryClient()
    const { isLoading  , mutate : deleteCabins} =  useMutation({ 
      mutationFn : (id)  => deleteCabinApi(id),
      onSuccess : () =>  {
        toast.success(`Cabins ${name} successfully deleted`)
        queryClient.invalidateQueries({
          queryKey: ["cabins"]
        })  
      },
      onError: (err) => {
        toast.error(err.message);
        
      },
      
    })

    return {isLoading , deleteCabins   } ; 
};
 