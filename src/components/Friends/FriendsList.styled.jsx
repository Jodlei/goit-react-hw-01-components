import styled from 'styled-components';

export const FriendList = styled.ul``;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => (p.children ? 'green' : 'red')};
`;

export const Avatar = styled.img``;

export const Name = styled.p``;
