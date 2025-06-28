import React from 'react';
import styled from 'styled-components/native';

const Badge = styled.View<{color: string}>`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background: ${({color}) => color};
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const BadgeText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

const RankBadge = ({rank, color}: {rank: number; color: string}) => (
  <Badge color={color}>
    <BadgeText>{rank}</BadgeText>
  </Badge>
);

export default RankBadge;
