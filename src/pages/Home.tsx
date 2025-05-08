import { FC, memo, useMemo } from 'react';

import articleList from '@/articles.json';
import { List } from '@/components';

const Home: FC = () => {
  // 使用 useMemo 代替 useState + useEffect 以提高性能
  const articles = useMemo(() => articleList, []);

  return <List articles={articles} />;
};

export default memo(Home);
