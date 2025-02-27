import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface ArticleOutlineItem {
  id: string;
  text: string;
  level: number;
}

interface ArticleOutlineProps {
  headings: ArticleOutlineItem[];
}

const ArticleOutline: FC<ArticleOutlineProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string>('');
  const SCROLL_OFFSET = 96;

  useEffect(() => {
    const handleScroll = () => {
      // 获取所有标题元素的位置信息
      const headingElements = headings
        .map(({ id }) => {
          const element = document.getElementById(id);
          if (element) {
            return {
              id,
              top: element.getBoundingClientRect().top,
            };
          }
          return null;
        })
        .filter((item): item is { id: string; top: number } => item !== null);

      // 找到第一个还没有越过指定偏移位置的标题
      const currentHeading = headingElements.find((heading) => heading.top >= SCROLL_OFFSET);

      // 如果所有标题都已越过偏移位置，则选择最后一个标题
      if (currentHeading) {
        setActiveId(currentHeading.id);
      } else if (headingElements.length > 0) {
        setActiveId(headingElements[headingElements.length - 1].id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化时执行一次

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed left-8 top-[7.5rem] hidden w-64 lg:block">
      <div className="p-4">
        <h3 className="mb-2 text-sm font-medium text-gray-500">目录</h3>
        <ul className="scrollbar-custom max-h-[calc(100vh-12rem)] overflow-auto">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={`my-2 ${heading.level === 2 ? 'pl-0' : heading.level === 3 ? 'pl-4' : 'pl-8'}`}
            >
              <a
                href={`#${heading.id}`}
                className={`block text-sm transition-colors ${
                  activeId === heading.id ? 'text-[#3370ff]' : 'text-gray-500 hover:text-[#3370ff]'
                }`}
                onClick={(e) => handleClick(e, heading.id)}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ArticleOutline;
