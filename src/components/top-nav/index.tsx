import type { FC } from 'react';

import { Link, useLocation } from 'react-router-dom';

const TopNav: FC = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `ml-5 transition-colors hover:text-[#3370ff] max-md:m-0 max-md:mr-5 ${
      isActive ? 'text-[#3370ff]' : 'text-slate-600'
    }`;
  };

  return (
    <div className="flex flex-row-reverse max-md:mx-4 max-md:my-0 max-md:flex-row">
      <div className="flex">
        <Link to="/" className={getLinkClass('/')}>
          文章
        </Link>
        <Link to="/tags" className={getLinkClass('/tags')}>
          标签
        </Link>
        <Link to="/about-me" className={getLinkClass('/about-me')}>
          关于我
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
