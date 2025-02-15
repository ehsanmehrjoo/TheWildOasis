import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";
import Stats from "./Stats";
import useCabins from "../cabins/useCabins";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;

  /* ریسپانسیو برای تبلت و گوشی */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* فقط یک ستون */
    grid-template-rows: auto auto auto auto;
    gap: 1.6rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem; /* فاصله کمتر برای گوشی‌های خیلی کوچک */
  }
`;

function DashboardLayout() {
  const { isLoading, bookings } = useRecentBookings();
  const { isLoadingStays, stays, confirmedStays, numDays } = useRecentStays();
  const { isLoading: isLoadingCabin, cabins } = useCabins();
  const cabinCount = cabins?.length || 0;

  if (isLoading || isLoadingStays || isLoadingCabin) return <Spinner />;
  console.log(cabins);

  return (
    <StyledDashboardLayout>
      <Stats
        confirmedStays={confirmedStays}
        bookings={bookings}
        numDays={numDays}
        cabinCount={cabinCount}
      />
      <div>Today's activity</div>
      <div>Cart stay duration</div>
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
