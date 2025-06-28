import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import RankBadge from '../atoms/RankBadge';
import KeywordText from '../atoms/KeywordText';
import ChangeIndicator from '../atoms/ChangeIndicator';

type Props = {
  rank: number;
  keyword: string;
  change: 'up' | 'down' | 'new' | '';
  changeCount?: number;
  onPress?: () => void;
};

const rankColors = ['#b71c1c', '#1976d2', '#388e3c', '#ffb300', '#6d4c41'];

const TrendingKeywordItem: React.FC<Props> = ({
  rank,
  keyword,
  change,
  changeCount,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
    }}
    activeOpacity={0.7}>
    <RankBadge rank={rank} color={rankColors[(rank - 1) % rankColors.length]} />
    <KeywordText>{keyword}</KeywordText>
    <ChangeIndicator change={change} count={changeCount} />
  </TouchableOpacity>
);

export default TrendingKeywordItem;
