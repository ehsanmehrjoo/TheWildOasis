// TodayActivity.js
import styled from "styled-components";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

import { useTodayActivity } from "./useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;

  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 2rem;
    grid-column: 1 / -1;
    width: 90%;
    max-width: 350px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 380px;
    overflow: auto;
    flex-direction: column; /* عناصر به صورت ستونی دربیایند */
    align-items: center; /* عناصر وسط‌چین شوند */
  }
`;

const TodayList = styled.ul`
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column; /* آیتم‌های لیست به صورت ستونی */

  /* Removing scrollbars */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Adjust height for smaller screens */
  max-height: 300px;

  @media (max-width: 768px) {
    max-height: 250px;
    padding-left: 6.5rem;
    overflow: auto;
    flex-direction: column; /* اطمینان از نمایش ستونی در نمایشگر کوچک */
  }
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;


function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  if (isLoading) {
    return (
      <StyledToday>
        <Spinner />
      </StyledToday>
    );
  }

  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">Today</Heading>
      </Row>

      {activities.length > 0 ? (
        <TodayList>
          {activities.map((activity) => (
            <TodayItem activity={activity} key={activity.id} />
          ))}
        </TodayList>
      ) : (
        <NoActivity>No activity today...</NoActivity>
      )}
    </StyledToday>
  );
}

export default TodayActivity;
