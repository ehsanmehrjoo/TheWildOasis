import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete"
import Modal from "../../ui/Modal"

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye, HiTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
 
import  useDeleteBooking  from "./useDeleteBooking";
import useCheckOut from "../check-in-out/useCheckOut";



const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email } = {},
    cabins: { name: cabinName } = {},
  },
}) {
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };
const navigate = useNavigate()
  const formattedStatus = status ? status.replace("-", " ") : "Unknown";
  const { isDeleting, deleteBooking } = useDeleteBooking()
  const {isCheckingOut, checkout } = useCheckOut()
 
  function handleDeleteBooking() {
    deleteBooking(bookingId, {
      onSuccess: () => {
        console.log(`Booking ${bookingId} deleted successfully!`);
      },
      onError: (error) => {
        console.error("Error deleting booking:", error);
      },
    });
  }
  
  return (
    <Table.Row>
      <Cabin>{cabinName || "No cabin info"}</Cabin>

      <Stacked>
        <span>{guestName || "Unknown guest"}</span>
        <span>{email || "No email provided"}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status] || "grey"}>{formattedStatus}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>
        <Modal>
      <Menus.Menu>
      <Menus.Toggle id={bookingId} />
      <Menus.List id={bookingId}>
        <Menus.Button icon={<HiEye />} onClick={() => navigate(`/bookings/${bookingId}`)}>See details</Menus.Button>
        {status === "unconfirmed" && <Menus.Button icon={<HiArrowDownOnSquare />} onClick={() => navigate(`/checkin/${bookingId}`)}>Check in</Menus.Button>}
        {status === "checked-in" && <Menus.Button icon={<HiArrowUpOnSquare />} disabled={isCheckingOut} onClick={() => checkout({bookingId})} >Check out</Menus.Button>}

        <Modal.Open opens='delete'>
         <Menus.Button  icon={<HiTrash />}>Delete booking</Menus.Button>
        </Modal.Open>    
      </Menus.List>
      
      <Modal.Window name='delete'>
 
     <ConfirmDelete resourceName="booking" onConfirm={handleDeleteBooking} disabled={isDeleting}/>
 
   </Modal.Window>
      </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
