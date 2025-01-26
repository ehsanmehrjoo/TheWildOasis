import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

function useBookings() {
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

  const { isLoading, data: {data : bookings = [] , count} = {} ,  error } = useQuery({
    queryKey: ["bookings", filter , sortBy , page],
    queryFn: () => getBookings({filter, sortBy ,page }),
  });

  // console.log(bookings);
  return { isLoading, bookings,count,   error };
}

export default useBookings;
