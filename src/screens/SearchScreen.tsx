import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../theme/colors';
import Container from '../components/layout/container/Container';
import AppbarHeader from '../components/layout/header/AppbarHeader';
import SectionTitle from '../components/ui/atoms/SectionTitle';

const recentSearches = [
  '토스뱅크',
  '토스증권',
  '토스카드',
  '토스페이',
  '토스보험',
];

const popularSearches = [
  {keyword: '토스뱅크', count: 1234},
  {keyword: '토스증권', count: 987},
  {keyword: '토스카드', count: 876},
  {keyword: '토스페이', count: 765},
  {keyword: '토스보험', count: 654},
];

const SearchScreen = ({navigation}: any) => {
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (text: string) => {
    setSearchText(text);
    setIsSearching(text.length > 0);
  };

  const clearSearch = () => {
    setSearchText('');
    setIsSearching(false);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
      <AppbarHeader title="검색" type="left" />
      <SearchContainer>
        <SearchInputContainer>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput
            placeholder="검색어를 입력하세요"
            placeholderTextColor={colors.textTertiary}
            value={searchText}
            onChangeText={handleSearch}
            autoFocus
          />
          {searchText.length > 0 && (
            <ClearButton onPress={clearSearch}>
              <ClearIcon>✕</ClearIcon>
            </ClearButton>
          )}
        </SearchInputContainer>
      </SearchContainer>

      <ScrollView contentContainerStyle={{paddingBottom: 32}}>
        <Container style={{paddingHorizontal: 0}}>
          {!isSearching ? (
            <>
              <RecentSection>
                <SectionTitle>최근 검색어</SectionTitle>
                <RecentList>
                  {recentSearches.map((search, index) => (
                    <RecentItem key={index}>
                      <RecentIcon>🕒</RecentIcon>
                      <RecentText>{search}</RecentText>
                      <DeleteButton>
                        <DeleteIcon>✕</DeleteIcon>
                      </DeleteButton>
                    </RecentItem>
                  ))}
                </RecentList>
              </RecentSection>

              <PopularSection>
                <SectionTitle>인기 검색어</SectionTitle>
                <PopularList>
                  {popularSearches.map((item, index) => (
                    <PopularItem key={index}>
                      <RankBadge>{index + 1}</RankBadge>
                      <PopularText>{item.keyword}</PopularText>
                      <PopularCount>{item.count.toLocaleString()}</PopularCount>
                    </PopularItem>
                  ))}
                </PopularList>
              </PopularSection>
            </>
          ) : (
            <SearchResultsSection>
              <SectionTitle>검색 결과</SectionTitle>
              <SearchResultItem>
                <ResultIcon>🔍</ResultIcon>
                <ResultText>"{searchText}"에 대한 검색 결과</ResultText>
              </SearchResultItem>
              <SearchResultItem>
                <ResultIcon>📊</ResultIcon>
                <ResultText>트렌드 분석 보기</ResultText>
              </SearchResultItem>
              <SearchResultItem>
                <ResultIcon>⭐</ResultIcon>
                <ResultText>즐겨찾기에 추가</ResultText>
              </SearchResultItem>
            </SearchResultsSection>
          )}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const SearchContainer = styled.View`
  padding: 16px 20px;
  background: ${colors.surface};
  border-bottom-width: 1px;
  border-bottom-color: ${colors.borderLight};
`;

const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${colors.surfaceSecondary};
  border-radius: 16px;
  padding: 16px 20px;
`;

const SearchIcon = styled.Text`
  font-size: 16px;
  margin-right: 12px;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${colors.textPrimary};
`;

const ClearButton = styled.TouchableOpacity`
  padding: 4px;
`;

const ClearIcon = styled.Text`
  font-size: 16px;
  color: ${colors.textTertiary};
`;

const RecentSection = styled.View`
  margin-bottom: 32px;
`;

const RecentList = styled.View`
  background: ${colors.surface};
  border-radius: 16px;
  margin: 0 20px;
  padding: 20px;
  box-shadow: 0px 2px 8px ${colors.shadowLight};
  elevation: 2;
`;

const RecentItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.borderLight};
`;

const RecentIcon = styled.Text`
  font-size: 16px;
  margin-right: 12px;
`;

const RecentText = styled.Text`
  flex: 1;
  font-size: 16px;
  color: ${colors.textPrimary};
`;

const DeleteButton = styled.TouchableOpacity`
  padding: 4px;
`;

const DeleteIcon = styled.Text`
  font-size: 14px;
  color: ${colors.textTertiary};
`;

const PopularSection = styled.View`
  margin-bottom: 32px;
`;

const PopularList = styled.View`
  background: ${colors.surface};
  border-radius: 16px;
  margin: 0 20px;
  padding: 20px;
  box-shadow: 0px 2px 8px ${colors.shadowLight};
  elevation: 2;
`;

const PopularItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.borderLight};
`;

const RankBadge = styled.View`
  width: 24px;
  height: 24px;
  background: ${colors.primary};
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const PopularText = styled.Text`
  flex: 1;
  font-size: 16px;
  color: ${colors.textPrimary};
`;

const PopularCount = styled.Text`
  font-size: 14px;
  color: ${colors.textSecondary};
`;

const SearchResultsSection = styled.View`
  margin-top: 16px;
`;

const SearchResultItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: ${colors.surface};
  border-radius: 16px;
  margin: 0 20px 12px 20px;
  padding: 20px;
  box-shadow: 0px 2px 8px ${colors.shadowLight};
  elevation: 2;
`;

const ResultIcon = styled.Text`
  font-size: 18px;
  margin-right: 12px;
`;

const ResultText = styled.Text`
  font-size: 16px;
  color: ${colors.textPrimary};
`;
