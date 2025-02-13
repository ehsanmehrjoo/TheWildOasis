import React from "react";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

function SizeBookings({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // Set default value if "size-bookings" is not present in the URL
  const sortValue = !searchParams.get("size-bookings")
    ? 5
    : Number(searchParams.get("size-bookings"));

  function handleChange(e) {
    // Update the "size-bookings" parameter in the URL
    searchParams.set("size-bookings", e.target.value);

    // Reset the "page" parameter to 1 to ensure valid pagination
    searchParams.set("page", 1);
    setSearchParams(searchParams);

    // Invalidate the "bookings" query to fetch updated data
    queryClient.invalidateQueries({
      queryKey: ["bookings"], // Refresh only the "bookings" data
    });
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortValue}
    />
  );
}

export default SizeBookings;
