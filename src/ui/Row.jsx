import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}

  /* ریسپانسیو */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.6rem;

    /* اگر نیاز به تغییر رفتار بر اساس type باشد */
    ${(props) =>
      props.type === "horizontal" &&
      css`
        align-items: flex-start;
      `}
  }
`;

Row.defaultProps = {
  type: "horizontal",
};

export default Row;
