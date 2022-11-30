import styled from 'styled-components';

export const ProfileWrap = styled.div`
  width: ${p => p.theme.boxWidth};
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  align-items: center;
  background-color: ${p => p.theme.colors.secondBgColor};
  box-shadow: ${p => p.theme.shadows.profileShadow};
  border-radius: 4%;
`;
export const Description = styled.div``;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 300px;
`;

export const Username = styled.p``;

export const Tag = styled.p``;

export const Location = styled.p``;

export const StatsList = styled.ul``;

export const StatsItem = styled.li``;

export const Label = styled.span``;

export const Quantity = styled.span``;
