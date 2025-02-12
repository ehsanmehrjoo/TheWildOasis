import React from 'react';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowRightOnRectangle, HiOutlineUser } from 'react-icons/hi2';
import useLogout from '../features/authentication/useLogout';
import SpinnerMini from './SpinnerMini';
import DarkModeToggle from './DarkModeToggle';

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: 768px) {
    gap: 0.3rem;
  }

  @media (max-width: 480px) {
    gap: 0.2rem;
  }
`;

const TooltipWrapper = styled.div`
  position: relative;

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.span`
  visibility: hidden;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 0.4rem 0.8rem;
  position: absolute;
  z-index: 10;
  top: 112%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

function HeaderMenu() {
  const navigate = useNavigate();
  const { Logout, isLoading } = useLogout();

  function handleLogout() {
    Logout();
  }

  return (
    <StyledHeaderMenu>
      <li>
        <TooltipWrapper>
          <ButtonIcon onClick={() => navigate(`/account`)}>
            <HiOutlineUser />
          </ButtonIcon>
          <Tooltip className="tooltip">Account</Tooltip>
        </TooltipWrapper>
      </li>
      <li>
        
          <DarkModeToggle />
  
      
      </li>
      <li>
        <TooltipWrapper>
          <ButtonIcon onClick={handleLogout}>
            {!isLoading ? <HiOutlineArrowRightOnRectangle /> : <SpinnerMini />}
          </ButtonIcon>
          <Tooltip className="tooltip">Logout</Tooltip>
        </TooltipWrapper>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
