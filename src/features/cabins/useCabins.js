import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

 

function useCabins() {
  const queryClient = useQueryClient()
    const { isLoading, data: cabins ,error  } = useQuery({
        queryKey: ["cabins"],
        queryFn: getCabins,
      });
      const prefetchCabins  = () => {
        queryClient.prefetchQuery({
          queryKey: ["cabins"],
          queryFn: getCabins,
        })
      }
      return { isLoading , cabins ,error , prefetchCabins}
}

export default useCabins