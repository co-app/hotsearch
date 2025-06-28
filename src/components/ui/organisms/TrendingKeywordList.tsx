import React from 'react';
import {FlatList} from 'react-native';
import TrendingKeywordItem from './TrendingKeywordItem';

type Keyword = {
  id: string;
  rank: number;
  keyword: string;
  change: 'up' | 'down' | 'new' | '';
  changeCount?: number;
};

type Props = {
  data: Keyword[];
  onItemPress?: (keyword: Keyword) => void;
};

const TrendingKeywordList: React.FC<Props> = ({data, onItemPress}) => (
  <FlatList
    data={data}
    keyExtractor={item => item.id}
    renderItem={({item}) => (
      <TrendingKeywordItem {...item} onPress={() => onItemPress?.(item)} />
    )}
  />
);

export default TrendingKeywordList;
