import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE as DEFAULT_PAGE_SIZE } from "../../utils/constants";

function useBookings() {
  const queryClient = useQueryClient();
  const [searchparams] = useSearchParams();

  // Size-bookings
  const sizeBookings = searchparams.get("size-bookings");
  const PAGE_SIZE = sizeBookings ? Number(sizeBookings) : DEFAULT_PAGE_SIZE;

  // Filter
  const filterValue = searchparams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  // {field : "totalPrice" , value : 5000 , method : "gte" };

  // Sort by
  const sortByRaw = searchparams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Pagination
  const page = !searchparams.get("page") ? 1 : Number(searchparams.get("page"));

  // Query
  const { isLoading, data: { data: bookings = [], count } = {}, error } = useQuery({
    queryKey: ["bookings", filter, sortBy, page, PAGE_SIZE],
    queryFn: () => getBookings({ filter, sortBy, page, PAGE_SIZE }),
    keepPreviousData: true, // حفظ داده‌های قبلی هنگام تغییر صفحه
  });

  // Prefetching
  const pageCount = Math.ceil(count / PAGE_SIZE) || 1;

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1, PAGE_SIZE],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1, PAGE_SIZE }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1, PAGE_SIZE],
      queryFn: () =>
        getBookings({ filter, sortBy, page: page - 1, PAGE_SIZE }),
    });
  }

  return { isLoading, bookings, count, PAGE_SIZE, error };
}

export default useBookings;
