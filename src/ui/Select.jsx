import styled from "styled-components";
import { PAGE_SIZE } from "../utils/constants";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
  width: 100%; /* Make the select box take the full width */

  @media (min-width: 768px) {
    width: auto; /* Adjust width for larger screens */
  }
`;

function Select({ options, value = PAGE_SIZE, onChange, ...props }) {
  return (
    <StyledSelect value={value } onChange={onChange} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
