import { type FC, useMemo } from 'react';

import { Link } from 'react-router-dom';

import dayjs from 'dayjs';
import { groupBy } from 'lodash';

import type { Article } from '@/types';

interface ListProps {
  articles: Article[];
}

const List: FC<ListProps> = ({ articles }) => {
  const content = useMemo(() => {
    // 使用 lodash 的 groupBy 按年份分组，并用 orderBy 对年份进行降序排序
    const groupByYear = groupBy(articles, (article) => dayjs(article.date).format('YYYY'));

    // 将分组后的数据转换为数组并排序
    const sortedYears = Object.entries(groupByYear).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA));

    return sortedYears.map(([year, yearArticles]) => (
      <div key={year}>
        <div className="mx-0 mb-3 mt-8 text-2xl font-bold">{year}</div>
        <div className="mt-5 p-0 leading-[1.8]">
          {yearArticles.map((article) => (
            <div key={article.title} className="flex justify-between justify-items-center pb-1">
              <Link to={`/articles/${article.id}`}>
                <span className="hover:text-[#3370FF] active:text-[#3370FF]">{article.title}</span>
              </Link>
              <span className="inline-block w-20 text-right text-sm opacity-30">
                {dayjs(article.date).format('MM.DD')}
              </span>
            </div>
          ))}
        </div>
      </div>
    ));
  }, [articles]);

  return <div className="mt-10">{content}</div>;
};

export default List;
