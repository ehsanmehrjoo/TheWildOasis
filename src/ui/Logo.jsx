import { useState } from "react";
import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  height: 9.6rem; /* جلوگیری از تغییر اندازه هنگام خطا */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  transition: opacity 0.3s ease-in-out;
`;

const Placeholder = styled.div`
  height: 9.6rem;
  width: 9.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey-200);
  color: var(--color-grey-600);
  font-size: 1.4rem;
  border-radius: 8px;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const [hasError, setHasError] = useState(false);

  const src = isDarkMode
    ? "https://iljrwbhnejndlaaifxnp.supabase.co/storage/v1/object/public/avatar//avatar-15b00917-8029-423d-89eb-569080203ac5-0.8784458740977714"  // مسیر باید در `public/` باشد
    : "https://iljrwbhnejndlaaifxnp.supabase.co/storage/v1/object/public/avatar//avatar-15b00917-8029-423d-89eb-569080203ac5-0.25998386882750824";

  return (
    <StyledLogo>
      {!hasError ? (
        <Img
          src={src}
          alt="Logo"
          onError={() => setHasError(true)}
        />
      ) : (
        <Placeholder>Logo Not Found</Placeholder>
      )}
    </StyledLogo>
  );
}

export default Logo;
