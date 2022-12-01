import styled from 'styled-components';

export const Section = styled.div`
  padding: 10px;
  margin-top: 30px;
  background-color: ${p => p.theme.colors.secondBgColor};
  border-radius: 10px;
  width: ${p => p.theme.boxWidth};
`;
export const Title = styled.h1`
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const StatContent = styled.span`
  padding: 5px;
`;
