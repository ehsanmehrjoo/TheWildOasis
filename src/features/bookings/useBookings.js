import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

function useBookings() {
  const { isLoading, data: bookings = [], error } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  console.log(bookings);
  return { isLoading, bookings, error };
}

export default useBookings;
