import styled from 'styled-components';

export const FriendList = styled.ul`
  margin-top: 30px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${p => p.theme.colors.secondBgColor};
  margin-top: 10px;
  padding: 10px;

  border-radius: 10px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => (p.children ? 'green' : 'red')};
`;

export const Avatar = styled.img``;

export const Name = styled.p``;
