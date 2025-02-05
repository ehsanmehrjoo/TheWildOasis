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
 
import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import useCheckOut from "../check-in-out/useCheckOut";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteBooking from "./useDeleteBooking";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const {isLoading , booking} = useBooking()
  const {isCheckingOut, checkout } = useCheckOut()
  const { isDeleting, deleteBooking } = useDeleteBooking()
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
              <Modal>
              <Modal.Open opens="delete">
                 <Button variation="danger" icon={<HiTrash />}   >
                     Delete
                 </Button>
              </Modal.Open>
              <Modal.Window name="delete">
                <ConfirmDelete  resourceName="booking" onConfirm={() => deleteBooking(bookingId,{
                  onSuccess : () => {
                    navigate(`/bookings`)
                  },
                   onError: (error) => {
                        console.error("Error deleting booking:", error);
                  },
                })} disabled={isDeleting}/>
              </Modal.Window>
              </Modal>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
