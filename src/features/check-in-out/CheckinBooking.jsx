import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import useCheckin from "./useCheckin";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { isLoading, booking } = useBooking();
  const moveBack = useMoveBack();

  useEffect(() => {
    if (booking) {
      setConfirmPaid(booking.isPaid ?? false);
    }
  }, [booking]);

 const  { isCheckingIn , checkin} = useCheckin()
  if (isLoading) return <Spinner />;
  if (!booking) return <p>No booking data found.</p>;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
    isPaid,
  } = booking;

  function handleCheckin() {
    // اگر رزرو پرداخت نشده و کاربر پرداخت را تأیید نکرده باشد، Check-in انجام نشود
    if (!isPaid && !confirmPaid) {
      alert("Please confirm that the payment has been made.");
      return;
    }
  
    // در غیر این صورت، Check-in انجام شود
    checkin(bookingId);
  }

  return (
    <Box>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Box>
      <Checkbox
  checked={isPaid || confirmPaid} // باشد، تیک زده شوداگر پرداخت شده 
  onChange={() => setConfirmPaid((confirm) => !confirm)}
  id="confirm"
  disabled={isPaid} // اگر پرداخت شده باشد، غیرفعال شود
>
  I confirm that {guests.fullName} has paid the total amount of {formatCurrency(totalPrice)}
</Checkbox>
      </Box>

      <ButtonGroup>
      <Button
  disabled={!isPaid && !confirmPaid} // اگر پرداخت نشده و تأیید نشده باشد، غیرفعال شود
  onClick={handleCheckin}
>
  Check in booking #{bookingId}
</Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default CheckinBooking;