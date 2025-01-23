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
const sortValue = searchparams.get('sortBy')
// const sortBy = !sortValue || sortValue === "startDate-desc" ? null : ""

  const { isLoading, data: bookings = [], error } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({filter}),
  });

  console.log(bookings);
  return { isLoading, bookings, error };
}

export default useBookings;
