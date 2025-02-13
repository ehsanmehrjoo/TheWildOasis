import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE as DEFAULT_PAGE_SIZE } from "../../utils/constants";

function useBookings() {
  const queryClient = useQueryClient();
  const [searchparams] = useSearchParams();

  // Size-bookings
  const sizeBookings = !searchparams.get("size-bookings")
    ? 5
    : Number(searchparams.get("size-bookings"));
  const PAGE_SIZE = sizeBookings ? Number(sizeBookings) : DEFAULT_PAGE_SIZE;

  // Filter
  const filterValue = searchparams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // Sort by
  const sortByRaw = searchparams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // Pagination
  const page = !searchparams.get("page") ? 1 : Number(searchparams.get("page"));

  // Prefetching
  const { isLoading, data: { data: bookings = [], count } = {}, error } = useQuery({
    queryKey: ["bookings", filter, sortBy, page, PAGE_SIZE],
    queryFn: () => {
      // اگر شماره صفحه از تعداد صفحات بیشتر است، بازگشت داده خالی
      const pageCount = Math.ceil(count / PAGE_SIZE) || 1;
      if (page > pageCount) {
        return { data: [], count }; // داده خالی و شمارش اصلی
      }

      return getBookings({ filter, sortBy, page, PAGE_SIZE });
    },
    keepPreviousData: true,
    enabled: page > 0 && PAGE_SIZE > 0, // جلوگیری از درخواست در شرایط نامعتبر
  });

  const pageCount = Math.ceil(count / PAGE_SIZE) || 1;

  if (page < pageCount && PAGE_SIZE <= count) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1, PAGE_SIZE],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1, PAGE_SIZE }),
    });
  }
  if (page > 1 && PAGE_SIZE <= count) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", filter, sortBy, page - 1, PAGE_SIZE],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1, PAGE_SIZE }),
    });
  }

  return { isLoading, bookings, count, PAGE_SIZE, error };
}

export default useBookings;
