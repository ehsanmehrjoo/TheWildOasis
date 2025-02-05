import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

function useBooking() {
  const { bookingId } = useParams();

  const queryClient = useQueryClient()
    const { isLoading, data: booking ,error  } = useQuery({
        queryKey: ["bookings"],
        queryFn: () => getBooking(bookingId),
        retry : false,
      });

      const prefetchCabins  = () => {
        queryClient.prefetchQuery({
          queryKey: ["bookings", bookingId],
          queryFn: getBooking(bookingId),
        })
      }
      return { isLoading , booking ,error , prefetchCabins}
}

export default useBooking