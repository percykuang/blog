import { FC, useEffect, useState } from 'react';

import articleList from '@/articles.json';
import { List } from '@/components';
import type { Article } from '@/types';

const Home: FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(articleList);
  }, []);

  return <List articles={articles} />;
};

export default Home;
