import type { FC } from 'react';

const TopNav: FC = () => {
  return (
    <div className="flex flex-row-reverse max-md:mx-4 max-md:my-0 max-md:flex-row">
      <div className="flex text-slate-600">
        <a href="/" className="ml-5 hover:text-emerald-300 active:text-emerald-300 max-md:m-0 max-md:mr-5">
          文章
        </a>
        <a href="/tags" className="ml-5 hover:text-emerald-300 active:text-emerald-300 max-md:m-0 max-md:mr-5">
          标签
        </a>
        <a href="/about-me" className="ml-5 hover:text-emerald-300 active:text-emerald-300 max-md:m-0 max-md:mr-5">
          关于我
        </a>
      </div>
    </div>
  );
};

export default TopNav;
