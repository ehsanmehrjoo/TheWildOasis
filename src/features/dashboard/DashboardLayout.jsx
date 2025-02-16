import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";
import Stats from "./Stats";
import useCabins from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 ستون در سایزهای بزرگ */
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;

  /* ریسپانسیو برای سایزهای مختلف */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 2 ستون برای تبلت */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 ستون برای موبایل */
    grid-template-rows: auto; /* ارتفاع خودکار */
    gap: 1.6rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem; /* کاهش فاصله بین عناصر برای گوشی‌های کوچک */
    padding: 1rem; /* افزودن padding داخلی برای بهتر نمایش دادن */
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
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays}/>
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
