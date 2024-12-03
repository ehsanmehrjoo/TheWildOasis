import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { HiMenuAlt3 } from "react-icons/hi";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
    z-index: 1000;
  }
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: var(--color-grey-600);
  font-size: 2.4rem;
  cursor: pointer;
  display: none;  /* Default to hidden */

  @media (max-width: 768px) {
    display: block;  /* Only show on mobile */
    position: fixed;
    top: 2rem;
    left: 2rem;
    z-index: 1100;  /* Ensure it appears above other content */
  }
`;

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>
        <HiMenuAlt3 />
      </MenuButton>
      <StyledSidebar isOpen={isOpen}>
        <Logo />
        <MainNav />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
