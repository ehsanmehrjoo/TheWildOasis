import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins } from "../../services/apiCabins";
import { useState } from "react";


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
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
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
// const Button = styled.button`
//     background: none;
//     border: none;
//     padding: 0.4rem;
//     border-radius: var(--border-radius-sm);
//     font-size: 3rem; /* 48px */
// line-height: 1;
//     transform: translateX(0.8rem);
//     transition: 0.2s;
// `

function CabinRow({cabin}) {

  const {id : cabinId , name , image , regularPrice ,  discount , maxCapacity} = cabin;
  const [errorMsg, setErrorMsg] = useState("");


  const queryClient = useQueryClient()
  const { isLoading  , isSuccess , isError, mutate} =  useMutation({ 
    mutationFn : (id)  => deleteCabins(id),
    onSuccess : () =>  {
      alert(`Cabins ${name} successfully deleted`)
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      })  
    },
    onError: (err) => {
      setErrorMsg(err.message);
      
    },
    
  
  })
  return ( <>
    <div className="bg-red-600">
     {isLoading && <p>Loading...</p>}
      {isSuccess && <p className="color: red">Cabins "${name}" successfully deleted</p>}
      {isError && <p style={{ color: "red" }}>{errorMsg}</p>}
      </div>
   <TableRow role="row">
   <Img src={image} alt={name} />
   <Cabin>{name}</Cabin>
   <div>Fits up to {maxCapacity} guests</div>
   <Price>{formatCurrency(regularPrice)}</Price>
   <Discount>{formatCurrency(discount)}</Discount>
   <button onClick={ () => mutate(cabinId)} disabled={isLoading}>
   Delete
   {/* <HiEllipsisVertical className="text-7xl"/> */}
   </button>
   </TableRow>
   </>
  )
}

export default CabinRow