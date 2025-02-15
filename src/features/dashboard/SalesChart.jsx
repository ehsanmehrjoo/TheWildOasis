import styled from "styled-components";
import DashboardBox from "./DashboardBox";
import Heading from "../../ui/Heading";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;


  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }


  @media (max-width: 768px) {
    height: 250px; 
  }
`;


function SalesChart({ bookings, numDays }) {
  const { isDarkMode } = useDarkMode();

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => ({
    label: format(date, "MMM dd"),
    totalSales: bookings
      .filter((booking) => isSameDay(date, new Date(booking.created_at)))
      .reduce((acc, cur) => acc + cur.totalPrice, 0),
    extrasSales: bookings
      .filter((booking) => isSameDay(date, new Date(booking.created_at)))
      .reduce((acc, cur) => acc + cur.extrasPrice, 0),
  }));

  const colors = isDarkMode
    ? {
        totalSales: { stroke: "#4f46e5", fill: "#4f46e5" },
        extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
        text: "#e5e7eb",
        background: "#18212f",
      }
    : {
        totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
        extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
        text: "#374151",
        background: "#fff",
      };

  return (
    <StyledSalesChart>
      <Heading as="h2">Sales</Heading>
      <ResponsiveContainer 
  height={window.innerWidth < 768 ? 250 : 300} 
  width="100%">
  <AreaChart data={data}>
    <XAxis 
      dataKey="label" 
      tick={{ fill: colors.text }} 
      tickLine={{ stroke: colors.text }} 
    />
    <YAxis 
      unit="$" 
      tick={{ fill: colors.text }} 
      tickLine={{ stroke: colors.text }} 
    />
    <CartesianGrid strokeDasharray="4" />
    <Tooltip contentStyle={{ backgroundColor: colors.background }} />
    <Area
      dataKey="totalSales"
      type="monotone"
      stroke={colors.totalSales.stroke}
      fill={colors.totalSales.fill}
      strokeWidth={4}
      name="Total Sales"
      unit="$"
    />
    <Area
      dataKey="extrasSales"
      type="monotone"
      stroke={colors.extrasSales.stroke}
      fill={colors.extrasSales.fill}
      strokeWidth={4}
      name="Extras Sales"
      unit="$"
    />
  </AreaChart>
</ResponsiveContainer>

    </StyledSalesChart>
  );
}

export default SalesChart;
