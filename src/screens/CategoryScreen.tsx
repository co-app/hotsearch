import React from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../theme/colors';
import Container from '../components/layout/container/Container';
import SectionTitle from '../components/ui/atoms/SectionTitle';
import AppbarHeader from '../components/layout/header/AppbarHeader';

const categories = [
  {
    id: '1',
    name: '금융',
    icon: '💰',
    description: '은행, 증권, 보험 관련',
    count: 156,
    color: colors.chart1,
  },
  {
    id: '2',
    name: '투자',
    icon: '📈',
    description: '주식, 펀드, 부동산',
    count: 89,
    color: colors.chart2,
  },
  {
    id: '3',
    name: '보험',
    icon: '🛡️',
    description: '생명보험, 손해보험',
    count: 67,
    color: colors.chart3,
  },
  {
    id: '4',
    name: '카드',
    icon: '💳',
    description: '신용카드, 체크카드',
    count: 123,
    color: colors.chart4,
  },
  {
    id: '5',
    name: '대출',
    icon: '🏦',
    description: '개인대출, 주택대출',
    count: 78,
    color: colors.chart5,
  },
  {
    id: '6',
    name: '적금',
    icon: '🏆',
    description: '정기적금, 자유적금',
    count: 45,
    color: colors.chart6,
  },
  {
    id: '7',
    name: '페이',
    icon: '📱',
    description: '모바일 결제, 간편결제',
    count: 92,
    color: colors.chart7,
  },
  {
    id: '8',
    name: '머니',
    icon: '💸',
    description: '송금, 환전, 해외송금',
    count: 134,
    color: colors.chart8,
  },
];

const CategoryScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <AppbarHeader title="카테고리" type="left" />
      <ScrollView contentContainerStyle={{paddingTop: 10, paddingBottom: 32}}>
        <Container style={{paddingHorizontal: 0}}>
          <HeaderText>검색어를 카테고리별로 분류해서 찾아보세요</HeaderText>

          <CategoryGrid>
            {categories.map(category => (
              <CategoryCard key={category.id}>
                <CategoryHeader>
                  <CategoryIconContainer color={category.color}>
                    <CategoryIcon>{category.icon}</CategoryIcon>
                  </CategoryIconContainer>
                  <CategoryCount>{category.count}개</CategoryCount>
                </CategoryHeader>
                <CategoryName>{category.name}</CategoryName>
                <CategoryDescription>
                  {category.description}
                </CategoryDescription>
              </CategoryCard>
            ))}
          </CategoryGrid>

          <TrendingSection>
            <SectionTitle>카테고리별 인기 검색어</SectionTitle>
            <TrendingList>
              <TrendingItem>
                <TrendingRank>1</TrendingRank>
                <TrendingContent>
                  <TrendingKeyword>토스뱅크</TrendingKeyword>
                  <TrendingCategory>금융</TrendingCategory>
                </TrendingContent>
                <TrendingCount>1,234</TrendingCount>
              </TrendingItem>
              <TrendingItem>
                <TrendingRank>2</TrendingRank>
                <TrendingContent>
                  <TrendingKeyword>토스증권</TrendingKeyword>
                  <TrendingCategory>투자</TrendingCategory>
                </TrendingContent>
                <TrendingCount>987</TrendingCount>
              </TrendingItem>
              <TrendingItem>
                <TrendingRank>3</TrendingRank>
                <TrendingContent>
                  <TrendingKeyword>토스카드</TrendingKeyword>
                  <TrendingCategory>카드</TrendingCategory>
                </TrendingContent>
                <TrendingCount>876</TrendingCount>
              </TrendingItem>
            </TrendingList>
          </TrendingSection>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;

const HeaderText = styled.Text`
  font-size: 16px;
  color: ${colors.textSecondary};
  margin-bottom: 24px;
  padding: 0 20px;
  line-height: 24px;
`;

const CategoryGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 20px 32px 20px;
  gap: 12px;
`;

const CategoryCard = styled.TouchableOpacity`
  background: ${colors.surface};
  border-radius: 20px;
  padding: 24px;
  width: calc(50% - 6px);
  box-shadow: 0px 4px 12px ${colors.shadowLight};
  elevation: 3;
`;

const CategoryHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const CategoryIconContainer = styled.View<{color: string}>`
  width: 56px;
  height: 56px;
  background: ${props => props.color}20;
  border-radius: 28px;
  align-items: center;
  justify-content: center;
`;

const CategoryIcon = styled.Text`
  font-size: 28px;
`;

const CategoryCount = styled.Text`
  font-size: 12px;
  color: ${colors.textSecondary};
  font-weight: 500;
`;

const CategoryName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.textPrimary};
  margin-bottom: 8px;
`;

const CategoryDescription = styled.Text`
  font-size: 14px;
  color: ${colors.textSecondary};
  line-height: 20px;
`;

const TrendingSection = styled.View`
  margin-bottom: 32px;
`;

const TrendingList = styled.View`
  background: ${colors.surface};
  border-radius: 16px;
  margin: 0 20px;
  padding: 20px;
  box-shadow: 0px 2px 8px ${colors.shadowLight};
  elevation: 2;
`;

const TrendingItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.borderLight};
`;

const TrendingRank = styled.View`
  width: 32px;
  height: 32px;
  background: ${colors.primary};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

const TrendingContent = styled.View`
  flex: 1;
`;

const TrendingKeyword = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.textPrimary};
  margin-bottom: 4px;
`;

const TrendingCategory = styled.Text`
  font-size: 12px;
  color: ${colors.textSecondary};
  background: ${colors.surfaceSecondary};
  padding: 4px 8px;
  border-radius: 8px;
  align-self: flex-start;
`;

const TrendingCount = styled.Text`
  font-size: 14px;
  color: ${colors.textSecondary};
  font-weight: 500;
`;
