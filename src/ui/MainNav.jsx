import { NavLink } from "react-router-dom";
import styled from "styled-components";
 
import {HiOutlineHome , HiCalendarDays, HiOutlineHomeModern,HiOutlineUsers  ,HiCog6Tooth  } from "react-icons/hi2";
import useCabins from "../features/cabins/useCabins";
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    @media (max-width: 768px) { 
     padding: 0.6rem 1.2rem ,
  }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
 

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
        <StyledLink to="/dashboard">
        <HiOutlineHome />
        <span>Home</span>
        </StyledLink>
        </li>
        <li>
        <StyledLink to="/bookings">
        <HiCalendarDays />
        <span>Bookings</span>
        </StyledLink>
        </li>
        <li>
        <StyledLink to="/cabins">
        <HiOutlineHomeModern />
        <span>Cabins</span>
        </StyledLink>
        </li>
        <li><StyledLink to="/users">
        <HiOutlineUsers />
        <span>Users</span>
        </StyledLink>
        </li>
        <li><StyledLink to="/settings">
        <HiCog6Tooth />
        <span>Settings</span>
        </StyledLink>
        </li>
        {/* <li><StyledLink to="/account">Account</StyledLink></li> */}
         
      </NavList>
    </nav>
  )
}

export default MainNav



 
