import React from 'react'
import styled from 'styled-components'
import { HiOutlineUser , HiOutlineMoon , HiOutlineArrowRightOnRectangle  } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
display: flex;
align-items: center;
 justify-content: flex-end;
background-color : var(--color-grey-0);
padding: 1.2rem 4.8rem;
border-bottom:1px solid var(--color-grey-100) ;
`;

const Ul = styled.ul`
display: flex;
flex-direction: row;
gap: 0.4rem;
`

const Li = styled.li`
margin-right: 1rem;
padding: 0.6rem;

& svg {
width: 22px;
height: 22px;
color: var(--color-brand-600);
}

&:hover {
background-color : var(--color-grey-100);
border-radius: var(--border-radius-sm);
}
 
`

 const Img = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
`
const Div = styled.div`
display: flex;
gap: 1.2rem;
-webkit-box-align: center;
align-items: center;
font-weight: 500;
font-size: 1.4rem;
 color: var(--color-grey-600);
`
const Span = styled.span`
margin-right:2rem;
`
function Header() {
  return (
    <StyledHeader>
    <Div>
    <Img src='https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/avatars/avatar-8bf4454b-d064-4a81-b1c0-ecde43d5a104-0.8637693045937385'/>
    <Span>demo</Span>
    </Div>
    <Ul>

    <Li>
    <NavLink to="account">
    <HiOutlineUser/>
    </NavLink>
    </Li>
    <Li><HiOutlineMoon /></Li>
    <NavLink to="login">
    <Li><HiOutlineArrowRightOnRectangle /></Li>
    </NavLink>
    </Ul>
    </StyledHeader>
  )
}

export default Header