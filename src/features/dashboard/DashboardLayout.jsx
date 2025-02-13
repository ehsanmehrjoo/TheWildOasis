import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";
import Stats from "./Stats";
import useCabins from "../cabins/useCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


function DashboardLayout() {
  const { isLoading ,  bookings} = useRecentBookings()
  const { isLoadingStays, stays, confirmedStays , numDays} = useRecentStays() ;
  const {isLoading : isLoadingCabin, cabins } = useCabins() ;
  const cabinCount = cabins.length;

  if(isLoading || isLoadingStays || isLoadingCabin) return <Spinner/>;
  console.log(cabins);
  return (
    <StyledDashboardLayout>
    <Stats confirmedStays={confirmedStays}  bookings={bookings} numDays={numDays} cabinCount={cabinCount}/>
    <div>Today's activity</div>
    <div>Cart stay duration</div>
    <div>Cart of sales</div>

    </StyledDashboardLayout>
  )
}

export default DashboardLayout