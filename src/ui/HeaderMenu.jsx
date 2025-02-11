import React from 'react'
import styled from 'styled-components'
import ButtonIcon from './ButtonIcon'
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowRightOnRectangle, HiOutlineUser } from 'react-icons/hi2'
import useLogout from '../features/authentication/useLogout'
import SpinnerMini from './SpinnerMini'
const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;

  @media (max-width: 768px) {
    gap: 0.3rem;
  }

  @media (max-width: 480px) {
    gap: 0.2rem;
  }
`;

function HeaderMenu() {
    const navigate = useNavigate()
    const {Logout , isLoading} = useLogout()
    function handleLogout(){
        Logout()
      }
  return (
    <StyledHeaderMenu>
    <li>
        <ButtonIcon onClick={() => navigate(`/account`)}>
            <HiOutlineUser />
        </ButtonIcon>
    </li>
     <li>
        <ButtonIcon onClick={() => navigate(`/account`)}>
            <HiOutlineUser />
        </ButtonIcon>
    </li>
    <li>
    <ButtonIcon onClick={handleLogout}>
    {!isLoading ? <HiOutlineArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
    </li>
    </StyledHeaderMenu>
  )
}

export default HeaderMenu