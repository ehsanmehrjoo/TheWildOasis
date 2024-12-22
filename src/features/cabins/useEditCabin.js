import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CreateEditCabins } from "../../services/apiCabins";

 

function useEditCabin() {
    const  queryClient = useQueryClient();
    const { mutate: editCabin, isLoading: isEditing } = useMutation({
      mutationFn: (newCabinData) => CreateEditCabins(newCabinData, editId),
      onSuccess: () => {
        toast.success("Cabin successfully edited");
        queryClient.invalidateQueries({ queryKey: ["cabins"] });
  
      },
      onError: (err) => {
        console.error("Error:", err);
        toast.error(err.message || "Something went wrong!");
      },
    });
    return {editCabin , isEditing}
}

export default useEditCabin