import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

function useRecentStays() {
  const [searchParams] = useSearchParams();
  const numDays = !searchParams.get("last") ? 7 : Number(searchParams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { isLoading: isLoadingStays, data: stays } = useQuery({
    queryFn: () => getStaysAfterDate(queryDate),
    queryKey: ["stays", `last-${numDays}`],
  });
// If stays is undefined or null, use the default value of the empty array
   const confirmedStays =
    stays?.filter((stay) => stay.status === "checked-in" || stay.status === "checked-out") || [];

  return { isLoadingStays, stays, confirmedStays , numDays};
}

export default useRecentStays;
