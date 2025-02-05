import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { useNavigate } from "react-router-dom";

 function useDeleteBooking() {
 
  const queryClient = useQueryClient();
  const navigate = useNavigate(queryClient)
  const { isLoading : isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn:  deleteBookingApi,

    onSuccess: () => {
      toast.success(`Booking  successfully deleted`);
      navigate("/")

      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteBooking };
}
export default useDeleteBooking