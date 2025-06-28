import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  rightComponent?: React.ReactNode;
  onBackPress?: () => void;
}

const Container = styled.View`
  height: 56px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 16px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

const Left = styled.View`
  width: 40px;
  align-items: flex-start;
  justify-content: center;
`;

const Right = styled.View`
  width: 40px;
  align-items: flex-end;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  flex: 1;
`;

const BackIcon = styled.Text`
  font-size: 22px;
  color: #222;
`;

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton,
  rightComponent,
  onBackPress,
}) => (
  <Container>
    {showBackButton ? (
      <TouchableOpacity onPress={onBackPress}>
        <Left>
          <BackIcon>{'<'}</BackIcon>
        </Left>
      </TouchableOpacity>
    ) : (
      <Left />
    )}
    <Title>{title}</Title>
    <Right>{rightComponent}</Right>
  </Container>
);

export default Header;
