import React from "react";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  margin-left: 120rem;

  @media (max-width: 1200px) {
    margin-left: 50rem;
  }

  @media (max-width: 992px) {
    margin-left: 20rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    margin-left: 0;
  }
`;

function Header() {
 
  
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
