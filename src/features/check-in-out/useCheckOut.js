import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
;

function useCheckOut() {
    const queryClient = useQueryClient();


    const { isLoading: isCheckingOut, mutate: checkout } = useMutation({
        mutationFn: async ({ bookingId }) => {
            if (!bookingId) throw new Error("Booking ID is required");
            return await updateBooking(bookingId, { status: "checked-out" });
        },
        onSuccess: (data) => {
            toast.success(`Booking #${data.id} successfully checked out`);
            queryClient.invalidateQueries({ queryKey: ["bookings"] });
        },
        onError: (err) => {
            console.error("Checkout Error:", err.message);
            toast.error("There was an error while checking out");
        },
    });

    return { isCheckingOut, checkout };
}

export default useCheckOut;
