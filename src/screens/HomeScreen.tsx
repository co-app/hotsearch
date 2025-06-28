import React, {useLayoutEffect} from 'react';
import {SafeAreaView, ScrollView, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import AppbarHeader from '../components/layout/header/AppbarHeader';
import {colors} from '../theme/colors';
import Container from '../components/layout/container/Container';
import SectionTitle from '../components/ui/atoms/SectionTitle';

const trendingKeywords = [
  {id: '1', keyword: '토스뱅크', rank: 1, change: 'up', changeCount: 3},
  {id: '2', keyword: '토스증권', rank: 2, change: 'down', changeCount: 1},
  {id: '3', keyword: '토스카드', rank: 3, change: 'new'},
  {id: '4', keyword: '토스페이', rank: 4, change: 'up', changeCount: 2},
  {id: '5', keyword: '토스보험', rank: 5, change: 'down', changeCount: 1},
  {id: '6', keyword: '토스머니', rank: 6, change: 'new'},
  {id: '7', keyword: '토스투자', rank: 7, change: 'up', changeCount: 4},
  {id: '8', keyword: '토스대출', rank: 8, change: 'down', changeCount: 2},
  {id: '9', keyword: '토스적금', rank: 9, change: 'new'},
  {id: '10', keyword: '토스펀드', rank: 10, change: 'up', changeCount: 1},
];

const categories = [
  {id: '1', name: '금융', icon: '💰', count: 156, color: colors.chart1},
  {id: '2', name: '투자', icon: '📈', count: 89, color: colors.chart2},
  {id: '3', name: '보험', icon: '🛡️', count: 67, color: colors.chart3},
  {id: '4', name: '카드', icon: '💳', count: 123, color: colors.chart4},
  {id: '5', name: '대출', icon: '🏦', count: 78, color: colors.chart5},
  {id: '6', name: '적금', icon: '🏆', count: 45, color: colors.chart6},
];

const HomeScreen = ({navigation, headerTitle}: any) => {
  useLayoutEffect(() => {
    if (headerTitle) {
      navigation.setOptions({headerTitle});
    }
  }, [navigation, headerTitle]);

  const getChangeIcon = (change: string) => {
    switch (change) {
      case 'up':
        return '↗️';
      case 'down':
        return '↘️';
      case 'new':
        return '🆕';
      default:
        return '';
    }
  };

  const getChangeText = (change: string, count?: number) => {
    switch (change) {
      case 'up':
        return `+${count}`;
      case 'down':
        return `-${count}`;
      case 'new':
        return 'NEW';
      default:
        return '';
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <AppbarHeader title="인기검색어" type="left" />
      <ScrollView contentContainerStyle={{paddingTop: 10, paddingBottom: 32}}>
        <Container style={{paddingHorizontal: 0}}>
          <TimeText>2024년 12월 3일 14:30 기준</TimeText>

          <TrendingSection>
            <SectionTitle>실시간 인기검색어</SectionTitle>
            <TrendingList>
              {trendingKeywords.map((item, index) => (
                <TrendingItem key={item.id}>
                  <RankContainer>
                    <RankText>{item.rank}</RankText>
                    <ChangeContainer>
                      <ChangeIcon>{getChangeIcon(item.change)}</ChangeIcon>
                      <ChangeText change={item.change}>
                        {getChangeText(item.change, item.changeCount)}
                      </ChangeText>
                    </ChangeContainer>
                  </RankContainer>
                  <KeywordText>{item.keyword}</KeywordText>
                </TrendingItem>
              ))}
            </TrendingList>
          </TrendingSection>

          <CategorySection>
            <SectionTitle>카테고리별 인기</SectionTitle>
            <CategoryGrid>
              {categories.map(category => (
                <CategoryCard key={category.id}>
                  <CategoryIconContainer color={category.color}>
                    <CategoryIcon>{category.icon}</CategoryIcon>
                  </CategoryIconContainer>
                  <CategoryName>{category.name}</CategoryName>
                  <CategoryCount>{category.count}개</CategoryCount>
                </CategoryCard>
              ))}
            </CategoryGrid>
          </CategorySection>

          <QuickSearchSection>
            <SectionTitle>빠른 검색</SectionTitle>
            <QuickSearchList>
              <QuickSearchItem>
                <QuickSearchIcon>🔍</QuickSearchIcon>
                <QuickSearchText>최근 검색어</QuickSearchText>
              </QuickSearchItem>
              <QuickSearchItem>
                <QuickSearchIcon>⭐</QuickSearchIcon>
                <QuickSearchText>즐겨찾기</QuickSearchText>
              </QuickSearchItem>
              <QuickSearchItem>
                <QuickSearchIcon>📊</QuickSearchIcon>
                <QuickSearchText>트렌드 분석</QuickSearchText>
              </QuickSearchItem>
            </QuickSearchList>
          </QuickSearchSection>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const TimeText = styled.Text`
  font-size: 14px;
  color: ${colors.textSecondary};
  margin-bottom: 16px;
  padding: 0 20px;
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
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.borderLight};
`;

const RankContainer = styled.View`
  width: 60px;
  align-items: center;
`;

const RankText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.textPrimary};
`;

const ChangeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

const ChangeIcon = styled.Text`
  font-size: 12px;
  margin-right: 2px;
`;

const ChangeText = styled.Text<{change: string}>`
  font-size: 10px;
  font-weight: bold;
  color: ${props =>
    props.change === 'up'
      ? colors.error
      : props.change === 'down'
      ? colors.info
      : colors.warning};
`;

const KeywordText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.textPrimary};
  flex: 1;
`;

const CategorySection = styled.View`
  margin-bottom: 32px;
`;

const CategoryGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 20px;
  gap: 12px;
`;

const CategoryCard = styled.TouchableOpacity`
  background: ${colors.surface};
  border-radius: 16px;
  padding: 20px;
  width: calc(50% - 6px);
  align-items: center;
  box-shadow: 0px 2px 8px ${colors.shadowLight};
  elevation: 2;
`;

const CategoryIconContainer = styled.View<{color: string}>`
  width: 48px;
  height: 48px;
  background: ${props => props.color}20;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;

const CategoryIcon = styled.Text`
  font-size: 24px;
`;

const CategoryName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.textPrimary};
  margin-bottom: 4px;
`;

const CategoryCount = styled.Text`
  font-size: 12px;
  color: ${colors.textSecondary};
`;

const QuickSearchSection = styled.View`
  margin-bottom: 32px;
`;

const QuickSearchList = styled.View`
  background: ${colors.surface};
  border-radius: 16px;
  margin: 0 20px;
  padding: 20px;
  box-shadow: 0px 2px 8px ${colors.shadowLight};
  elevation: 2;
`;

const QuickSearchItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.borderLight};
`;

const QuickSearchIcon = styled.Text`
  font-size: 18px;
  margin-right: 12px;
`;

const QuickSearchText = styled.Text`
  font-size: 16px;
  color: ${colors.textPrimary};
`;
