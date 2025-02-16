import styled from "styled-components";

const StyledStat = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 1.6rem;
  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.6rem;
  row-gap: 0.4rem;

  /* پیش‌فرض عرض */
  width: 100%;
  max-width: 400px; /* حداکثر عرض */

  /* ریسپانسیو */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* یک ستون در نمایش تبلت */
    grid-template-rows: auto;
    text-align: center;
    padding: 1.2rem;
    width: 90%; /* عرض کمتر برای تبلت */
    max-width: 350px; /* تنظیم حداکثر عرض */
  }

  @media (max-width: 480px) {
    width: 100%; /* عرض کامل در گوشی‌های کوچک */
    max-width: 380px; /* محدود کردن عرض برای گوشی */
  }
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-${(props) => props.color}-700);
  }

  /* ریسپانسیو */
  @media (max-width: 768px) {
    margin: 0 auto; /* آیکون در مرکز */
    padding: 1.5rem;
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);

  /* ریسپانسیو */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-top: 0.8rem; /* فاصله بین آیکون و متن */
  }
`;

const Value = styled.p`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 500;

  /* ریسپانسیو */
  @media (max-width: 768px) {
    font-size: 2rem; /* کاهش اندازه فونت برای موبایل */
  }
`;

function Stat({ icon, title, value, color }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
}

export default Stat;
