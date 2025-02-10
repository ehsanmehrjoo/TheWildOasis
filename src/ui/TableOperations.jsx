import styled from 'styled-components';


const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap; /* Allow items to wrap to the next line */
  
  @media (max-width: 768px) {
    justify-content: center; /* وسط‌چین کردن در صفحه‌های کوچک */
  }
  `;
  export default TableOperations;
