import type { FC } from 'react';

import { Link } from 'react-router-dom';

interface NotFoundProps {
  message?: string;
}

const NotFound: FC<NotFoundProps> = ({ message = '抱歉，页面不见了' }) => {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl font-bold text-gray-300">404</h1>
      <p className="mb-8 text-lg text-gray-500">{message}</p>
      <Link
        to="/"
        className="rounded-md bg-blue-50 px-4 py-2 text-sm text-[#3370ff] transition-colors hover:bg-blue-100"
      >
        返回首页
      </Link>
    </div>
  );
};

export default NotFound;
