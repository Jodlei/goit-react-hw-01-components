import styled from 'styled-components';

export const ProfileWrap = styled.div`
  width: ${p => p.theme.boxWidth};
  padding: 10px;
  align-items: center;
  background-color: ${p => p.theme.colors.secondBgColor};
  box-shadow: ${p => p.theme.shadows.profileShadow};
  border-radius: 4%;
`;
export const Description = styled.div`
  padding: ${p => p.theme.space[3]}px;
`;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: ${p => p.theme.avatarWidth};
  border-radius: 50%;
`;

export const Username = styled.p`
  text-align: center;
  margin-bottom: 10px;
  color: #e687f7;
`;

export const Tag = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  text-align: center;
`;

export const StatsList = styled.ul`
  display: flex;
  height: 100%;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 33%;
`;

export const Label = styled.span``;

export const Quantity = styled.span``;
