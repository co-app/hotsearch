import React from 'react';
import {SafeAreaView, ActivityIndicator, View, Text} from 'react-native';
import {useTrendingKeywords} from '../hooks/useTrendingKeywords';
import TrendingKeywordList from '../components/ui/organisms/TrendingKeywordList';

const TrendingKeywordsScreen = () => {
  const {data: keywords, loading} = useTrendingKeywords();

  if (loading) {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#b71c1c" />
        <Text>실시간 인기검색어 불러오는 중...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 22, fontWeight: 'bold', marginBottom: 16}}>
          실시간 인기검색어
        </Text>
        <TrendingKeywordList data={keywords} />
      </View>
    </SafeAreaView>
  );
};

export default TrendingKeywordsScreen;
