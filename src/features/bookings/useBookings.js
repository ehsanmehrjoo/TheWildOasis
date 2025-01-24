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

  const { isLoading, data: bookings = [], error } = useQuery({
    queryKey: ["bookings", filter , sortBy],
    queryFn: () => getBookings({filter, sortBy }),
  });

  // console.log(bookings);
  return { isLoading, bookings, error };
}

export default useBookings;
