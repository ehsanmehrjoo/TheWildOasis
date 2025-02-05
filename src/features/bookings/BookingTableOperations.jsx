import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import SizeBookings from "../../ui/Size-bookings";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
        ]}
      />
       <SizeBookings
        options={[
          { value: 3, label: "3" },
          { value: 5, label: "5" },
          { value: 7, label: "7" },
          { value: 9, label: "9" },
          { value: 10, label: "10" },
          { value: 11, label: "11" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
