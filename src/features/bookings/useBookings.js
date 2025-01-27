import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

function useBookings() {
  const queryClient = useQueryClient()
  const [searchparams] = useSearchParams();
// Filter
const filterValue = searchparams.get('status')
const filter = !filterValue || filterValue === "all" ? null :
 {field : "status" , value : filterValue};
// {field : "totalPrice" , value : 5000 , method : "gte" };

// Sort by
const sortByRaw = searchparams.get('sortBy') || 'startDate-desc';
const [field , direction] = sortByRaw.split("-");
const sortBy = {field , direction};

// PAGINATION
const page = !searchparams.get('page') ?  1 : Number(searchparams.get('page')) 

// QUERY
  const { isLoading, data: {data : bookings = [] , count} = {} ,  error } = useQuery({
    queryKey: ["bookings", filter , sortBy , page],
    queryFn: () => getBookings({filter, sortBy ,page }),
  });

//  PERFETCHING
const pageCount = Math.ceil(count  / PAGE_SIZE)
if(page < pageCount)
 queryClient.prefetchQuery({
  queryKey: ["bookings", filter , sortBy , page +1 ],
  queryFn: () => getBookings({filter, sortBy , page :page +1}),
 })
 if(page > 1)
  queryClient.prefetchQuery({
   queryKey: ["bookings", filter , sortBy , page - 1 ],
   queryFn: () => getBookings({filter, sortBy , page :page - 1}),
  })
  return { isLoading, bookings,count,   error };
}

export default useBookings;
