import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { updateBooking } from '../../services/apiBookings'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function useCheckin() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
  const {isLoading  :  isCheckingIn, mutate : checkin} =   useMutation({
        mutationFn : (bookingId) => updateBooking(bookingId , {
             status : "checked-in",
            isPaid : true
        }
        ),
        onSuccess : (data) => {
            toast.success(`Booking # ${data.id} successfully checked in`)
            queryClient.invalidateQueries({ active : true })
            // queryClient.invalidateQueries({queryKey: ['Booking']})
            navigate(`/`)
        },
        onError : (err) => {
            toast.error(`There was an error while checking in`)
        }
       
    })
    return { isCheckingIn , checkin}
}

export default useCheckin 