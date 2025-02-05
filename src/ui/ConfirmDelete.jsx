import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    width: 30rem;
    gap: 1rem;

    & p {
      margin-bottom: 1rem;
    }

    & div {
      gap: 1rem;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 1rem;

    & div {
      flex-direction: column;
      align-items: stretch;
    }
  }
`;

function ConfirmDelete({ resourceName = "item", onConfirm, disabled, onCloseModal }) {
  const itemType = resourceName === "booking" ? "booking" : "cabin";

  return (
    <StyledConfirmDelete>
      <Heading as="h2">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {itemType} permanently? This action cannot be undone.
      </p>

      <div>
        <Button variation="secondary" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
