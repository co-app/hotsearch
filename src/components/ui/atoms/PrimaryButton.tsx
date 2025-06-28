import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacityProps} from 'react-native';

const Button = styled.TouchableOpacity<{bgColor?: string}>`
  background: ${({bgColor}) => bgColor || '#b71c1c'};
  border-radius: 8px;
  padding: 12px 16px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

type Props = TouchableOpacityProps & {
  title: string;
  bgColor?: string;
};

const PrimaryButton = ({title, bgColor, ...props}: Props) => (
  <Button bgColor={bgColor} {...props}>
    <ButtonText>{title}</ButtonText>
  </Button>
);

export default PrimaryButton;
