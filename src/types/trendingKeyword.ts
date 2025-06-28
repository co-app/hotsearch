export type TrendingKeyword = {
  id: string;
  rank: number;
  keyword: string;
  change: 'up' | 'down' | 'new' | '';
  changeCount?: number;
};
