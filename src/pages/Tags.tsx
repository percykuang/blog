import { type FC, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import articleList from '@/articles.json';
import { TagIcon } from '@/components';

interface TagMeta {
  name: string;
  count: number;
}

const Tags: FC = () => {
  const [tagMetas, setTagMetas] = useState<TagMeta[]>([]);

  useEffect(() => {
    const tagMap = articleList.reduce(
      (acc, item) => {
        item.tags.forEach((tag) => {
          acc[tag] = (acc[tag] || 0) + 1;
        });
        return acc;
      },
      {} as Record<string, number>
    );

    const tagMetas = Object.entries(tagMap).map(([name, count]) => ({
      name,
      count,
    }));

    setTagMetas(tagMetas);
  }, [articleList]);

  return (
    <div className="mt-10 text-center">
      <ul className="m-0 flex flex-wrap justify-center p-0">
        {tagMetas.map((meta) => (
          <li key={meta.name} className="m-2 ml-0 flex flex-[46%] items-center text-left">
            <TagIcon />
            <Link to={`/tags/${meta.name}`}>
              <span className="hover:text-emerald-300 active:text-emerald-300">{meta.name}</span>
            </Link>
            <span className="relative left-[4px] top-[-6px] text-xs text-[#999]">{meta.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
