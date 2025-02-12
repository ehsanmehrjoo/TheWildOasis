import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
  @media (max-width: 768px) { 
  display: none;
  }
`;

function Logo() {
  const {isDarkMode} = useDarkMode()
  const src = isDarkMode ? "/src/data/img/logo-dark.png" : '/src/data/img/logo-light.png'
  return (
    <StyledLogo>
      {isDarkMode ?  <Img className="img" src={src} alt="Logo" />  : <Img className="img" src={src} alt="Logo" />}
    </StyledLogo>
  );
}

export default Logo;
