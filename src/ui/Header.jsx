import React from "react";
import styled from "styled-components";
import {
  HiOutlineUser,
  HiOutlineMoon,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  align-items: center; /* Vertically align header items */
  justify-content: space-between;
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  margin-left: 118rem;
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    margin-left: 0;
  }
`;

const Ul = styled.ul`
  display: flex;
  gap: 1rem;
  margin: 0; /* Remove default margin */

  @media (max-width: 480px) {
    gap: 0.6rem;
  }
`;

const Li = styled.li`
  padding: 0.6rem;
  display: flex;
  align-items: center; /* Ensure icons are vertically centered */
  justify-content: space-between;
  

  & svg {
    width: 22px;
    height: 22px;
    color: var(--color-brand-600);
  }

  &:hover {
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 1.7rem;
`;

const Div = styled.div`
  display: flex;
  align-items: center; /* Vertically align the content inside Div */
  gap: 1rem;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
  margin-left: 2rem;

  @media (max-width: 480px) {
    gap: 0.8rem;
    font-size: 1.2rem;
  }
`;

const Span = styled.span`
  margin-right: 4.7rem;

  @media (max-width: 480px) {
    margin-right: 1rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Div>
        <Img
          src="https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/avatars/avatar-8bf4454b-d064-4a81-b1c0-ecde43d5a104-0.8637693045937385"
          alt="User Avatar"
        />
        <Span>demo</Span>
      </Div>
      <Ul>
        <Li>
          <NavLink to="account">
            <HiOutlineUser />
          </NavLink>
        </Li>
        <Li>
          <HiOutlineMoon />
        </Li>
        <Li>
          <NavLink to="login">
            <HiOutlineArrowRightOnRectangle />
          </NavLink>
        </Li>
      </Ul>
    </StyledHeader>
  );
}

export default Header;
