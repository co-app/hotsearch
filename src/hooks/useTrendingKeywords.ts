import {useEffect, useState} from 'react';
import {fetchTrendingKeywords} from '../services/trendingKeywordsService';
import {TrendingKeyword} from '../types/trendingKeyword';

export const useTrendingKeywords = (): {
  data: TrendingKeyword[];
  loading: boolean;
} => {
  const [data, setData] = useState<TrendingKeyword[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrendingKeywords().then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return {data, loading};
};
