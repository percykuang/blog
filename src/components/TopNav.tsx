import type { FC } from 'react';

import { Link } from 'react-router-dom';

const TopNav: FC = () => {
  return (
    <div className="flex flex-row-reverse max-md:mx-4 max-md:my-0 max-md:flex-row">
      <div className="flex text-slate-600">
        <Link to="/">
          <span className="ml-5 hover:text-emerald-300 active:text-emerald-300 max-md:m-0 max-md:mr-5">文章</span>
        </Link>
        <Link to="/tags">
          <span className="ml-5 hover:text-emerald-300 active:text-emerald-300 max-md:m-0 max-md:mr-5">标签</span>
        </Link>
        <Link to="/about-me">
          <span className="ml-5 hover:text-emerald-300 active:text-emerald-300 max-md:m-0 max-md:mr-5">关于我</span>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
