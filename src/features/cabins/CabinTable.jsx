
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

// استایل جدول
// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);
//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
//   width: 100%;

//   /* اضافه کردن اسکرول برای موبایل */
//   @media (max-width: 768px) {
//     overflow-x: auto; /* فعال کردن اسکرول افقی */
//     font-size: 1.2rem;
//     width: 100%;
//   }
// `;

// استایل هدر جدول
// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;

//   @media (max-width: 768px) {
//     grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr; /* حفظ ساختار گرید */
//     column-gap: 1.4rem;
//     background-color: var(--color-grey-50);
//     width: 100%;
//   }
// `;

function CabinTable() {

  const { isLoading, cabins, error } = useCabins();
  const [searchParams ]  = useSearchParams()


  const filterValue = searchParams.get('discount') || 'all';
  let filterCabin ;
  if (filterValue === 'all') {
    filterCabin = cabins
  }
  if(filterValue === 'no-discount'){
    filterCabin  = cabins.filter((no) => !no.discount)
  }
  if(filterValue === 'with-discount'){
    filterCabin = cabins.filter((cabin) => cabin.discount);
  }

  // نمایش اسپینر هنگام بارگذاری
  if (isLoading) return <Spinner />;

  // مدیریت خطا (اختیاری)
  if (error) return <p>Error loading cabins...</p>;

  // نمایش جدول کابین‌ها
  return (
    <Menus>
    <Table  columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body
       data={filterCabin} 
       render={(cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
  )}>
      </Table.Body>
    </Table>
    </Menus>
  );
}


export default CabinTable;
