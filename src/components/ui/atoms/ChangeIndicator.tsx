import React from 'react';
import styled from 'styled-components/native';

const ChangeText = styled.Text<{change: string}>`
  font-size: 12px;
  font-weight: bold;
  color: ${({change}) =>
    change === 'up' ? '#b71c1c' : change === 'down' ? '#1976d2' : '#ffb300'};
`;

const ChangeIndicator = ({
  change,
  count,
}: {
  change: 'up' | 'down' | 'new' | '';
  count?: number;
}) => {
  if (change === 'up') return <ChangeText change="up">▲ +{count}</ChangeText>;
  if (change === 'down')
    return <ChangeText change="down">▼ -{count}</ChangeText>;
  if (change === 'new') return <ChangeText change="new">NEW</ChangeText>;
  return null;
};

export default ChangeIndicator;
