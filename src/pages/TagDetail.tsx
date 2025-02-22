import type { FC } from 'react';

import { useParams } from 'react-router-dom';

import articleList from '@/articles.json';
import { List } from '@/components';

const TagDetail: FC = () => {
  const { tag } = useParams<{ tag: string }>(); // 获取 URL 中的标签参数
  const filteredArticles = articleList.filter((article) => article.tags.includes(tag || ''));
  console.log('filteredArticles', articleList, filteredArticles);

  return <List articles={filteredArticles} />;
};

export default TagDetail;
