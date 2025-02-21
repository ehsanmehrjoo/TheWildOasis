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
    ? "/data/img/logo-dark.png"  // مسیر باید در `public/` باشد
    : "/data/img/logo-light.png";

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
