import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { CreateEditCabins } from '../../services/apiCabins';
import toast from 'react-hot-toast';

export function useCreateCabin() {
    const queryClient = useQueryClient();
    const { mutate: createCabin, isLoading: isCreating } = useMutation({
      mutationFn: CreateEditCabins,
      onSuccess: () => {
        toast.success("New Cabin successfully created");
        queryClient.invalidateQueries({ queryKey: ["cabins"] });
       
      },
      onError: (err) => {
        console.error("Error:", err);
        toast.error(err.message || "Something went wrong!");
      },
    });

    return {createCabin , isCreating}
}

  


