import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface ArticleOutlineItem {
  id: string;
  text: string;
  level: number;
}

interface ArticleOutlineProps {
  headings: ArticleOutlineItem[];
  title: string;
}

const ArticleOutline: FC<ArticleOutlineProps> = ({ headings, title }) => {
  const [activeId, setActiveId] = useState<string>('');
  const [isSticky, setIsSticky] = useState(false);
  const SCROLL_OFFSET = 96;
  const titleId = 'article-title';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 120);

      const headingElements = [
        { id: titleId, top: document.getElementById(titleId)?.getBoundingClientRect().top ?? 0 },
        ...headings
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
          .filter((item): item is { id: string; top: number } => item !== null),
      ];

      const currentHeading = headingElements.find((heading) => heading.top >= SCROLL_OFFSET);

      if (currentHeading) {
        setActiveId(currentHeading.id);
      } else if (headingElements.length > 0) {
        setActiveId(headingElements[headingElements.length - 1].id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

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
      });
    }
  };

  const handleTitleClick = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <nav
      className={`fixed left-8 hidden w-64 transition-all duration-300 lg:block ${isSticky ? 'top-4' : 'top-[7.5rem]'}`}
    >
      <div className="p-4">
        <h3
          className={`mb-2 cursor-pointer text-base font-medium transition-colors hover:text-[#3370ff] ${
            activeId === titleId ? 'text-[#3370ff]' : 'text-gray-500'
          }`}
          onClick={handleTitleClick}
        >
          {title}
        </h3>
        <ul className="scrollbar-custom max-h-[calc(100vh-4rem)] overflow-auto">
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
