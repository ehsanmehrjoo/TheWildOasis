import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";

// استایل جدول
const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
  width: 100%;

  /* اضافه کردن اسکرول برای موبایل */
  @media (max-width: 768px) {
    overflow-x: auto; /* فعال کردن اسکرول افقی */
    font-size: 1.2rem;
    width: 100%;
  }
`;

// استایل هدر جدول
const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;

  @media (max-width: 768px) {
    grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr; /* حفظ ساختار گرید */
    column-gap: 1.4rem;
    background-color: var(--color-grey-50);
    width: 100%;
  }
`;

function CabinTable() {
  // استفاده از هوک react-query برای دریافت اطلاعات کابین‌ها
  const { isLoading, data: cabins, error } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  // نمایش اسپینر هنگام بارگذاری
  if (isLoading) return <Spinner />;

  // مدیریت خطا (اختیاری)
  if (error) return <p>Error loading cabins...</p>;

  // نمایش جدول کابین‌ها
  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}

export default CabinTable;
