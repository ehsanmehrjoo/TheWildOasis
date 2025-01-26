export const PAGE_SIZE = 3;
export const BOOKINGS_SELECT = `
id,
 created_at,
  startDate,
   endDate,
    numNights,
     numGuests,
      status,
       totalPrice,
        cabins(name),
         guests(fullName, email)
`;