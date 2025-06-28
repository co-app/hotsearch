import axios, {AxiosResponse} from 'axios';

export type TrendingKeyword = {
  id: string;
  rank: number;
  keyword: string;
  change: 'up' | 'down' | 'new' | '';
  changeCount?: number;
};

const MOCK_DATA: TrendingKeyword[] = [
  {id: '1', rank: 1, keyword: '토스뱅크', change: 'up', changeCount: 3},
  {id: '2', rank: 2, keyword: '토스증권', change: 'down', changeCount: 1},
  {id: '3', rank: 3, keyword: '토스카드', change: 'new'},
  {id: '4', rank: 4, keyword: '토스페이', change: 'up', changeCount: 2},
  {id: '5', rank: 5, keyword: '토스보험', change: 'down', changeCount: 1},
  {id: '6', rank: 6, keyword: '토스머니', change: 'new'},
  {id: '7', rank: 7, keyword: '토스투자', change: 'up', changeCount: 4},
  {id: '8', rank: 8, keyword: '토스대출', change: 'down', changeCount: 2},
  {id: '9', rank: 9, keyword: '토스적금', change: 'new'},
  {id: '10', rank: 10, keyword: '토스펀드', change: 'up', changeCount: 1},
];

export const fetchTrendingKeywords = async (): Promise<TrendingKeyword[]> => {
  return axios
    .get<TrendingKeyword[]>('/mock/trending-keywords', {
      adapter: (config: any) => {
        return new Promise<AxiosResponse<TrendingKeyword[]>>(resolve => {
          setTimeout(() => {
            resolve({
              data: MOCK_DATA,
              status: 200,
              statusText: 'OK',
              headers: {},
              config,
            });
          }, 800);
        });
      },
    })
    .then((res: AxiosResponse<TrendingKeyword[]>) => res.data);
};
