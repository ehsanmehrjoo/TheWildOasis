import { useMutation, useQueryClient } from '@tanstack/react-query'

import { updateBooking } from '../../services/apiBookings'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function useCheckin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
  
    const { isLoading: isCheckingIn, mutate: checkin } = useMutation({
        mutationFn: ({ bookingId, breakfast }) =>
            updateBooking(bookingId, {
                status: "checked-in",
                isPaid: true,
                ...breakfast,
            }),
        onSuccess: (data) => {
            toast.success(`Booking # ${data.id} successfully checked in`);
            queryClient.invalidateQueries({ active: true });
            navigate(`/`);
        },
        onError: (err) => {
            console.error(err); // نمایش جزئیات خطا در کنسول
            toast.error(`There was an error while checking in`);
        },
    });
  
    return { isCheckingIn, checkin };
}

export default useCheckin;

// queryClient.invalidateQueries({queryKey: ['Booking']})