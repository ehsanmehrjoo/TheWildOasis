import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
 

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? "var(--color-brand-600)" : "var(--color-grey-50)"};
  color: ${(props) => (props.active ? "var(--color-brand-50)" : "inherit")};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
  const sizeValue = !searchParams.get("size-bookings")
  ? 5
  : Number(searchParams.get("size-bookings"));
  // تعداد کل صفحات
  const PageCount = Math.ceil(count / sizeValue);

  // هندلر برای رفتن به صفحه بعد
  function handleNextPage() {
    const next = currentPage === PageCount ? currentPage : currentPage + 1;
    searchParams.set('page', next);
    setSearchParams(searchParams);
  }

  // هندلر برای رفتن به صفحه قبل
  function handlePerviousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set('page', prev);
    setSearchParams(searchParams);
  }

  return (
    <StyledPagination>
      <P>
        Showing <span>{(currentPage - 1) * sizeValue + 1}</span> to <span>{Math.min(currentPage * sizeValue, count)}</span> of <span>{count}</span> results.
      </P>
      <Buttons>
        {/* دکمه Previous */}
        <PaginationButton onClick={handlePerviousPage} disabled={currentPage === 1}>
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>

        {/* دکمه Next */}
        <PaginationButton
          onClick={handleNextPage}
          disabled={currentPage === PageCount || count === 0}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;

