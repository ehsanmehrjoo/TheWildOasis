import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { HiEllipsisVertical, HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
 


const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 100vh; /* عرض کامل ستون */
  height: 7vh; /* حفظ نسبت تصویر */
  object-fit: cover; /* برش تصویر به‌صورت متناسب */
  object-position: center; /* مرکز تصویر */
  border-radius: 0.4rem; //گوشه‌های گرد برای زیبایی
  max-width: 8rem;
  @media (max-width: 768px) {
    width: 50rem; /* اندازه کوچک‌تر در دستگاه‌های کوچک */
    height: 7.5rem;
    max-width: 6rem;
  }
`;


const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
 
const StyledButton = styled.button`
  background-color: var(--color-grey-100);
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-grey-200);
    transform: scale(1.1);
  }

  &:active {
    background-color: var(--color-grey-300);
  }

  &:disabled {
    background-color: var(--color-grey-50);
    cursor: not-allowed;
    transform: none;
  }

  svg {
    font-size: 1.6rem;
    color: var(--color-grey-600);
  }
`;

const ActionsContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid var(--color-grey-100);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
  overflow: hidden;
  z-index: 10;

  button {
    width: 100%;
    padding: 0.8rem 1.2rem;
    background: none;
    text-align: left;

    &:hover {
      background-color: var(--color-grey-100);
    }
  }
`;
function CabinRow({cabin}) {
  const {id : cabinId , name , image , regularPrice ,  discount , maxCapacity , description} = cabin;
  const {isLoading , deleteCabin } = useDeleteCabin();
  const {isCreating, createCabin} = useCreateCabin();
  const [show, setShow ] = useState(false);

  function handleDeleteCabin(){
    deleteCabin(cabinId)
  }
  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
   <Table.Row role="row" columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
   <Img src={image} alt={name} />
   <Cabin>{name}</Cabin>
   <div>Fits up to {maxCapacity} guests</div>
   <Price>{formatCurrency(regularPrice)}</Price>
   {discount ?   <Discount> {formatCurrency(discount)} </Discount> : <span>&mdash;</span>}

   <div>
   <button onClick={() => setShow(!show)}><HiEllipsisVertical className="text-7xl"/></button>
   {show && <><button disabled={isCreating} onClick={handleDuplicate}><HiSquare2Stack /></button>
   <Modal>

   <Modal.Open opens="edit">
   <button><HiPencil /></button>
   </Modal.Open>

   <Modal.Window name="edit">
   <CreateCabinForm cabinToEdit={cabin}/>
   </Modal.Window>
   {/* onClick={ () =>  deleteCabin(cabinId)} disabled={isLoading} */}
  <Modal.Open opens='delete'>

   <button >
   <HiTrash />
   </button>
  </Modal.Open>

  <Modal.Window name='delete'>

    <ConfirmDelete resourceName={name} onConfirm={handleDeleteCabin} disabled={isLoading}/>

  </Modal.Window>
 
   </Modal>
   </>}

   </div>
   </Table.Row>
    
   
  )
}

export default CabinRow