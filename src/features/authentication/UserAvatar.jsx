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
`;

const Span = styled.span`
  margin-right: 4.7rem;

  @media (max-width: 480px) {
    margin-right: 1rem;
  }
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  return (
    <StyledUserAvatar>
      <Avatar src={avatar || defaultUser} alt={`Avatar of ${fullName}`} />
      <Span>{fullName}</Span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
