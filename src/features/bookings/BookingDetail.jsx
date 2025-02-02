import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Spinner from "../../ui/Spinner";

import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "./useBooking";
import { deleteBooking } from "../../services/apiBookings";
import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import useCheckOut from "../check-in-out/useCheckOut";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const {isLoading , booking} = useBooking()
  const {isCheckingOut, checkout } = useCheckOut()
  const navigate = useNavigate()
  const moveBack = useMoveBack();

  const { status, id: bookingId } = booking || {};

if(isLoading || isCheckingOut) return <Spinner />;
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
              {status === "unconfirmed" && <Button   onClick={() => navigate(`/checkin/${bookingId}`)}>Check in</Button>}
                      {status === "checked-in" && <Button icon={<HiArrowUpOnSquare />} disabled={isCheckingOut} onClick={() => checkout({bookingId})} >Check out</Button>}
              
      <Button variation="danger" icon={<HiTrash />}   onClick={() => deleteBooking(bookingId)}>
                Delete
              </Button>
                 
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
