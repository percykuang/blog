import { type FC, memo, useMemo } from 'react';

import { Link } from 'react-router-dom';

import dayjs from 'dayjs';

import type { Article } from '@/types';

interface ListProps {
  articles: Article[];
}

// 记忆化的文章项组件
const ArticleItem = memo<{ article: Article }>(({ article }) => (
  <div className="flex justify-between justify-items-center pb-1">
    <Link to={`/articles/${article.id}`}>
      <span className="hover:text-[#3370FF] active:text-[#3370FF]">{article.title}</span>
    </Link>
    <span className="inline-block w-20 text-right text-sm opacity-30">{dayjs(article.date).format('MM.DD')}</span>
  </div>
));

// 记忆化的年份分组组件
const YearGroup = memo<{ year: string; articles: Article[] }>(({ year, articles: yearArticles }) => (
  <div key={year}>
    <div className="mx-0 mb-3 mt-8 text-2xl font-bold">{year}</div>
    <div className="mt-5 p-0 leading-[1.8]">
      {yearArticles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  </div>
));

const List: FC<ListProps> = ({ articles }) => {
  const groupedArticles = useMemo(() => {
    // 创建一个按年份分组的更高效方法
    const groups: Record<string, Article[]> = {};

    // 手动分组比 lodash 的 groupBy 在这种情况下更快
    articles.forEach((article) => {
      const year = dayjs(article.date).format('YYYY');
      if (!groups[year]) {
        groups[year] = [];
      }
      groups[year].push(article);
    });

    // 按年份降序排序
    return Object.entries(groups).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA));
  }, [articles]);

  return (
    <div className="mt-10">
      {groupedArticles.map(([year, yearArticles]) => (
        <YearGroup key={year} year={year} articles={yearArticles} />
      ))}
    </div>
  );
};

export default memo(List);
