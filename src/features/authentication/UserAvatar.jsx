import styled from "styled-components";
import useUser from "./useUser";
import defaultUser from "../../data/img/default-user.jpg";

const StyledUserAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
  margin-left: 2rem;
  position: relative; /* برای Tooltip ضروری است */

  @media (max-width: 480px) {
    gap: 0.8rem;
    font-size: 1.2rem;
  }
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 1.7rem;
  cursor: pointer; /* اشاره‌گر تغییر می‌کند */
`;

const Span = styled.span`
  margin-right: 4.7rem;

  @media (max-width: 480px) {
    margin-right: 1rem;
  }
`;

const Tooltip = styled.div`
  visibility: hidden;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 0.5rem;
  position: absolute;
  z-index: 10;
  top: 3rem; /* Tooltip بالای نام نمایش داده شود */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  font-size: 1.2rem;
  white-space: nowrap; /* جلوگیری از شکستن متن */
  
  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: #333 transparent transparent transparent; /* فلش Tooltip */
  }
`;

const StyledTooltipWrapper = styled.div`
  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <StyledTooltipWrapper>
        <Avatar src={avatar || defaultUser} alt={`Avatar of ${fullName}`} />
        <Tooltip>Profile Picture</Tooltip>
      </StyledTooltipWrapper>
      <StyledTooltipWrapper>
        <Span>{fullName}</Span>
        <Tooltip>fullName</Tooltip>
      </StyledTooltipWrapper>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
