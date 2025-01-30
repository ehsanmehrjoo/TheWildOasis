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
import useSettings from "../settings/useSettings";

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { isLoading, booking } = useBooking();
  const { settings, isLoading: isLoadingSettings, error } = useSettings();
  const moveBack = useMoveBack();

  console.log(settings);

  useEffect(() => {
    if (booking) {
      setConfirmPaid(booking.isPaid ?? false);
    }
  }, [booking]);

  const { isCheckingIn, checkin } = useCheckin();

  if (isLoading || isLoadingSettings) return <Spinner />;
  if (!booking) return <p>No booking data found.</p>;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    numNights,
    isPaid,
  } = booking;

  const optionalBreakfastPrice = settings.breakfastPrice * numNights * numGuests;

  function handleCheckin() {
    if (!isPaid && !confirmPaid) {
      alert("Please confirm that the payment has been made.");
      return;
    }
    if(addBreakfast){
      checkin({bookingId , breakfast : {
        hasBreakfast : true,
        extrasPrice : optionalBreakfastPrice,
        totalPrice : totalPrice + optionalBreakfastPrice
      }})
    }
    else{
     checkin({bookingId, breakfast : {}});
     }
  }

  return (
    <Box>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!booking.hasBreakfast && (
        <Box>
        <Checkbox
          checked={addBreakfast}
          onChange={() => {
            setAddBreakfast((add) => !add);
            setConfirmPaid(false);
          }}
          id="breakfast"
        >
          Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
        </Checkbox>
      </Box>)}

      <Box>
        <Checkbox
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          id="confirm"
          disabled={isPaid}
        >
          I confirm that {guests.fullName} has paid the total amount of 
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(totalPrice + optionalBreakfastPrice)} 
               (${formatCurrency(totalPrice)} + ${formatCurrency(optionalBreakfastPrice)})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        {!isPaid && !confirmPaid && (
          <span style={{ color: "red", margin: "20px" }}>
            Please confirm that the payment has been made.
          </span>
        )}

        <Button
          disabled={!isPaid && !confirmPaid}
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
