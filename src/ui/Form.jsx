import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);

      @media (max-width: 768px) {
        padding: 1.6rem 2rem; /* کاهش پدینگ برای صفحه‌های کوچک‌تر */
        font-size: 1.2rem; /* کاهش فونت‌سایز برای صفحه‌های کوچک‌تر */
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;

      @media (max-width: 768px) {
        width: 90%; /* عرض فرم مودال را به 90% کاهش می‌دهیم */
        max-width: 40rem; /* حداکثر عرض را برای صفحه‌های کوچک‌تر تنظیم می‌کنیم */
      }
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;