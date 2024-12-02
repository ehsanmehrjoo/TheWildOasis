import styled from "styled-components";

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
  return (
    <StyledLogo>
      <Img className="img" src="/src/data/img/logo-light.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
