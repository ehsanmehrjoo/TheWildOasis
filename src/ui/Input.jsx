import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  font-size: 1.6rem;
  width: 100%; /* عرض 100% برای موبایل */

  @media (min-width: 768px) {
    width: auto; /* در نمایشگرهای بزرگ‌تر مقدار پیش‌فرض اعمال شود */
  }
`;

export default Input;
