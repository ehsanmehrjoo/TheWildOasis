import React from "react";
import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.span`
  visibility: hidden;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 0.5rem;
  position: absolute;
  z-index: 1;
  top: 112%;  
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s;
  font-size: 1.2rem;
  white-space: nowrap;  
`;

const StyledButtonIcon = styled(ButtonIcon)`
  cursor: pointer;
`;

const TooltipWrapper = styled(TooltipContainer)`
  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <TooltipWrapper>
      <StyledButtonIcon onClick={toggleDarkMode}>
        {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </StyledButtonIcon>
      <TooltipText>
        {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      </TooltipText>
    </TooltipWrapper>
  );
}

export default DarkModeToggle;
