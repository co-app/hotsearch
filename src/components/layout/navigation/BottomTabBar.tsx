import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  height: 60px;
  border-top-width: 1px;
  border-top-color: #eee;
  background-color: #fff;
`;

const Tab = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.View`
  margin-bottom: 2px;
`;

const Label = styled.Text<{$isActive: boolean}>`
  font-size: 12px;
  color: ${({$isActive}) => ($isActive ? '#b71c1c' : '#888')};
  font-weight: ${({$isActive}) => ($isActive ? 'bold' : 'normal')};
`;

const BottomTabBar: React.FC<BottomTabBarProps> = props => {
  const {state, descriptors, navigation} = props;

  return (
    <Container>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        let label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        let labelNode: React.ReactNode;
        if (typeof label === 'function') {
          labelNode = label({
            focused: isFocused,
            color: isFocused ? '#b71c1c' : '#888',
            position: 'below-icon',
            children: route.name,
          });
        } else {
          labelNode = <Label $isActive={isFocused}>{label}</Label>;
        }
        return (
          <Tab key={route.key} onPress={onPress}>
            {options.tabBarIcon && (
              <IconWrapper>
                {options.tabBarIcon({
                  focused: isFocused,
                  color: isFocused ? '#b71c1c' : '#888',
                  size: 24,
                })}
              </IconWrapper>
            )}
            {labelNode}
          </Tab>
        );
      })}
    </Container>
  );
};

export default BottomTabBar;
