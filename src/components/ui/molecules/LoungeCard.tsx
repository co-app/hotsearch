import React from 'react';
import styled from 'styled-components/native';

type Props = {
  bg: string;
  border?: boolean;
  icon?: React.ReactNode;
  title: string;
  titleColor?: string;
  text: string;
  highlight?: string;
  highlightColor?: string;
  arrowColor?: string;
  onPress?: () => void;
};

const LoungeCard: React.FC<Props> = ({
  bg,
  border,
  icon,
  title,
  titleColor,
  text,
  highlight,
  highlightColor,
  arrowColor,
  onPress,
}) => (
  <Card bg={bg} border={border} activeOpacity={0.8} onPress={onPress}>
    <IconBox>{icon}</IconBox>
    <Content>
      <Title style={titleColor ? {color: titleColor} : {}}>{title}</Title>
      <Text>
        {highlight ? (
          <Highlight style={highlightColor ? {color: highlightColor} : {}}>
            {highlight}
          </Highlight>
        ) : null}
        {text.replace(highlight || '', '')}
      </Text>
    </Content>
    <Arrow style={arrowColor ? {color: arrowColor} : {}}>→</Arrow>
  </Card>
);

export default LoungeCard;

const Card = styled.TouchableOpacity<{bg: string; border?: boolean}>`
  background: ${({bg}) => bg};
  border-radius: 16px;
  padding: 20px 20px 20px 20px;
  margin: 0 20px 14px 20px;
  ${({border}) => border && 'border: 1.5px solid #ffe082;'}
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const IconBox = styled.View`
  width: 40px;
  align-items: center;
  margin-right: 16px;
`;
const Content = styled.View`
  flex: 1;
`;
const Title = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 2px;
`;
const Text = styled.Text`
  font-size: 15px;
  color: #fff;
`;
const Highlight = styled.Text`
  font-weight: bold;
  color: #90caf9;
`;
const Arrow = styled.Text`
  font-size: 28px;
  color: #fff;
  margin-left: 12px;
`;
